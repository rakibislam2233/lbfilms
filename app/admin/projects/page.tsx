'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Camera, 
  Plus, 
  Edit, 
  Trash2, 
  Search,
  Filter,
  Eye,
  Upload,
  X
} from 'lucide-react';

const ProjectsPage = () => {
  const [projects, setProjects] = useState([
    { id: 1, title: 'Wedding Ceremony', category: 'wedding', date: '2023-05-15', status: 'published', image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=300&q=80' },
    { id: 2, title: 'Corporate Event', category: 'corporate', date: '2023-06-20', status: 'published', image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=300&q=80' },
    { id: 3, title: 'Portrait Session', category: 'portrait', date: '2023-07-10', status: 'draft', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=300&q=80' },
    { id: 4, title: 'Engagement Shoot', category: 'portrait', date: '2023-08-05', status: 'published', image: 'https://images.unsplash.com/photo-1543857778-c4a1a569e7bd?auto=format&fit=crop&w=300&q=80' },
  ]);
  
  const [showModal, setShowModal] = useState(false);
  const [editingProject, setEditingProject] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('all');

  const handleDelete = (id: number) => {
    setProjects(projects.filter(project => project.id !== id));
  };

  const handleEdit = (project: any) => {
    setEditingProject(project);
    setShowModal(true);
  };

  const categories = ['all', 'wedding', 'portrait', 'corporate', 'event'];

  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filter === 'all' || project.category === filter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-secondary-800 flex items-center gap-3">
            <div className="bg-gradient-to-r from-primary-500 to-primary-700 p-3 rounded-lg">
              <Camera className="h-7 w-7 text-white" />
            </div>
            Project Management
          </h1>
          <p className="text-secondary-600 mt-2">Manage your photography and videography projects</p>
        </div>
        
        <button 
          onClick={() => {
            setEditingProject(null);
            setShowModal(true);
          }}
          className="bg-gradient-to-r from-primary-500 to-primary-700 text-white px-6 py-3 rounded-lg font-semibold hover:from-primary-600 hover:to-primary-800 transition-all flex items-center gap-2"
        >
          <Plus className="h-5 w-5" />
          Add New Project
        </button>
      </div>

      {/* Filters and Search */}
      <div className="bg-white p-6 rounded-2xl shadow-lg mb-6 border border-primary-100">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-secondary-400" />
            <input
              type="text"
              placeholder="Search projects..."
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
              {categories.map(category => (
                <option key={category} value={category}>
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden border border-primary-100"
          >
            <div className="relative">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-48 object-cover"
              />
              <div className="absolute top-4 right-4">
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                  project.status === 'published' 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-yellow-100 text-yellow-800'
                }`}>
                  {project.status}
                </span>
              </div>
            </div>
            
            <div className="p-6">
              <h3 className="text-lg font-bold text-secondary-800 mb-2">{project.title}</h3>
              <div className="flex justify-between items-center text-secondary-600 text-sm mb-4">
                <span className="capitalize">{project.category}</span>
                <span>{project.date}</span>
              </div>
              
              <div className="flex justify-between">
                <button 
                  onClick={() => handleEdit(project)}
                  className="flex items-center gap-2 text-primary-600 hover:text-primary-800"
                >
                  <Edit className="h-4 w-4" />
                  Edit
                </button>
                <button 
                  onClick={() => handleDelete(project.id)}
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

      {/* Add/Edit Project Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto"
          >
            <div className="p-6 border-b border-secondary-200 flex justify-between items-center">
              <h2 className="text-xl font-bold text-secondary-800">
                {editingProject ? 'Edit Project' : 'Add New Project'}
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
                  <label className="block text-secondary-700 font-medium mb-2">Project Title</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-secondary-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="Enter project title"
                  />
                </div>
                
                <div>
                  <label className="block text-secondary-700 font-medium mb-2">Category</label>
                  <select className="w-full px-4 py-2 border border-secondary-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent">
                    <option value="">Select category</option>
                    <option value="wedding">Wedding</option>
                    <option value="portrait">Portrait</option>
                    <option value="corporate">Corporate</option>
                    <option value="event">Event</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-secondary-700 font-medium mb-2">Date</label>
                  <input
                    type="date"
                    className="w-full px-4 py-2 border border-secondary-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label className="block text-secondary-700 font-medium mb-2">Status</label>
                  <select className="w-full px-4 py-2 border border-secondary-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent">
                    <option value="draft">Draft</option>
                    <option value="published">Published</option>
                  </select>
                </div>
              </div>
              
              <div className="mt-6">
                <label className="block text-secondary-700 font-medium mb-2">Project Images</label>
                <div className="border-2 border-dashed border-secondary-300 rounded-lg p-8 text-center">
                  <Upload className="h-12 w-12 text-secondary-400 mx-auto mb-4" />
                  <p className="text-secondary-600 mb-4">Drag & drop images here or click to browse</p>
                  <button className="bg-primary-500 text-white px-6 py-2 rounded-lg hover:bg-primary-600 transition-colors">
                    Select Images
                  </button>
                </div>
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
                {editingProject ? 'Update Project' : 'Add Project'}
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default ProjectsPage;