"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Phone, MessageCircle } from "lucide-react";
import Link from "next/link";

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Hero images
  const heroImages = [
    "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1920&q=80",
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1920&q=80",
    "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1920&q=80",
    "https://images.unsplash.com/photo-1543857778-c4a1a569e7bd?auto=format&fit=crop&w=1920&q=80",
  ];

  // Auto-rotate images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Navigation to next/previous image
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + heroImages.length) % heroImages.length
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
        {heroImages.map((image, index) => (
          <motion.div
            key={index}
            className={`absolute inset-0 bg-cover bg-center ${
              index === currentImageIndex ? "z-10" : "z-0"
            }`}
            style={{
              backgroundImage: `url(${image})`,
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
        {heroImages.map((_, index) => (
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
            className="text-3xl md:text-5xl lg:text-7xl font-bold mb-4 md:mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Capturing Your{" "}
            <span className="pink-gradient-text">Precious Moments</span>
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl lg:text-2xl max-w-2xl md:max-w-3xl mx-auto mb-6 md:mb-10 text-secondary-200"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Professional Photography & Videography Services in Bangladesh
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row justify-center items-center gap-8 "
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.div>
              <Link
                href="#gallery"
                className="btn-primary bg-gradient-to-r from-primary-500 to-primary-700 text-white px-6 py-3 md:px-8 md:py-4 rounded-lg font-semibold hover:from-primary-600 hover:to-primary-800 transition-all duration-300 shadow-pink text-base md:text-lg"
              >
                View Our Work
              </Link>
            </motion.div>
            <motion.a
              href="https://wa.me/8801234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline  px-6 py-3 md:px-8 md:py-4 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-300 flex items-center justify-center gap-2 text-base md:text-lg"
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
