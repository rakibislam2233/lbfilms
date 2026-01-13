"use client";

import { motion } from "framer-motion";
import { Calendar, Edit2, Mail, MapPin, Phone, User } from "lucide-react";
import Link from "next/link";

const user = {
  name: "John Doe",
  email: "john@example.com",
  phone: "+880 1234-567890",
  address: "Dhaka, Bangladesh",
  joinedAt: "2024-01-15",
  avatar: null,
};

export default function ProfilePage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-white">Profile</h1>
        <Link href="/dashboard/profile/edit">
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-white text-sm font-medium flex items-center gap-2 hover:bg-white/10"
          >
            <Edit2 size={16} /> Edit Profile
          </motion.button>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Avatar Section */}
        <div className="p-6 rounded-2xl bg-white/5 border border-white/10 text-center">
          <div className="w-32 h-32 rounded-full bg-linear-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white text-4xl font-bold mx-auto mb-4">
            {user.name.charAt(0)}
          </div>
          <h2 className="text-xl font-bold text-white">{user.name}</h2>
          <p className="text-gray-400 text-sm">Premium Member</p>
        </div>

        {/* Info Section */}
        <div className="md:col-span-2 p-6 rounded-2xl bg-white/5 border border-white/10">
          <h3 className="text-lg font-bold text-white mb-6">
            Personal Information
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { icon: User, label: "Full Name", value: user.name },
              { icon: Mail, label: "Email", value: user.email },
              { icon: Phone, label: "Phone", value: user.phone },
              { icon: MapPin, label: "Address", value: user.address },
              {
                icon: Calendar,
                label: "Member Since",
                value: new Date(user.joinedAt).toLocaleDateString(),
              },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center">
                    <Icon size={18} className="text-purple-400" />
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm">{item.label}</p>
                    <p className="text-white">{item.value}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
