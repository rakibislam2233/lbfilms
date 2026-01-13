"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

// Hover animation variants
const hoverAnimation = {
  initial: { scale: 1 },
  hover: {
    scale: 1.05,
    transition: {
      type: "spring" as const,
      stiffness: 400,
      damping: 10,
    },
  },
};

// Button animation component
export const AnimatedButton = ({
  children,
  className = "",
  onClick,
  variant = "primary",
}: {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "whatsapp";
}) => {
  let buttonClasses =
    "inline-flex items-center justify-center rounded-full font-semibold transition-all duration-300 ";

  switch (variant) {
    case "primary":
      buttonClasses +=
        "bg-linear-to-r from-primary-500 to-primary-700 text-white hover:from-primary-600 hover:to-primary-800 shadow-pink";
      break;
    case "secondary":
      buttonClasses +=
        "border-2 border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white";
      break;
    case "whatsapp":
      buttonClasses += "bg-whatsapp text-white hover:bg-opacity-90";
      break;
    default:
      buttonClasses +=
        "bg-linear-to-r from-primary-500 to-primary-700 text-white hover:from-primary-600 hover:to-primary-800";
  }

  return (
    <motion.button
      className={`${buttonClasses} ${className}`}
      variants={hoverAnimation}
      initial="initial"
      whileHover="hover"
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
};

// Card hover effect
export const CardHover = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <motion.div
      className={className}
      variants={hoverAnimation}
      initial="initial"
      whileHover="hover"
      transition={{ type: "spring", stiffness: 300, damping: 15 }}
    >
      {children}
    </motion.div>
  );
};

// Fade in animation for sections
export const FadeIn = ({
  children,
  delay = 0,
  duration = 0.5,
}: {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: duration,
        delay: delay,
      }}
      viewport={{ once: true, margin: "-100px" }}
    >
      {children}
    </motion.div>
  );
};

// Bounce animation for elements
export const Bounce = ({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.8 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: delay,
      }}
      whileHover={{
        y: -5,
        transition: {
          type: "spring",
          stiffness: 300,
          damping: 10,
        },
      }}
    >
      {children}
    </motion.div>
  );
};

// Floating animation for elements
export const Floating = ({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: [0, -10, 0] }}
      transition={{
        opacity: { delay: delay, duration: 0.5 },
        y: { duration: 2, repeat: Infinity, ease: "easeInOut", delay: delay },
      }}
    >
      {children}
    </motion.div>
  );
};

// Progress bar for loading
export const ProgressBar = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 0 : prev + 10));
    }, 200);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full bg-gray-200 rounded-full h-2.5">
      <motion.div
        className="bg-linear-to-r from-primary-500 to-primary-700 h-2.5 rounded-full"
        style={{ width: `${progress}%` }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      />
    </div>
  );
};

// Pulse animation for notifications/badges
export const PulseBadge = ({
  children,
  active = false,
}: {
  children: React.ReactNode;
  active?: boolean;
}) => {
  return (
    <motion.div
      animate={
        active
          ? {
              scale: [1, 1.1, 1],
              boxShadow: [
                "0 0 0 0 rgba(255, 107, 157, 0.7)",
                "0 0 0 10px rgba(255, 107, 157, 0)",
              ],
            }
          : {}
      }
      transition={{
        scale: { duration: 1, repeat: Infinity, repeatType: "reverse" },
        boxShadow: { duration: 2, repeat: Infinity },
      }}
    >
      {children}
    </motion.div>
  );
};
