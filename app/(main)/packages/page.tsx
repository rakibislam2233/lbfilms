'use client';

import { packages } from '@/data';
import { motion } from 'framer-motion';
import { Camera, Check, Clock, Sparkles } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function PackagesPage() {
  return (
    <main className="min-h-screen bg-black pt-24 pb-16">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
              <Camera size={16} className="text-purple-400" />
              <span className="text-sm font-medium text-white/80">Our Packages</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Photography{' '}
              <span className="bg-linear-to-r from-purple-500  to-pink-500 bg-clip-text text-transparent">
                Packages
              </span>
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Choose the perfect package for your special moments. From intimate portraits to grand celebrations.
            </p>
          </motion.div>

          {/* Packages Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative"
              >
                <div
                  className={`relative h-full rounded-3xl overflow-hidden ${
                    pkg.popular ? 'bg-gradient-to-b from-gray-800/80 to-gray-900/80' : 'bg-gray-900/60'
                  }`}
                >
                  {/* Gradient Border */}
                  <div
                    className={`absolute inset-0 rounded-3xl p-[2px] ${
                      pkg.popular
                        ? 'bg-gradient-to-b from-purple-500 via-pink-500 to-cyan-500'
                        : 'bg-gradient-to-b from-gray-700 to-gray-800 group-hover:from-purple-500/50 group-hover:via-pink-500/50 group-hover:to-cyan-500/50'
                    } transition-all duration-500`}
                  >
                    <div className="absolute inset-[2px] rounded-3xl bg-gray-900" />
                  </div>

                  <div className="relative z-10 p-6">
                    {pkg.popular && (
                      <div className="absolute -top-1 left-1/2 -translate-x-1/2 z-20">
                        <div className="flex items-center gap-1 px-4 py-1.5 rounded-full bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 text-white text-xs font-bold">
                          <Sparkles size={12} />
                          MOST POPULAR
                        </div>
                      </div>
                    )}

                    <h3 className="text-2xl font-bold text-white text-center mt-4 mb-4">{pkg.name}</h3>

                    <div className="relative mb-6 rounded-2xl overflow-hidden p-[2px] bg-gradient-to-br from-purple-500/50 via-pink-500/50 to-cyan-500/50">
                      <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                        <Image src={pkg.image} alt={pkg.name} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                        <div className="absolute bottom-3 right-3 flex items-center gap-1 px-3 py-1 rounded-full bg-black/50 backdrop-blur-sm text-white text-sm">
                          <Clock size={14} />
                          {pkg.duration}
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-400 text-sm text-center mb-6">{pkg.description}</p>

                    <ul className="space-y-3 mb-6">
                      {pkg.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-3 text-gray-300">
                          <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 flex items-center justify-center">
                            <Check size={12} className="text-white" />
                          </div>
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex items-center justify-center mb-6">
                      <div className="inline-flex items-baseline gap-1 px-6 py-2 rounded-full bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-cyan-500/20 border border-white/10">
                        <span className="text-3xl font-bold bg-linear-to-r from-purple-500  to-pink-500 bg-clip-text text-transparent">
                          {pkg.price.toLocaleString()}
                        </span>
                        <span className="text-gray-400 text-sm">TK</span>
                      </div>
                    </div>

                    <Link href={`/booking?package=${pkg.id}`}>
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className={`w-full py-3.5 rounded-xl font-semibold text-white transition-all duration-300 ${
                          pkg.popular
                            ? 'bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 shadow-lg shadow-purple-500/25'
                            : 'bg-white/10 border border-white/20 hover:bg-white/20'
                        }`}
                      >
                        Book Now
                      </motion.button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Custom Package CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-16 text-center"
          >
            <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-4">Need a Custom Package?</h3>
              <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
                We understand every event is unique. Contact us to create a tailored package that fits your specific needs.
              </p>
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 rounded-full bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 text-white font-semibold"
                >
                  Contact Us
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
