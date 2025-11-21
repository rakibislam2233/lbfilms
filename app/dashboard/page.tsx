'use client';

import { motion } from 'framer-motion';
import { ShoppingBag, Star, Clock, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import { orders, reviews } from '@/data';

const stats = [
  { icon: ShoppingBag, label: 'Total Orders', value: '5', color: 'purple' },
  { icon: CheckCircle, label: 'Completed', value: '3', color: 'green' },
  { icon: Clock, label: 'Pending', value: '2', color: 'yellow' },
  { icon: Star, label: 'Reviews', value: '3', color: 'pink' },
];

export default function DashboardPage() {
  const recentOrders = orders.slice(0, 3);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Welcome back, John!</h1>
        <p className="text-gray-400">Here's what's happening with your bookings</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          const bgColor = stat.color === 'purple' ? 'from-purple-500/20' : stat.color === 'green' ? 'from-green-500/20' : stat.color === 'yellow' ? 'from-yellow-500/20' : 'from-pink-500/20';
          const iconColor = stat.color === 'purple' ? 'text-purple-400' : stat.color === 'green' ? 'text-green-400' : stat.color === 'yellow' ? 'text-yellow-400' : 'text-pink-400';
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`p-6 rounded-2xl bg-gradient-to-br ${bgColor} to-transparent border border-white/10`}
            >
              <Icon size={24} className={iconColor} />
              <p className="text-2xl font-bold text-white mt-3">{stat.value}</p>
              <p className="text-gray-400 text-sm">{stat.label}</p>
            </motion.div>
          );
        })}
      </div>

      {/* Recent Orders */}
      <div className="bg-white/5 rounded-2xl border border-white/10 p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-white">Recent Orders</h2>
          <Link href="/dashboard/orders" className="text-purple-400 hover:text-purple-300 text-sm">View All</Link>
        </div>
        <div className="space-y-4">
          {recentOrders.map((order) => (
            <div key={order.id} className="flex items-center justify-between p-4 rounded-xl bg-white/5">
              <div>
                <p className="text-white font-medium">{order.packageName}</p>
                <p className="text-gray-500 text-sm">{new Date(order.eventDate).toLocaleDateString()}</p>
              </div>
              <div className="text-right">
                <p className="text-white font-medium">{order.totalAmount.toLocaleString()} TK</p>
                <span className={`text-xs px-2 py-1 rounded-full ${order.status === 'completed' ? 'bg-green-500/20 text-green-400' : order.status === 'confirmed' ? 'bg-blue-500/20 text-blue-400' : 'bg-yellow-500/20 text-yellow-400'}`}>
                  {order.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Link href="/booking">
          <motion.div whileHover={{ scale: 1.02 }} className="p-6 rounded-2xl bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 cursor-pointer">
            <h3 className="text-lg font-bold text-white mb-2">Book New Session</h3>
            <p className="text-gray-400 text-sm">Schedule your next photography session with us</p>
          </motion.div>
        </Link>
        <Link href="/dashboard/reviews">
          <motion.div whileHover={{ scale: 1.02 }} className="p-6 rounded-2xl bg-gradient-to-r from-cyan-600/20 to-blue-600/20 border border-cyan-500/30 cursor-pointer">
            <h3 className="text-lg font-bold text-white mb-2">Leave a Review</h3>
            <p className="text-gray-400 text-sm">Share your experience with other clients</p>
          </motion.div>
        </Link>
      </div>
    </div>
  );
}
