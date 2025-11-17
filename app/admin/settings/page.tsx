'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Settings,
  Camera,
  Mail,
  MapPin,
  Phone,
  Globe,
  Lock,
  User,
  Save,
  Upload,
  Image as ImageIcon
} from 'lucide-react';

const SettingsPage = () => {
  const [activeTab, setActiveTab] = useState('general');
  
  const [formData, setFormData] = useState({
    siteTitle: 'LB Films',
    siteDescription: 'Professional Photography & Videography Services in Bangladesh',
    siteEmail: 'info@lbfilms.com',
    sitePhone: '+880 1234-567890',
    siteAddress: '123 Photography Street, Dhaka, Bangladesh',
    siteUrl: 'https://www.lbfilms.com',
    facebook: 'https://www.facebook.com/lbfilms',
    instagram: 'https://www.instagram.com/lbfilms',
    youtube: 'https://www.youtube.com/lbfilms',
    adminEmail: 'admin@lbfilms.com',
    contactEmail: 'contact@lbfilms.com',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Settings saved:', formData);
    
    // Simulate save operation
    alert('Settings saved successfully!');
  };

  const tabs = [
    { id: 'general', name: 'General', icon: Settings },
    { id: 'contact', name: 'Contact Info', icon: Phone },
    { id: 'social', name: 'Social Media', icon: Globe },
    { id: 'email', name: 'Email Settings', icon: Mail },
    { id: 'profile', name: 'Profile', icon: User },
  ];

  return (
    <div className="p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-secondary-800 flex items-center gap-3">
          <div className="bg-gradient-to-r from-primary-500 to-primary-700 p-3 rounded-lg">
            <Settings className="h-7 w-7 text-white" />
          </div>
          Settings
        </h1>
        <p className="text-secondary-600 mt-2">Manage your site settings and preferences</p>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap border-b border-secondary-200 mb-8">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-6 py-3 font-medium flex items-center gap-2 ${
              activeTab === tab.id
                ? 'text-primary-600 border-b-2 border-primary-600'
                : 'text-secondary-600 hover:text-primary-600'
            }`}
          >
            <tab.icon className="h-4 w-4" />
            {tab.name}
          </button>
        ))}
      </div>

      <div className="bg-white rounded-2xl shadow-lg p-6 border border-primary-100">
        <form onSubmit={handleSubmit}>
          {/* General Settings */}
          {activeTab === 'general' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <div>
                <label className="block text-secondary-700 font-medium mb-2">Site Title</label>
                <input
                  type="text"
                  name="siteTitle"
                  value={formData.siteTitle}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-secondary-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>
              
              <div>
                <label className="block text-secondary-700 font-medium mb-2">Site Description</label>
                <textarea
                  name="siteDescription"
                  value={formData.siteDescription}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full px-4 py-2 border border-secondary-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                ></textarea>
              </div>
              
              <div>
                <label className="block text-secondary-700 font-medium mb-2">Site URL</label>
                <input
                  type="text"
                  name="siteUrl"
                  value={formData.siteUrl}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-secondary-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>
              
              <div>
                <label className="block text-secondary-700 font-medium mb-2">Logo</label>
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center">
                    <ImageIcon className="h-8 w-8 text-primary-500" />
                  </div>
                  <button type="button" className="flex items-center gap-2 text-primary-600 hover:text-primary-800">
                    <Upload className="h-4 w-4" />
                    Upload Logo
                  </button>
                </div>
              </div>
            </motion.div>
          )}

          {/* Contact Info */}
          {activeTab === 'contact' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <div>
                <label className="block text-secondary-700 font-medium mb-2">Phone Number</label>
                <input
                  type="text"
                  name="sitePhone"
                  value={formData.sitePhone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-secondary-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>
              
              <div>
                <label className="block text-secondary-700 font-medium mb-2">Email Address</label>
                <input
                  type="email"
                  name="siteEmail"
                  value={formData.siteEmail}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-secondary-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>
              
              <div>
                <label className="block text-secondary-700 font-medium mb-2">Address</label>
                <input
                  type="text"
                  name="siteAddress"
                  value={formData.siteAddress}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-secondary-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>
              
              <div>
                <label className="block text-secondary-700 font-medium mb-2">Map Embed Code</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-2 border border-secondary-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="Paste your Google Maps embed code here"
                ></textarea>
              </div>
            </motion.div>
          )}

          {/* Social Media */}
          {activeTab === 'social' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <div>
                <label className="block text-secondary-700 font-medium mb-2">Facebook URL</label>
                <input
                  type="text"
                  name="facebook"
                  value={formData.facebook}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-secondary-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>
              
              <div>
                <label className="block text-secondary-700 font-medium mb-2">Instagram URL</label>
                <input
                  type="text"
                  name="instagram"
                  value={formData.instagram}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-secondary-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>
              
              <div>
                <label className="block text-secondary-700 font-medium mb-2">YouTube URL</label>
                <input
                  type="text"
                  name="youtube"
                  value={formData.youtube}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-secondary-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>
            </motion.div>
          )}

          {/* Email Settings */}
          {activeTab === 'email' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <div>
                <label className="block text-secondary-700 font-medium mb-2">Admin Email</label>
                <input
                  type="email"
                  name="adminEmail"
                  value={formData.adminEmail}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-secondary-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>
              
              <div>
                <label className="block text-secondary-700 font-medium mb-2">Contact Email</label>
                <input
                  type="email"
                  name="contactEmail"
                  value={formData.contactEmail}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-secondary-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>
              
              <div>
                <label className="block text-secondary-700 font-medium mb-2">SMTP Host</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-secondary-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="smtp.example.com"
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-secondary-700 font-medium mb-2">SMTP Port</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-secondary-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="587"
                  />
                </div>
                <div>
                  <label className="block text-secondary-700 font-medium mb-2">Encryption</label>
                  <select className="w-full px-4 py-2 border border-secondary-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent">
                    <option value="tls">TLS</option>
                    <option value="ssl">SSL</option>
                    <option value="none">None</option>
                  </select>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-secondary-700 font-medium mb-2">Username</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-secondary-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="Your SMTP username"
                  />
                </div>
                <div>
                  <label className="block text-secondary-700 font-medium mb-2">Password</label>
                  <input
                    type="password"
                    className="w-full px-4 py-2 border border-secondary-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="Your SMTP password"
                  />
                </div>
              </div>
            </motion.div>
          )}

          {/* Profile Settings */}
          {activeTab === 'profile' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <div className="flex items-center gap-6">
                <div className="w-24 h-24 bg-primary-100 rounded-full flex items-center justify-center">
                  <User className="h-12 w-12 text-primary-500" />
                </div>
                <button type="button" className="flex items-center gap-2 text-primary-600 hover:text-primary-800">
                  <Upload className="h-4 w-4" />
                  Change Avatar
                </button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-secondary-700 font-medium mb-2">First Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-secondary-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="Your first name"
                  />
                </div>
                <div>
                  <label className="block text-secondary-700 font-medium mb-2">Last Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-secondary-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="Your last name"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-secondary-700 font-medium mb-2">Email Address</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border border-secondary-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="Your email address"
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-secondary-700 font-medium mb-2">Current Password</label>
                  <input
                    type="password"
                    className="w-full px-4 py-2 border border-secondary-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="Current password"
                  />
                </div>
                <div>
                  <label className="block text-secondary-700 font-medium mb-2">New Password</label>
                  <input
                    type="password"
                    className="w-full px-4 py-2 border border-secondary-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="New password"
                  />
                </div>
              </div>
            </motion.div>
          )}

          <div className="mt-8 pt-6 border-t border-secondary-200 flex justify-end">
            <button
              type="submit"
              className="bg-gradient-to-r from-primary-500 to-primary-700 text-white px-6 py-3 rounded-lg font-semibold hover:from-primary-600 hover:to-primary-800 transition-all flex items-center gap-2"
            >
              <Save className="h-5 w-5" />
              Save Settings
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SettingsPage;