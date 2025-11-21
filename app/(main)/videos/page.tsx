'use client';

import { videos } from '@/data';
import { motion } from 'framer-motion';
import { Clock, Eye, Film, Play, X } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

const categories = [
  { id: 'all', name: 'All' },
  { id: 'wedding', name: 'Wedding' },
  { id: 'cinematic', name: 'Cinematic' },
  { id: 'corporate', name: 'Corporate' },
  { id: 'event', name: 'Event' },
  { id: 'trailer', name: 'Trailers' },
];

export default function VideosPage() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [playingVideo, setPlayingVideo] = useState<typeof videos[0] | null>(null);

  const filteredVideos = activeFilter === 'all' ? videos : videos.filter((v) => v.category === activeFilter);

  const formatViews = (views: number) => (views >= 1000 ? `${(views / 1000).toFixed(1)}K` : views.toString());

  return (
    <main className="min-h-screen bg-black pt-24 pb-16">
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
              <Film size={16} className="text-pink-400" />
              <span className="text-sm font-medium text-white/80">Video Portfolio</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Cinematic{' '}
              <span className="bg-linear-to-r from-purple-500  to-pink-500 bg-clip-text text-transparent">
                Video Work
              </span>
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Watch our stunning cinematic films capturing the most precious moments
            </p>
          </motion.div>

          {/* Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {categories.map((cat) => (
              <motion.button
                key={cat.id}
                onClick={() => setActiveFilter(cat.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeFilter === cat.id
                    ? 'bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 text-white shadow-lg shadow-pink-500/25'
                    : 'bg-white/5 text-gray-400 border border-white/10 hover:bg-white/10 hover:text-white'
                }`}
              >
                {cat.name}
              </motion.button>
            ))}
          </motion.div>

          {/* Videos Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredVideos.map((video, index) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="relative aspect-video rounded-2xl overflow-hidden bg-gray-800">
                  <Image src={video.thumbnail} alt={video.title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                  <motion.button
                    onClick={() => setPlayingVideo(video)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 flex items-center justify-center shadow-2xl opacity-90 group-hover:opacity-100 transition-opacity"
                  >
                    <Play size={28} className="text-white ml-1 fill-white" />
                  </motion.button>

                  <div className="absolute top-3 right-3 flex items-center gap-1 px-2 py-1 rounded-full bg-black/60 backdrop-blur-sm text-white text-xs">
                    <Clock size={12} />
                    {video.duration}
                  </div>

                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-gradient-to-r from-purple-500/80 to-pink-500/80 text-white text-xs font-medium capitalize">
                    {video.category}
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <h3 className="text-lg font-bold text-white mb-2 line-clamp-2">{video.title}</h3>
                    <div className="flex items-center justify-between text-gray-300 text-sm">
                      <span className="flex items-center gap-1">
                        <Eye size={14} />
                        {formatViews(video.views)} views
                      </span>
                      <span>{new Date(video.date).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {playingVideo && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-xl p-4"
          onClick={() => setPlayingVideo(null)}
        >
          <button onClick={() => setPlayingVideo(null)} className="absolute top-4 right-4 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors">
            <X size={24} className="text-white" />
          </button>

          <div className="relative w-full max-w-4xl aspect-video rounded-2xl overflow-hidden" onClick={(e) => e.stopPropagation()}>
            <div className="w-full h-full bg-gray-900 flex items-center justify-center">
              <div className="text-center">
                <Film size={64} className="text-gray-600 mx-auto mb-4" />
                <p className="text-gray-400 text-lg">Video Player</p>
                <p className="text-gray-500 text-sm mt-2">{playingVideo.title}</p>
              </div>
            </div>
          </div>

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center">
            <h3 className="text-xl font-bold text-white mb-2">{playingVideo.title}</h3>
            <div className="flex items-center justify-center gap-4 text-gray-400 text-sm">
              <span>{playingVideo.duration}</span>
              <span>•</span>
              <span>{formatViews(playingVideo.views)} views</span>
            </div>
          </div>
        </motion.div>
      )}
    </main>
  );
}
