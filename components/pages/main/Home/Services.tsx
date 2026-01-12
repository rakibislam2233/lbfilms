'use client';

import { motion, useInView } from 'framer-motion';
import { Award, Camera, Clock, Gift, Heart, Sparkles, Video } from 'lucide-react';
import { useRef } from 'react';

const services = [
  {
    icon: Camera,
    title: 'Professional Photography',
    description: 'High-end cameras and professional gear for crystal clear photos',
    color: 'purple',
  },
  {
    icon: Video,
    title: '4K Cinematic Video',
    description: 'Ultra high-definition video recording to capture every detail',
    color: 'pink',
  },
  {
    icon: Sparkles,
    title: 'Creative Editing',
    description: 'Cinematic post-production with artistic touch and professional editing',
    color: 'cyan',
  },
  {
    icon: Clock,
    title: 'Quick Delivery',
    description: 'Photos and videos delivered within 7 days without compromising quality',
    color: 'purple',
  },
  {
    icon: Gift,
    title: 'Custom Packages',
    description: 'Tailored packages to meet your unique photography needs',
    color: 'pink',
  },
  {
    icon: Award,
    title: '5+ Years Experience',
    description: 'Trusted by 500+ clients with extensive industry experience',
    color: 'cyan',
  },
];

const colorClasses = {
  purple: {
    bg: 'bg-purple-500/10',
    border: 'border-purple-500/20',
    icon: 'text-purple-400',
    glow: 'group-hover:shadow-purple-500/20',
  },
  pink: {
    bg: 'bg-pink-500/10',
    border: 'border-pink-500/20',
    icon: 'text-pink-400',
    glow: 'group-hover:shadow-pink-500/20',
  },
  cyan: {
    bg: 'bg-cyan-500/10',
    border: 'border-cyan-500/20',
    icon: 'text-cyan-400',
    glow: 'group-hover:shadow-cyan-500/20',
  },
};

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="relative py-24 overflow-hidden bg-linear-to-b from-black to-gray-950">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
            <Heart size={16} className="text-pink-400" />
            <span className="text-sm font-medium text-white/80">Why Choose Us</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            What Makes{' '}
            <span className="bg-linear-to-r from-purple-500  to-pink-500 bg-clip-text text-transparent">
              LB Films Special
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            We combine creativity, professionalism, and cutting-edge technology to deliver exceptional results
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const colors = colorClasses[service.color as keyof typeof colorClasses];
            const Icon = service.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div
                  className={`relative h-full p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm transition-all duration-500 hover:bg-white/10 hover:border-white/20 hover:shadow-2xl cursor-pointer ${colors.glow}`}
                >
                  {/* Icon */}
                  <div
                    className={`w-14 h-14 rounded-xl ${colors.bg} ${colors.border} border flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110`}
                  >
                    <Icon size={28} className={colors.icon} />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{service.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { value: '500+', label: 'Happy Clients' },
            { value: '1000+', label: 'Projects Done' },
            { value: '5+', label: 'Years Experience' },
            { value: '100%', label: 'Satisfaction' },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold bg-linear-to-r from-purple-500  to-pink-500 bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-gray-500 text-sm">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
