"use client";

import { motion } from "framer-motion";
import { Award, Camera, CheckCircle, Heart, Star, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const team = [
  {
    name: "Lara Brown",
    role: "Lead Photographer",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300",
  },
  {
    name: "Benjamin Davis",
    role: "Videographer",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300",
  },
  {
    name: "Sophia Wilson",
    role: "Photo Editor",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300",
  },
];

const achievements = [
  { icon: Award, value: "50+", label: "Awards Won" },
  { icon: Users, value: "500+", label: "Happy Clients" },
  { icon: Camera, value: "1000+", label: "Projects Done" },
  { icon: Star, value: "5.0", label: "Average Rating" },
];

const AboutPage = () => {
  return (
    <main className="min-h-screen bg-black pt-24 pb-16">
      {/* Hero */}
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
              <Heart size={16} className="text-pink-400" />
              <span className="text-sm font-medium text-white/80">
                About Us
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Our{" "}
              <span className="bg-linear-to-r from-purple-500  to-pink-500 bg-clip-text text-transparent">
                Story
              </span>
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Capturing life's precious moments with passion, creativity, and
              professional excellence since 2019.
            </p>
          </motion.div>

          {/* Story Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1554048612-b6a482bc67e5?w=800"
                  alt="LB Films Team"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h2 className="text-3xl font-bold text-white mb-6">
                Passionate About{" "}
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Visual Storytelling
                </span>
              </h2>
              <p className="text-gray-400 mb-4 leading-relaxed">
                LB Films was founded with a simple mission: to capture life's
                most precious moments with artistry and authenticity. What
                started as a passion project has grown into one of Bangladesh's
                most trusted photography and videography studios.
              </p>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Our team combines technical expertise with creative vision to
                deliver stunning visual stories that our clients treasure for a
                lifetime. Whether it's a wedding, corporate event, or personal
                portrait session, we bring the same level of dedication and
                creativity to every project.
              </p>
              <ul className="space-y-3">
                {[
                  "Professional Equipment & Techniques",
                  "Creative & Artistic Approach",
                  "Quick Delivery & Communication",
                  "Customized Solutions",
                ].map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-3 text-gray-300"
                  >
                    <CheckCircle size={18} className="text-purple-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24"
          >
            {achievements.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="p-6 rounded-2xl bg-white/5 border border-white/10 text-center"
                >
                  <Icon size={32} className="text-purple-400 mx-auto mb-4" />
                  <div className="text-3xl font-bold bg-linear-to-r from-purple-500  to-pink-500 bg-clip-text text-transparent mb-1">
                    {item.value}
                  </div>
                  <div className="text-gray-500 text-sm">{item.label}</div>
                </div>
              );
            })}
          </motion.div>

          {/* Team */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Meet Our{" "}
              <span className="bg-linear-to-r from-purple-500  to-pink-500 bg-clip-text text-transparent">
                Team
              </span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="group text-center"
                >
                  <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden ring-4 ring-white/10 group-hover:ring-purple-500/50 transition-all">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-1">
                    {member.name}
                  </h3>
                  <p className="text-gray-500">{member.role}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-20 text-center"
          >
            <div className="p-8 rounded-3xl bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-cyan-500/10 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-4">
                Ready to Create Something Beautiful?
              </h3>
              <p className="text-gray-400 mb-6">
                Let's capture your precious moments together
              </p>
              <Link href="/booking">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 rounded-full bg-linear-to-r from-purple-600 to-pink-600 text-white font-semibold"
                >
                  Book a Session
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
