"use client";

import { orders, packages } from "@/data";
import { motion } from "framer-motion";
import { Calendar, Eye, MapPin } from "lucide-react";
import Link from "next/link";

export default function OrdersPage() {
  // Helper to get package name
  const getPackageName = (packageId: string) => {
    const pkg = packages.find((p) => p.id === packageId);
    return pkg?.name || "Unknown Package";
  };

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-white">My Orders</h1>

      <div className="space-y-4">
        {orders.map((order, index) => (
          <motion.div
            key={order.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="p-6 rounded-2xl bg-white/5 border border-white/10"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-lg font-bold text-white">
                    {getPackageName(order.packageId)}
                  </h3>
                  <span
                    className={`text-xs px-3 py-1 rounded-full ${
                      order.status === "completed"
                        ? "bg-green-500/20 text-green-400"
                        : order.status === "confirmed"
                        ? "bg-blue-500/20 text-blue-400"
                        : "bg-yellow-500/20 text-yellow-400"
                    }`}
                  >
                    {order.status}
                  </span>
                </div>
                <div className="flex flex-wrap gap-4 text-gray-400 text-sm">
                  <span className="flex items-center gap-1">
                    <Calendar size={14} />
                    {new Date(order.eventDate).toLocaleDateString()}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin size={14} />
                    {order.location}
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-right">
                  <p className="text-xl font-bold bg-linear-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    {order.totalPrice.toLocaleString()} TK
                  </p>
                  <p className="text-gray-500 text-xs">Order #{order.id}</p>
                </div>
                <Link href={`/dashboard/orders/${order.id}`}>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    className="p-3 rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10"
                  >
                    <Eye size={18} />
                  </motion.button>
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
