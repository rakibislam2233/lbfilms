"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Play, Sparkles } from "lucide-react";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";

const heroContent = [
  {
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1920&q=80",
    subtitle: "Wedding Photography",
    heading: "Capturing Your",
    highlight: "Precious Moments",
    description:
      "Transform your special day into timeless memories with our award-winning photography team",
  },
  {
    image:
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1920&q=80",
    subtitle: "Cinematic Films",
    heading: "Creating",
    highlight: "Timeless Stories",
    description:
      "Cinematic wedding films that capture every emotion, every tear, every smile",
  },
  {
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1920&q=80",
    subtitle: "Corporate Events",
    heading: "Professional",
    highlight: "Event Coverage",
    description:
      "Elevate your corporate events with stunning photography and video production",
  },
];

// Generate stable random positions for particles
const generateParticles = () =>
  [...Array(20)].map((_, i) => ({
    id: i,
    x: Math.random() * 1920,
    y: Math.random() * 1080,
    yOffset: Math.random() * -500,
    duration: Math.random() * 10 + 10,
    delay: Math.random() * 5,
  }));

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [particles, setParticles] = useState<
    ReturnType<typeof generateParticles>
  >([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setParticles(generateParticles());
    setMounted(true);
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % heroContent.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex(
      (prev) => (prev - 1 + heroContent.length) % heroContent.length
    );
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Background Images with Parallax */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          className="absolute inset-0"
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${heroContent[currentIndex].image})`,
            }}
          />
          {/* Gradient Overlays */}
          <div className="absolute inset-0 bg-linear-to-b from-black/60 via-black/40 to-black/80" />
          <div className="absolute inset-0 bg-linear-to-r from-purple-900/30 via-transparent to-cyan-900/30" />
        </motion.div>
      </AnimatePresence>

      {/* Animated Particles/Bokeh Effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {mounted &&
          particles.map((particle) => (
            <motion.div
              key={particle.id}
              className="absolute w-2 h-2 rounded-full bg-white/20"
              initial={{
                x: particle.x,
                y: particle.y,
              }}
              animate={{
                y: [null, particle.yOffset],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: particle.duration,
                repeat: Infinity,
                ease: "linear",
                delay: particle.delay,
              }}
            />
          ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="text-center">
          {/* Subtitle Badge */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`subtitle-${currentIndex}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted backdrop-blur-sm border border-border mb-6"
            >
              <Sparkles size={16} className="text-purple-400" />
              <span className="text-sm font-medium text-white/90">
                {heroContent[currentIndex].subtitle}
              </span>
            </motion.div>
          </AnimatePresence>

          {/* Main Heading */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`heading-${currentIndex}`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground mb-2 tracking-tight">
                {heroContent[currentIndex].heading}
              </h1>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6">
                <span className="bg-linear-to-r from-purple-400  to-pink-400 bg-clip-text text-transparent">
                  {heroContent[currentIndex].highlight}
                </span>
              </h1>
            </motion.div>
          </AnimatePresence>

          {/* Description */}
          <AnimatePresence mode="wait">
            <motion.p
              key={`desc-${currentIndex}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xs sm:text-sm md:text-base max-w-2xl mx-auto mb-10"
            >
              {heroContent[currentIndex].description}
            </motion.p>
          </AnimatePresence>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link href="/booking">
              <motion.button
                whileTap={{ scale: 0.95 }}
                className="relative px-8  py-2 md:py-3 cursor-pointer text-xs sm:text-sm md:text-base font-semibold text-white rounded-full overflow-hidden group"
              >
                <span className="absolute inset-0 bg-linear-to-r from-purple-600 to-pink-600" />
                <span className="absolute inset-0 bg-linear-to-r from-purple-600 to-pink-600 blur-xl opacity-50 group-hover:opacity-75 transition-opacity" />
                <span className="relative flex items-center gap-2">
                  Book Your Session
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                  >
                    →
                  </motion.span>
                </span>
              </motion.button>
            </Link>

            <Link href="/gallery">
              <motion.button
                whileTap={{ scale: 0.95 }}
                className="flex items-center cursor-pointer gap-2 px-8 py-2 md:py-3 text-xs sm:text-sm md:text-base font-semibold text-white rounded-full border border-white/30 bg-white/5 backdrop-blur-sm transition-all"
              >
                <Play size={16} className="fill-white" />
                View Portfolio
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <div className="absolute left-4 right-4 top-1/2 -translate-y-1/2 flex justify-between z-20 pointer-events-none">
        <motion.button
          whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.2)" }}
          whileTap={{ scale: 0.9 }}
          onClick={prevSlide}
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
          className="pointer-events-auto cursor-pointer p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white transition-all"
        >
          <ChevronLeft size={20} />
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.2)" }}
          whileTap={{ scale: 0.9 }}
          onClick={nextSlide}
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
          className="pointer-events-auto p-3 rounded-full cursor-pointer bg-white/10 backdrop-blur-sm border border-white/20 text-white transition-all"
        >
          <ChevronRight size={20} />
        </motion.button>
      </div>

      {/* Progress Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-3 z-20">
        {heroContent.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className="group relative"
          >
            <div
              className={`h-1 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "w-12 bg-linear-to-r from-purple-600 to-pink-600"
                  : "w-6 bg-white/30 group-hover:bg-white/50"
              }`}
            />
            {index === currentIndex && (
              <motion.div
                className="absolute inset-0 h-1 rounded-full bg-linear-to-r from-purple-600 to-pink-600"
                initial={{ scaleX: 0, originX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 6, ease: "linear" }}
                key={`progress-${currentIndex}`}
              />
            )}
          </button>
        ))}
      </div>
    </section>
  );
};

export default Hero;
