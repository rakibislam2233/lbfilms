"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { DatePicker } from "@/components/ui/date-picker";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { projects as demoProjects } from "@/data";
import { Project, ProjectFormData } from "@/lib/types";
import { motion } from "framer-motion";
import {
  Camera,
  Edit,
  Filter,
  ImageIcon,
  Link,
  Plus,
  Search,
  Trash2,
  Upload,
  X,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function AdminProjectsPage() {
  const [projectList, setProjectList] = useState<Project[]>(demoProjects);
  const [showModal, setShowModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("all");
  const [editingProject, setEditingProject] = useState<Project | null>(null);
  const [formData, setFormData] = useState<ProjectFormData>({
    title: '',
    category: '',
    description: '',
    location: '',
    date: new Date(),
    featured: false,
    images: []
  });
  const [uploadMethod, setUploadMethod] = useState<'file' | 'url'>('file');
  const [isDragging, setIsDragging] = useState(false);

  const categories = [
    "all",
    "wedding",
    "portrait",
    "corporate",
    "event",
    "birthday",
    "product",
  ];

  const filteredProjects = projectList.filter((project) => {
    const matchesSearch = project.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesFilter = filter === "all" || project.category === filter;
    return matchesSearch && matchesFilter;
  });

  const handleAddProject = () => {
    setEditingProject(null);
    setFormData({
      title: '',
      category: '',
      description: '',
      location: '',
      date: new Date(),
      featured: false,
      images: []
    });
    setShowModal(true);
  };

  const handleEditProject = (project: Project) => {
    setEditingProject(project);
    setFormData({
      title: project.title,
      category: project.category,
      description: project.description,
      location: project.location,
      date: new Date(project.date), // Convert string to Date object
      featured: project.featured,
      images: project.images // Include existing images
    });
    setShowModal(true);
  };

  const handleDeleteProject = (id: string) => {
    setProjectList(projectList.filter(project => project.id !== id));
  };

  // Handle file upload
  const handleFileUpload = (files: FileList | null) => {
    if (!files) return;
    
    const fileArray = Array.from(files);
    const imageFiles = fileArray.filter(file => file.type.startsWith('image/'));
    
    if (imageFiles.length === 0) {
      alert('Please select image files only');
      return;
    }
    
    // Convert files to base64 data URLs
    imageFiles.forEach(file => {
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result as string;
        setFormData(prev => ({
          ...prev,
          images: [...prev.images, result]
        }));
      };
      reader.readAsDataURL(file);
    });
  };

  // Handle drag and drop
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    handleFileUpload(e.dataTransfer.files);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white flex items-center gap-3">
            <Camera className="text-purple-400" /> Projects
          </h1>
          <p className="text-gray-400">Manage your photography projects</p>
        </div>
        <motion.button
          onClick={handleAddProject}
          className="px-4 py-2 rounded-xl bg-linear-to-r from-purple-600 to-pink-600 text-white font-medium flex items-center gap-2"
        >
          <Plus size={18} /> Add Project
        </motion.button>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 z-10 pointer-events-none"
          />
          <Input
            type="text"
            placeholder="Search projects..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 bg-white/5 border-white/10 text-white placeholder-gray-500"
          />
        </div>
        <div className="flex items-center gap-2">
          <Filter size={18} className="text-gray-500" />
          <Select value={filter} onValueChange={(value) => setFilter(value)}>
            <SelectTrigger className="w-full bg-white/5 border-white/10 text-white">
              <SelectValue placeholder="Select a language" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((cat) => (
                <SelectItem key={cat} value={cat} className="bg-gray-900">
                  {cat.charAt(0).toUpperCase() + cat.slice(1)}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            className="rounded-2xl bg-white/5 border border-white/10 overflow-hidden group"
          >
            <div className="relative aspect-video">
              <Image
                src={project.images[0]}
                alt={project.title}
                fill
                className="object-cover"
              />
              <div className="absolute top-3 right-3">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium ${
                    project.featured
                      ? "bg-purple-500/80 text-white"
                      : "bg-white/20 text-white"
                  }`}
                >
                  {project.featured ? "Featured" : project.category}
                </span>
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-white font-bold mb-1">{project.title}</h3>
              <p className="text-gray-500 text-sm mb-4">
                {project.location} •{" "}
                {new Date(project.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
              </p>
              <div className="flex gap-2">
                <button
                  onClick={() => handleEditProject(project)}
                  className="flex-1 px-3 py-2 rounded-lg bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 flex items-center justify-center gap-1 text-sm">
                  <Edit size={14} /> Edit
                </button>
                <button
                  onClick={() => handleDeleteProject(project.id)}
                  className="flex-1 px-3 py-2 rounded-lg bg-red-500/10 text-red-400 hover:bg-red-500/20 flex items-center justify-center gap-1 text-sm">
                  <Trash2 size={14} /> Delete
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-full max-w-2xl rounded-2xl bg-gray-900 border border-white/10"
          >
            <div className="flex items-center justify-between p-6 border-b border-white/10">
              <h2 className="text-xl font-bold text-white">
                {editingProject ? 'Edit Project' : 'Add New Project'}
              </h2>
              <button
                onClick={() => setShowModal(false)}
                className="text-gray-400 hover:text-white"
              >
                <X size={24} />
              </button>
            </div>
            <div className="p-6 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="project-title">Title</Label>
                  <Input
                    id="project-title"
                    type="text"
                    value={formData.title}
                    onChange={(e) => setFormData({...formData, title: e.target.value})}
                    placeholder="Project title"
                    className="bg-white/5 border-white/10 text-white"
                  />
                </div>
                <div className="space-y-2">
                  <Label>Category</Label>
                  <Select
                    value={formData.category}
                    onValueChange={(value) => setFormData({...formData, category: value as Project['category']})}
                  >
                    <SelectTrigger className="w-full bg-white/5 border-white/10 text-white">
                      <SelectValue placeholder="Select Category" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.slice(1).map((cat) => (
                        <SelectItem
                          key={cat}
                          value={cat}
                          className="bg-gray-900"
                        >
                          {cat.charAt(0).toUpperCase() + cat.slice(1)}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="project-description">Description</Label>
                <Textarea
                  id="project-description"
                  rows={3}
                  value={formData.description}
                  onChange={(e) => setFormData({...formData, description: e.target.value})}
                  placeholder="Project description"
                  className="bg-white/5 border-white/10 text-white resize-none"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="project-location">Location</Label>
                  <Input
                    id="project-location"
                    type="text"
                    value={formData.location}
                    onChange={(e) => setFormData({...formData, location: e.target.value})}
                    placeholder="Project location"
                    className="bg-white/5 border-white/10 text-white"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="project-date">Date</Label>
                  <DatePicker
                    date={formData.date}
                    setDate={(date) => setFormData({...formData, date: date || new Date()})}
                    className="bg-white/5 border-white/10 text-white"
                  />
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="featured"
                  checked={formData.featured}
                  onCheckedChange={(checked) => setFormData({...formData, featured: Boolean(checked)})}
                />
                <Label htmlFor="featured" className="text-sm">
                  Featured Project
                </Label>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label>Images ({formData.images.filter(img => img).length} added)</Label>
                  <div className="flex gap-2">
                    <button
                      type="button"
                      onClick={() => setUploadMethod('file')}
                      className={`px-3 py-1 rounded-lg text-xs flex items-center gap-1 transition-all ${
                        uploadMethod === 'file'
                          ? 'bg-purple-500 text-white'
                          : 'bg-white/5 text-gray-400 hover:text-white'
                      }`}
                    >
                      <ImageIcon size={14} /> Upload Files
                    </button>
                    <button
                      type="button"
                      onClick={() => setUploadMethod('url')}
                      className={`px-3 py-1 rounded-lg text-xs flex items-center gap-1 transition-all ${
                        uploadMethod === 'url'
                          ? 'bg-purple-500 text-white'
                          : 'bg-white/5 text-gray-400 hover:text-white'
                      }`}
                    >
                      <Link size={14} /> Use URL
                    </button>
                  </div>
                </div>
                
                {/* Image Preview Grid */}
                {formData.images.filter(img => img).length > 0 && (
                  <div className="grid grid-cols-3 gap-3 p-4 rounded-xl bg-white/5 border border-white/10">
                    {formData.images.map((image, index) => (
                      image && (
                        <div key={index} className="relative group aspect-square rounded-lg overflow-hidden bg-gray-800">
                          <Image
                            src={image}
                            alt={`Preview ${index + 1}`}
                            fill
                            className="object-cover"
                          />
                          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                            <button
                              type="button"
                              onClick={() => {
                                const newImages = formData.images.filter((_, i) => i !== index);
                                setFormData({...formData, images: newImages});
                              }}
                              className="p-2 rounded-lg bg-red-500 hover:bg-red-600 text-white"
                            >
                              <Trash2 size={16} />
                            </button>
                          </div>
                          <div className="absolute top-2 left-2 px-2 py-1 rounded bg-black/70 text-white text-xs">
                            #{index + 1}
                          </div>
                        </div>
                      )
                    ))}
                  </div>
                )}

                {/* Upload Methods */}
                {uploadMethod === 'file' ? (
                  <div className="space-y-2">
                    {/* Drag & Drop Area */}
                    <div
                      onDragOver={handleDragOver}
                      onDragLeave={handleDragLeave}
                      onDrop={handleDrop}
                      className={`relative border-2 border-dashed rounded-xl p-8 text-center transition-all ${
                        isDragging
                          ? 'border-purple-500 bg-purple-500/10'
                          : 'border-white/10 hover:border-purple-500/50'
                      }`}
                    >
                      <input
                        type="file"
                        multiple
                        accept="image/*"
                        onChange={(e) => handleFileUpload(e.target.files)}
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                        />
                      <Upload className="mx-auto mb-3 text-purple-400" size={40} />
                      <p className="text-white font-medium mb-1">
                        {isDragging ? 'Drop images here' : 'Click to upload or drag & drop'}
                      </p>
                      <p className="text-gray-400 text-sm">
                        PNG, JPG, GIF, WebP up to 10MB each
                      </p>
                      <p className="text-gray-500 text-xs mt-2">
                        You can select multiple images at once
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-2">
                    {formData.images.map((image, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <div className="flex-1 space-y-1">
                          <Input
                            type="text"
                            value={image}
                            onChange={(e) => {
                              const newImages = [...formData.images];
                              newImages[index] = e.target.value;
                              setFormData({...formData, images: newImages});
                            }}
                            placeholder="Paste image URL (e.g., https://images.unsplash.com/photo-...)"
                            className="bg-white/5 border-white/10 text-white"
                          />
                          {image && !image.match(/^https?:\/\/.+\.(jpg|jpeg|png|gif|webp)$/i) && !image.startsWith('data:image') && (
                            <p className="text-xs text-yellow-500">⚠ Make sure URL ends with .jpg, .png, .gif, or .webp</p>
                          )}
                        </div>
                        <button
                          type="button"
                          onClick={() => {
                            const newImages = formData.images.filter((_, i) => i !== index);
                            setFormData({...formData, images: newImages});
                          }}
                          className="px-3 py-2 rounded-lg bg-red-500/10 text-red-400 hover:bg-red-500/20 flex items-center gap-1"
                        >
                          <X size={16} />
                        </button>
                      </div>
                    ))}
                    <button
                      type="button"
                      onClick={() => {
                        setFormData({
                          ...formData,
                          images: [...formData.images, '']
                        });
                      }}
                      className="w-full py-4 rounded-xl border-2 border-dashed border-white/10 text-gray-400 hover:text-white hover:border-purple-500/50 flex items-center justify-center gap-2 transition-all"
                    >
                      <Plus size={20} />
                      Add Another Image URL
                    </button>
                    <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-3">
                      <p className="text-xs text-blue-300 mb-2">💡 <strong>Tips for adding images:</strong></p>
                      <ul className="text-xs text-gray-400 space-y-1 ml-4 list-disc">
                        <li>Use Unsplash.com for free high-quality images</li>
                        <li>Right-click on any image → Copy Image Address</li>
                        <li>Supported formats: JPG, PNG, GIF, WebP</li>
                        <li>First image will be the main thumbnail</li>
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="flex justify-end gap-3 p-6 border-t border-white/10">
              <button
                onClick={() => setShowModal(false)}
                className="px-6 py-2 rounded-xl bg-white/5 text-gray-400 hover:text-white"
              >
                Cancel
              </button>
              <button
                onClick={(e) => {
                  e.preventDefault();

                  // Validate required fields
                  if (!formData.title || !formData.category || !formData.location || formData.images.length === 0) {
                    alert('Please fill in all required fields and add at least one image');
                    return;
                  }

                  // Format date as YYYY-MM-DD string to match the expected format
                  const formatDate = (date: Date): string => {
                    const d = new Date(date);
                    const month = '' + (d.getMonth() + 1);
                    const day = '' + d.getDate();
                    const year = d.getFullYear();
                    return year + '-' + month.padStart(2, '0') + '-' + day.padStart(2, '0');
                  };

                  const formattedDate = formatDate(formData.date);

                  if (editingProject) {
                    // Update existing project
                    setProjectList(projectList.map(p =>
                      p.id === editingProject.id
                        ? { ...p, ...formData, category: formData.category as Project['category'], date: formattedDate }
                        : p
                    ));
                  } else {
                    // Add new project
                    const newProject: Project = {
                      id: `proj-${Date.now()}`, // Generate a unique ID
                      ...formData,
                      category: formData.category as Project['category'],
                      date: formattedDate, // Convert Date object to string
                    };
                    setProjectList([...projectList, newProject]);
                  }

                  setShowModal(false);
                }}
                className="px-6 py-2 rounded-xl bg-linear-to-r from-purple-600 to-pink-600 text-white font-medium">
                {editingProject ? 'Update Project' : 'Add Project'}
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}
