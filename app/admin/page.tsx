"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Camera,
  Package,
  ShoppingBag,
  Users,
  Star,
  TrendingUp,
  Calendar,
  MessageSquare,
  Settings,
  Plus,
  Edit,
  Trash2,
  Eye,
  CheckCircle,
  XCircle,
  Clock,
  Download,
} from "lucide-react";

const AdminDashboard = () => {
  const [stats] = useState([
    {
      id: 1,
      title: "Total Projects",
      value: 128,
      icon: Camera,
      change: "+12%",
      color: "bg-blue-500",
    },
    {
      id: 2,
      title: "Total Packages",
      value: 6,
      icon: Package,
      change: "+2",
      color: "bg-green-500",
    },
    {
      id: 3,
      title: "Total Orders",
      value: 42,
      icon: ShoppingBag,
      change: "+5",
      color: "bg-purple-500",
    },
    {
      id: 4,
      title: "Total Clients",
      value: 317,
      icon: Users,
      change: "+24",
      color: "bg-yellow-500",
    },
  ]);

  const [recentOrders] = useState([
    {
      id: 1,
      client: "John Doe",
      package: "Standard",
      date: "2023-11-10",
      status: "Confirmed",
      amount: "৳30,000",
    },
    {
      id: 2,
      client: "Jane Smith",
      package: "Premium",
      date: "2023-11-11",
      status: "Pending",
      amount: "৳50,000",
    },
    {
      id: 3,
      client: "Michael Brown",
      package: "Basic",
      date: "2023-11-12",
      status: "Completed",
      amount: "৳15,000",
    },
    {
      id: 4,
      client: "Sarah Johnson",
      package: "Standard",
      date: "2023-11-13",
      status: "Confirmed",
      amount: "৳30,000",
    },
    {
      id: 5,
      client: "Robert Wilson",
      package: "Premium",
      date: "2023-11-14",
      status: "Pending",
      amount: "৳50,000",
    },
  ]);

  const [recentReviews] = useState([
    {
      id: 1,
      client: "Alice Wilson",
      rating: 5,
      comment: "Amazing work! Captured every moment perfectly.",
      date: "2023-11-10",
    },
    {
      id: 2,
      client: "Bob Davis",
      rating: 5,
      comment: "Professional service and high-quality photos.",
      date: "2023-11-09",
    },
    {
      id: 3,
      client: "Carol Miller",
      rating: 4,
      comment: "Great experience overall, very satisfied.",
      date: "2023-11-08",
    },
    {
      id: 4,
      client: "David Taylor",
      rating: 5,
      comment: "The team exceeded our expectations!",
      date: "2023-11-07",
    },
  ]);

  return (
    <div className="p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-secondary-800 flex items-center gap-3">
          <div className="bg-gradient-to-r from-primary-500 to-primary-700 p-3 rounded-lg">
            <Camera className="h-7 w-7 text-white" />
          </div>
          Admin Dashboard
        </h1>
        <p className="text-secondary-600 mt-2">
          Welcome back! Here's what's happening today.
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="bg-white p-6 rounded-2xl shadow-lg border border-primary-100"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-secondary-600 text-sm">{stat.title}</p>
                <p className="text-2xl font-bold text-secondary-800 mt-1">
                  {stat.value}
                </p>
                <p className="text-green-500 text-sm mt-1 font-medium">
                  {stat.change}
                </p>
              </div>
              <div className={`${stat.color} p-3 rounded-lg`}>
                <stat.icon className="h-6 w-6 text-white" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Charts and Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent Orders */}
        <div className="bg-white p-6 rounded-2xl shadow-lg border border-primary-100">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-secondary-800 flex items-center gap-2">
              <ShoppingBag className="h-5 w-5 text-primary-500" />
              Recent Orders
            </h2>
            <button className="text-primary-500 hover:text-primary-700 flex items-center gap-1 text-sm">
              <Download className="h-4 w-4" />
              Export
            </button>
          </div>
          <div className="space-y-4">
            {recentOrders.map((order) => (
              <div
                key={order.id}
                className="flex items-center justify-between border-b border-secondary-100 pb-4 last:border-0 last:pb-0"
              >
                <div className="flex items-center">
                  <div className="bg-primary-100 rounded-full p-2 mr-4">
                    <Users className="h-4 w-4 text-primary-600" />
                  </div>
                  <div>
                    <p className="font-medium text-secondary-800">
                      {order.client}
                    </p>
                    <p className="text-secondary-600 text-sm">
                      {order.package} package
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-secondary-600 text-sm">{order.date}</p>
                  <p className="font-bold text-secondary-800">{order.amount}</p>
                  <span
                    className={`inline-block px-2 py-1 rounded-full text-xs font-medium mt-1 ${
                      order.status === "Confirmed"
                        ? "bg-green-100 text-green-800"
                        : order.status === "Pending"
                        ? "bg-yellow-100 text-yellow-800"
                        : "bg-blue-100 text-blue-800"
                    }`}
                  >
                    {order.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Reviews */}
        <div className="bg-white p-6 rounded-2xl shadow-lg border border-primary-100">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-secondary-800 flex items-center gap-2">
              <Star className="h-5 w-5 text-primary-500" />
              Recent Reviews
            </h2>
          </div>
          <div className="space-y-4">
            {recentReviews.map((review) => (
              <div key={review.id} className="flex items-start">
                <div className="bg-primary-100 rounded-full p-2 mr-4">
                  <Users className="h-4 w-4 text-primary-600" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <p className="font-medium text-secondary-800">
                      {review.client}
                    </p>
                    <span className="text-xs text-secondary-500">
                      {review.date}
                    </span>
                  </div>
                  <div className="flex mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < review.rating
                            ? "text-yellow-400 fill-current"
                            : "text-secondary-300"
                        }`}
                      />
                    ))}
                  </div>
                  <p className="text-secondary-600 text-sm">{review.comment}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
