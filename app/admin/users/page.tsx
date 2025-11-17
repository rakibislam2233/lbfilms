'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Users,
  Search,
  Mail,
  Phone,
  Calendar,
  Edit,
  Trash2,
  Filter,
  Plus,
  Eye
} from 'lucide-react';

const UsersPage = () => {
  const [users] = useState([
    { id: 1, name: 'John Doe', email: 'john@example.com', phone: '+880 1234-567890', role: 'customer', dateJoined: '2023-01-15', status: 'active' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', phone: '+880 1234-567891', role: 'customer', dateJoined: '2023-02-20', status: 'active' },
    { id: 3, name: 'Michael Brown', email: 'michael@example.com', phone: '+880 1234-567892', role: 'admin', dateJoined: '2023-03-10', status: 'active' },
    { id: 4, name: 'Sarah Johnson', email: 'sarah@example.com', phone: '+880 1234-567893', role: 'customer', dateJoined: '2023-04-05', status: 'inactive' },
  ]);
  
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('all');

  const getStatusColor = (status: string) => {
    switch(status) {
      case 'active': return 'bg-green-100 text-green-800';
      case 'inactive': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const filteredUsers = users.filter(user => {
    const matchesSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          user.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filter === 'all' || user.status === filter || user.role === filter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-secondary-800 flex items-center gap-3">
            <div className="bg-gradient-to-r from-primary-500 to-primary-700 p-3 rounded-lg">
              <Users className="h-7 w-7 text-white" />
            </div>
            User Management
          </h1>
          <p className="text-secondary-600 mt-2">Manage your customers and admin users</p>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="bg-white p-6 rounded-2xl shadow-lg mb-6 border border-primary-100">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-secondary-400" />
            <input
              type="text"
              placeholder="Search users by name or email..."
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
              <option value="all">All Users</option>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
              <option value="customer">Customers</option>
              <option value="admin">Admins</option>
            </select>
          </div>
        </div>
      </div>

      {/* Users Table */}
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-primary-100">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-secondary-50 border-b border-secondary-200">
              <tr>
                <th className="py-4 px-6 text-left text-secondary-600 font-medium">User</th>
                <th className="py-4 px-6 text-left text-secondary-600 font-medium">Email</th>
                <th className="py-4 px-6 text-left text-secondary-600 font-medium">Phone</th>
                <th className="py-4 px-6 text-left text-secondary-600 font-medium">Role</th>
                <th className="py-4 px-6 text-left text-secondary-600 font-medium">Date Joined</th>
                <th className="py-4 px-6 text-left text-secondary-600 font-medium">Status</th>
                <th className="py-4 px-6 text-left text-secondary-600 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.map((user) => (
                <motion.tr 
                  key={user.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="border-b border-secondary-100 hover:bg-primary-50"
                >
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center">
                        <span className="font-bold text-primary-600">{user.name.charAt(0)}</span>
                      </div>
                      <div>
                        <p className="font-medium text-secondary-800">{user.name}</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-2">
                      <Mail className="h-4 w-4 text-secondary-500" />
                      <span className="text-secondary-600">{user.email}</span>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-2">
                      <Phone className="h-4 w-4 text-secondary-500" />
                      <span className="text-secondary-600">{user.phone}</span>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      user.role === 'admin' ? 'bg-purple-100 text-purple-800' : 'bg-blue-100 text-blue-800'
                    }`}>
                      {user.role}
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-secondary-500" />
                      <span className="text-secondary-600">{user.dateJoined}</span>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(user.status)}`}>
                      {user.status.charAt(0).toUpperCase() + user.status.slice(1)}
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-2">
                      <button className="p-2 rounded-lg hover:bg-secondary-100 text-secondary-600 hover:text-primary-600">
                        <Eye className="h-4 w-4" />
                      </button>
                      <button className="p-2 rounded-lg hover:bg-secondary-100 text-secondary-600 hover:text-primary-600">
                        <Edit className="h-4 w-4" />
                      </button>
                      <button className="p-2 rounded-lg hover:bg-secondary-100 text-secondary-600 hover:text-red-600">
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UsersPage;