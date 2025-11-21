"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  ChevronLeft,
  ChevronRight,
  Camera,
  MapPin,
  Calendar,
} from "lucide-react";
import Image from "next/image";
import { projects } from "@/data";

const categories = [
  { id: "all", name: "All" },
  { id: "wedding", name: "Wedding" },
  { id: "portrait", name: "Portrait" },
  { id: "corporate", name: "Corporate" },
  { id: "event", name: "Event" },
  { id: "product", name: "Product" },
  { id: "birthday", name: "Birthday" },
];

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState<
    (typeof projects)[0] | null
  >(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  const openLightbox = (project: (typeof projects)[0]) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setSelectedProject(null);
    document.body.style.overflow = "auto";
  };

  const nextImage = () => {
    if (selectedProject) {
      setCurrentImageIndex(
        (prev) => (prev + 1) % selectedProject.images.length
      );
    }
  };

  const prevImage = () => {
    if (selectedProject) {
      setCurrentImageIndex(
        (prev) =>
          (prev - 1 + selectedProject.images.length) %
          selectedProject.images.length
      );
    }
  };

  return (
    <main className="min-h-screen bg-background pt-24 pb-16">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted border border-border mb-6">
              <Camera size={16} className="text-purple-400" />
              <span className="text-sm font-medium text-white/80">
                Portfolio Gallery
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4">
              Our{" "}
              <span className="bg-linear-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Creative Work
              </span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Explore our complete portfolio of photography work across
              weddings, events, portraits, and more
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
                    ? "bg-linear-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/25"
                    : "bg-muted text-muted-foreground border border-border hover:bg-muted hover:text-foreground"
                }`}
              >
                {cat.name}
              </motion.button>
            ))}
          </motion.div>

          {/* Gallery Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: index * 0.03 }}
                  onClick={() => openLightbox(project)}
                  className="group relative cursor-pointer"
                >
                  <div className="relative aspect-square rounded-2xl overflow-hidden bg-gray-800">
                    <Image
                      src={project.images[0]}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />

                    <div className="absolute inset-0 flex flex-col justify-end p-5 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <span className="inline-block px-3 py-1 rounded-full bg-linear-to-r from-purple-500/80 to-pink-500/80 text-white text-xs font-medium mb-2 w-fit capitalize">
                        {project.category}
                      </span>
                      <h3 className="text-lg font-bold text-foreground mb-1">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground text-sm flex items-center gap-1">
                        <MapPin size={12} />
                        {project.location}
                      </p>
                    </div>

                    {project.images.length > 1 && (
                      <div className="absolute top-3 right-3 flex items-center gap-1 px-2 py-1 rounded-full bg-black/50 backdrop-blur-sm text-white text-xs">
                        <Camera size={12} />
                        {project.images.length}
                      </div>
                    )}

                    {project.featured && (
                      <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-linear-to-r from-purple-600 to-pink-600 text-white text-xs font-medium">
                        Featured
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <p className="text-muted-foreground">
                No projects found in this category
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-xl p-4"
            onClick={closeLightbox}
          >
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-50 p-3 rounded-full bg-muted hover:bg-muted transition-colors"
            >
              <X size={24} className="text-foreground" />
            </button>

            {selectedProject.images.length > 1 && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    prevImage();
                  }}
                  className="absolute left-4 z-50 p-3 rounded-full bg-muted hover:bg-muted transition-colors"
                >
                  <ChevronLeft size={24} className="text-foreground" />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    nextImage();
                  }}
                  className="absolute right-4 z-50 p-3 rounded-full bg-muted hover:bg-muted transition-colors"
                >
                  <ChevronRight size={24} className="text-foreground" />
                </button>
              </>
            )}

            <motion.div
              key={currentImageIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative max-w-5xl max-h-[80vh] w-full h-full"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedProject.images[currentImageIndex]}
                alt={selectedProject.title}
                fill
                className="object-contain"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="absolute bottom-0 left-0 right-0 p-6 bg-linear-to-t from-black to-transparent"
            >
              <div className="max-w-5xl mx-auto">
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  {selectedProject.title}
                </h3>
                <p className="text-muted-foreground mb-3">
                  {selectedProject.description}
                </p>
                <div className="flex items-center gap-6 text-muted-foreground text-sm">
                  <span className="flex items-center gap-2">
                    <MapPin size={16} />
                    {selectedProject.location}
                  </span>
                  <span className="flex items-center gap-2">
                    <Calendar size={16} />
                    {new Date(selectedProject.date).toLocaleDateString()}
                  </span>
                  {selectedProject.images.length > 1 && (
                    <span className="text-foreground">
                      {currentImageIndex + 1} / {selectedProject.images.length}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>

            {selectedProject.images.length > 1 && (
              <div className="absolute bottom-32 left-1/2 -translate-x-1/2 flex gap-2">
                {selectedProject.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentImageIndex(idx);
                    }}
                    className={`relative w-16 h-12 rounded-lg overflow-hidden transition-all ${
                      idx === currentImageIndex
                        ? "ring-2 ring-purple-500 scale-110"
                        : "opacity-50 hover:opacity-100"
                    }`}
                  >
                    <Image src={img} alt="" fill className="object-cover" />
                  </button>
                ))}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
