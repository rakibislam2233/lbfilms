'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Users, Search, Filter, Eye, Edit, Trash2, Mail, Calendar } from 'lucide-react';
import { users as demoUsers } from '@/data';

export default function UsersPage() {
  const [userList] = useState(demoUsers);
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('all');

  const filteredUsers = userList.filter((user) => {
    const matchesSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase()) || user.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filter === 'all' || user.role === filter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-white flex items-center gap-3">
          <Users className="text-cyan-400" /> Users
        </h1>
        <p className="text-gray-400">Manage customers and admins</p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
          <input
            type="text"
            placeholder="Search users..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50"
          />
        </div>
        <div className="flex items-center gap-2">
          <Filter size={18} className="text-gray-500" />
          <select value={filter} onChange={(e) => setFilter(e.target.value)} className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none">
            <option value="all" className="bg-gray-900">All Roles</option>
            <option value="user" className="bg-gray-900">Users</option>
            <option value="admin" className="bg-gray-900">Admins</option>
          </select>
        </div>
      </div>

      <div className="rounded-2xl bg-white/5 border border-white/10 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="border-b border-white/10">
              <tr>
                <th className="py-4 px-6 text-left text-gray-400 font-medium">User</th>
                <th className="py-4 px-6 text-left text-gray-400 font-medium">Email</th>
                <th className="py-4 px-6 text-left text-gray-400 font-medium">Role</th>
                <th className="py-4 px-6 text-left text-gray-400 font-medium">Joined</th>
                <th className="py-4 px-6 text-left text-gray-400 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.map((user) => (
                <tr key={user.id} className="border-b border-white/5 hover:bg-white/5">
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold">
                        {user.name.charAt(0)}
                      </div>
                      <span className="text-white font-medium">{user.name}</span>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-gray-400">{user.email}</td>
                  <td className="py-4 px-6">
                    <span className={`px-3 py-1 rounded-full text-xs ${user.role === 'admin' ? 'bg-purple-500/20 text-purple-400' : 'bg-cyan-500/20 text-cyan-400'}`}>
                      {user.role}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-gray-400">{new Date(user.createdAt).toLocaleDateString()}</td>
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-2">
                      <button className="p-2 rounded-lg bg-white/5 text-gray-400 hover:text-white hover:bg-white/10"><Eye size={16} /></button>
                      <button className="p-2 rounded-lg bg-white/5 text-gray-400 hover:text-white hover:bg-white/10"><Edit size={16} /></button>
                      <button className="p-2 rounded-lg bg-red-500/10 text-red-400 hover:bg-red-500/20"><Trash2 size={16} /></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
