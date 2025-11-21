'use client';

import { motion, useInView } from 'framer-motion';
import { Facebook, Instagram, Mail, MapPin, MessageCircle, Phone, Youtube } from 'lucide-react';
import { useRef } from 'react';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      value: '+880 1234-567890',
      href: 'tel:+8801234567890',
      color: 'purple',
    },
    {
      icon: Mail,
      title: 'Email',
      value: 'info@lbfilms.com',
      href: 'mailto:info@lbfilms.com',
      color: 'pink',
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Dhaka, Bangladesh',
      href: '#',
      color: 'cyan',
    },
  ];

  return (
    <section className="relative py-24 overflow-hidden bg-black">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
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
            <MessageCircle size={16} className="text-purple-400" />
            <span className="text-sm font-medium text-white/80">Get In Touch</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Let's Create{' '}
            <span className="bg-linear-to-r from-purple-500  to-pink-500 bg-clip-text text-transparent">
              Magic Together
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Ready to capture your precious moments? Get in touch with us today
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info & Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Contact Cards */}
            <div className="space-y-4 mb-8">
              {contactInfo.map((item, index) => {
                const Icon = item.icon;
                const bgColor =
                  item.color === 'purple'
                    ? 'bg-purple-500/10'
                    : item.color === 'pink'
                    ? 'bg-pink-500/10'
                    : 'bg-cyan-500/10';
                const iconColor =
                  item.color === 'purple'
                    ? 'text-purple-400'
                    : item.color === 'pink'
                    ? 'text-pink-400'
                    : 'text-cyan-400';

                return (
                  <motion.a
                    key={index}
                    href={item.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group"
                  >
                    <div className={`w-12 h-12 rounded-xl ${bgColor} flex items-center justify-center`}>
                      <Icon size={22} className={iconColor} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">{item.title}</p>
                      <p className="text-white font-medium group-hover:text-purple-400 transition-colors">
                        {item.value}
                      </p>
                    </div>
                  </motion.a>
                );
              })}
            </div>

            {/* Social Links */}
            <div className="flex gap-3">
              {[Facebook, Instagram, Youtube].map((Icon, idx) => (
                <motion.a
                  key={idx}
                  href="#"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.6 + idx * 0.1 }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all"
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </div>

            {/* WhatsApp CTA */}
            <motion.a
              href="https://wa.me/8801234567890"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8 }}
              whileHover={{ scale: 1.02 }}
              className="mt-6 flex items-center justify-center gap-3 w-full py-4 rounded-2xl border border-white/20 text-white font-semibold"
            >
              <MessageCircle size={20} />
              Chat on WhatsApp
            </motion.a>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden border border-white/10 h-full min-h-[400px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.277769832909!2d90.4053793749914!3d23.77658647894169!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c77608e5c5b7%3A0x939e78a8b6c8e5b!2sDhaka!5e0!3m2!1sen!2sbd!4v1617777777777!5m2!1sen!2sbd"
                className="w-full h-full min-h-[400px] border-0 grayscale contrast-125"
                allowFullScreen={true}
                loading="lazy"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />

              {/* Location Badge */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="flex items-center gap-3 p-4 rounded-xl bg-black/80 backdrop-blur-sm border border-white/10">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                    <MapPin size={18} className="text-white" />
                  </div>
                  <div>
                    <p className="text-white font-medium">LB Films Studio</p>
                    <p className="text-sm text-gray-400">Dhaka, Bangladesh</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
