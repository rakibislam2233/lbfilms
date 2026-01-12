"use client";

import { projects } from "@/data";
import { AnimatePresence, motion, useInView } from "framer-motion";
import {
  Calendar,
  Camera,
  ChevronLeft,
  ChevronRight,
  MapPin,
  X,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";

const categories = [
  { id: "all", name: "All", icon: Camera },
  { id: "wedding", name: "Wedding" },
  { id: "portrait", name: "Portrait" },
  { id: "corporate", name: "Corporate" },
  { id: "event", name: "Event" },
  { id: "product", name: "Product" },
  { id: "birthday", name: "Birthday" },
];

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState<
    (typeof projects)[0] | null
  >(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const filteredProjects =
    activeFilter === "all"
      ? projects.slice(0, 9)
      : projects.filter((p) => p.category === activeFilter).slice(0, 9);

  const openLightbox = (project: (typeof projects)[0], index: number = 0) => {
    setSelectedProject(project);
    setCurrentImageIndex(index);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setSelectedProject(null);
    setCurrentImageIndex(0);
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
    <section className="relative py-24 overflow-hidden bg-linear-to-b from-black via-gray-950 to-gray-900">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
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
            <Camera size={16} className="text-purple-400" />
            <span className="text-sm font-medium text-white/80">
              Our Portfolio
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Recent{" "}
            <span className="bg-linear-to-r from-purple-500  to-pink-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore our latest photography work capturing beautiful moments
            across different occasions
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
              onClick={() => setActiveFilter(cat?.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all cursor-pointer duration-300 ${
                activeFilter === cat.id
                  ? "bg-linear-to-r from-purple-500  to-pink-500 text-white shadow-lg shadow-purple-500/25"
                  : "bg-muted text-muted-foreground  hover:bg-muted hover:text-foreground"
              }`}
            >
              {cat.name}
            </motion.button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                onClick={() => openLightbox(project)}
                className="group relative cursor-pointer"
              >
                <div className="relative aspect-4/3 rounded-2xl overflow-hidden bg-gray-800">
                  <Image
                    src={project.images[0]}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />

                  {/* Content */}
                  <div className="absolute inset-0 flex flex-col justify-end p-5 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <span className="inline-block px-3 py-1 rounded-full bg-linear-to-r from-purple-500  to-pink-500 text-white text-xs font-medium mb-2 w-fit capitalize">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-4 text-muted-foreground text-sm">
                      <span className="flex items-center gap-1">
                        <MapPin size={14} />
                        {project.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar size={14} />
                        {new Date(project.date).toLocaleDateString("en-US", {
                          month: "short",
                          year: "numeric",
                        })}
                      </span>
                    </div>
                  </div>

                  {/* Image Count Badge */}
                  {project.images.length > 1 && (
                    <div className="absolute top-3 right-3 flex items-center gap-1 px-2 py-1 rounded-full bg-black/50 backdrop-blur-sm text-white text-xs">
                      <Camera size={12} />
                      {project.images.length}
                    </div>
                  )}

                  {/* Featured Badge */}
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

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <Link href="/gallery">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-8 py-3 text-sm md:text-base rounded-full border border-border text-foreground hover:bg-muted transition-colors"
            >
              View Full Gallery
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                →
              </motion.span>
            </motion.button>
          </Link>
        </motion.div>
      </div>

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
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 cursor-pointer right-4 z-50 p-3 rounded-full bg-muted hover:bg-muted transition-colors"
            >
              <X size={24} className="text-foreground" />
            </button>

            {/* Navigation */}
            {selectedProject?.images?.length > 1 && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    prevImage();
                  }}
                  className="absolute left-4 z-50 p-3 cursor-pointer rounded-full bg-muted hover:bg-muted transition-colors"
                >
                  <ChevronLeft size={24} className="text-foreground" />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    nextImage();
                  }}
                  className="absolute right-4 z-50 p-3 cursor-pointer rounded-full bg-muted hover:bg-muted transition-colors"
                >
                  <ChevronRight size={24} className="text-foreground" />
                </button>
              </>
            )}

            {/* Image */}
            <motion.div
              key={currentImageIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative max-w-5xl max-h-[80vh] w-full h-full"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedProject?.images[currentImageIndex]}
                alt={selectedProject?.title}
                fill
                className="object-contain"
              />
            </motion.div>

            {/* Info Panel */}
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
                  {selectedProject?.description}
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

            {/* Thumbnail Strip */}
            {selectedProject?.images.length > 1 && (
              <div className="absolute bottom-32 left-1/2 -translate-x-1/2 flex gap-2">
                {selectedProject.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentImageIndex(idx);
                    }}
                    className={`relative w-16 h-12  cursor-pointer rounded-lg overflow-hidden transition-all ${
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
    </section>
  );
};

export default Gallery;
