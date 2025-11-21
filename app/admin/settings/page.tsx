'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Settings, Phone, Globe, Mail, User, Save } from 'lucide-react';

const tabs = [
  { id: 'general', name: 'General', icon: Settings },
  { id: 'contact', name: 'Contact', icon: Phone },
  { id: 'social', name: 'Social', icon: Globe },
  { id: 'profile', name: 'Profile', icon: User },
];

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState('general');

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-white flex items-center gap-3">
          <Settings className="text-gray-400" /> Settings
        </h1>
        <p className="text-gray-400">Manage site settings and preferences</p>
      </div>

      <div className="flex gap-2 border-b border-white/10 pb-4">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-xl flex items-center gap-2 text-sm font-medium transition-all ${
                activeTab === tab.id
                  ? 'bg-purple-600/20 text-purple-400 border border-purple-500/30'
                  : 'text-gray-400 hover:bg-white/5 hover:text-white'
              }`}
            >
              <Icon size={16} /> {tab.name}
            </button>
          );
        })}
      </div>

      <div className="max-w-2xl">
        {activeTab === 'general' && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
            <div>
              <label className="block text-sm text-gray-400 mb-2">Site Title</label>
              <input type="text" defaultValue="LB Films" className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-purple-500/50" />
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-2">Site Description</label>
              <textarea rows={3} defaultValue="Professional Photography & Videography Services" className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-purple-500/50 resize-none" />
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-2">Site URL</label>
              <input type="text" defaultValue="https://lbfilms.com" className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-purple-500/50" />
            </div>
          </motion.div>
        )}

        {activeTab === 'contact' && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
            <div>
              <label className="block text-sm text-gray-400 mb-2">Phone Number</label>
              <input type="tel" defaultValue="+880 1234-567890" className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-purple-500/50" />
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-2">Email Address</label>
              <input type="email" defaultValue="info@lbfilms.com" className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-purple-500/50" />
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-2">Address</label>
              <input type="text" defaultValue="Dhaka, Bangladesh" className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-purple-500/50" />
            </div>
          </motion.div>
        )}

        {activeTab === 'social' && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
            <div>
              <label className="block text-sm text-gray-400 mb-2">Facebook URL</label>
              <input type="url" defaultValue="https://facebook.com/lbfilms" className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-purple-500/50" />
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-2">Instagram URL</label>
              <input type="url" defaultValue="https://instagram.com/lbfilms" className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-purple-500/50" />
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-2">YouTube URL</label>
              <input type="url" defaultValue="https://youtube.com/lbfilms" className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-purple-500/50" />
            </div>
          </motion.div>
        )}

        {activeTab === 'profile' && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-20 h-20 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white text-2xl font-bold">A</div>
              <button className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-white hover:bg-white/10">Change Avatar</button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-gray-400 mb-2">First Name</label>
                <input type="text" defaultValue="Admin" className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-purple-500/50" />
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-2">Last Name</label>
                <input type="text" defaultValue="User" className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-purple-500/50" />
              </div>
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-2">Email</label>
              <input type="email" defaultValue="admin@lbfilms.com" className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-purple-500/50" />
            </div>
          </motion.div>
        )}

        <div className="mt-8 pt-6 border-t border-white/10">
          <motion.button whileHover={{ scale: 1.02 }} className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium flex items-center gap-2">
            <Save size={18} /> Save Settings
          </motion.button>
        </div>
      </div>
    </div>
  );
}
