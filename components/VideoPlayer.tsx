"use client";

import { motion } from "framer-motion";
import { X } from "lucide-react";
import React from "react";

interface VideoPlayerProps {
  videoUrl: string;
  title: string;
  onClose: () => void;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({
  videoUrl,
  title,
  onClose,
}) => {
  // Function to extract video ID and determine platform
  const getEmbedUrl = (url: string): string => {
    // YouTube patterns
    const youtubeRegex = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/;
    const youtubeMatch = url.match(youtubeRegex);

    if (youtubeMatch && youtubeMatch[1]) {
      return `https://www.youtube.com/embed/${youtubeMatch[1]}?autoplay=1&rel=0`;
    }

    // Vimeo pattern
    const vimeoRegex = /vimeo\.com\/(?:channels\/(?:\w+\/)?|groups\/([^\/]*)\/videos\/|album\/(\d+)\/video\/|)(\d+)(?:$|\/|\?)/;
    const vimeoMatch = url.match(vimeoRegex);

    if (vimeoMatch && vimeoMatch[3]) {
      return `https://player.vimeo.com/video/${vimeoMatch[3]}?autoplay=1`;
    }

    // If it's already an embed URL or direct video file, return as is
    if (url.includes("embed") || url.endsWith(".mp4") || url.endsWith(".webm")) {
      return url;
    }

    // Default fallback - assume it's a direct URL
    return url;
  };

  const embedUrl = getEmbedUrl(videoUrl);
  const isDirectVideo = embedUrl.endsWith(".mp4") || embedUrl.endsWith(".webm");

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-xl p-4"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
      >
        <X size={24} className="text-white" />
      </button>

      <div
        className="relative w-full max-w-5xl aspect-video rounded-2xl overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {isDirectVideo ? (
          <video
            src={embedUrl}
            controls
            autoPlay
            className="w-full h-full object-contain bg-black"
          >
            Your browser does not support the video tag.
          </video>
        ) : (
          <iframe
            src={embedUrl}
            title={title}
            className="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        )}
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center max-w-2xl px-4">
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      </div>
    </motion.div>
  );
};

export default VideoPlayer;
