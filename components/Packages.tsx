'use client';

import { useRef } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import { useInView } from 'framer-motion';

const packages = [
  {
    id: 'basic',
    name: 'Basic',
    price: '৳15,000',
    description: 'Perfect for small events and portrait sessions',
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=600&q=80',
    features: [
      '3 hours of coverage',
      '50 edited photos',
      'Basic editing',
      'Digital delivery'
    ],
    popular: false
  },
  {
    id: 'standard',
    name: 'Standard',
    price: '৳30,000',
    description: 'Our most popular package for complete coverage',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=600&q=80',
    features: [
      '6 hours of coverage',
      '150 edited photos',
      'Professional editing',
      'Highlights video (30 sec)',
      'Digital delivery'
    ],
    popular: true
  },
  {
    id: 'premium',
    name: 'Premium',
    price: '৳50,000',
    description: 'Complete experience with all features included',
    image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=600&q=80',
    features: [
      '12 hours of coverage',
      '300+ edited photos',
      'Advanced editing',
      'Full event video (1-2 hrs)',
      'Highlights video (1 min)',
      'Physical album delivery'
    ],
    popular: false
  }
];

const Packages = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="packages" className="section">
      <div ref={ref} className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-16"
        >
          <h2 className="section-title">Our Service Packages</h2>
          <p className="section-subtitle">
            Choose the package that fits your needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 max-w-5xl mx-auto">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative rounded-2xl shadow-lg overflow-hidden ${
                pkg.popular
                  ? 'ring-2 ring-primary-500 transform -translate-y-2 md:-translate-y-3'
                  : 'bg-white'
              }`}
            >
              {pkg.popular && (
                <div className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-primary-500 text-white px-4 py-1 rounded-full text-xs font-bold z-10">
                  MOST POPULAR
                </div>
              )}

              <div className="relative h-48 overflow-hidden">
                <img
                  src={pkg.image}
                  alt={pkg.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className={`text-xl md:text-2xl font-bold ${
                    pkg.popular ? 'text-primary-300' : 'text-white'
                  }`}>
                    {pkg.name}
                  </h3>
                  <span className="text-2xl md:text-3xl font-bold">{pkg.price}</span>
                </div>
              </div>

              <div className="p-5 md:p-6">
                <p className="text-xs md:text-sm text-secondary-600 mb-4">{pkg.description}</p>

                <ul className="space-y-2 mb-6">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-primary-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-xs md:text-sm text-secondary-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-2 md:py-3 rounded-full font-semibold transition-all text-sm md:text-base ${
                    pkg.popular
                      ? 'bg-gradient-to-r from-primary-500 to-primary-700 text-white hover:from-primary-600 hover:to-primary-800'
                      : 'bg-gradient-to-r from-primary-400 to-primary-600 text-white hover:from-primary-500 hover:to-primary-700'
                  }`}
                >
                  Select Package
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Packages;