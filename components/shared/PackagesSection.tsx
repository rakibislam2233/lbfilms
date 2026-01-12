"use client";

import { packages } from "@/data";
import { motion, useInView } from "framer-motion";
import { Camera, Check, Clock, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";

interface PackagesSectionProps {
  title?: string;
  subtitle?: string;
  description?: string;
  showViewAllButton?: boolean;
  viewAllLink?: string;
  className?: string;
  isHomePage?: boolean;
}

const PackagesSection = ({
  title = "Choose Your Perfect Package",
  subtitle = "Photography Packages",
  description = "Professional photography packages tailored for every occasion. From intimate portraits to grand celebrations.",
  showViewAllButton = false,
  viewAllLink = "/packages",
  className = "",
  isHomePage = false,
}: PackagesSectionProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const bgClass = isHomePage
    ? "bg-linear-to-b from-gray-950 via-gray-900 to-black"
    : "bg-background";

  return (
    <section
      className={`relative py-24 overflow-hidden ${bgClass} ${className}`}
    >
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
      </div>

      <div
        ref={ref}
        className="relative container mx-auto px-4 sm:px-6 lg:px-8"
      >
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted border border-border mb-6"
          >
            <Camera size={16} className="text-purple-400" />
            <span className="text-sm font-medium text-white/80">
              {subtitle}
            </span>
          </motion.div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {title
              .split(" ")
              .map((word, index) =>
                word.includes("Package") ? (
                  <span
                    key={index}
                    className="bg-linear-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent"
                  >
                    {word}
                  </span>
                ) : (
                  `${word} `
                )
              )
              .map((item, index) => (
                <React.Fragment key={index}>{item}</React.Fragment>
              ))}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {description}
          </p>
        </motion.div>

        {/* Package Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              {/* Card */}
              <div
                className={`relative h-fit rounded-3xl border border-gray-800 overflow-hidden transition-all duration-500 ${
                  pkg.popular
                    ? "bg-linear-to-b from-gray-800/80 to-gray-900/80"
                    : "bg-gray-900/60"
                }`}
                style={{
                  backdropFilter: "blur(10px)",
                }}
              >
                {/* Content */}
                <div className="relative z-10 p-6">
                  {/* Popular Badge */}
                  {pkg.popular && (
                    <div className="absolute -top-1 left-1/2 -translate-x-1/2 z-20">
                      <div className="flex items-center gap-1 px-4 py-1.5 rounded-full bg-linear-to-r from-purple-500 to-pink-500 text-white text-xs font-bold shadow-lg">
                        <Sparkles size={12} />
                        MOST POPULAR
                      </div>
                    </div>
                  )}

                  {/* Package Title */}
                  <h3 className="text-base md:text-xl font-bold text-foreground text-center mt-4 mb-4">
                    {pkg.name}
                  </h3>

                  {/* Image with Gradient Border */}
                  <div className="relative mb-6 rounded-2xl overflow-hidden p-0.5 bg-linear-to-br from-purple-500/50 via-pink-500/50 to-cyan-500/50">
                    <div className="relative aspect-4/2 rounded-2xl overflow-hidden">
                      <Image
                        src={pkg.image}
                        alt={pkg.name}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />
                      {/* Duration Badge */}
                      <div className="absolute bottom-3 right-3 flex items-center gap-1 px-3 py-1 rounded-full bg-black/50 backdrop-blur-sm text-white text-sm">
                        <Clock size={14} />
                        {pkg.duration}
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between items-end pb-2">
                    {/* Features List */}
                    <ul className="space-y-3 mb-6">
                      {pkg.features.map((feature, idx) => (
                        <motion.li
                          key={idx}
                          initial={{ opacity: 0, x: -10 }}
                          animate={isInView ? { opacity: 1, x: 0 } : {}}
                          transition={{ delay: index * 0.1 + idx * 0.05 }}
                          className="flex items-center gap-3 text-muted-foreground"
                        >
                          <div className="shrink-0 size-4 rounded-full bg-linear-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                            <Check size={10} className="text-white" />
                          </div>
                          <span className="text-sm">{feature}</span>
                        </motion.li>
                      ))}
                    </ul>

                    {/* Price */}
                    <div className="flex items-center justify-center mb-6">
                      <div className="inline-flex items-baseline gap-1 px-6 py-1 rounded-full bg-linear-to-r from-purple-500/20 via-pink-500/20 to-cyan-500/20 border border-border">
                        <span className="text-xl font-bold bg-linear-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                          {pkg.price.toLocaleString()}
                        </span>
                        <span className="text-muted-foreground text-sm">
                          TK
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Book Now Button */}
                  <Link href={`/booking?package=${pkg.id}`}>
                    <motion.button
                      whileTap={{ scale: 0.98 }}
                      className={`w-full cursor-pointer py-3.5 rounded-xl font-semibold text-foreground transition-all duration-300 ${
                        pkg.popular
                          ? "bg-linear-to-r from-purple-500 to-pink-500"
                          : "bg-muted border border-border hover:bg-muted"
                      }`}
                    >
                      Book Now
                    </motion.button>
                  </Link>
                </div>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute inset-0 rounded-3xl bg-linear-to-t from-purple-500/10 via-transparent to-cyan-500/10" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Link */}
        {showViewAllButton && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5 }}
            className="text-center mt-12"
          >
            <Link href={viewAllLink}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex cursor-pointer items-center gap-2 px-8 py-3 rounded-full border border-border text-foreground hover:bg-muted transition-colors"
              >
                View All Packages
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                >
                  →
                </motion.span>
              </motion.button>
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default PackagesSection;
