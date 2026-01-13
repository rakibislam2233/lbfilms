"use client";

"use client";

import { motion, useInView } from "framer-motion";
import { Play } from "lucide-react";
import { useRef } from "react";

const VideoShowreel = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Function to open YouTube video
  const openYouTubeVideo = () => {
    window.open("https://www.youtube.com/watch?v=example_video_id", "_blank");
  };

  return (
    <section className="py-16 md:py-20 bg-secondary-900">
      <div ref={ref} className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-12"
        >
          <h2 className="section-title text-white">See Our Work in Action</h2>
          <p className="section-subtitle text-secondary-300">
            Watch our best moments captured on film
          </p>
        </motion.div>

        <div className="relative rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl">
          {/* Video placeholder */}
          <div
            className="relative aspect-video md:aspect-video bg-linear-to-br from-primary-900 to-secondary-800 flex items-center justify-center cursor-pointer"
            onClick={openYouTubeVideo}
          >
            <img
              src="https://images.unsplash.com/photo-1574717024456-7aef8a6171ff?auto=format&fit=crop&w=1200&q=80"
              alt="Video Showreel"
              className="w-full h-full object-cover"
            />

            {/* Play button overlay */}
            <div className="absolute z-10 bg-white bg-opacity-20 backdrop-blur-sm rounded-full p-4 md:p-6 hover:bg-opacity-30 transition-all">
              <Play className="h-8 w-8 md:h-12 md:w-12 text-white ml-0.5 md:ml-1" />
            </div>
          </div>

          {/* Video info overlay */}
          <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black to-transparent p-4 md:p-8">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-1 md:mb-2">
              LB Films Showreel
            </h3>
            <p className="text-sm md:text-base text-secondary-300">
              A compilation of our best work
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoShowreel;
