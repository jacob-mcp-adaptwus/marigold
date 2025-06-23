import React, { useState, useEffect } from 'react';
import { 
  Save, 
  Eye, 
  FileText, 
  Settings,
  Tag, 
  Bold,
  Italic,
  List,
  ListOrdered,
  Quote,
  Code,
  TrendingUp
} from 'lucide-react';

export interface BlogPostData {
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
  content?: string;
  excerpt?: string;
  seoTitle?: string;
  seoDescription?: string;
  seoKeywords?: string[];
  status?: 'draft' | 'review' | 'published';
  publishDate?: string;
}

interface BlogEditorProps {
  post: BlogPostData;
  onSave: (post: BlogPostData) => void;
  onPreview?: (post: BlogPostData) => void;
  onCancel?: () => void;
  isNew?: boolean;
}

const BlogEditor: React.FC<BlogEditorProps> = ({
  post,
  onSave,
  onPreview,
  onCancel,
  isNew = false
}) => {
  const [editingPost, setEditingPost] = useState<BlogPostData>(post);
  const [activeTab, setActiveTab] = useState<'content' | 'seo' | 'settings'>('content');
  const [wordCount, setWordCount] = useState(0);
  const [readingTime, setReadingTime] = useState('');

  // Categories for dropdown
  const categories = [
    'AI Marketing',
    'Customer Experience', 
    'Advertising',
    'Content Marketing',
    'Data Analytics',
    'AI Ethics',
    'Business Automation',
    'Digital Marketing',
    'Technology Trends',
    'Industry Insights'
  ];

  // Calculate word count and reading time
  useEffect(() => {
    const words = editingPost.content?.split(/\s+/).filter(word => word.length > 0).length || 0;
    setWordCount(words);
    const minutes = Math.ceil(words / 200); // Average reading speed
    setReadingTime(`${minutes} min read`);
  }, [editingPost.content]);

  // Auto-generate SEO title if not set
  useEffect(() => {
    if (!editingPost.seoTitle && editingPost.title) {
      setEditingPost(prev => ({
        ...prev,
        seoTitle: editingPost.title
      }));
    }
  }, [editingPost.title, editingPost.seoTitle]);

  // Auto-generate SEO description if not set
  useEffect(() => {
    if (!editingPost.seoDescription && editingPost.description) {
      setEditingPost(prev => ({
        ...prev,
        seoDescription: editingPost.description
      }));
    }
  }, [editingPost.description, editingPost.seoDescription]);

  const updateField = (field: keyof BlogPostData, value: any) => {
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

  const addSeoKeyword = (keyword: string) => {
    if (keyword.trim() && !editingPost.seoKeywords?.includes(keyword.trim())) {
      updateField('seoKeywords', [...(editingPost.seoKeywords || []), keyword.trim()]);
    }
  };

  const removeSeoKeyword = (keywordToRemove: string) => {
    updateField('seoKeywords', editingPost.seoKeywords?.filter(keyword => keyword !== keywordToRemove) || []);
  };

  const handleSave = () => {
    // Auto-generate link if not set
    if (!editingPost.link && editingPost.title) {
      const slug = editingPost.title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '');
      updateField('link', `/blog/${slug}`);
    }

    // Auto-set read time
    if (!editingPost.readTime) {
      updateField('readTime', readingTime);
    }

    onSave(editingPost);
  };

  const insertText = (text: string) => {
    const textarea = document.getElementById('content-editor') as HTMLTextAreaElement;
    if (textarea) {
      const start = textarea.selectionStart;
      const end = textarea.selectionEnd;
      const content = editingPost.content || '';
      const newContent = content.substring(0, start) + text + content.substring(end);
      updateField('content', newContent);
      
      // Set cursor position after inserted text
      setTimeout(() => {
        textarea.focus();
        textarea.setSelectionRange(start + text.length, start + text.length);
      }, 0);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      {/* Header */}
      <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-xl font-bold text-gray-900">
              {isNew ? 'Create New Blog Post' : 'Edit Blog Post'}
            </h2>
            <p className="text-sm text-gray-600 mt-1">
              {wordCount} words • {readingTime} • {editingPost.status || 'draft'}
            </p>
          </div>
          <div className="flex gap-2">
            {onPreview && (
              <button
                onClick={() => onPreview(editingPost)}
                className="inline-flex items-center px-3 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
              >
                <Eye className="h-4 w-4 mr-2" />
                Preview
              </button>
            )}
            {onCancel && (
              <button
                onClick={onCancel}
                className="inline-flex items-center px-3 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
              >
                Cancel
              </button>
            )}
            <button
              onClick={handleSave}
              className="inline-flex items-center px-4 py-2 bg-[#f59d40] text-white rounded-md hover:bg-[#e88a2e] transition-colors"
            >
              <Save className="h-4 w-4 mr-2" />
              Save
            </button>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-200">
        <nav className="flex space-x-8 px-6">
          <button
            onClick={() => setActiveTab('content')}
            className={`py-4 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'content'
                ? 'border-[#f59d40] text-[#f59d40]'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            <FileText className="h-4 w-4 inline mr-2" />
            Content
          </button>
          <button
            onClick={() => setActiveTab('seo')}
            className={`py-4 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'seo'
                ? 'border-[#f59d40] text-[#f59d40]'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            <TrendingUp className="h-4 w-4 inline mr-2" />
            SEO
          </button>
          <button
            onClick={() => setActiveTab('settings')}
            className={`py-4 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'settings'
                ? 'border-[#f59d40] text-[#f59d40]'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            <Settings className="h-4 w-4 inline mr-2" />
            Settings
          </button>
        </nav>
      </div>

      {/* Content */}
      <div className="p-6">
        {activeTab === 'content' && (
          <div className="space-y-6">
            {/* Basic Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Title *
                </label>
                <input
                  type="text"
                  value={editingPost.title}
                  onChange={(e) => updateField('title', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-[#f59d40] focus:border-[#f59d40]"
                  placeholder="Enter blog post title..."
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Category *
                </label>
                <select
                  value={editingPost.category}
                  onChange={(e) => updateField('category', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-[#f59d40] focus:border-[#f59d40]"
                >
                  <option value="">Select category</option>
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Description *
              </label>
              <textarea
                value={editingPost.description}
                onChange={(e) => updateField('description', e.target.value)}
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-[#f59d40] focus:border-[#f59d40]"
                placeholder="Enter a compelling description for your blog post..."
              />
            </div>

            {/* Content Editor */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Content *
              </label>
              
              {/* Toolbar */}
              <div className="border border-gray-300 rounded-t-md bg-gray-50 p-2 flex flex-wrap gap-1">
                <button
                  onClick={() => insertText('**bold text**')}
                  className="p-1 hover:bg-gray-200 rounded"
                  title="Bold"
                >
                  <Bold className="h-4 w-4" />
                </button>
                <button
                  onClick={() => insertText('*italic text*')}
                  className="p-1 hover:bg-gray-200 rounded"
                  title="Italic"
                >
                  <Italic className="h-4 w-4" />
                </button>
                <button
                  onClick={() => insertText('\n- List item\n- Another item')}
                  className="p-1 hover:bg-gray-200 rounded"
                  title="Unordered List"
                >
                  <List className="h-4 w-4" />
                </button>
                <button
                  onClick={() => insertText('\n1. First item\n2. Second item')}
                  className="p-1 hover:bg-gray-200 rounded"
                  title="Ordered List"
                >
                  <ListOrdered className="h-4 w-4" />
                </button>
                <button
                  onClick={() => insertText('\n> This is a quote\n')}
                  className="p-1 hover:bg-gray-200 rounded"
                  title="Quote"
                >
                  <Quote className="h-4 w-4" />
                </button>
                <button
                  onClick={() => insertText('\n```\ncode block\n```\n')}
                  className="p-1 hover:bg-gray-200 rounded"
                  title="Code Block"
                >
                  <Code className="h-4 w-4" />
                </button>
              </div>
              
              <textarea
                id="content-editor"
                value={editingPost.content || ''}
                onChange={(e) => updateField('content', e.target.value)}
                rows={15}
                className="w-full px-3 py-2 border border-t-0 border-gray-300 rounded-b-md focus:ring-[#f59d40] focus:border-[#f59d40] font-mono text-sm"
                placeholder="Write your blog post content here... Use Markdown formatting for better structure."
              />
              
              <div className="mt-2 text-xs text-gray-500">
                Supports Markdown formatting. Use **bold**, *italic*, lists, quotes, and code blocks.
              </div>
            </div>

            {/* Meta Information */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Author *
                </label>
                <input
                  type="text"
                  value={editingPost.author}
                  onChange={(e) => updateField('author', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-[#f59d40] focus:border-[#f59d40]"
                  placeholder="Author name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Date
                </label>
                <input
                  type="text"
                  value={editingPost.date}
                  onChange={(e) => updateField('date', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-[#f59d40] focus:border-[#f59d40]"
                  placeholder="e.g., Mar 15, 2025"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Read Time
                </label>
                <input
                  type="text"
                  value={editingPost.readTime}
                  onChange={(e) => updateField('readTime', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-[#f59d40] focus:border-[#f59d40]"
                  placeholder="e.g., 5 min read"
                />
              </div>
            </div>

            {/* Tags */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Tags
              </label>
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
                  <Tag className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'seo' && (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                SEO Title
              </label>
              <input
                type="text"
                value={editingPost.seoTitle || ''}
                onChange={(e) => updateField('seoTitle', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-[#f59d40] focus:border-[#f59d40]"
                placeholder="SEO optimized title (50-60 characters)"
              />
              <div className="mt-1 text-xs text-gray-500">
                {(editingPost.seoTitle?.length || 0)} / 60 characters
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                SEO Description
              </label>
              <textarea
                value={editingPost.seoDescription || ''}
                onChange={(e) => updateField('seoDescription', e.target.value)}
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-[#f59d40] focus:border-[#f59d40]"
                placeholder="SEO meta description (150-160 characters)"
              />
              <div className="mt-1 text-xs text-gray-500">
                {(editingPost.seoDescription?.length || 0)} / 160 characters
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                SEO Keywords
              </label>
              <div className="flex flex-wrap gap-2 mb-2">
                {editingPost.seoKeywords?.map((keyword, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
                  >
                    {keyword}
                    <button
                      type="button"
                      onClick={() => removeSeoKeyword(keyword)}
                      className="ml-1 hover:bg-blue-200 rounded-full w-4 h-4 flex items-center justify-center"
                    >
                      ×
                    </button>
                  </span>
                ))}
              </div>
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Add a keyword..."
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-[#f59d40] focus:border-[#f59d40]"
                  onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                      addSeoKeyword(e.currentTarget.value);
                      e.currentTarget.value = '';
                    }
                  }}
                />
                <button
                  type="button"
                  onClick={() => {
                    const input = document.querySelector('input[placeholder="Add a keyword..."]') as HTMLInputElement;
                    if (input && input.value.trim()) {
                      addSeoKeyword(input.value);
                      input.value = '';
                    }
                  }}
                  className="px-3 py-2 bg-[#f59d40] text-white rounded-md hover:bg-[#e88a2e] transition-colors"
                >
                  <Tag className="h-4 w-4" />
                </button>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                URL Slug
              </label>
              <input
                type="text"
                value={editingPost.link || ''}
                onChange={(e) => updateField('link', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-[#f59d40] focus:border-[#f59d40]"
                placeholder="/blog/your-post-slug"
              />
            </div>
          </div>
        )}

        {activeTab === 'settings' && (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Status
              </label>
              <select
                value={editingPost.status || 'draft'}
                onChange={(e) => updateField('status', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-[#f59d40] focus:border-[#f59d40]"
              >
                <option value="draft">Draft</option>
                <option value="review">Review</option>
                <option value="published">Published</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Publish Date
              </label>
              <input
                type="datetime-local"
                value={editingPost.publishDate || ''}
                onChange={(e) => updateField('publishDate', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-[#f59d40] focus:border-[#f59d40]"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Featured Image URL
              </label>
              <input
                type="url"
                value={editingPost.image || ''}
                onChange={(e) => updateField('image', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-[#f59d40] focus:border-[#f59d40]"
                placeholder="https://example.com/image.jpg"
              />
            </div>

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
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogEditor; 