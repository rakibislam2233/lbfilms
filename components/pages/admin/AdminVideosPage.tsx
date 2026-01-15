"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { videos as demoVideos } from "@/data";
import { motion } from "framer-motion";
import {
  Clock,
  Edit,
  Eye,
  Film,
  Play,
  Plus,
  Search,
  Trash2,
  Upload,
  X,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function AdminVideosPage() {
  const [videoList, setVideoList] = useState(demoVideos);
  const [showModal, setShowModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [editingVideo, setEditingVideo] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    views: 0,
    duration: '',
    thumbnail: '',
    videoUrl: ''
  });

  const categories = [
    "all",
    "wedding",
    "portrait",
    "corporate",
    "event",
    "cinematic",
    "trailer",
  ];

  const filteredVideos = videoList.filter((video) =>
    video.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddVideo = () => {
    // Reset form and set editingVideo to null to indicate adding new
    setEditingVideo(null);
    setFormData({
      title: '',
      category: '',
      views: 0,
      duration: '',
      thumbnail: '',
      videoUrl: ''
    });
    setShowModal(true);
  };

  const handleEditVideo = (video) => {
    setEditingVideo(video);
    setFormData({
      title: video.title,
      category: video.category,
      views: video.views,
      duration: video.duration,
      thumbnail: video.thumbnail,
      videoUrl: video.videoUrl
    });
    setShowModal(true);
  };

  const handleDeleteVideo = (id) => {
    setVideoList(videoList.filter(video => video.id !== id));
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white flex items-center gap-3">
            <Film className="text-pink-400" /> Videos
          </h1>
          <p className="text-gray-400">Manage your video portfolio</p>
        </div>
        <motion.button
          onClick={handleAddVideo}
          whileHover={{ scale: 1.02 }}
          className="px-4 py-2 rounded-xl bg-linear-to-r from-purple-600 to-pink-600 text-white font-medium flex items-center gap-2"
        >
          <Plus size={18} /> Add Video
        </motion.button>
      </div>

      <div className="relative max-w-md">
        <Search
          size={18}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
        />
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
              <Image
                src={video.thumbnail}
                alt={video.title}
                fill
                className="object-cover"
              />
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
              <h3 className="text-white font-bold mb-2 line-clamp-1">
                {video.title}
              </h3>
              <div className="flex items-center justify-between text-gray-500 text-sm mb-4">
                <span className="flex items-center gap-1">
                  <Eye size={14} /> {video.views.toLocaleString()}
                </span>
                <span>{new Date(video.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</span>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => handleEditVideo(video)}
                  className="flex-1 px-3 py-2 rounded-lg bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 flex items-center justify-center gap-1 text-sm">
                  <Edit size={14} /> Edit
                </button>
                <button
                  onClick={() => handleDeleteVideo(video.id)}
                  className="flex-1 px-3 py-2 rounded-lg bg-red-500/10 text-red-400 hover:bg-red-500/20 flex items-center justify-center gap-1 text-sm">
                  <Trash2 size={14} /> Delete
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-full max-w-2xl rounded-2xl bg-gray-900 border border-white/10"
          >
            <div className="flex items-center justify-between p-6 border-b border-white/10">
              <h2 className="text-xl font-bold text-white">
                {editingVideo ? 'Edit Video' : 'Add New Video'}
              </h2>
              <button
                onClick={() => setShowModal(false)}
                className="text-gray-400 hover:text-white"
              >
                <X size={24} />
              </button>
            </div>
            <div className="p-6 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="video-title">Title</Label>
                  <Input
                    id="video-title"
                    type="text"
                    value={formData.title}
                    onChange={(e) => setFormData({...formData, title: e.target.value})}
                    placeholder="Video title"
                    className="bg-white/5 border-white/10 text-white"
                  />
                </div>
                <div className="space-y-2">
                  <Label>Category</Label>
                  <Select
                    value={formData.category}
                    onValueChange={(value) => setFormData({...formData, category: value})}
                  >
                    <SelectTrigger className="w-full bg-white/5 border-white/10 text-white">
                      <SelectValue placeholder="Select Category" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.slice(1).map((cat) => (
                        <SelectItem
                          key={cat}
                          value={cat}
                          className="bg-gray-900"
                        >
                          {cat.charAt(0).toUpperCase() + cat.slice(1)}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="video-views">Views</Label>
                  <Input
                    id="video-views"
                    type="number"
                    value={formData.views}
                    onChange={(e) => setFormData({...formData, views: parseInt(e.target.value) || 0})}
                    placeholder="Number of views"
                    className="bg-white/5 border-white/10 text-white"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="video-duration">Duration</Label>
                  <Input
                    id="video-duration"
                    type="text"
                    value={formData.duration}
                    onChange={(e) => setFormData({...formData, duration: e.target.value})}
                    placeholder="Duration (e.g., 5:30)"
                    className="bg-white/5 border-white/10 text-white"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="video-thumbnail">Thumbnail URL</Label>
                <Input
                  id="video-thumbnail"
                  type="text"
                  value={formData.thumbnail}
                  onChange={(e) => setFormData({...formData, thumbnail: e.target.value})}
                  placeholder="Thumbnail image URL"
                  className="bg-white/5 border-white/10 text-white"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="video-url">Video URL</Label>
                <Input
                  id="video-url"
                  type="text"
                  value={formData.videoUrl}
                  onChange={(e) => setFormData({...formData, videoUrl: e.target.value})}
                  placeholder="Video URL"
                  className="bg-white/5 border-white/10 text-white"
                />
              </div>
            </div>
            <div className="flex justify-end gap-3 p-6 border-t border-white/10">
              <button
                onClick={() => setShowModal(false)}
                className="px-6 py-2 rounded-xl bg-white/5 text-gray-400 hover:text-white"
              >
                Cancel
              </button>
              <button
                onClick={(e) => {
                  e.preventDefault();

                  if (editingVideo) {
                    // Update existing video
                    setVideoList(videoList.map(v =>
                      v.id === editingVideo.id
                        ? { ...v, ...formData }
                        : v
                    ));
                  } else {
                    // Add new video
                    const newVideo = {
                      id: `vid-${Date.now()}`, // Generate a unique ID
                      ...formData,
                      date: new Date().toISOString().split('T')[0] // Add current date
                    };
                    setVideoList([...videoList, newVideo]);
                  }

                  setShowModal(false);
                }}
                className="px-6 py-2 rounded-xl bg-linear-to-r from-purple-600 to-pink-600 text-white font-medium">
                {editingVideo ? 'Update Video' : 'Add Video'}
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}
