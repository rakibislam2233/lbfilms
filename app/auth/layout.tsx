'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-black flex">
      {/* Left Side - Branding */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1519741497674-611481863552?w=1200"
            alt="Photography"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
        </div>

        <div className="relative z-10 flex flex-col justify-between p-12 w-full">
          <Link href="/" className="flex items-center gap-3">
            <div className="relative w-12 h-12">
              <Image src="/assets/logo/lb-films.png" alt="LB Films" fill className="object-contain" />
            </div>
            <span className="text-2xl font-bold bg-linear-to-r from-purple-500  to-pink-500 bg-clip-text text-transparent">
              LB Films
            </span>
          </Link>

          <div className="max-w-md">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl font-bold text-white mb-4"
            >
              Capture Your <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Precious Moments</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-gray-400"
            >
              Join thousands of clients who trust us to preserve their most cherished memories through stunning photography and videography.
            </motion.p>
          </div>

          <div className="flex items-center gap-8 text-gray-400 text-sm">
            <span>500+ Happy Clients</span>
            <span>•</span>
            <span>1000+ Projects</span>
            <span>•</span>
            <span>5.0 Rating</span>
          </div>
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          {/* Mobile Logo */}
          <div className="lg:hidden flex justify-center mb-8">
            <Link href="/" className="flex items-center gap-3">
              <div className="relative w-10 h-10">
                <Image src="/assets/logo/lb-films.png" alt="LB Films" fill className="object-contain" />
              </div>
              <span className="text-xl font-bold bg-linear-to-r from-purple-500  to-pink-500 bg-clip-text text-transparent">
                LB Films
              </span>
            </Link>
          </div>

          {children}
        </div>
      </div>
    </div>
  );
}
