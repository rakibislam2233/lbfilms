"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { useInView } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    event: "Wedding",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80",
    rating: 5,
    text: "LB Films captured our special day perfectly! The attention to detail and professionalism was exceptional. Our photos are absolutely stunning and will be treasured forever.",
  },
  {
    id: 2,
    name: "Michael Chen",
    event: "Corporate Event",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
    rating: 5,
    text: "We hired LB Films for our company's annual conference. The video quality was outstanding and the editing was creative and engaging. Highly recommend!",
  },
  {
    id: 3,
    name: "Emma Rodriguez",
    event: "Portrait Session",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80",
    rating: 5,
    text: "The team at LB Films made me feel so comfortable during my portrait session. They have an amazing eye for capturing personality and emotion. I'm thrilled with the results!",
  },
  {
    id: 4,
    name: "David Williams",
    event: "Birthday Party",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80",
    rating: 5,
    text: "LB Films exceeded our expectations at our daughter's birthday party. The videography was cinematic and the editing captured all the special moments perfectly. Worth every penny!",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="section bg-white">
      <div ref={ref} className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-16"
        >
          <h2 className="section-title">What Our Clients Say</h2>
          <p className="section-subtitle">Hear from our satisfied customers</p>
        </motion.div>

        <div className="max-w-2xl mx-auto relative">
          {/* Single Testimonial Card */}
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="bg-white p-6 md:p-8 rounded-2xl shadow-lg relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-24 h-24 bg-primary-100 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-primary-100 rounded-full translate-x-1/2 translate-y-1/2 opacity-20"></div>

            <div className="relative z-10">
              <div className="flex items-center mb-6">
                <img
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  className="w-16 h-16 rounded-full object-cover mr-4 border-4 border-primary-100"
                />
                <div>
                  <h4 className="font-bold text-secondary-800 text-base md:text-lg">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-sm text-primary-600">
                    {testimonials[currentIndex].event}
                  </p>
                </div>
              </div>

              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < testimonials[currentIndex].rating
                        ? "text-yellow-400 fill-current"
                        : "text-secondary-300"
                    }`}
                  />
                ))}
              </div>

              <p className="text-secondary-600 italic relative pl-6 mb-6">
                <Quote className="h-6 w-6 text-primary-500 absolute left-0 top-0" />
                {testimonials[currentIndex].text}
              </p>
            </div>
          </motion.div>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full ${
                  index === currentIndex ? "bg-primary-500" : "bg-secondary-300"
                }`}
              />
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white rounded-full p-2 shadow-lg hover:bg-primary-50 transition-colors z-20"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-primary-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white rounded-full p-2 shadow-lg hover:bg-primary-50 transition-colors z-20"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-primary-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
