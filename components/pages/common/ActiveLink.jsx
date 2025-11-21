"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
const ActiveLink = ({ name, href }) => {
  const pathName = usePathname();
  const activeLink = pathName === href ? href : "";
  return (
    <Link key={name} href={href}>
      <motion.span
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-full cursor-pointer ${
          activeLink ? "text-white" : "text-gray-300 hover:text-white"
        }`}
      >
        {activeLink && (
          <motion.span
            layoutId="navbar-active"
            className="absolute inset-0 bg-linear-to-r from-purple-500/30 to-pink-500/30 rounded-full border border-white/20"
            transition={{
              type: "spring",
              bounce: 0.2,
              duration: 0.6,
            }}
          />
        )}
        <span className="relative z-10">{name}</span>
      </motion.span>
    </Link>
  );
};

export default ActiveLink;
