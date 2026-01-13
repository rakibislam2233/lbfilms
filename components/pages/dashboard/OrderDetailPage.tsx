"use client";

import { getOrderById, packages } from "@/data";
import {
  ArrowLeft,
  CheckCircle,
  Clock,
  Mail,
  Package,
  Phone,
} from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function OrderDetailPage() {
  const { id } = useParams();
  const order = getOrderById(id as string);

  // Helper to get package name
  const getPackageName = (packageId: string) => {
    const pkg = packages.find((p) => p.id === packageId);
    return pkg?.name || "Unknown Package";
  };

  if (!order) {
    return (
      <div className="text-center py-20">
        <p className="text-gray-400">Order not found</p>
        <Link
          href="/dashboard/orders"
          className="text-purple-400 mt-4 inline-block"
        >
          Back to Orders
        </Link>
      </div>
    );
  }

  const steps = [
    { label: "Booking Placed", completed: true },
    { label: "Confirmed", completed: order.status !== "pending" },
    {
      label: "In Progress",
      completed: order.status === "completed" || order.status === "in-progress",
    },
    { label: "Completed", completed: order.status === "completed" },
  ];

  return (
    <div className="space-y-6">
      <Link
        href="/dashboard/orders"
        className="inline-flex items-center gap-2 text-gray-400 hover:text-white"
      >
        <ArrowLeft size={18} /> Back to Orders
      </Link>

      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white">Order #{order.id}</h1>
          <p className="text-gray-400">
            Placed on {new Date(order.date).toLocaleDateString()}
          </p>
        </div>
        <span
          className={`text-sm px-4 py-2 rounded-full ${
            order.status === "completed"
              ? "bg-green-500/20 text-green-400"
              : order.status === "confirmed"
              ? "bg-blue-500/20 text-blue-400"
              : "bg-yellow-500/20 text-yellow-400"
          }`}
        >
          {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
        </span>
      </div>

      {/* Progress */}
      <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
        <div className="flex justify-between">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center flex-1">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  step.completed
                    ? "bg-linear-to-r from-purple-500 to-pink-500"
                    : "bg-white/10"
                }`}
              >
                {step.completed ? (
                  <CheckCircle size={16} className="text-white" />
                ) : (
                  <Clock size={16} className="text-gray-500" />
                )}
              </div>
              <p
                className={`text-xs mt-2 text-center ${
                  step.completed ? "text-white" : "text-gray-500"
                }`}
              >
                {step.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Package Info */}
        <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
          <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
            <Package size={18} className="text-purple-400" /> Package Details
          </h3>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-400">Package</span>
              <span className="text-white">
                {getPackageName(order.packageId)}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Event Date</span>
              <span className="text-white">
                {new Date(order.eventDate).toLocaleDateString()}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Location</span>
              <span className="text-white">{order.location}</span>
            </div>
            <hr className="border-white/10" />
            <div className="flex justify-between">
              <span className="text-gray-400">Total Amount</span>
              <span className="text-xl font-bold bg-linear-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                {order.totalPrice.toLocaleString()} TK
              </span>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
          <h3 className="text-lg font-bold text-white mb-4">Need Help?</h3>
          <p className="text-gray-400 text-sm mb-4">
            Contact us for any questions about your booking
          </p>
          <div className="space-y-3">
            <a
              href="tel:+8801234567890"
              className="flex items-center gap-3 text-gray-400 hover:text-white"
            >
              <Phone size={18} /> +880 1234-567890
            </a>
            <a
              href="mailto:info@lbfilms.com"
              className="flex items-center gap-3 text-gray-400 hover:text-white"
            >
              <Mail size={18} /> info@lbfilms.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
