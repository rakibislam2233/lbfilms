'use client';

import { motion } from 'framer-motion';
import { CheckCircle, Facebook, Instagram, Mail, MapPin, MessageCircle, Phone, Send, Youtube } from 'lucide-react';
import { useState } from 'react';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTimeout(() => setSubmitted(true), 1000);
  };

  return (
    <main className="min-h-screen bg-black pt-24 pb-16">
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
              <MessageCircle size={16} className="text-purple-400" />
              <span className="text-sm font-medium text-white/80">Contact Us</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Get In{' '}
              <span className="bg-linear-to-r from-purple-500  to-pink-500 bg-clip-text text-transparent">Touch</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">Have questions? We'd love to hear from you.</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
              {submitted ? (
                <div className="p-8 rounded-3xl bg-white/5 border border-white/10 text-center">
                  <CheckCircle size={64} className="text-green-400 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                  <p className="text-gray-400">We'll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="p-8 rounded-3xl bg-white/5 border border-white/10">
                  <h3 className="text-2xl font-bold text-white mb-6">Send us a message</h3>
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <input
                        type="text"
                        placeholder="Your Name"
                        required
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50"
                      />
                      <input
                        type="email"
                        placeholder="Your Email"
                        required
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50"
                      />
                    </div>
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50"
                    />
                    <select className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-gray-400 focus:outline-none focus:border-purple-500/50">
                      <option value="">Select Service Type</option>
                      <option value="wedding">Wedding Photography</option>
                      <option value="corporate">Corporate Event</option>
                      <option value="portrait">Portrait Session</option>
                      <option value="product">Product Photography</option>
                      <option value="other">Other</option>
                    </select>
                    <textarea
                      placeholder="Your Message"
                      rows={5}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 resize-none"
                    />
                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full py-4 rounded-xl bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 text-white font-semibold flex items-center justify-center gap-2"
                    >
                      <Send size={18} />
                      Send Message
                    </motion.button>
                  </div>
                </form>
              )}
            </motion.div>

            {/* Contact Info */}
            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }} className="space-y-6">
              {[
                { icon: Phone, title: 'Phone', value: '+880 1234-567890', href: 'tel:+8801234567890', color: 'purple' },
                { icon: Mail, title: 'Email', value: 'info@lbfilms.com', href: 'mailto:info@lbfilms.com', color: 'pink' },
                { icon: MapPin, title: 'Location', value: 'Dhaka, Bangladesh', href: '#', color: 'cyan' },
              ].map((item, index) => {
                const Icon = item.icon;
                const bgColor = item.color === 'purple' ? 'bg-purple-500/10' : item.color === 'pink' ? 'bg-pink-500/10' : 'bg-cyan-500/10';
                const iconColor = item.color === 'purple' ? 'text-purple-400' : item.color === 'pink' ? 'text-pink-400' : 'text-cyan-400';
                return (
                  <a key={index} href={item.href} className="flex items-center gap-4 p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group">
                    <div className={`w-14 h-14 rounded-xl ${bgColor} flex items-center justify-center`}>
                      <Icon size={24} className={iconColor} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">{item.title}</p>
                      <p className="text-white font-medium text-lg group-hover:text-purple-400 transition-colors">{item.value}</p>
                    </div>
                  </a>
                );
              })}

              {/* Social Links */}
              <div className="flex gap-3 pt-4">
                {[Facebook, Instagram, Youtube].map((Icon, idx) => (
                  <motion.a
                    key={idx}
                    href="#"
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="w-14 h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all"
                  >
                    <Icon size={22} />
                  </motion.a>
                ))}
              </div>

              {/* Map */}
              <div className="relative rounded-2xl overflow-hidden border border-white/10 h-64 mt-6">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.277769832909!2d90.4053793749914!3d23.77658647894169!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c77608e5c5b7%3A0x939e78a8b6c8e5b!2sDhaka!5e0!3m2!1sen!2sbd!4v1617777777777!5m2!1sen!2sbd"
                  className="w-full h-full border-0 grayscale contrast-125"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
