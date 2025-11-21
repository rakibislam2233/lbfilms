"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, LogIn } from "lucide-react";
import logo from "@/assets/logo/lb-films.png";
import { ThemeToggle } from "@/components/theme-toggle";
import ActiveLink from "@/components/pages/common/ActiveLink";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Gallery", href: "/gallery" },
  { name: "Packages", href: "/packages" },
  { name: "Videos", href: "/videos" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-black/70 backdrop-blur-xl  border-white/10 shadow-2xl"
          : "bg-linear-to-b from-black/50 to-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative"
            >
              <Image
                src={logo}
                alt="LB Films"
                width={300}
                height={100}
                className="relative rounded-full "
              />
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <ActiveLink key={link.name} name={link.name} href={link.href} />
            ))}
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <ThemeToggle />
            <Link href="/auth/login">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-2 px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors cursor-pointer"
              >
                <LogIn size={18} />
                <span>Login</span>
              </motion.button>
            </Link>
            <Link href="/booking">
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 30px rgba(168, 85, 247, 0.5)",
                }}
                whileTap={{ scale: 0.95 }}
                className="relative px-6 py-2.5 text-sm font-semibold text-white rounded-full overflow-hidden group cursor-pointer"
              >
                <span className="absolute inset-0 bg-linear-to-r from-purple-600 to-pink-600" />
                <span className="absolute inset-0 bg-linear-to-r from-purple-600 to-pink-600 blur-lg opacity-50 group-hover:opacity-75 transition-opacity" />
                <span className="relative">Book Now</span>
              </motion.button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden relative p-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20"
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={24} className="text-white" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={24} className="text-white" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden overflow-hidden"
          >
            <div className="bg-black/90 backdrop-blur-xl border-t border-white/10">
              <div className="px-4 py-6 space-y-2">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <ActiveLink name={link.name} href={link.href} />
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navLinks.length * 0.1 }}
                  className="pt-4 space-y-3"
                >
                  <Link href="/auth/login" onClick={() => setIsOpen(false)}>
                    <button className="w-full flex items-center justify-center space-x-2 px-4 py-3 text-gray-300 border border-white/20 rounded-xl hover:bg-white/5 transition-colors">
                      <LogIn size={18} />
                      <span>Login</span>
                    </button>
                  </Link>
                  <Link href="/booking" onClick={() => setIsOpen(false)}>
                    <button className="w-full px-4 py-3 mt-3 text-white font-semibold rounded-xl bg-linear-to-r from-purple-600 to-pink-600">
                      Book Now
                    </button>
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
