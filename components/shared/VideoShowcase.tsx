"use client";
import { videos } from "@/data";
import { motion, useInView } from "framer-motion";
import { Clock, Eye, Film, Play, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useRef, useState } from "react";

const categories = [
  { id: "all", name: "All" },
  { id: "wedding", name: "Wedding" },
  { id: "cinematic", name: "Cinematic" },
  { id: "corporate", name: "Corporate" },
  { id: "event", name: "Event" },
  { id: "trailer", name: "Trailers" },
];

interface VideoShowcaseProps {
  title?: string;
  subtitle?: string;
  description?: string;
  maxItems?: number;
  showViewAllButton?: boolean;
  viewAllLink?: string;
  className?: string;
  isHomePage?: boolean;
}

const VideoShowcase = ({
  title = "Cinematic Video Work",
  subtitle = "Video Portfolio",
  description = "Watch our stunning cinematic films capturing the most precious moments of life",
  maxItems = Infinity, // Default to showing all items (for full page)
  showViewAllButton = false,
  viewAllLink = "/videos",
  className = "",
  isHomePage = false,
}: VideoShowcaseProps) => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [hoveredVideo, setHoveredVideo] = useState<string | null>(null);
  const [playingVideo, setPlayingVideo] = useState<(typeof videos)[0] | null>(
    null
  );
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Apply maxItems only if it's a number greater than 0
  const filteredVideos =
    maxItems > 0
      ? activeFilter === "all"
        ? videos.slice(0, maxItems)
        : videos.filter((v) => v.category === activeFilter).slice(0, maxItems)
      : activeFilter === "all"
      ? videos
      : videos.filter((v) => v.category === activeFilter);

  const formatViews = (views: number) => {
    if (views >= 1000) {
      return `${(views / 1000).toFixed(1)}K`;
    }
    return views.toString();
  };

  const bgClass = isHomePage
    ? "bg-linear-to-b from-gray-900 via-gray-950 to-black"
    : "bg-background";

  return (
    <section
      className={`relative py-24 overflow-hidden ${bgClass} ${className}`}
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div
        ref={ref}
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted border border-border mb-6">
            <Film size={16} className="text-pink-400" />
            <span className="text-sm font-medium text-white/80">
              {subtitle}
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {title
              .split(" ")
              .map((word, index) =>
                word.includes("Work") || word.includes("Videos") ? (
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

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((cat) => (
            <motion.button
              key={cat.id}
              onClick={() => setActiveFilter(cat.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-2 rounded-full cursor-pointer text-sm font-medium transition-all duration-300 ${
                activeFilter === cat.id
                  ? "bg-linear-to-r from-purple-600 to-pink-600 text-white"
                  : "bg-muted text-muted-foreground hover:bg-muted hover:text-foreground"
              }`}
            >
              {cat.name}
            </motion.button>
          ))}
        </motion.div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredVideos.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
              onMouseEnter={() => setHoveredVideo(video.id)}
              onMouseLeave={() => setHoveredVideo(null)}
            >
              <div className="relative aspect-video rounded-2xl overflow-hidden bg-gray-800">
                {/* Thumbnail */}
                <Image
                  src={video.thumbnail}
                  alt={video.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent" />

                {/* Play Button */}
                <motion.button
                  onClick={() => setPlayingVideo(video)}
                  initial={{ scale: 0.9, opacity: 0.7 }}
                  animate={{
                    scale: hoveredVideo === video.id ? 1.1 : 1,
                    opacity: hoveredVideo === video.id ? 1 : 0.9,
                  }}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.95 }}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-linear-to-r from-purple-600 to-pink-600 cursor-pointer flex items-center justify-center shadow-2xl"
                >
                  <Play size={28} className="text-white ml-1 fill-white" />
                </motion.button>

                {/* Duration Badge */}
                <div className="absolute top-3 right-3 flex items-center gap-1 px-2 py-1 rounded-full bg-black/60 backdrop-blur-sm text-white text-xs">
                  <Clock size={12} />
                  {video.duration}
                </div>

                {/* Category Badge */}
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-linear-to-r from-purple-500/80 to-pink-500/80 text-white text-xs font-medium capitalize">
                  {video.category}
                </div>

                {/* Info */}
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="text-lg font-bold text-foreground mb-2 line-clamp-2">
                    {video.title}
                  </h3>
                  <div className="flex items-center justify-between text-muted-foreground text-sm">
                    <span className="flex items-center gap-1">
                      <Eye size={14} />
                      {formatViews(video.views)} views
                    </span>
                    <span>
                      {new Date(video.date).toLocaleDateString("en-US", {
                        month: "short",
                        year: "numeric",
                      })}
                    </span>
                  </div>
                </div>

                {/* Hover Effect - Animated Border */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredVideo === video.id ? 1 : 0 }}
                  className="absolute inset-0 rounded-2xl border border-transparent bg-linear-to-r from-purple-600 to-pink-600 pointer-events-none"
                  style={{
                    WebkitMask:
                      "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                    WebkitMaskComposite: "xor",
                    maskComposite: "exclude",
                    padding: "1px",
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
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
                className="inline-flex items-center gap-2 px-8 py-3 cursor-pointer rounded-full border border-border text-foreground hover:bg-muted transition-colors"
              >
                View All Videos
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

      {/* Video Player Modal */}
      {playingVideo && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-xl p-4"
          onClick={() => setPlayingVideo(null)}
        >
          <button
            onClick={() => setPlayingVideo(null)}
            className="absolute top-4 right-4 z-50 p-3 cursor-pointer rounded-full bg-muted hover:bg-muted transition-colors"
          >
            <X size={24} className="text-foreground" />
          </button>

          <div
            className="relative w-full max-w-4xl aspect-video rounded-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Placeholder for video - in production this would be an actual video player */}
            <div className="w-full h-full bg-background flex items-center justify-center">
              <div className="text-center">
                <Film
                  size={64}
                  className="text-muted-foreground mx-auto mb-4"
                />
                <p className="text-muted-foreground text-lg">Video Player</p>
                <p className="text-muted-foreground text-sm mt-2">
                  {playingVideo.title}
                </p>
                <p className="text-gray-600 text-xs mt-4">
                  In production, this would embed the actual video from:{" "}
                  {playingVideo.videoUrl}
                </p>
              </div>
            </div>
          </div>

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center">
            <h3 className="text-xl font-bold text-foreground mb-2">
              {playingVideo.title}
            </h3>
            <div className="flex items-center justify-center gap-4 text-muted-foreground text-sm">
              <span>{playingVideo.duration}</span>
              <span>•</span>
              <span>{formatViews(playingVideo.views)} views</span>
            </div>
          </div>
        </motion.div>
      )}
    </section>
  );
};

export default VideoShowcase;
