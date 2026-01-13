"use client";

import { motion } from "framer-motion";
import { Bell, Menu, User, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const UserNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Gallery", href: "#gallery" },
    { name: "Packages", href: "#packages" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white bg-opacity-90 backdrop-blur-xl py-3 shadow-md"
          : "bg-transparent py-5"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <div className="bg-linear-to-r from-primary-500 to-primary-700 p-2 rounded-full">
            <User className="h-6 w-6 text-white" />
          </div>
          <span className="text-2xl font-bold text-secondary-800">
            LB <span className="text-primary-500">Films</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-secondary-700 hover:text-primary-700 font-medium transition-colors"
            >
              {link.name}
            </Link>
          ))}

          {/* User Profile */}
          <div className="flex items-center space-x-4">
            <button className="text-secondary-700 hover:text-primary-700">
              <Bell className="h-6 w-6" />
            </button>
            <div className="relative group">
              <button className="w-10 h-10 rounded-full bg-primary-100 border-2 border-primary-300 flex items-center justify-center">
                <User className="h-5 w-5 text-primary-600" />
              </button>
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <Link
                  href="/user/profile"
                  className="block px-4 py-2 text-sm text-secondary-700 hover:bg-primary-50"
                >
                  My Profile
                </Link>
                <Link
                  href="/user/orders"
                  className="block px-4 py-2 text-sm text-secondary-700 hover:bg-primary-50"
                >
                  My Orders
                </Link>
                <Link
                  href="/user/reviews"
                  className="block px-4 py-2 text-sm text-secondary-700 hover:bg-primary-50"
                >
                  My Reviews
                </Link>
                <button className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50">
                  Logout
                </button>
              </div>
            </div>
          </div>

          {/* WhatsApp Button */}
          <Link
            href="https://wa.me/8801234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp bg-whatsapp text-white px-4 py-2 rounded-full font-semibold hover:bg-opacity-90 transition-all flex items-center gap-2 text-sm"
          >
            <span>WhatsApp</span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-4">
          <Link
            href="https://wa.me/8801234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp bg-whatsapp text-white px-3 py-1 rounded-full text-xs"
          >
            <span>WhatsApp</span>
          </Link>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-secondary-700 focus:outline-none"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          className="md:hidden bg-white bg-opacity-95 backdrop-blur-lg py-4 px-4 absolute top-full left-0 right-0 shadow-lg"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
        >
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-secondary-700 hover:text-primary-700 font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}

            <div className="pt-4 border-t border-secondary-200">
              <Link
                href="/user/profile"
                className="block py-2 text-secondary-700"
              >
                My Profile
              </Link>
              <Link
                href="/user/orders"
                className="block py-2 text-secondary-700"
              >
                My Orders
              </Link>
              <Link
                href="/user/reviews"
                className="block py-2 text-secondary-700"
              >
                My Reviews
              </Link>
              <button className="w-full text-left py-2 text-red-600">
                Logout
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default UserNavbar;
