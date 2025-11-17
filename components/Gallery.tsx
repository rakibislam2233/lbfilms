"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Camera, Calendar, Tag } from "lucide-react";
import { useInView } from "framer-motion";
import Link from "next/link";

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedItem, setSelectedItem] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Sample gallery data with multiple images per item
  const galleryItems = [
    {
      id: 1,
      images: [
        "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1511798616197-f9709d7f0760?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=600&q=80"
      ],
      title: "Wedding Ceremony",
      category: "wedding",
      date: "2023-05-15",
      description: "Beautiful wedding ceremony captured with all the emotions and moments that matter.",
      buttonText: "View Gallery"
    },
    {
      id: 2,
      images: [
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1574717024456-7aef8a6171ff?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=600&q=80"
      ],
      title: "Portrait Session",
      category: "portrait",
      date: "2023-06-20",
      description: "Professional portrait session with artistic lighting and perfect composition.",
      buttonText: "View Gallery"
    },
    {
      id: 3,
      images: [
        "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1574717024456-7aef8a6171ff?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=600&q=80"
      ],
      title: "Corporate Event",
      category: "corporate",
      date: "2023-07-10",
      description: "Corporate event photography capturing all the important moments and professional shots.",
      buttonText: "View Gallery"
    },
    {
      id: 4,
      images: [
        "https://images.unsplash.com/photo-1543857778-c4a1a569e7bd?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1511798616197-f9709d7f0760?auto=format&fit=crop&w=600&q=80"
      ],
      title: "Engagement Shoot",
      category: "portrait",
      date: "2023-08-05",
      description: "Romantic engagement photos capturing the love and excitement of your special moment.",
      buttonText: "View Gallery"
    },
    {
      id: 5,
      images: [
        "https://images.unsplash.com/photo-1511798616197-f9709d7f0760?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=600&q=80"
      ],
      title: "Birthday Party",
      category: "event",
      date: "2023-09-12",
      description: "Vibrant birthday party photography capturing all the joy and celebration.",
      buttonText: "View Gallery"
    },
    {
      id: 6,
      images: [
        "https://images.unsplash.com/photo-1501031191319-7a82b5a3c5a1?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1543857778-c4a1a569e7bd?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=600&q=80"
      ],
      title: "Fashion Shoot",
      category: "portrait",
      date: "2023-10-01",
      description: "Stylish fashion photography with professional styling and creative composition.",
      buttonText: "View Gallery"
    },
  ];

  const categories = [
    { id: "all", name: "All" },
    { id: "wedding", name: "Wedding" },
    { id: "portrait", name: "Portrait" },
    { id: "corporate", name: "Corporate" },
    { id: "event", name: "Event" },
  ];

  const filteredItems =
    activeFilter === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeFilter);

  const openGalleryItem = (item) => {
    setSelectedItem(item);
    setCurrentImageIndex(0); // Start with the first image
  };

  const closeGalleryItem = () => {
    setSelectedItem(null);
  };

  const nextImage = () => {
    if (selectedItem) {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === selectedItem.images.length - 1 ? 0 : prevIndex + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedItem) {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === 0 ? selectedItem.images.length - 1 : prevIndex - 1
      );
    }
  };

  return (
    <section id="gallery" className="section bg-primary-50">
      <div ref={ref} className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Recent Projects</h2>
          <p className="section-subtitle">
            Explore our latest photography and videography work
          </p>
        </motion.div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-8 md:mb-12">
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-4 py-1.5 md:px-5 md:py-2 rounded-lg text-xs md:text-sm font-medium transition-all ${
                activeFilter === category.id
                  ? "bg-gradient-to-r from-primary-500 to-primary-700 text-white shadow-pink"
                  : "bg-white text-secondary-700 hover:bg-primary-100"
              }`}
            >
              {category.name}
            </motion.button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {filteredItems.map((item, index) => (
            <div key={item.id}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-xl shadow-lg aspect-square border border-white/20 cursor-pointer"
                whileHover={{ y: -10 }}
                onClick={() => openGalleryItem(item)}
              >
                <div className="relative w-full h-full">
                  <img
                    src={item.images[0]} // Show the first image as the main image
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  <motion.div
                    className="absolute inset-0 flex flex-col justify-end p-4 md:p-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ y: 20 }}
                    whileHover={{ y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="text-lg md:text-xl font-bold mb-1 md:mb-2">
                      {item.title}
                    </h3>
                    <div className="flex items-center text-secondary-200 text-xs md:text-sm gap-2 md:gap-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3 md:h-4 md:w-4" />
                        <span>{item.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Tag className="h-3 w-3 md:h-4 md:w-4" />
                        <span className="capitalize">{item.category}</span>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-8 md:mt-12">
          <Link href="/gallery">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-outline text-sm md:text-base rounded-lg"
            >
              View All Projects
            </motion.button>
          </Link>
        </div>
      </div>

      {/* Modal for viewing gallery item details */}
      {selectedItem && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col">
            <div className="flex justify-between items-center p-4 border-b">
              <h3 className="text-xl font-bold">{selectedItem.title}</h3>
              <button
                onClick={closeGalleryItem}
                className="text-secondary-500 hover:text-secondary-700 text-2xl"
              >
                &times;
              </button>
            </div>

            <div className="flex flex-col md:flex-row flex-1">
              {/* Image carousel */}
              <div className="relative w-full md:w-2/3 h-80 md:h-auto">
                <img
                  src={selectedItem.images[currentImageIndex]}
                  alt={`${selectedItem.title} - Image ${currentImageIndex + 1}`}
                  className="w-full h-full object-cover"
                />

                {/* Navigation arrows */}
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg"
                >
                  &lt;
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg"
                >
                  &gt;
                </button>

                {/* Image counter */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                  {currentImageIndex + 1} / {selectedItem.images.length}
                </div>
              </div>

              {/* Project details */}
              <div className="w-full md:w-1/3 p-6 overflow-y-auto">
                <div className="mb-4">
                  <div className="flex items-center text-secondary-600 text-sm gap-2 mb-2">
                    <Calendar className="h-4 w-4" />
                    <span>{selectedItem.date}</span>
                  </div>
                  <div className="flex items-center text-secondary-600 text-sm gap-2">
                    <Tag className="h-4 w-4" />
                    <span className="capitalize">{selectedItem.category}</span>
                  </div>
                </div>

                <p className="text-secondary-700 mb-6">{selectedItem.description}</p>

                <button className="w-full bg-gradient-to-r from-primary-500 to-primary-700 text-white px-6 py-3 rounded-full font-semibold hover:from-primary-600 hover:to-primary-800 transition-all">
                  {selectedItem.buttonText}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
