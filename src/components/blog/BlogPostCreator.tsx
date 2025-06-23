import React, { useState } from 'react';
import { BlogPostTemplate } from './BlogTemplate';
import { Plus, Save, X, Check } from 'lucide-react';

interface BlogPostCreatorProps {
  onSave: (post: BlogPostTemplate) => void;
  onCancel?: () => void;
  isOpen: boolean;
}

const BlogPostCreator: React.FC<BlogPostCreatorProps> = ({
  onSave,
  onCancel,
  isOpen
}) => {
  const [formData, setFormData] = useState<Partial<BlogPostTemplate>>({
    title: '',
    description: '',
    author: '',
    category: '',
    readTime: '5 min read',
    tags: []
  });

  const [newTag, setNewTag] = useState('');

  if (!isOpen) return null;

  const handleInputChange = (field: keyof BlogPostTemplate, value: any) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const addTag = () => {
    if (newTag.trim() && !formData.tags?.includes(newTag.trim())) {
      handleInputChange('tags', [...(formData.tags || []), newTag.trim()]);
      setNewTag('');
    }
  };

  const removeTag = (tagToRemove: string) => {
    handleInputChange('tags', formData.tags?.filter(tag => tag !== tagToRemove) || []);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.title || !formData.description || !formData.author || !formData.category) {
      alert('Please fill in all required fields');
      return;
    }

    const newPost: BlogPostTemplate = {
      id: `post-${Date.now()}`,
      title: formData.title,
      description: formData.description,
      date: new Date().toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'short', 
        day: 'numeric' 
      }),
      author: formData.author,
      readTime: formData.readTime || '5 min read',
      category: formData.category,
      link: `/blog/${formData.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`,
      tags: formData.tags || [],
      featured: false
    };

    onSave(newPost);
    
    // Reset form
    setFormData({
      title: '',
      description: '',
      author: '',
      category: '',
      readTime: '5 min read',
      tags: []
    });
  };

  const handleCancel = () => {
    if (onCancel) {
      onCancel();
    }
    // Reset form
    setFormData({
      title: '',
      description: '',
      author: '',
      category: '',
      readTime: '5 min read',
      tags: []
    });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-[#2a2b2a]">Add New Blog Post</h2>
            <button
              onClick={handleCancel}
              className="text-gray-500 hover:text-gray-700"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Title */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Title <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) => handleInputChange('title', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-[#f59d40] focus:border-[#f59d40]"
                placeholder="Enter blog post title..."
                required
              />
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Description <span className="text-red-500">*</span>
              </label>
              <textarea
                value={formData.description}
                onChange={(e) => handleInputChange('description', e.target.value)}
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-[#f59d40] focus:border-[#f59d40]"
                placeholder="Enter a brief description of your blog post..."
                required
              />
            </div>

            {/* Author and Category */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Author <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={formData.author}
                  onChange={(e) => handleInputChange('author', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-[#f59d40] focus:border-[#f59d40]"
                  placeholder="Author name"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Category <span className="text-red-500">*</span>
                </label>
                <select
                  value={formData.category}
                  onChange={(e) => handleInputChange('category', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-[#f59d40] focus:border-[#f59d40]"
                  required
                >
                  <option value="">Select category</option>
                  <option value="AI Marketing">AI Marketing</option>
                  <option value="Customer Experience">Customer Experience</option>
                  <option value="Advertising">Advertising</option>
                  <option value="Content Marketing">Content Marketing</option>
                  <option value="Data Analytics">Data Analytics</option>
                  <option value="AI Ethics">AI Ethics</option>
                  <option value="Business Automation">Business Automation</option>
                  <option value="Digital Marketing">Digital Marketing</option>
                  <option value="Technology Trends">Technology Trends</option>
                </select>
              </div>
            </div>

            {/* Read Time */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Read Time
              </label>
              <input
                type="text"
                value={formData.readTime}
                onChange={(e) => handleInputChange('readTime', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-[#f59d40] focus:border-[#f59d40]"
                placeholder="e.g., 5 min read"
              />
            </div>

            {/* Tags */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Tags
              </label>
              <div className="flex flex-wrap gap-2 mb-2">
                {formData.tags?.map((tag, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-[#f59d40] text-white"
                  >
                    {tag}
                    <button
                      type="button"
                      onClick={() => removeTag(tag)}
                      className="ml-1 hover:bg-[#e88a2e] rounded-full p-0.5"
                    >
                      ×
                    </button>
                  </span>
                ))}
              </div>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={newTag}
                  onChange={(e) => setNewTag(e.target.value)}
                  placeholder="Add a tag..."
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-[#f59d40] focus:border-[#f59d40]"
                  onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                      e.preventDefault();
                      addTag();
                    }
                  }}
                />
                <button
                  type="button"
                  onClick={addTag}
                  className="px-3 py-2 bg-[#f59d40] text-white rounded-md hover:bg-[#e88a2e]"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-3 pt-4">
              <button
                type="submit"
                className="flex-1 inline-flex items-center justify-center px-4 py-2 bg-[#f59d40] text-white rounded-md hover:bg-[#e88a2e] transition-colors"
              >
                <Save className="h-4 w-4 mr-2" />
                Save Post
              </button>
              <button
                type="button"
                onClick={handleCancel}
                className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BlogPostCreator; 