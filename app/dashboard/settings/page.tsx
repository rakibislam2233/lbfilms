'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Bell, Lock, Globe, Moon, Shield } from 'lucide-react';

export default function SettingsPage() {
  const [notifications, setNotifications] = useState({ email: true, sms: false, push: true });

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-white">Settings</h1>

      <div className="space-y-6 max-w-2xl">
        {/* Notifications */}
        <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
          <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
            <Bell size={18} className="text-purple-400" /> Notifications
          </h3>
          <div className="space-y-4">
            {[
              { key: 'email', label: 'Email Notifications', desc: 'Receive updates via email' },
              { key: 'sms', label: 'SMS Notifications', desc: 'Receive updates via SMS' },
              { key: 'push', label: 'Push Notifications', desc: 'Receive push notifications' },
            ].map((item) => (
              <div key={item.key} className="flex items-center justify-between">
                <div>
                  <p className="text-white">{item.label}</p>
                  <p className="text-gray-500 text-sm">{item.desc}</p>
                </div>
                <button
                  onClick={() => setNotifications({ ...notifications, [item.key]: !notifications[item.key as keyof typeof notifications] })}
                  className={`w-12 h-6 rounded-full transition-colors ${notifications[item.key as keyof typeof notifications] ? 'bg-purple-600' : 'bg-white/10'}`}
                >
                  <div className={`w-5 h-5 rounded-full bg-white transition-transform ${notifications[item.key as keyof typeof notifications] ? 'translate-x-6' : 'translate-x-0.5'}`} />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Security */}
        <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
          <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
            <Lock size={18} className="text-pink-400" /> Security
          </h3>
          <div className="space-y-4">
            <motion.button whileHover={{ scale: 1.01 }} className="w-full flex items-center justify-between p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors">
              <div>
                <p className="text-white">Change Password</p>
                <p className="text-gray-500 text-sm">Update your password</p>
              </div>
              <span className="text-gray-400">→</span>
            </motion.button>
            <motion.button whileHover={{ scale: 1.01 }} className="w-full flex items-center justify-between p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors">
              <div>
                <p className="text-white">Two-Factor Authentication</p>
                <p className="text-gray-500 text-sm">Add extra security to your account</p>
              </div>
              <span className="text-xs px-2 py-1 rounded bg-yellow-500/20 text-yellow-400">Off</span>
            </motion.button>
          </div>
        </div>

        {/* Preferences */}
        <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
          <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
            <Globe size={18} className="text-cyan-400" /> Preferences
          </h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-white">Language</p>
                <p className="text-gray-500 text-sm">Select your preferred language</p>
              </div>
              <select className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none">
                <option value="en">English</option>
                <option value="bn">বাংলা</option>
              </select>
            </div>
          </div>
        </div>

        {/* Danger Zone */}
        <div className="p-6 rounded-2xl bg-red-500/5 border border-red-500/20">
          <h3 className="text-lg font-bold text-red-400 mb-4 flex items-center gap-2">
            <Shield size={18} /> Danger Zone
          </h3>
          <p className="text-gray-400 text-sm mb-4">Once you delete your account, there is no going back. Please be certain.</p>
          <button className="px-4 py-2 rounded-xl bg-red-500/10 text-red-400 hover:bg-red-500/20 transition-colors">
            Delete Account
          </button>
        </div>
      </div>
    </div>
  );
}
