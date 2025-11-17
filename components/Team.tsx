'use client';

'use client';

import { useRef } from 'react';
import { motion } from 'framer-motion';
import { Facebook, Instagram, Mail, Camera } from 'lucide-react';
import { useInView } from 'framer-motion';

const teamMembers = [
  {
    id: 1,
    name: "Lara Brown",
    role: "Lead Photographer",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80",
    bio: "10+ years of experience in wedding and portrait photography.",
    social: {
      facebook: "#",
      instagram: "#",
      email: "#"
    }
  },
  {
    id: 2,
    name: "Benjamin Davis",
    role: "Videographer",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
    bio: "Specializes in cinematic videography and creative storytelling.",
    social: {
      facebook: "#",
      instagram: "#",
      email: "#"
    }
  },
  {
    id: 3,
    name: "Sophia Wilson",
    role: "Photo Editor",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=300&q=80",
    bio: "Expert in post-production and artistic editing techniques.",
    social: {
      facebook: "#",
      instagram: "#",
      email: "#"
    }
  }
];

const Team = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section">
      <div ref={ref} className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-16"
        >
          <h2 className="section-title">Meet the Team</h2>
          <p className="section-subtitle">
            Our talented professionals behind the camera
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 max-w-5xl mx-auto">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center bg-white rounded-2xl p-4 md:p-6 lg:p-8 shadow-lg hover:shadow-pink-lg transition-shadow"
            >
              <div className="relative inline-block mb-4">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover mx-auto border-4 border-primary-100"
                />
                <div className="absolute -bottom-1 -right-1 md:-bottom-2 md:-right-2 bg-primary-500 rounded-full p-1.5 md:p-2">
                  <Camera className="h-4 w-4 md:h-5 md:w-5 text-white" />
                </div>
              </div>

              <h3 className="text-lg md:text-xl font-bold text-secondary-800 mb-1 md:mb-2">{member.name}</h3>
              <p className="text-primary-600 font-medium text-sm md:text-base mb-2 md:mb-3">{member.role}</p>
              <p className="text-xs md:text-sm text-secondary-600 mb-4 md:mb-6">{member.bio}</p>

              <div className="flex justify-center space-x-3 md:space-x-4">
                <a href={member.social.facebook} className="text-secondary-500 hover:text-primary-500 transition-colors">
                  <Facebook className="h-4 w-4 md:h-5 md:w-5" />
                </a>
                <a href={member.social.instagram} className="text-secondary-500 hover:text-primary-500 transition-colors">
                  <Instagram className="h-4 w-4 md:h-5 md:w-5" />
                </a>
                <a href={member.social.email} className="text-secondary-500 hover:text-primary-500 transition-colors">
                  <Mail className="h-4 w-4 md:h-5 md:w-5" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;