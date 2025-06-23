import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import BlogEditor, { BlogPostData } from '../components/blog/BlogEditor';
import { blogPosts } from '../data/blogPosts';
import { getTemplatesByCategory, getTemplateById } from '../data/blogTemplates';
import { 
  Plus, 
  Search,
  Filter,
  Grid,
  List,
  Trash2,
  Eye,
  Edit3,
  X,
  Download,
  Upload,
  FileText,
  Filter as FilterIcon
} from 'lucide-react';

const EnhancedBlogManagementPage: React.FC = () => {
  const [posts, setPosts] = useState<BlogPostData[]>(blogPosts);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedStatus, setSelectedStatus] = useState('All');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [showEditor, setShowEditor] = useState(false);
  const [editingPost, setEditingPost] = useState<BlogPostData | null>(null);
  const [showTemplates, setShowTemplates] = useState(false);
  const [templateCategory, setTemplateCategory] = useState('All');
  const [selectedPosts, setSelectedPosts] = useState<string[]>([]);

  const categories = ['All', ...Array.from(new Set(posts.map(p => p.category)))];
  const statuses = ['All', 'draft', 'review', 'published'];

  // Create a new empty blog post
  const createNewPost = (): BlogPostData => ({
    id: `post-${Date.now()}`,
    title: '',
    description: '',
    date: new Date().toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    }),
    author: '',
    readTime: '5 min read',
    category: '',
    link: '',
    tags: [],
    featured: false,
    content: '',
    status: 'draft'
  });

  // Filter posts based on search, category, and status
  const filteredPosts = posts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         (post.tags && post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase())));
    
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesStatus = selectedStatus === 'All' || post.status === selectedStatus;
    
    return matchesSearch && matchesCategory && matchesStatus;
  });

  // Handle saving a post
  const handleSavePost = (post: BlogPostData) => {
    if (editingPost) {
      // Update existing post
      setPosts(prev => prev.map(p => p.id === post.id ? post : p));
      setEditingPost(null);
    } else {
      // Add new post
      const newPost = { ...post, id: `post-${Date.now()}` };
      setPosts(prev => [newPost, ...prev]);
      setShowEditor(false);
    }
  };

  // Handle editing a post
  const handleEditPost = (post: BlogPostData) => {
    setEditingPost(post);
    setShowEditor(true);
  };

  // Handle deleting a post
  const handleDeletePost = (postId: string) => {
    if (window.confirm('Are you sure you want to delete this blog post?')) {
      setPosts(prev => prev.filter(p => p.id !== postId));
    }
  };

  // Handle preview a post
  const handlePreviewPost = (post: BlogPostData) => {
    // In a real application, this would open a preview modal or navigate to a preview page
    alert(`Preview: ${post.title}\n\nThis would open a preview of the blog post.`);
  };

  // Handle template selection
  const handleTemplateSelect = (templateId: string) => {
    const template = getTemplateById(templateId);
    if (template) {
      const newPost = {
        ...createNewPost(),
        ...template.template,
        id: `post-${Date.now()}`
      };
      setEditingPost(newPost);
      setShowTemplates(false);
      setShowEditor(true);
    }
  };

  // Handle bulk operations
  const handleBulkDelete = () => {
    if (window.confirm(`Are you sure you want to delete ${selectedPosts.length} posts?`)) {
      setPosts(prev => prev.filter(p => !selectedPosts.includes(p.id)));
      setSelectedPosts([]);
    }
  };

  const handleBulkPublish = () => {
    setPosts(prev => prev.map(p => 
      selectedPosts.includes(p.id) ? { ...p, status: 'published' as const } : p
    ));
    setSelectedPosts([]);
  };

  const handleBulkArchive = () => {
    setPosts(prev => prev.map(p => 
      selectedPosts.includes(p.id) ? { ...p, status: 'draft' as const } : p
    ));
    setSelectedPosts([]);
  };

  // Handle post selection
  const handlePostSelect = (postId: string) => {
    setSelectedPosts(prev => 
      prev.includes(postId) 
        ? prev.filter(id => id !== postId)
        : [...prev, postId]
    );
  };

  // Export posts
  const handleExport = () => {
    const dataStr = JSON.stringify(posts, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'blog-posts.json';
    link.click();
    URL.revokeObjectURL(url);
  };

  // Import posts
  const handleImport = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const importedPosts = JSON.parse(e.target?.result as string);
          setPosts(prev => [...prev, ...importedPosts]);
        } catch (error) {
          alert('Error importing posts. Please check the file format.');
        }
      };
      reader.readAsText(file);
    }
  };

  return (
    <Layout>
      {/* Header */}
      <div className="bg-[#f8f8f8] pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-4xl font-extrabold text-[#2a2b2a]">
                Enhanced Blog <span className="text-[#f59d40]">Management</span>
              </h1>
              <p className="mt-2 text-lg text-gray-600">
                Create, edit, and manage your blog posts with AI-powered tools
              </p>
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => setShowTemplates(true)}
                className="inline-flex items-center px-4 py-2 bg-[#bb141a] text-white rounded-md hover:bg-[#a01218] transition-colors"
              >
                <FileText className="h-4 w-4 mr-2" />
                Use Template
              </button>
              <button
                onClick={() => {
                  setEditingPost(createNewPost());
                  setShowEditor(true);
                }}
                className="inline-flex items-center px-4 py-2 bg-[#f59d40] text-white rounded-md hover:bg-[#e88a2e] transition-colors"
              >
                <Plus className="h-4 w-4 mr-2" />
                Add New Post
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Template Selection Modal */}
      {showTemplates && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-4xl w-full mx-4 max-h-[80vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-[#2a2b2a]">Choose a Template</h2>
              <button
                onClick={() => setShowTemplates(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            
            {/* Template Category Filter */}
            <div className="mb-6">
              <select
                value={templateCategory}
                onChange={(e) => setTemplateCategory(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-md focus:ring-[#f59d40] focus:border-[#f59d40]"
              >
                {getTemplatesByCategory('All').map((template) => (
                  <option key={template.category} value={template.category}>
                    {template.category}
                  </option>
                ))}
              </select>
            </div>

            {/* Templates Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {getTemplatesByCategory(templateCategory).map((template) => (
                <div key={template.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                  <h3 className="text-lg font-semibold text-[#2a2b2a] mb-2">{template.name}</h3>
                  <p className="text-gray-600 mb-3">{template.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">{template.category}</span>
                    <button
                      onClick={() => handleTemplateSelect(template.id)}
                      className="px-3 py-1 bg-[#f59d40] text-white rounded-md hover:bg-[#e88a2e] transition-colors"
                    >
                      Use Template
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Blog Editor */}
      {showEditor && (
        <div className="bg-white border-b border-gray-200 py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <BlogEditor
              post={editingPost || createNewPost()}
              onSave={handleSavePost}
              onPreview={handlePreviewPost}
              onCancel={() => {
                setShowEditor(false);
                setEditingPost(null);
              }}
              isNew={!editingPost}
            />
          </div>
        </div>
      )}

      {/* Filters and Search */}
      <div className="bg-white border-b border-gray-200 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative w-full lg:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search posts..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-[#f59d40] focus:border-[#f59d40]"
              />
            </div>

            {/* Filters */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Filter className="h-5 w-5 text-gray-400" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-3 py-2 border border-gray-300 rounded-md focus:ring-[#f59d40] focus:border-[#f59d40]"
                >
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex items-center gap-2">
                <FilterIcon className="h-5 w-5 text-gray-400" />
                <select
                  value={selectedStatus}
                  onChange={(e) => setSelectedStatus(e.target.value)}
                  className="px-3 py-2 border border-gray-300 rounded-md focus:ring-[#f59d40] focus:border-[#f59d40]"
                >
                  {statuses.map((status) => (
                    <option key={status} value={status}>
                      {status}
                    </option>
                  ))}
                </select>
              </div>

              {/* View Mode Toggle */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded ${viewMode === 'grid' ? 'bg-[#f59d40] text-white' : 'bg-gray-100 text-gray-600'}`}
                >
                  <Grid className="h-4 w-4" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded ${viewMode === 'list' ? 'bg-[#f59d40] text-white' : 'bg-gray-100 text-gray-600'}`}
                >
                  <List className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bulk Actions */}
      {selectedPosts.length > 0 && (
        <div className="bg-blue-50 border-b border-blue-200 py-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <span className="text-sm text-blue-700">
                  {selectedPosts.length} post{selectedPosts.length !== 1 ? 's' : ''} selected
                </span>
                <button
                  onClick={() => setSelectedPosts([])}
                  className="text-sm text-blue-600 hover:text-blue-800"
                >
                  Clear selection
                </button>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={handleBulkPublish}
                  className="px-3 py-1 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors text-sm"
                >
                  Publish
                </button>
                <button
                  onClick={handleBulkArchive}
                  className="px-3 py-1 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors text-sm"
                >
                  Archive
                </button>
                <button
                  onClick={handleBulkDelete}
                  className="px-3 py-1 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors text-sm"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Blog Posts */}
      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Stats */}
          <div className="mb-8 grid grid-cols-1 md:grid-cols-5 gap-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="text-2xl font-bold text-[#2a2b2a]">{posts.length}</div>
              <div className="text-sm text-gray-600">Total Posts</div>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="text-2xl font-bold text-[#f59d40]">
                {posts.filter(p => p.featured).length}
              </div>
              <div className="text-sm text-gray-600">Featured Posts</div>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="text-2xl font-bold text-[#bb141a]">
                {posts.filter(p => p.status === 'published').length}
              </div>
              <div className="text-sm text-gray-600">Published</div>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="text-2xl font-bold text-[#122B37]">
                {posts.filter(p => p.status === 'draft').length}
              </div>
              <div className="text-sm text-gray-600">Drafts</div>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="text-2xl font-bold text-[#041922]">
                {Array.from(new Set(posts.flatMap(p => p.tags || []))).length}
              </div>
              <div className="text-sm text-gray-600">Unique Tags</div>
            </div>
          </div>

          {/* Import/Export Actions */}
          <div className="mb-6 flex gap-3">
            <button
              onClick={handleExport}
              className="inline-flex items-center px-3 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
            >
              <Download className="h-4 w-4 mr-2" />
              Export Posts
            </button>
            <label className="inline-flex items-center px-3 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 cursor-pointer">
              <Upload className="h-4 w-4 mr-2" />
              Import Posts
              <input
                type="file"
                accept=".json"
                onChange={handleImport}
                className="hidden"
              />
            </label>
          </div>

          {/* Posts Grid/List */}
          {filteredPosts.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-gray-500 text-lg">No blog posts found</div>
              <p className="text-gray-400 mt-2">Try adjusting your search or filters</p>
            </div>
          ) : (
            <div className={viewMode === 'grid' 
              ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              : "space-y-6"
            }>
              {filteredPosts.map((post) => (
                <div key={post.id} className="relative">
                  <div className="relative group">
                    {/* Post Card */}
                    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
                      {/* Selection Checkbox */}
                      <div className="absolute top-4 left-4 z-10">
                        <input
                          type="checkbox"
                          checked={selectedPosts.includes(post.id)}
                          onChange={() => handlePostSelect(post.id)}
                          className="h-4 w-4 text-[#f59d40] focus:ring-[#f59d40] border-gray-300 rounded"
                        />
                      </div>

                      {/* Color Banner */}
                      <div 
                        className="relative h-20"
                        style={{ 
                          background: `linear-gradient(135deg, ${getBlogColor(post.id)} 0%, ${getBlogColor(post.id)}dd 50%, ${getBlogColor(post.id)}aa 100%)`
                        }}
                      >
                        {post.featured && (
                          <div className="absolute top-2 right-2">
                            <span className="bg-yellow-400 text-yellow-900 text-xs font-bold px-2 py-1 rounded-full">
                              Featured
                            </span>
                          </div>
                        )}
                        {post.status && (
                          <div className="absolute bottom-2 left-2">
                            <span className={`text-xs font-bold px-2 py-1 rounded-full ${
                              post.status === 'published' ? 'bg-green-100 text-green-800' :
                              post.status === 'review' ? 'bg-yellow-100 text-yellow-800' :
                              'bg-gray-100 text-gray-800'
                            }`}>
                              {post.status}
                            </span>
                          </div>
                        )}
                      </div>
                      
                      {/* Content */}
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
                        
                        {/* Title */}
                        <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight hover:text-orange-600 transition-colors">
                          {post.title}
                        </h3>
                        
                        {/* Description */}
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
                          <button
                            onClick={() => handlePreviewPost(post)}
                            className="inline-flex items-center px-4 py-2 bg-orange-500 text-white text-sm font-medium rounded-lg hover:bg-orange-600 transition-colors"
                          >
                            Preview
                            <Eye className="ml-2 h-4 w-4" />
                          </button>
                          
                          <div className="flex gap-2">
                            <button
                              onClick={() => handleEditPost(post)}
                              className="p-2 text-gray-500 hover:text-blue-600 transition-colors"
                              title="Edit post"
                            >
                              <Edit3 className="h-4 w-4" />
                            </button>
                            <button
                              onClick={() => handleDeletePost(post.id)}
                              className="p-2 text-gray-500 hover:text-red-600 transition-colors"
                              title="Delete post"
                            >
                              <Trash2 className="h-4 w-4" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

// Helper function to get blog color (same as in BlogTemplate)
const getBlogColor = (postId: string) => {
  const marigoldColors = [
    '#D58F03', // Dark Yellow
    '#122B37', // Gray
    '#041922', // mdGray
    '#bb141a'  // Red
  ];

  const colorMap: { [key: string]: string } = {
    'ai-marketing-strategy': '#D58F03',
    'future-customer-engagement': '#122B37',
    'optimize-ad-campaigns': '#bb141a',
    'ai-content-creation': '#041922',
    'ai-audience-analytics': '#D58F03',
    'ethics-ai-marketing': '#122B37',
    'automate-business-processes': '#bb141a',
    'chatgpt-marketing-prompts': '#041922',
    'ai-seo-strategies': '#D58F03',
    'social-media-automation': '#122B37',
    'ai-trends-2025': '#bb141a'
  };
  
  if (colorMap[postId]) {
    return colorMap[postId];
  }
  
  let hash = 0;
  for (let i = 0; i < postId.length; i++) {
    const char = postId.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash;
  }
  
  const colorIndex = Math.abs(hash) % marigoldColors.length;
  return marigoldColors[colorIndex];
};

export default EnhancedBlogManagementPage; 