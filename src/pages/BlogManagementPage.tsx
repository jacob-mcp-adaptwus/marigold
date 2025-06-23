import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import BlogTemplate, { BlogPostTemplate } from '../components/blog/BlogTemplate';
import { blogPosts, getCategories } from '../data/blogPosts';
import { 
  Plus, 
  Search, 
  Filter,
  Grid,
  List,
  Trash2,
  Eye,
  Edit3,
  X
} from 'lucide-react';

const BlogManagementPage: React.FC = () => {
  const [posts, setPosts] = useState<BlogPostTemplate[]>(blogPosts);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [showAddForm, setShowAddForm] = useState(false);
  const [editingPost, setEditingPost] = useState<BlogPostTemplate | null>(null);

  const categories = getCategories();

  // Create a new empty blog post template
  const createNewPost = (): BlogPostTemplate => ({
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
    featured: false
  });

  // Filter posts based on search and category
  const filteredPosts = posts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         (post.tags && post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase())));
    
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  // Handle saving a post
  const handleSavePost = (post: BlogPostTemplate) => {
    if (editingPost) {
      // Update existing post
      setPosts(prev => prev.map(p => p.id === post.id ? post : p));
      setEditingPost(null);
    } else {
      // Add new post
      const newPost = { ...post, id: `post-${Date.now()}` };
      setPosts(prev => [newPost, ...prev]);
      setShowAddForm(false);
    }
  };

  // Handle editing a post
  const handleEditPost = (post: BlogPostTemplate) => {
    setEditingPost(post);
  };

  // Handle deleting a post
  const handleDeletePost = (postId: string) => {
    if (window.confirm('Are you sure you want to delete this blog post?')) {
      setPosts(prev => prev.filter(p => p.id !== postId));
    }
  };

  // Handle preview a post
  const handlePreviewPost = (post: BlogPostTemplate) => {
    // In a real application, this would open a preview modal or navigate to a preview page
    alert(`Preview: ${post.title}\n\nThis would open a preview of the blog post.`);
  };

  return (
    <Layout>
      {/* Header */}
      <div className="bg-[#f8f8f8] pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-4xl font-extrabold text-[#2a2b2a]">
                Blog <span className="text-[#f59d40]">Management</span>
              </h1>
              <p className="mt-2 text-lg text-gray-600">
                Manage your blog posts and content
              </p>
            </div>
            <button
              onClick={() => setShowAddForm(true)}
              className="inline-flex items-center px-4 py-2 bg-[#f59d40] text-white rounded-md hover:bg-[#e88a2e] transition-colors"
            >
              <Plus className="h-4 w-4 mr-2" />
              Add New Post
            </button>
          </div>
        </div>
      </div>

      {/* Add New Post Form */}
      {showAddForm && (
        <div className="bg-white border-b border-gray-200 py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-[#2a2b2a]">Add New Blog Post</h2>
              <button
                onClick={() => setShowAddForm(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <BlogTemplate
              post={createNewPost()}
              onSave={handleSavePost}
              isEditing={true}
            />
          </div>
        </div>
      )}

      {/* Filters and Search */}
      <div className="bg-white border-b border-gray-200 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search posts..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-[#f59d40] focus:border-[#f59d40]"
              />
            </div>

            {/* Category Filter */}
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

      {/* Blog Posts */}
      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Stats */}
          <div className="mb-8 grid grid-cols-1 md:grid-cols-4 gap-4">
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
                {Array.from(new Set(posts.map(p => p.category))).length}
              </div>
              <div className="text-sm text-gray-600">Categories</div>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="text-2xl font-bold text-[#2a2b2a]">
                {Array.from(new Set(posts.flatMap(p => p.tags || []))).length}
              </div>
              <div className="text-sm text-gray-600">Unique Tags</div>
            </div>
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
                  {editingPost?.id === post.id ? (
                    <BlogTemplate
                      post={post}
                      onSave={handleSavePost}
                      isEditing={true}
                    />
                  ) : (
                    <div className="relative group">
                      <BlogTemplate
                        post={post}
                        showActions={false}
                      />
                      
                      {/* Action Overlay */}
                      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="flex gap-2">
                          <button
                            onClick={() => handlePreviewPost(post)}
                            className="p-2 bg-white rounded-full shadow-md hover:bg-gray-50"
                            title="Preview"
                          >
                            <Eye className="h-4 w-4 text-gray-600" />
                          </button>
                          <button
                            onClick={() => handleEditPost(post)}
                            className="p-2 bg-white rounded-full shadow-md hover:bg-gray-50"
                            title="Edit"
                          >
                            <Edit3 className="h-4 w-4 text-[#f59d40]" />
                          </button>
                          <button
                            onClick={() => handleDeletePost(post.id)}
                            className="p-2 bg-white rounded-full shadow-md hover:bg-gray-50"
                            title="Delete"
                          >
                            <Trash2 className="h-4 w-4 text-red-500" />
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default BlogManagementPage; 