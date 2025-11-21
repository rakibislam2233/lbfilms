'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Settings, Phone, Globe, User, Save } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

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
            <div className="space-y-2">
              <Label htmlFor="site-title">Site Title</Label>
              <Input id="site-title" defaultValue="LB Films" className="bg-white/5 border-white/10 text-white" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="site-desc">Site Description</Label>
              <Textarea id="site-desc" rows={3} defaultValue="Professional Photography & Videography Services" className="bg-white/5 border-white/10 text-white resize-none" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="site-url">Site URL</Label>
              <Input id="site-url" defaultValue="https://lbfilms.com" className="bg-white/5 border-white/10 text-white" />
            </div>
          </motion.div>
        )}

        {activeTab === 'contact' && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input id="phone" type="tel" defaultValue="+880 1234-567890" className="bg-white/5 border-white/10 text-white" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input id="email" type="email" defaultValue="info@lbfilms.com" className="bg-white/5 border-white/10 text-white" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="address">Address</Label>
              <Input id="address" defaultValue="Dhaka, Bangladesh" className="bg-white/5 border-white/10 text-white" />
            </div>
          </motion.div>
        )}

        {activeTab === 'social' && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="facebook">Facebook URL</Label>
              <Input id="facebook" type="url" defaultValue="https://facebook.com/lbfilms" className="bg-white/5 border-white/10 text-white" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="instagram">Instagram URL</Label>
              <Input id="instagram" type="url" defaultValue="https://instagram.com/lbfilms" className="bg-white/5 border-white/10 text-white" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="youtube">YouTube URL</Label>
              <Input id="youtube" type="url" defaultValue="https://youtube.com/lbfilms" className="bg-white/5 border-white/10 text-white" />
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
              <div className="space-y-2">
                <Label htmlFor="first-name">First Name</Label>
                <Input id="first-name" defaultValue="Admin" className="bg-white/5 border-white/10 text-white" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="last-name">Last Name</Label>
                <Input id="last-name" defaultValue="User" className="bg-white/5 border-white/10 text-white" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="admin-email">Email</Label>
              <Input id="admin-email" type="email" defaultValue="admin@lbfilms.com" className="bg-white/5 border-white/10 text-white" />
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
