"use client";

import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { orders as demoOrders } from "@/data";
import { motion } from "framer-motion";
import {
  Download,
  Eye,
  Filter,
  Search,
  ShoppingBag,
  X
} from "lucide-react";
import { useState } from "react";

export default function AdminOrdersPage() {
  const [orderList, setOrderList] = useState(demoOrders);
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("all");
  const [selectedOrder, setSelectedOrder] = useState<
    (typeof demoOrders)[0] | null
  >(null);

  const filteredOrders = orderList.filter((order) => {
    const matchesSearch = order.id
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesFilter = filter === "all" || order.status === filter;
    return matchesSearch && matchesFilter;
  });

  const handleStatusChange = (id: string, status: string) => {
    setOrderList(
      orderList.map((o) =>
        o.id === id ? { ...o, status: status as typeof o.status } : o
      )
    );
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white flex items-center gap-3">
            <ShoppingBag className="text-yellow-400" /> Orders
          </h1>
          <p className="text-gray-400">Manage bookings and orders</p>
        </div>
        <button className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-white flex items-center gap-2 hover:bg-white/10">
          <Download size={18} /> Export
        </button>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 z-10 pointer-events-none"
          />
          <Input
            type="text"
            placeholder="Search orders..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-12 bg-white/5 border-white/10 text-white placeholder-gray-500"
          />
        </div>
        <div className="flex items-center gap-2">
          <Filter size={18} className="text-gray-500" />
          <Select value={filter} onValueChange={setFilter}>
            <SelectTrigger className="w-[180px] bg-white/5 border-white/10 text-white">
              <SelectValue placeholder="All Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all" className="bg-gray-900">All Status</SelectItem>
              <SelectItem value="pending" className="bg-gray-900">Pending</SelectItem>
              <SelectItem value="confirmed" className="bg-gray-900">Confirmed</SelectItem>
              <SelectItem value="completed" className="bg-gray-900">Completed</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="rounded-2xl bg-white/5 border border-white/10 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="border-b border-white/10">
              <tr>
                <th className="py-4 px-6 text-left text-gray-400 font-medium">
                  Order ID
                </th>
                <th className="py-4 px-6 text-left text-gray-400 font-medium">
                  Package
                </th>
                <th className="py-4 px-6 text-left text-gray-400 font-medium">
                  Event Date
                </th>
                <th className="py-4 px-6 text-left text-gray-400 font-medium">
                  Location
                </th>
                <th className="py-4 px-6 text-left text-gray-400 font-medium">
                  Amount
                </th>
                <th className="py-4 px-6 text-left text-gray-400 font-medium">
                  Status
                </th>
                <th className="py-4 px-6 text-left text-gray-400 font-medium">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredOrders.map((order) => (
                <tr
                  key={order.id}
                  className="border-b border-white/5 hover:bg-white/5"
                >
                  <td className="py-4 px-6 text-white font-mono">
                    #{order.id}
                  </td>
                  <td className="py-4 px-6 text-white">{order.packageId}</td>
                  <td className="py-4 px-6 text-gray-400">
                    {new Date(order.eventDate).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
                  </td>
                  <td className="py-4 px-6 text-gray-400">{order.location}</td>
                  <td className="py-4 px-6 text-white font-medium">
                    {order.totalPrice.toLocaleString()} TK
                  </td>
                  <td className="py-4 px-6">
                    <span
                      className={`px-3 py-1 rounded-full text-xs ${
                        order.status === "completed"
                          ? "bg-green-500/20 text-green-400"
                          : order.status === "confirmed"
                          ? "bg-blue-500/20 text-blue-400"
                          : "bg-yellow-500/20 text-yellow-400"
                      }`}
                    >
                      {order.status}
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => setSelectedOrder(order)}
                        className="p-2 rounded-lg bg-white/5 text-gray-400 hover:text-white hover:bg-white/10"
                      >
                        <Eye size={16} />
                      </button>
                      <Select
                        value={order.status}
                        onValueChange={(value) => handleStatusChange(order.id, value)}
                      >
                        <SelectTrigger className="w-[130px] bg-white/5 border-white/10 text-white text-xs h-8">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="pending" className="bg-gray-900 text-xs">Pending</SelectItem>
                          <SelectItem value="confirmed" className="bg-gray-900 text-xs">Confirmed</SelectItem>
                          <SelectItem value="completed" className="bg-gray-900 text-xs">Completed</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {selectedOrder && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-full max-w-lg rounded-2xl bg-gray-900 border border-white/10"
          >
            <div className="flex items-center justify-between p-6 border-b border-white/10">
              <h2 className="text-xl font-bold text-white">
                Order #{selectedOrder.id}
              </h2>
              <button
                onClick={() => setSelectedOrder(null)}
                className="text-gray-400 hover:text-white"
              >
                <X size={24} />
              </button>
            </div>
            <div className="p-6 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-gray-500 text-sm">Package</p>
                  <p className="text-white font-medium">
                    {selectedOrder.packageId}
                  </p>
                </div>
                <div>
                  <p className="text-gray-500 text-sm">Amount</p>
                  <p className="text-white font-medium">
                    {selectedOrder.totalPrice.toLocaleString()} TK
                  </p>
                </div>
                <div>
                  <p className="text-gray-500 text-sm">Event Date</p>
                  <p className="text-white">
                    {new Date(selectedOrder.eventDate).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
                  </p>
                </div>
                <div>
                  <p className="text-gray-500 text-sm">Location</p>
                  <p className="text-white">{selectedOrder.location}</p>
                </div>
              </div>
            </div>
            <div className="flex justify-end p-6 border-t border-white/10">
              <button
                onClick={() => setSelectedOrder(null)}
                className="px-6 py-2 rounded-xl bg-white/5 text-gray-400 hover:text-white"
              >
                Close
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}
