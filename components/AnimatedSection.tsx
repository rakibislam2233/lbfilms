"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

type AnimatedSectionProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
};

const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  className = "",
  delay = 0,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;
