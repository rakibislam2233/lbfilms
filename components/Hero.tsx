"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Phone, MessageCircle } from "lucide-react";
import Link from "next/link";

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Hero images with corresponding text content
  const heroContent = [
    {
      image:
        "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1920&q=80",
      heading:
        "Capturing Your <span class='pink-gradient-text'>Precious Moments</span>",
      description:
        "Professional Photography & Videography Services in Bangladesh",
      button: "View Our Work",
    },
    {
      image:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1920&q=80",
      heading:
        "Creating <span class='pink-gradient-text'>Timeless Memories</span>",
      description:
        "Award-winning photography with artistic vision and professional service",
      button: "Explore Services",
    },
    {
      image:
        "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1920&q=80",
      heading:
        "Your <span class='pink-gradient-text'>Perfect Day</span>, Preserved Forever",
      description:
        "Specializing in weddings, corporate events, and lifestyle photography",
      button: "Book Now",
    },
    {
      image:
        "https://images.unsplash.com/photo-1543857778-c4a1a569e7bd?auto=format&fit=crop&w=1920&q=80",
      heading:
        "Professional <span class='pink-gradient-text'>Storytelling</span> Through Lenses",
      description:
        "High-quality videography and photography for all your special occasions",
      button: "See Gallery",
    },
  ];

  // Auto-rotate images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroContent.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Navigation to next/previous image
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroContent?.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + heroContent?.length) % heroContent?.length
    );
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Images with Swipe Effect */}
      <div className="absolute inset-0 z-0">
        {heroContent.map((content, index) => (
          <motion.div
            key={index}
            className={`absolute inset-0 bg-cover bg-center ${
              index === currentImageIndex ? "z-10" : "z-0"
            }`}
            style={{
              backgroundImage: `url(${content.image})`,
              backgroundAttachment: "fixed",
            }}
            initial={{ opacity: 0 }}
            animate={{
              opacity: index === currentImageIndex ? 1 : 0,
              scale: index === currentImageIndex ? 1 : 1.1,
            }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/40"></div>
          </motion.div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevImage}
        className="absolute left-4 md:left-8 z-30 bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-all"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
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
        onClick={nextImage}
        className="absolute right-4 md:right-8 z-30 bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-all"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
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

      {/* Image Indicators */}
      <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 z-30 flex space-x-2">
        {heroContent?.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentImageIndex ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>

      {/* Content */}
      <motion.div
        className="container mx-auto px-4 md:px-8 relative z-20 text-center text-white"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants}>
          <motion.h1
            className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            dangerouslySetInnerHTML={{
              __html: heroContent[currentImageIndex].heading,
            }}
          ></motion.h1>
          <motion.p
            className="text-base md:text-lg  max-w-2xl md:max-w-3xl mx-auto mb-6 md:mb-10 text-secondary-200"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {heroContent[currentImageIndex].description}
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row justify-center items-center gap-8 "
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.div>
              <Link href="#gallery" className="btn-primary">
                {heroContent[currentImageIndex].button}
              </Link>
            </motion.div>
            <motion.a
              href="https://wa.me/8801234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline flex items-center justify-center gap-2"
            >
              <Phone className="h-4 w-4 md:h-5 md:w-5" />
              Book Now
            </motion.a>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
