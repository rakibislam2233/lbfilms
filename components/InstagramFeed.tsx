'use client';

'use client';

import { useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';

const instagramPosts = [
  { id: 1, image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=300&q=80' },
  { id: 2, image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=300&q=80' },
  { id: 3, image: 'https://images.unsplash.com/photo-1543857778-c4a1a569e7bd?auto=format&fit=crop&w=300&q=80' },
  { id: 4, image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=300&q=80' },
  { id: 5, image: 'https://images.unsplash.com/photo-1511798616197-f9709d7f0760?auto=format&fit=crop&w=300&q=80' },
  { id: 6, image: 'https://images.unsplash.com/photo-1501031191319-7a82b5a3c5a1?auto=format&fit=crop&w=300&q=80' }
];

const InstagramFeed = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-12 md:py-16 bg-primary-50">
      <div ref={ref} className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-12"
        >
          <h2 className="section-title">Follow Our Journey</h2>
          <p className="section-subtitle">
            <span className="pink-gradient-text">@LBFilms</span>
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2 md:gap-4 max-w-4xl mx-auto mb-8 md:mb-12">
          {instagramPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="aspect-square overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <img
                src={post.image}
                alt={`Instagram post ${post.id}`}
                className="w-full h-full object-cover cursor-pointer hover:scale-105 transition-transform duration-300"
              />
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="https://www.instagram.com/lbfilms"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-2 text-sm md:text-base"
          >
            Follow Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default InstagramFeed;