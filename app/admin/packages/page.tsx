'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Package, 
  Plus, 
  Edit, 
  Trash2, 
  Search,
  X,
  Check
} from 'lucide-react';

const PackagesPage = () => {
  const [packages, setPackages] = useState([
    { id: 1, name: 'Basic', price: '৳15,000', description: 'Perfect for small events and portrait sessions', features: ['3 hours of coverage', '50 edited photos', 'Basic editing'], status: 'active' },
    { id: 2, name: 'Standard', price: '৳30,000', description: 'Our most popular package for complete coverage', features: ['6 hours of coverage', '150 edited photos', 'Professional editing', 'Highlights video (30 sec)'], status: 'active' },
    { id: 3, name: 'Premium', price: '৳50,000', description: 'Complete experience with all features included', features: ['12 hours of coverage', '300+ edited photos', 'Advanced editing', 'Full event video (1-2 hrs)', 'Highlights video (1 min)', 'Physical album delivery'], status: 'active' },
  ]);
  
  const [showModal, setShowModal] = useState(false);
  const [editingPackage, setEditingPackage] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const handleDelete = (id: number) => {
    setPackages(packages.filter(pkg => pkg.id !== id));
  };

  const handleEdit = (pkg: any) => {
    setEditingPackage(pkg);
    setShowModal(true);
  };

  const filteredPackages = packages.filter(pkg => {
    return pkg.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
           pkg.description.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-secondary-800 flex items-center gap-3">
            <div className="bg-gradient-to-r from-primary-500 to-primary-700 p-3 rounded-lg">
              <Package className="h-7 w-7 text-white" />
            </div>
            Package Management
          </h1>
          <p className="text-secondary-600 mt-2">Manage your photography and videography packages</p>
        </div>
        
        <button 
          onClick={() => {
            setEditingPackage(null);
            setShowModal(true);
          }}
          className="bg-gradient-to-r from-primary-500 to-primary-700 text-white px-6 py-3 rounded-lg font-semibold hover:from-primary-600 hover:to-primary-800 transition-all flex items-center gap-2"
        >
          <Plus className="h-5 w-5" />
          Add New Package
        </button>
      </div>

      {/* Search Bar */}
      <div className="bg-white p-6 rounded-2xl shadow-lg mb-6 border border-primary-100">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-secondary-400" />
            <input
              type="text"
              placeholder="Search packages..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-secondary-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </div>
        </div>
      </div>

      {/* Packages Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPackages.map((pkg) => (
          <motion.div
            key={pkg.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden border border-primary-100"
          >
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-secondary-800">{pkg.name}</h3>
                  <p className="text-2xl font-bold text-primary-600 mt-1">{pkg.price}</p>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                  pkg.status === 'active' 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-red-100 text-red-800'
                }`}>
                  {pkg.status}
                </span>
              </div>
              
              <p className="text-secondary-600 mb-4">{pkg.description}</p>
              
              <div className="mb-6">
                <h4 className="font-semibold text-secondary-800 mb-2">Features:</h4>
                <ul className="space-y-1">
                  {pkg.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-sm text-secondary-600">
                      <Check className="h-4 w-4 text-primary-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="flex justify-between">
                <button 
                  onClick={() => handleEdit(pkg)}
                  className="flex items-center gap-2 text-primary-600 hover:text-primary-800"
                >
                  <Edit className="h-4 w-4" />
                  Edit
                </button>
                <button 
                  onClick={() => handleDelete(pkg.id)}
                  className="flex items-center gap-2 text-red-600 hover:text-red-800"
                >
                  <Trash2 className="h-4 w-4" />
                  Delete
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Add/Edit Package Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto"
          >
            <div className="p-6 border-b border-secondary-200 flex justify-between items-center">
              <h2 className="text-xl font-bold text-secondary-800">
                {editingPackage ? 'Edit Package' : 'Add New Package'}
              </h2>
              <button 
                onClick={() => setShowModal(false)}
                className="text-secondary-500 hover:text-secondary-700"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-secondary-700 font-medium mb-2">Package Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-secondary-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="Enter package name"
                  />
                </div>
                
                <div>
                  <label className="block text-secondary-700 font-medium mb-2">Price</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-secondary-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="Enter price (e.g., ৳30,000)"
                  />
                </div>
              </div>
              
              <div className="mt-6">
                <label className="block text-secondary-700 font-medium mb-2">Description</label>
                <textarea
                  rows={3}
                  className="w-full px-4 py-2 border border-secondary-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="Enter package description"
                ></textarea>
              </div>
              
              <div className="mt-6">
                <label className="block text-secondary-700 font-medium mb-2">Features</label>
                <div className="space-y-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="flex items-center gap-3">
                      <input
                        type="text"
                        className="flex-1 px-4 py-2 border border-secondary-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="Enter feature"
                      />
                      {i > 1 && (
                        <button className="text-red-500 hover:text-red-700">
                          <Trash2 className="h-5 w-5" />
                        </button>
                      )}
                    </div>
                  ))}
                  <button className="text-primary-500 hover:text-primary-700 flex items-center gap-2">
                    <Plus className="h-4 w-4" />
                    Add Feature
                  </button>
                </div>
              </div>
              
              <div className="mt-6">
                <label className="block text-secondary-700 font-medium mb-2">Status</label>
                <select className="w-full px-4 py-2 border border-secondary-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent">
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
                </select>
              </div>
            </div>
            
            <div className="p-6 border-t border-secondary-200 flex justify-end gap-3">
              <button 
                onClick={() => setShowModal(false)}
                className="px-6 py-2 border border-secondary-300 rounded-lg text-secondary-700 hover:bg-secondary-50 transition-colors"
              >
                Cancel
              </button>
              <button className="bg-gradient-to-r from-primary-500 to-primary-700 text-white px-6 py-2 rounded-lg font-semibold hover:from-primary-600 hover:to-primary-800 transition-all">
                {editingPackage ? 'Update Package' : 'Add Package'}
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default PackagesPage;