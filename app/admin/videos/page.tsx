'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Film, Plus, Edit, Trash2, Search, Play, Eye, Clock } from 'lucide-react';
import Image from 'next/image';
import { videos as demoVideos } from '@/data';

export default function VideosPage() {
  const [videoList] = useState(demoVideos);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredVideos = videoList.filter((video) =>
    video.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white flex items-center gap-3">
            <Film className="text-pink-400" /> Videos
          </h1>
          <p className="text-gray-400">Manage your video portfolio</p>
        </div>
        <motion.button whileHover={{ scale: 1.02 }} className="px-4 py-2 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium flex items-center gap-2">
          <Plus size={18} /> Add Video
        </motion.button>
      </div>

      <div className="relative max-w-md">
        <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
        <input
          type="text"
          placeholder="Search videos..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-12 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredVideos.map((video, index) => (
          <motion.div
            key={video.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            className="rounded-2xl bg-white/5 border border-white/10 overflow-hidden"
          >
            <div className="relative aspect-video">
              <Image src={video.thumbnail} alt={video.title} fill className="object-cover" />
              <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                  <Play size={20} className="text-white ml-1" />
                </div>
              </div>
              <div className="absolute top-3 right-3 flex items-center gap-1 px-2 py-1 rounded-full bg-black/50 text-white text-xs">
                <Clock size={12} /> {video.duration}
              </div>
              <div className="absolute top-3 left-3 px-2 py-1 rounded-full bg-purple-500/80 text-white text-xs capitalize">
                {video.category}
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-white font-bold mb-2 line-clamp-1">{video.title}</h3>
              <div className="flex items-center justify-between text-gray-500 text-sm mb-4">
                <span className="flex items-center gap-1"><Eye size={14} /> {video.views.toLocaleString()}</span>
                <span>{new Date(video.date).toLocaleDateString()}</span>
              </div>
              <div className="flex gap-2">
                <button className="flex-1 px-3 py-2 rounded-lg bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 flex items-center justify-center gap-1 text-sm">
                  <Edit size={14} /> Edit
                </button>
                <button className="flex-1 px-3 py-2 rounded-lg bg-red-500/10 text-red-400 hover:bg-red-500/20 flex items-center justify-center gap-1 text-sm">
                  <Trash2 size={14} /> Delete
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
