import React, { useState } from 'react';
import { 
  ArrowRight, 
  Plus,
  Save,
  Edit3
} from 'lucide-react';
import { Link } from 'react-router-dom';

export interface BlogPostTemplate {
  id: string;
  title: string;
  description: string;
  date: string;
  author: string;
  readTime: string;
  category: string;
  image?: string;
  link: string;
  tags?: string[];
  featured?: boolean;
  content?: string; // Full blog content
  excerpt?: string; // Short excerpt for preview
}

interface BlogTemplateProps {
  post: BlogPostTemplate;
  onSave?: (post: BlogPostTemplate) => void;
  onEdit?: (post: BlogPostTemplate) => void;
  isEditing?: boolean;
  showActions?: boolean;
}

const BlogTemplate: React.FC<BlogTemplateProps> = ({
  post,
  onSave,
  onEdit,
  isEditing = false,
  showActions = false
}) => {
  const [editingPost, setEditingPost] = useState<BlogPostTemplate>(post);
  const [isEditMode, setIsEditMode] = useState(isEditing);

  // Marigold color palette (authentic brand colors)
  const marigoldColors = [
    '#D58F03', // Dark Yellow
    '#122B37', // Gray
    '#041922', // mdGray
    '#bb141a'  // Red
  ];

  // Improved function to get a more balanced color distribution
  const getBlogColor = (postId: string) => {
    // Manual color assignment to ensure no consecutive same colors
    const colorMap: { [key: string]: string } = {
      'ai-marketing-strategy': '#D58F03',        // Dark Yellow
      'future-customer-engagement': '#122B37',   // Gray
      'optimize-ad-campaigns': '#bb141a',        // Red
      'ai-content-creation': '#041922',          // mdGray
      'ai-audience-analytics': '#D58F03',        // Dark Yellow
      'ethics-ai-marketing': '#122B37',          // Gray
      'automate-business-processes': '#bb141a',  // Red
      'chatgpt-marketing-prompts': '#041922',    // mdGray
      'ai-seo-strategies': '#D58F03',            // Dark Yellow
      'social-media-automation': '#122B37',      // Gray
      'ai-trends-2025': '#bb141a'                // Red
    };
    
    // If we have a manual assignment, use it
    if (colorMap[postId]) {
      return colorMap[postId];
    }
    
    // Fallback to hash-based distribution for new posts
    let hash = 0;
    for (let i = 0; i < postId.length; i++) {
      const char = postId.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash = hash & hash;
    }
    
    const colorIndex = Math.abs(hash) % marigoldColors.length;
    return marigoldColors[colorIndex];
  };

  const handleSave = () => {
    if (onSave) {
      onSave(editingPost);
    }
    setIsEditMode(false);
  };

  const handleEdit = () => {
    if (onEdit) {
      onEdit(editingPost);
    }
    setIsEditMode(true);
  };

  const updateField = (field: keyof BlogPostTemplate, value: any) => {
    setEditingPost(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const addTag = (tag: string) => {
    if (tag.trim() && !editingPost.tags?.includes(tag.trim())) {
      updateField('tags', [...(editingPost.tags || []), tag.trim()]);
    }
  };

  const removeTag = (tagToRemove: string) => {
    updateField('tags', editingPost.tags?.filter(tag => tag !== tagToRemove) || []);
  };

  if (isEditMode) {
    return (
      <div className="bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200 p-6">
        <div className="space-y-4">
          {/* Title */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Title</label>
            <input
              type="text"
              value={editingPost.title}
              onChange={(e) => updateField('title', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-[#f59d40] focus:border-[#f59d40]"
              placeholder="Enter blog post title..."
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
            <textarea
              value={editingPost.description}
              onChange={(e) => updateField('description', e.target.value)}
              rows={3}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-[#f59d40] focus:border-[#f59d40]"
              placeholder="Enter blog post description..."
            />
          </div>

          {/* Basic Info Row */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Date</label>
              <input
                type="text"
                value={editingPost.date}
                onChange={(e) => updateField('date', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-[#f59d40] focus:border-[#f59d40]"
                placeholder="e.g., Mar 10, 2025"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Author</label>
              <input
                type="text"
                value={editingPost.author}
                onChange={(e) => updateField('author', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-[#f59d40] focus:border-[#f59d40]"
                placeholder="Author name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Read Time</label>
              <input
                type="text"
                value={editingPost.readTime}
                onChange={(e) => updateField('readTime', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-[#f59d40] focus:border-[#f59d40]"
                placeholder="e.g., 5 min read"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
              <select
                value={editingPost.category}
                onChange={(e) => updateField('category', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-[#f59d40] focus:border-[#f59d40]"
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

          {/* Image URL */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Image URL (optional)</label>
            <input
              type="url"
              value={editingPost.image || ''}
              onChange={(e) => updateField('image', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-[#f59d40] focus:border-[#f59d40]"
              placeholder="https://example.com/image.jpg"
            />
          </div>

          {/* Tags */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Tags</label>
            <div className="flex flex-wrap gap-2 mb-2">
              {editingPost.tags?.map((tag, index) => (
                <span
                  key={index}
                  className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-[#f59d40] text-white"
                >
                  {tag}
                  <button
                    type="button"
                    onClick={() => removeTag(tag)}
                    className="ml-1 hover:bg-[#e88a2e] rounded-full w-4 h-4 flex items-center justify-center"
                  >
                    ×
                  </button>
                </span>
              ))}
            </div>
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Add a tag..."
                className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-[#f59d40] focus:border-[#f59d40]"
                onKeyPress={(e) => {
                  if (e.key === 'Enter') {
                    addTag(e.currentTarget.value);
                    e.currentTarget.value = '';
                  }
                }}
              />
              <button
                type="button"
                onClick={() => {
                  const input = document.querySelector('input[placeholder="Add a tag..."]') as HTMLInputElement;
                  if (input && input.value.trim()) {
                    addTag(input.value);
                    input.value = '';
                  }
                }}
                className="px-3 py-2 bg-[#f59d40] text-white rounded-md hover:bg-[#e88a2e] transition-colors"
              >
                <Plus className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Featured Toggle */}
          <div className="flex items-center">
            <input
              type="checkbox"
              id="featured"
              checked={editingPost.featured || false}
              onChange={(e) => updateField('featured', e.target.checked)}
              className="h-4 w-4 text-[#f59d40] focus:ring-[#f59d40] border-gray-300 rounded"
            />
            <label htmlFor="featured" className="ml-2 block text-sm text-gray-900">
              Featured Post
            </label>
          </div>

          {/* Actions */}
          <div className="flex justify-end space-x-3 pt-4">
            <button
              onClick={() => setIsEditMode(false)}
              className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={handleSave}
              className="px-4 py-2 bg-[#f59d40] text-white rounded-md hover:bg-[#e88a2e] transition-colors flex items-center"
            >
              <Save className="h-4 w-4 mr-2" />
              Save Changes
            </button>
          </div>
        </div>
      </div>
    );
  }

  const blogColor = getBlogColor(post.id);

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
      {/* Simple color banner with gradient */}
      <div 
        className="relative h-20"
        style={{ 
          background: `linear-gradient(135deg, ${blogColor} 0%, ${blogColor}dd 50%, ${blogColor}aa 100%)`
        }}
      >
        {post.featured && (
          <div className="absolute top-2 right-2">
            <span className="bg-yellow-400 text-yellow-900 text-xs font-bold px-2 py-1 rounded-full">
              Featured
            </span>
          </div>
        )}
      </div>
      
      {/* Content section with more emphasis */}
      <div className="p-6 flex-1 flex flex-col">
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags?.map((tag, index) => (
            <span
              key={index}
              className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full hover:bg-gray-200 transition-colors"
            >
              {tag}
            </span>
          )) || null}
        </div>
        
        {/* Title with more prominence */}
        <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight hover:text-orange-600 transition-colors">
          {post.title}
        </h3>
        
        {/* Subtitle with more emphasis */}
        <p className="text-gray-600 mb-6 leading-relaxed flex-1">
          {post.description}
        </p>
        
        {/* Meta information */}
        <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
          <div className="flex items-center space-x-4">
            <span>{post.date}</span>
            <span>•</span>
            <span>{post.readTime}</span>
          </div>
          {post.author && (
            <div className="flex items-center space-x-2">
              <span>By {post.author}</span>
            </div>
          )}
        </div>
        
        {/* Action buttons */}
        <div className="flex justify-between items-center mt-auto">
          <Link
            to={post.link}
            className="inline-flex items-center px-4 py-2 bg-orange-500 text-white text-sm font-medium rounded-lg hover:bg-orange-600 transition-colors"
          >
            Read Full Article
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
          
          {showActions && (
            <button
              onClick={handleEdit}
              className="p-2 text-gray-500 hover:text-blue-600 transition-colors"
              title="Edit post"
            >
              <Edit3 className="h-4 w-4" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogTemplate; 