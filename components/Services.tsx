'use client';

import { useRef } from 'react';
import { motion } from 'framer-motion';
import { 
  Camera, 
  Video, 
  Sparkles, 
  Clock, 
  Gift, 
  Star,
  Camera as CameraIcon,
  Video as VideoIcon,
  Zap,
  Users,
  Award,
  CheckCircle
} from 'lucide-react';
import { useInView } from 'framer-motion';
import { Button } from '@/components/ui/button';

const services = [
  {
    id: 1,
    icon: <CameraIcon className="h-8 w-8 md:h-10 md:w-10" />,
    title: "Professional Equipment",
    description: "High-end cameras and professional gear for crystal clear photos and videos",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 2,
    icon: <VideoIcon className="h-8 w-8 md:h-10 md:w-10" />,
    title: "4K Video Quality",
    description: "Ultra high-definition video recording to capture every detail",
    image: "https://images.unsplash.com/photo-1574717024456-7aef8a6171ff?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 3,
    icon: <Sparkles className="h-8 w-8 md:h-10 md:w-10" />,
    title: "Creative Editing",
    description: "Cinematic post-production with artistic touch and professional editing",
    image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 4,
    icon: <Clock className="h-8 w-8 md:h-10 md:w-10" />,
    title: "Quick Delivery",
    description: "Photos and videos delivered within 7 days without compromising quality",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 5,
    icon: <Gift className="h-8 w-8 md:h-10 md:w-10" />,
    title: "Customized Packages",
    description: "Tailored packages to meet your unique photography and videography needs",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 6,
    icon: <Star className="h-8 w-8 md:h-10 md:w-10" />,
    title: "5+ Years Experience",
    description: "Trusted by 500+ clients with extensive experience in the field",
    image: "https://images.unsplash.com/photo-1543857778-c4a1a569e7bd?auto=format&fit=crop&w=600&q=80"
  }
];

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section">
      <div ref={ref} className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-16"
        >
          <h2 className="section-title">Why Choose LB Films?</h2>
          <p className="section-subtitle">
            Our services are designed to exceed your expectations
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-pink-lg transition-all duration-300 overflow-hidden border border-primary-100"
            >
              <div className="relative h-40 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <div className="w-12 h-12 rounded-full bg-primary-500 flex items-center justify-center text-white">
                    {service.icon}
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg md:text-xl font-bold text-secondary-800 mb-2">{service.title}</h3>
                <p className="text-sm md:text-base text-secondary-600">{service.description}</p>
                <Button className="mt-4 w-full bg-gradient-to-r from-primary-500 to-primary-700 text-white hover:from-primary-600 hover:to-primary-800">
                  Learn More
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;