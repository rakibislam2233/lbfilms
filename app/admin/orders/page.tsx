'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ShoppingBag,
  Search,
  Calendar,
  Phone,
  Mail,
  MapPin,
  Package as PackageIcon,
  User,
  MessageCircle,
  Download,
  Eye,
  Edit,
  Trash2,
  CheckCircle,
  XCircle,
  Clock,
  Filter,
  X
} from 'lucide-react';

const OrdersPage = () => {
  const [orders, setOrders] = useState([
    { id: 1, name: 'John Doe', phone: '+880 1234-567890', email: 'john@example.com', package: 'Standard', eventType: 'Wedding', date: '2023-12-15', location: 'Dhaka', message: 'Looking forward to our wedding day', status: 'confirmed', amount: '৳30,000', dateCreated: '2023-11-10' },
    { id: 2, name: 'Jane Smith', phone: '+880 1234-567891', email: 'jane@example.com', package: 'Premium', eventType: 'Corporate', date: '2023-12-20', location: 'Chittagong', message: 'Need corporate event coverage', status: 'pending', amount: '৳50,000', dateCreated: '2023-11-11' },
    { id: 3, name: 'Michael Brown', phone: '+880 1234-567892', email: 'michael@example.com', package: 'Basic', eventType: 'Portrait', date: '2023-11-25', location: 'Sylhet', message: 'Portrait session for family', status: 'completed', amount: '৳15,000', dateCreated: '2023-11-08' },
    { id: 4, name: 'Sarah Johnson', phone: '+880 1234-567893', email: 'sarah@example.com', package: 'Standard', eventType: 'Birthday', date: '2023-12-05', location: 'Dhaka', message: 'Birthday party photography', status: 'confirmed', amount: '৳30,000', dateCreated: '2023-11-12' },
  ]);
  
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('all');
  const [selectedOrder, setSelectedOrder] = useState(null);

  const handleStatusChange = (id: number, newStatus: string) => {
    setOrders(orders.map(order => 
      order.id === id ? { ...order, status: newStatus } : order
    ));
  };

  const filteredOrders = orders.filter(order => {
    const matchesSearch = order.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          order.phone.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filter === 'all' || order.status === filter;
    return matchesSearch && matchesFilter;
  });

  const getStatusColor = (status: string) => {
    switch(status) {
      case 'confirmed': return 'bg-green-100 text-green-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'completed': return 'bg-blue-100 text-blue-800';
      case 'cancelled': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-secondary-800 flex items-center gap-3">
            <div className="bg-gradient-to-r from-primary-500 to-primary-700 p-3 rounded-lg">
              <ShoppingBag className="h-7 w-7 text-white" />
            </div>
            Orders Management
          </h1>
          <p className="text-secondary-600 mt-2">Manage your bookings and orders</p>
        </div>
        
        <button className="bg-gradient-to-r from-primary-500 to-primary-700 text-white px-6 py-3 rounded-lg font-semibold hover:from-primary-600 hover:to-primary-800 transition-all flex items-center gap-2">
          <Download className="h-5 w-5" />
          Export Orders
        </button>
      </div>

      {/* Filters and Search */}
      <div className="bg-white p-6 rounded-2xl shadow-lg mb-6 border border-primary-100">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-secondary-400" />
            <input
              type="text"
              placeholder="Search orders by name or phone..."
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
              <option value="pending">Pending</option>
              <option value="confirmed">Confirmed</option>
              <option value="completed">Completed</option>
              <option value="cancelled">Cancelled</option>
            </select>
          </div>
        </div>
      </div>

      {/* Orders Table */}
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-primary-100">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-secondary-50 border-b border-secondary-200">
              <tr>
                <th className="py-4 px-6 text-left text-secondary-600 font-medium">Customer</th>
                <th className="py-4 px-6 text-left text-secondary-600 font-medium">Package</th>
                <th className="py-4 px-6 text-left text-secondary-600 font-medium">Event</th>
                <th className="py-4 px-6 text-left text-secondary-600 font-medium">Date</th>
                <th className="py-4 px-6 text-left text-secondary-600 font-medium">Amount</th>
                <th className="py-4 px-6 text-left text-secondary-600 font-medium">Status</th>
                <th className="py-4 px-6 text-left text-secondary-600 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredOrders.map((order) => (
                <motion.tr 
                  key={order.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="border-b border-secondary-100 hover:bg-primary-50"
                >
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center">
                        <User className="h-5 w-5 text-primary-600" />
                      </div>
                      <div>
                        <p className="font-medium text-secondary-800">{order.name}</p>
                        <p className="text-sm text-secondary-600">{order.phone}</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <div className="font-medium text-secondary-800">{order.package}</div>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-secondary-500" />
                      <span className="text-secondary-600 capitalize">{order.eventType}</span>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-secondary-500" />
                      <span className="text-secondary-600">{order.date}</span>
                    </div>
                  </td>
                  <td className="py-4 px-6 font-bold text-secondary-800">{order.amount}</td>
                  <td className="py-4 px-6">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(order.status)}`}>
                      {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-2">
                      <button 
                        onClick={() => setSelectedOrder(order)}
                        className="p-2 rounded-lg hover:bg-secondary-100 text-secondary-600 hover:text-primary-600"
                      >
                        <Eye className="h-4 w-4" />
                      </button>
                      <select
                        value={order.status}
                        onChange={(e) => handleStatusChange(order.id, e.target.value)}
                        className="border border-secondary-200 rounded-lg px-2 py-1 text-xs"
                      >
                        <option value="pending">Pending</option>
                        <option value="confirmed">Confirmed</option>
                        <option value="completed">Completed</option>
                        <option value="cancelled">Cancelled</option>
                      </select>
                    </div>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Order Details Modal */}
      {selectedOrder && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto"
          >
            <div className="p-6 border-b border-secondary-200 flex justify-between items-center">
              <h2 className="text-xl font-bold text-secondary-800">Order Details</h2>
              <button 
                onClick={() => setSelectedOrder(null)}
                className="text-secondary-500 hover:text-secondary-700"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="flex items-start gap-3">
                  <User className="h-5 w-5 text-primary-500 mt-1" />
                  <div>
                    <p className="text-secondary-600 text-sm">Customer Name</p>
                    <p className="font-medium text-secondary-800">{selectedOrder.name}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-primary-500 mt-1" />
                  <div>
                    <p className="text-secondary-600 text-sm">Phone</p>
                    <p className="font-medium text-secondary-800">{selectedOrder.phone}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-primary-500 mt-1" />
                  <div>
                    <p className="text-secondary-600 text-sm">Email</p>
                    <p className="font-medium text-secondary-800">{selectedOrder.email}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <PackageIcon className="h-5 w-5 text-primary-500 mt-1" />
                  <div>
                    <p className="text-secondary-600 text-sm">Package</p>
                    <p className="font-medium text-secondary-800">{selectedOrder.package}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Calendar className="h-5 w-5 text-primary-500 mt-1" />
                  <div>
                    <p className="text-secondary-600 text-sm">Event Date</p>
                    <p className="font-medium text-secondary-800">{selectedOrder.date}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-primary-500 mt-1" />
                  <div>
                    <p className="text-secondary-600 text-sm">Location</p>
                    <p className="font-medium text-secondary-800">{selectedOrder.location}</p>
                  </div>
                </div>
              </div>
              
              <div className="mb-6">
                <p className="text-secondary-600 text-sm mb-2">Event Type</p>
                <p className="font-medium text-secondary-800 capitalize">{selectedOrder.eventType}</p>
              </div>
              
              <div className="mb-6">
                <p className="text-secondary-600 text-sm mb-2">Additional Message</p>
                <p className="font-medium text-secondary-800">{selectedOrder.message}</p>
              </div>
              
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-secondary-600 text-sm">Amount</p>
                  <p className="text-2xl font-bold text-primary-600">{selectedOrder.amount}</p>
                </div>
                <div>
                  <p className="text-secondary-600 text-sm">Status</p>
                  <p className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(selectedOrder.status)}`}>
                    {selectedOrder.status.charAt(0).toUpperCase() + selectedOrder.status.slice(1)}
                  </p>
                </div>
              </div>
            </div>
            
            <div className="p-6 border-t border-secondary-200 flex justify-end gap-3">
              <button 
                onClick={() => setSelectedOrder(null)}
                className="px-6 py-2 border border-secondary-300 rounded-lg text-secondary-700 hover:bg-secondary-50 transition-colors"
              >
                Close
              </button>
              <button className="bg-gradient-to-r from-primary-500 to-primary-700 text-white px-6 py-2 rounded-lg font-semibold hover:from-primary-600 hover:to-primary-800 transition-all">
                Contact Customer
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default OrdersPage;