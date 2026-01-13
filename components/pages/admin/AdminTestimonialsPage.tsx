"use client";

import { motion } from "framer-motion";
import {
  Check,
  Edit,
  Eye,
  Filter,
  Mail,
  MessageCircle,
  Plus,
  Search,
  Star,
  Trash2,
  User,
  X,
} from "lucide-react";
import { useState } from "react";

const AdminTestimonialsPage = () => {
  const [testimonials, setTestimonials] = useState([
    {
      id: 1,
      name: "Sarah Johnson",
      email: "sarah@example.com",
      event: "Wedding",
      rating: 5,
      comment:
        "LB Films captured our special day perfectly! The attention to detail and professionalism was exceptional. Our photos are absolutely stunning and will be treasured forever.",
      date: "2023-11-10",
      status: "published",
    },
    {
      id: 2,
      name: "Michael Chen",
      email: "michael@example.com",
      event: "Corporate Event",
      rating: 5,
      comment:
        "We hired LB Films for our company's annual conference. The video quality was outstanding and the editing was creative and engaging. Highly recommend!",
      date: "2023-11-09",
      status: "published",
    },
    {
      id: 3,
      name: "Emma Rodriguez",
      email: "emma@example.com",
      event: "Portrait Session",
      rating: 4,
      comment:
        "The team at LB Films made me feel so comfortable during my portrait session. They have an amazing eye for capturing personality and emotion. I'm thrilled with the results!",
      date: "2023-11-08",
      status: "pending",
    },
    {
      id: 4,
      name: "David Williams",
      email: "david@example.com",
      event: "Birthday Party",
      rating: 5,
      comment:
        "LB Films exceeded our expectations at our daughter's birthday party. The videography was cinematic and the editing captured all the special moments perfectly. Worth every penny!",
      date: "2023-11-07",
      status: "published",
    },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("all");

  const handleStatusChange = (id: number, newStatus: string) => {
    setTestimonials(
      testimonials.map((review) =>
        review.id === id ? { ...review, status: newStatus } : review
      )
    );
  };

  const handleDelete = (id: number) => {
    setTestimonials(testimonials.filter((review) => review.id !== id));
  };

  const filteredTestimonials = testimonials.filter((review) => {
    const matchesSearch =
      review.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      review.event.toLowerCase().includes(searchTerm.toLowerCase()) ||
      review.comment.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filter === "all" || review.status === filter;
    return matchesSearch && matchesFilter;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case "published":
        return "bg-green-100 text-green-800";
      case "pending":
        return "bg-yellow-100 text-yellow-800";
      case "rejected":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-secondary-800 flex items-center gap-3">
            <div className="bg-linear-to-r from-primary-500 to-primary-700 p-3 rounded-lg">
              <MessageCircle className="h-7 w-7 text-white" />
            </div>
            Testimonials Management
          </h1>
          <p className="text-secondary-600 mt-2">
            Manage customer reviews and testimonials
          </p>
        </div>

        <button className="bg-linear-to-r from-primary-500 to-primary-700 text-white px-6 py-3 rounded-lg font-semibold hover:from-primary-600 hover:to-primary-800 transition-all flex items-center gap-2">
          <Plus className="h-5 w-5" />
          Add Testimonial
        </button>
      </div>

      {/* Filters and Search */}
      <div className="bg-white p-6 rounded-2xl shadow-lg mb-6 border border-primary-100">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-secondary-400" />
            <input
              type="text"
              placeholder="Search testimonials..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-secondary-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </div>

          <div className="flex items-center gap-2">
            <Filter className="h-5 w-5 text-secondary-400" />
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="border border-secondary-200 rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            >
              <option value="all">All Status</option>
              <option value="published">Published</option>
              <option value="pending">Pending</option>
              <option value="rejected">Rejected</option>
            </select>
          </div>
        </div>
      </div>

      {/* Testimonials List */}
      <div className="space-y-6">
        {filteredTestimonials.map((testimonial) => (
          <motion.div
            key={testimonial.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-2xl shadow-lg p-6 border border-primary-100"
          >
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center">
                  <User className="h-6 w-6 text-primary-600" />
                </div>
                <div>
                  <h3 className="font-bold text-secondary-800">
                    {testimonial.name}
                  </h3>
                  <p className="text-secondary-600 text-sm">
                    {testimonial.event}
                  </p>
                  <div className="flex items-center gap-1 mt-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < testimonial.rating
                            ? "text-yellow-400 fill-current"
                            : "text-secondary-300"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(
                    testimonial.status
                  )}`}
                >
                  {testimonial.status.charAt(0).toUpperCase() +
                    testimonial.status.slice(1)}
                </span>
                <span className="text-xs text-secondary-500">
                  {testimonial.date}
                </span>
              </div>
            </div>

            <p className="text-secondary-600 mb-6">{testimonial.comment}</p>

            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2 text-sm text-secondary-600">
                <Mail className="h-4 w-4" />
                <span>{testimonial.email}</span>
              </div>

              <div className="flex items-center gap-2">
                {testimonial.status === "pending" && (
                  <>
                    <button
                      onClick={() =>
                        handleStatusChange(testimonial.id, "published")
                      }
                      className="p-2 rounded-lg hover:bg-green-100 text-green-600 hover:text-green-800"
                    >
                      <Check className="h-5 w-5" />
                    </button>
                    <button
                      onClick={() =>
                        handleStatusChange(testimonial.id, "rejected")
                      }
                      className="p-2 rounded-lg hover:bg-red-100 text-red-600 hover:text-red-800"
                    >
                      <X className="h-5 w-5" />
                    </button>
                  </>
                )}
                <button className="p-2 rounded-lg hover:bg-secondary-100 text-secondary-600 hover:text-primary-600">
                  <Eye className="h-5 w-5" />
                </button>
                <button className="p-2 rounded-lg hover:bg-secondary-100 text-secondary-600 hover:text-primary-600">
                  <Edit className="h-5 w-5" />
                </button>
                <button
                  onClick={() => handleDelete(testimonial.id)}
                  className="p-2 rounded-lg hover:bg-secondary-100 text-secondary-600 hover:text-red-600"
                >
                  <Trash2 className="h-5 w-5" />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AdminTestimonialsPage;
