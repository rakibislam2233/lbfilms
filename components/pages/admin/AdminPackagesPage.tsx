"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Package, Plus, Edit, Trash2, Search, X, Check } from "lucide-react";
import { packages as demoPackages } from "@/data";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export default function AdminPackagesPage() {
  const [packageList, setPackageList] = useState(demoPackages);
  const [showModal, setShowModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPackages = packageList.filter((pkg) =>
    pkg.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white flex items-center gap-3">
            <Package className="text-green-400" /> Packages
          </h1>
          <p className="text-gray-400">Manage photography packages</p>
        </div>
        <motion.button
          onClick={() => setShowModal(true)}
          whileHover={{ scale: 1.02 }}
          className="px-4 py-2 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium flex items-center gap-2"
        >
          <Plus size={18} /> Add Package
        </motion.button>
      </div>

      <div className="relative max-w-md">
        <Search
          size={18}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
        />
        <Input
          type="text"
          placeholder="Search packages..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-12 bg-white/5 border-white/10 text-white placeholder-gray-500"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPackages.map((pkg, index) => (
          <motion.div
            key={pkg.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            className="rounded-2xl bg-white/5 border border-white/10 overflow-hidden"
          >
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-white">{pkg.name}</h3>
                  <p className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mt-1">
                    {pkg.price.toLocaleString()} TK
                  </p>
                </div>
                {pkg.popular && (
                  <span className="px-3 py-1 rounded-full text-xs bg-purple-500/20 text-purple-400">
                    Popular
                  </span>
                )}
              </div>
              <p className="text-gray-400 text-sm mb-4">{pkg.description}</p>
              <div className="space-y-2 mb-6">
                {pkg.features.slice(0, 4).map((feature, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 text-sm text-gray-300"
                  >
                    <Check size={14} className="text-green-400" />
                    {feature}
                  </div>
                ))}
                {pkg.features.length > 4 && (
                  <p className="text-gray-500 text-sm">
                    +{pkg.features.length - 4} more features
                  </p>
                )}
              </div>
              <div className="flex gap-2">
                <button className="flex-1 px-3 py-2 rounded-lg bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 flex items-center justify-center gap-1 text-sm">
                  <Edit size={14} /> Edit
                </button>
                <button className="flex-1 px-3 py-2 rounded-lg bg-red-500/10 text-red-400 hover:bg-red-500/20 flex items-center justify-center gap-1 text-sm">
                  <Trash2 size={14} /> Delete
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-full max-w-2xl rounded-2xl bg-gray-900 border border-white/10"
          >
            <div className="flex items-center justify-between p-6 border-b border-white/10">
              <h2 className="text-xl font-bold text-white">Add New Package</h2>
              <button
                onClick={() => setShowModal(false)}
                className="text-gray-400 hover:text-white"
              >
                <X size={24} />
              </button>
            </div>
            <div className="p-6 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="pkg-name">Name</Label>
                  <Input
                    id="pkg-name"
                    placeholder="Package name"
                    className="bg-white/5 border-white/10 text-white"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="pkg-price">Price (TK)</Label>
                  <Input
                    id="pkg-price"
                    type="number"
                    placeholder="50000"
                    className="bg-white/5 border-white/10 text-white"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="pkg-desc">Description</Label>
                <Textarea
                  id="pkg-desc"
                  rows={3}
                  placeholder="Package description"
                  className="bg-white/5 border-white/10 text-white resize-none"
                />
              </div>
            </div>
            <div className="flex justify-end gap-3 p-6 border-t border-white/10">
              <button
                onClick={() => setShowModal(false)}
                className="px-6 py-2 rounded-xl bg-white/5 text-gray-400 hover:text-white"
              >
                Cancel
              </button>
              <button className="px-6 py-2 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium">
                Add Package
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}
