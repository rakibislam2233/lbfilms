"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Camera,
  Calendar,
  Tag,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Link from "next/link";

const DetailedGalleryPage = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Sample gallery data
  const galleryItems = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=800&q=80",
      title: "Wedding Ceremony",
      category: "wedding",
      date: "2023-05-15",
      description:
        "Beautiful outdoor wedding ceremony captured in golden hour light",
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=80",
      title: "Portrait Session",
      category: "portrait",
      date: "2023-06-20",
      description: "Professional portrait session for a corporate client",
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=800&q=80",
      title: "Corporate Event",
      category: "corporate",
      date: "2023-07-10",
      description:
        "Annual conference event with multiple speakers and attendees",
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1543857778-c4a1a569e7bd?auto=format&fit=crop&w=800&q=80",
      title: "Engagement Shoot",
      category: "portrait",
      date: "2023-08-05",
      description: "Romantic engagement session at a scenic location",
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1511798616197-f9709d7f0760?auto=format&fit=crop&w=800&q=80",
      title: "Birthday Party",
      category: "event",
      date: "2023-09-12",
      description: "Child's birthday celebration with family and friends",
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1501031191319-7a82b5a3c5a1?auto=format&fit=crop&w=800&q=80",
      title: "Fashion Shoot",
      category: "portrait",
      date: "2023-10-01",
      description: "Creative fashion photography session with models",
    },
    {
      id: 7,
      src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=800&q=80",
      title: "Nature Photography",
      category: "landscape",
      date: "2023-10-15",
      description: "Scenic landscape photography in the mountains",
    },
    {
      id: 8,
      src: "https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=800&q=80",
      title: "Product Photography",
      category: "commercial",
      date: "2023-11-03",
      description: "High-quality product photography for an e-commerce client",
    },
  ];

  const categories = [
    { id: "all", name: "All" },
    { id: "wedding", name: "Wedding" },
    { id: "portrait", name: "Portrait" },
    { id: "corporate", name: "Corporate" },
    { id: "event", name: "Event" },
    { id: "landscape", name: "Landscape" },
    { id: "commercial", name: "Commercial" },
  ];

  const filteredItems =
    activeFilter === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeFilter);

  const openImageModal = (index: number) => {
    setCurrentImageIndex(index);
    setSelectedImage(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage === null) return;
    const nextIndex = (currentImageIndex + 1) % filteredItems.length;
    setCurrentImageIndex(nextIndex);
    setSelectedImage(nextIndex);
  };

  const prevImage = () => {
    if (selectedImage === null) return;
    const prevIndex =
      (currentImageIndex - 1 + filteredItems.length) % filteredItems.length;
    setCurrentImageIndex(prevIndex);
    setSelectedImage(prevIndex);
  };

  return (
    <div className="min-h-screen bg-primary-50 pb-16 pt-32">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-secondary-800 mb-4">
            Our Portfolio
          </h1>
          <p className="text-secondary-600 max-w-2xl mx-auto">
            Explore our latest photography and videography work across various
            categories
          </p>
        </motion.div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                activeFilter === category.id
                  ? "bg-gradient-to-r from-primary-500 to-primary-700 text-white"
                  : "bg-white text-secondary-700 hover:bg-primary-100"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer"
              onClick={() => openImageModal(index)}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="text-lg font-bold text-white mb-1">
                  {item.title}
                </h3>
                <div className="flex items-center text-secondary-200 text-sm gap-4">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>{item.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Tag className="h-4 w-4" />
                    <span className="capitalize">{item.category}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <Link href="/" className="btn-outline">
            Back to Home
          </Link>
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <button
            className="absolute top-6 right-6 text-white p-2 rounded-full hover:bg-white/10"
            onClick={closeModal}
          >
            <X className="h-6 w-6" />
          </button>

          <button
            className="absolute left-6 top-1/2 transform -translate-y-1/2 text-white p-2 rounded-full hover:bg-white/10"
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
          >
            <ChevronLeft className="h-8 w-8" />
          </button>

          <button
            className="absolute right-6 top-1/2 transform -translate-y-1/2 text-white p-2 rounded-full hover:bg-white/10"
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
          >
            <ChevronRight className="h-8 w-8" />
          </button>

          <div
            className="max-w-6xl w-full max-h-[90vh] flex flex-col md:flex-row items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-full md:w-2/3 flex justify-center">
              <img
                src={filteredItems[currentImageIndex]?.src}
                alt={filteredItems[currentImageIndex]?.title}
                className="max-h-[70vh] object-contain"
              />
            </div>
            <div className="w-full md:w-1/3 p-6 text-white overflow-y-auto max-h-[70vh]">
              <h2 className="text-2xl font-bold mb-3">
                {filteredItems[currentImageIndex]?.title}
              </h2>
              <div className="flex items-center gap-4 mb-4 text-secondary-300">
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  <span>{filteredItems[currentImageIndex]?.date}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Tag className="h-4 w-4" />
                  <span className="capitalize">
                    {filteredItems[currentImageIndex]?.category}
                  </span>
                </div>
              </div>
              <p className="text-secondary-200">
                {filteredItems[currentImageIndex]?.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DetailedGalleryPage;
