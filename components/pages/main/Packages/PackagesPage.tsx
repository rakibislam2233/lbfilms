"use client";

import PackagesSection from "@/components/shared/PackagesSection";
import { motion } from "framer-motion";
import Link from "next/link";

const PackagesPage = () => {
  return (
    <main className="min-h-screen bg-black pt-24 pb-16">
      <PackagesSection
        title="Photography Packages"
        subtitle="Our Packages"
        description="Choose the perfect package for your special moments. From intimate portraits to grand celebrations."
        showViewAllButton={false}
        isHomePage={false}
      />

      {/* Custom Package CTA - This section is unique to the packages page */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="mt-16 text-center"
      >
        <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
          <h3 className="text-2xl font-bold text-white mb-4">
            Need a Custom Package?
          </h3>
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            We understand every event is unique. Contact us to create a
            tailored package that fits your specific needs.
          </p>
          <Link href="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 rounded-full bg-linear-to-r from-purple-600 to-pink-600 text-white font-semibold"
            >
              Contact Us
            </motion.button>
          </Link>
        </div>
      </motion.div>
    </main>
  );
};

export default PackagesPage;
