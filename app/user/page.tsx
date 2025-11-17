"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Camera,
  Package,
  ShoppingBag,
  User,
  Star,
  Calendar,
  MessageCircle,
  Settings,
  Plus,
  Edit,
  Trash2,
  Eye,
  TrendingUp,
  Award,
  Heart,
} from "lucide-react";
import UserNavbar from "@/components/UserNavbar";

const UserDashboard = () => {
  const [activeTab, setActiveTab] = useState("profile");

  // Mock user data
  const user = {
    name: "John Doe",
    email: "john@example.com",
    phone: "+880 1234-567890",
    joinDate: "2023-01-15",
    orders: 3,
    reviews: 2,
    favorites: 5,
  };

  // Mock data
  const recentOrders = [
    {
      id: 1,
      service: "Wedding Photography",
      package: "Standard",
      date: "2023-11-10",
      status: "completed",
      amount: "৳30,000",
    },
    {
      id: 2,
      service: "Corporate Event",
      package: "Premium",
      date: "2023-10-15",
      status: "completed",
      amount: "৳50,000",
    },
    {
      id: 3,
      service: "Portrait Session",
      package: "Basic",
      date: "2023-09-05",
      status: "completed",
      amount: "৳15,000",
    },
  ];

  const favoriteProjects = [
    {
      id: 1,
      title: "Wedding Ceremony",
      category: "wedding",
      date: "2023-05-15",
    },
    {
      id: 2,
      title: "Corporate Event",
      category: "corporate",
      date: "2023-07-10",
    },
    {
      id: 3,
      title: "Engagement Shoot",
      category: "portrait",
      date: "2023-08-05",
    },
  ];

  const userReviews = [
    {
      id: 1,
      service: "Wedding Photography",
      rating: 5,
      comment: "Outstanding work! Captured every special moment.",
      date: "2023-11-12",
    },
    {
      id: 2,
      service: "Corporate Event",
      rating: 5,
      comment: "Professional and timely service.",
      date: "2023-10-18",
    },
  ];

  const tabs = [
    { id: "profile", name: "Profile", icon: User },
    { id: "my-orders", name: "My Orders", icon: ShoppingBag },
    { id: "my-gallery", name: "My Gallery", icon: Camera },
    { id: "reviews", name: "My Reviews", icon: Star },
    { id: "favorites", name: "Favorites", icon: Heart },
    { id: "settings", name: "Settings", icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-secondary-50">
      {/* User Dashboard Header */}
      <div className="bg-gradient-to-r from-primary-500 to-primary-700 text-white pt-16">
        <div className="container mx-auto px-4 md:px-8 py-10 md:py-16">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
            <div className="w-24 h-24 rounded-full bg-white/20 flex items-center justify-center">
              <User className="h-12 w-12 text-white" />
            </div>
            <div className="text-center md:text-left">
              <h1 className="text-3xl font-bold">Welcome Back, {user.name}!</h1>
              <p className="text-primary-100 mt-2">
                Your photography & videography dashboard
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="container mx-auto px-4 md:px-8 pt-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <motion.div
            className="bg-white p-6 rounded-2xl shadow-lg"
            whileHover={{ y: -5 }}
          >
            <div className="flex items-center">
              <div className="bg-primary-100 p-3 rounded-lg mr-4">
                <ShoppingBag className="h-6 w-6 text-primary-600" />
              </div>
              <div>
                <p className="text-secondary-600">Orders</p>
                <p className="text-2xl font-bold text-secondary-800">
                  {user.orders}
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="bg-white p-6 rounded-2xl shadow-lg"
            whileHover={{ y: -5 }}
          >
            <div className="flex items-center">
              <div className="bg-primary-100 p-3 rounded-lg mr-4">
                <Star className="h-6 w-6 text-primary-600" />
              </div>
              <div>
                <p className="text-secondary-600">Reviews</p>
                <p className="text-2xl font-bold text-secondary-800">
                  {user.reviews}
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="bg-white p-6 rounded-2xl shadow-lg"
            whileHover={{ y: -5 }}
          >
            <div className="flex items-center">
              <div className="bg-primary-100 p-3 rounded-lg mr-4">
                <Heart className="h-6 w-6 text-primary-600" />
              </div>
              <div>
                <p className="text-secondary-600">Favorites</p>
                <p className="text-2xl font-bold text-secondary-800">
                  {user.favorites}
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="bg-white p-6 rounded-2xl shadow-lg"
            whileHover={{ y: -5 }}
          >
            <div className="flex items-center">
              <div className="bg-primary-100 p-3 rounded-lg mr-4">
                <Calendar className="h-6 w-6 text-primary-600" />
              </div>
              <div>
                <p className="text-secondary-600">Member Since</p>
                <p className="text-2xl font-bold text-secondary-800">
                  {user.joinDate.split("-")[0]}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Dashboard Content */}
      <div className="container mx-auto px-4 md:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:w-1/4">
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="space-y-2">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center space-x-3 p-3 rounded-lg transition-colors ${
                      activeTab === tab.id
                        ? "bg-primary-50 text-primary-600 font-medium"
                        : "text-secondary-700 hover:bg-secondary-50"
                    }`}
                  >
                    <tab.icon className="h-5 w-5" />
                    <span>{tab.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:w-3/4">
            <div className="bg-white rounded-2xl shadow-lg p-6">
              {/* Profile Tab */}
              {activeTab === "profile" && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-6"
                >
                  <h2 className="text-2xl font-bold text-secondary-800 mb-6">
                    My Profile
                  </h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-secondary-700 font-medium mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        defaultValue={user.name}
                        className="w-full px-4 py-2 border border-secondary-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label className="block text-secondary-700 font-medium mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        defaultValue={user.email}
                        className="w-full px-4 py-2 border border-secondary-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label className="block text-secondary-700 font-medium mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        defaultValue={user.phone}
                        className="w-full px-4 py-2 border border-secondary-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label className="block text-secondary-700 font-medium mb-2">
                        Member Since
                      </label>
                      <input
                        type="text"
                        defaultValue={user.joinDate}
                        disabled
                        className="w-full px-4 py-2 border border-secondary-200 rounded-lg bg-secondary-50"
                      />
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <button className="btn-primary">Update Profile</button>
                  </div>
                </motion.div>
              )}

              {/* Orders Tab */}
              {activeTab === "my-orders" && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-6"
                >
                  <h2 className="text-2xl font-bold text-secondary-800 mb-6">
                    My Orders
                  </h2>

                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-secondary-50">
                        <tr>
                          <th className="py-3 px-4 text-left">Service</th>
                          <th className="py-3 px-4 text-left">Package</th>
                          <th className="py-3 px-4 text-left">Date</th>
                          <th className="py-3 px-4 text-left">Amount</th>
                          <th className="py-3 px-4 text-left">Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        {recentOrders.map((order) => (
                          <tr
                            key={order.id}
                            className="border-b border-secondary-100"
                          >
                            <td className="py-4 px-4 font-medium">
                              {order.service}
                            </td>
                            <td className="py-4 px-4">{order.package}</td>
                            <td className="py-4 px-4">{order.date}</td>
                            <td className="py-4 px-4 font-bold">
                              {order.amount}
                            </td>
                            <td className="py-4 px-4">
                              <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">
                                {order.status}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </motion.div>
              )}

              {/* Gallery Tab */}
              {activeTab === "my-gallery" && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-6"
                >
                  <h2 className="text-2xl font-bold text-secondary-800 mb-6">
                    My Gallery
                  </h2>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {favoriteProjects.map((project) => (
                      <div
                        key={project.id}
                        className="group relative overflow-hidden rounded-xl shadow-lg"
                      >
                        <div className="aspect-square bg-gradient-to-br from-primary-200 to-secondary-200 flex items-center justify-center">
                          <Camera className="h-12 w-12 text-primary-500" />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                          <h3 className="text-white font-bold">
                            {project.title}
                          </h3>
                          <div className="flex justify-between text-secondary-200 text-sm">
                            <span>{project.category}</span>
                            <span>{project.date}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Reviews Tab */}
              {activeTab === "reviews" && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-6"
                >
                  <h2 className="text-2xl font-bold text-secondary-800 mb-6">
                    My Reviews
                  </h2>

                  <div className="space-y-6">
                    {userReviews.map((review) => (
                      <div
                        key={review.id}
                        className="border border-secondary-200 rounded-xl p-6"
                      >
                        <div className="flex justify-between items-start mb-3">
                          <h3 className="font-bold text-secondary-800">
                            {review.service}
                          </h3>
                          <span className="text-sm text-secondary-500">
                            {review.date}
                          </span>
                        </div>

                        <div className="flex mb-3">
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

                        <p className="text-secondary-600">{review.comment}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Favorites Tab */}
              {activeTab === "favorites" && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-6"
                >
                  <h2 className="text-2xl font-bold text-secondary-800 mb-6">
                    My Favorites
                  </h2>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {favoriteProjects.map((project) => (
                      <div
                        key={project.id}
                        className="group relative overflow-hidden rounded-xl shadow-lg"
                      >
                        <div className="aspect-square bg-gradient-to-br from-primary-200 to-secondary-200 flex items-center justify-center">
                          <Heart className="h-12 w-12 text-primary-500" />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                          <h3 className="text-white font-bold">
                            {project.title}
                          </h3>
                          <div className="flex justify-between text-secondary-200 text-sm">
                            <span>{project.category}</span>
                            <span>{project.date}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Settings Tab */}
              {activeTab === "settings" && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-6"
                >
                  <h2 className="text-2xl font-bold text-secondary-800 mb-6">
                    Settings
                  </h2>

                  <div className="space-y-6">
                    <div className="p-6 border border-secondary-200 rounded-xl">
                      <h3 className="font-bold text-secondary-800 mb-4">
                        Account Preferences
                      </h3>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium">Email Notifications</p>
                            <p className="text-sm text-secondary-600">
                              Receive updates about your orders
                            </p>
                          </div>
                          <label className="relative inline-flex items-center cursor-pointer">
                            <input
                              type="checkbox"
                              className="sr-only peer"
                              defaultChecked
                            />
                            <div className="w-11 h-6 bg-secondary-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
                          </label>
                        </div>

                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium">SMS Notifications</p>
                            <p className="text-sm text-secondary-600">
                              Receive SMS about your bookings
                            </p>
                          </div>
                          <label className="relative inline-flex items-center cursor-pointer">
                            <input
                              type="checkbox"
                              className="sr-only peer"
                              defaultChecked
                            />
                            <div className="w-11 h-6 bg-secondary-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
                          </label>
                        </div>
                      </div>
                    </div>

                    <div className="p-6 border border-secondary-200 rounded-xl">
                      <h3 className="font-bold text-secondary-800 mb-4">
                        Security
                      </h3>
                      <div className="space-y-4">
                        <button className="w-full text-left py-2 text-secondary-700 hover:text-primary-600">
                          Change Password
                        </button>
                        <button className="w-full text-left py-2 text-secondary-700 hover:text-primary-600">
                          Two-Factor Authentication
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
