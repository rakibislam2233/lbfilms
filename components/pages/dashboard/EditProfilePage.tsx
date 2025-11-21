'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Mail, Phone, MapPin, ArrowLeft, Camera } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function EditProfilePage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      router.push('/dashboard/profile');
    }, 1500);
  };

  return (
    <div className="space-y-6">
      <Link href="/dashboard/profile" className="inline-flex items-center gap-2 text-gray-400 hover:text-white">
        <ArrowLeft size={18} /> Back to Profile
      </Link>

      <h1 className="text-3xl font-bold text-white">Edit Profile</h1>

      <form onSubmit={handleSubmit} className="max-w-2xl space-y-6">
        {/* Avatar */}
        <div className="flex items-center gap-6">
          <div className="relative">
            <div className="w-24 h-24 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white text-3xl font-bold">
              J
            </div>
            <button type="button" className="absolute bottom-0 right-0 w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center text-white">
              <Camera size={14} />
            </button>
          </div>
          <div>
            <p className="text-white font-medium">Profile Photo</p>
            <p className="text-gray-500 text-sm">JPG or PNG. Max 2MB</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="name">Full Name</Label>
            <div className="relative">
              <User size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 z-10" />
              <Input
                id="name"
                type="text"
                defaultValue="John Doe"
                className="pl-12 bg-white/5 border-white/10 text-white"
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <div className="relative">
              <Mail size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 z-10" />
              <Input
                id="email"
                type="email"
                defaultValue="john@example.com"
                className="pl-12 bg-white/5 border-white/10 text-white"
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Phone</Label>
            <div className="relative">
              <Phone size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 z-10" />
              <Input
                id="phone"
                type="tel"
                defaultValue="+880 1234-567890"
                className="pl-12 bg-white/5 border-white/10 text-white"
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="address">Address</Label>
            <div className="relative">
              <MapPin size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 z-10" />
              <Input
                id="address"
                type="text"
                defaultValue="Dhaka, Bangladesh"
                className="pl-12 bg-white/5 border-white/10 text-white"
              />
            </div>
          </div>
        </div>

        <div className="flex gap-3">
          <motion.button
            type="submit"
            disabled={loading}
            whileHover={{ scale: 1.02 }}
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium disabled:opacity-50"
          >
            {loading ? 'Saving...' : 'Save Changes'}
          </motion.button>
          <Link href="/dashboard/profile">
            <button type="button" className="px-6 py-3 rounded-xl bg-white/5 text-gray-400 hover:text-white">
              Cancel
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
}
