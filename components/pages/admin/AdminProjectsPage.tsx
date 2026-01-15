"use client";

import { projects as demoProjects } from "@/data";
import { motion } from "framer-motion";
import {
  Camera,
  Edit,
  Filter,
  Plus,
  Search,
  Trash2,
  Upload,
  X,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function AdminProjectsPage() {
  const [projectList, setProjectList] = useState(demoProjects);
  const [showModal, setShowModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("all");

  const categories = [
    "all",
    "wedding",
    "portrait",
    "corporate",
    "event",
    "birthday",
    "product",
  ];

  const filteredProjects = projectList.filter((project) => {
    const matchesSearch = project.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesFilter = filter === "all" || project.category === filter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white flex items-center gap-3">
            <Camera className="text-purple-400" /> Projects
          </h1>
          <p className="text-gray-400">Manage your photography projects</p>
        </div>
        <motion.button
          onClick={() => setShowModal(true)}
          className="px-4 py-2 rounded-xl bg-linear-to-r from-purple-600 to-pink-600 text-white font-medium flex items-center gap-2"
        >
          <Plus size={18} /> Add Project
        </motion.button>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
          />
          <input
            type="text"
            placeholder="Search projects..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50"
          />
        </div>
        <div className="flex items-center gap-2">
          <Filter size={18} className="text-gray-500" />
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none"
          >
            {categories.map((cat) => (
              <option key={cat} value={cat} className="bg-gray-900">
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            className="rounded-2xl bg-white/5 border border-white/10 overflow-hidden group"
          >
            <div className="relative aspect-video">
              <Image
                src={project.images[0]}
                alt={project.title}
                fill
                className="object-cover"
              />
              <div className="absolute top-3 right-3">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium ${
                    project.featured
                      ? "bg-purple-500/80 text-white"
                      : "bg-white/20 text-white"
                  }`}
                >
                  {project.featured ? "Featured" : project.category}
                </span>
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-white font-bold mb-1">{project.title}</h3>
              <p className="text-gray-500 text-sm mb-4">
                {project.location} •{" "}
                {new Date(project.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
              </p>
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

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-full max-w-2xl rounded-2xl bg-gray-900 border border-white/10"
          >
            <div className="flex items-center justify-between p-6 border-b border-white/10">
              <h2 className="text-xl font-bold text-white">Add New Project</h2>
              <button
                onClick={() => setShowModal(false)}
                className="text-gray-400 hover:text-white"
              >
                <X size={24} />
              </button>
            </div>
            <div className="p-6 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-gray-400 mb-2">
                    Title
                  </label>
                  <input
                    type="text"
                    placeholder="Project title"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-purple-500/50"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-2">
                    Category
                  </label>
                  <select className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none">
                    {categories.slice(1).map((cat) => (
                      <option key={cat} value={cat} className="bg-gray-900">
                        {cat.charAt(0).toUpperCase() + cat.slice(1)}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-2">
                  Images
                </label>
                <div className="border-2 border-dashed border-white/10 rounded-xl p-8 text-center">
                  <Upload size={32} className="text-gray-500 mx-auto mb-2" />
                  <p className="text-gray-400">
                    Drop images here or click to browse
                  </p>
                </div>
              </div>
            </div>
            <div className="flex justify-end gap-3 p-6 border-t border-white/10">
              <button
                onClick={() => setShowModal(false)}
                className="px-6 py-2 rounded-xl bg-white/5 text-gray-400 hover:text-white"
              >
                Cancel
              </button>
              <button className="px-6 py-2 rounded-xl bg-linear-to-r from-purple-600 to-pink-600 text-white font-medium">
                Add Project
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}
