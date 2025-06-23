import React, { useState } from 'react';
import { 
  ArrowRight, 
  ArrowLeft, 
  Check,
  FileText,
  User,
  Tag,
  Calendar,
  Settings,
  TrendingUp,
  Eye,
  X
} from 'lucide-react';
import { BlogPostData } from './BlogEditor';

interface BlogWizardProps {
  onComplete: (post: BlogPostData) => void;
  onCancel: () => void;
}

const BlogWizard: React.FC<BlogWizardProps> = ({ onComplete, onCancel }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [post, setPost] = useState<BlogPostData>({
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

  const updateField = (field: keyof BlogPostData, value: any) => {
    setPost(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const addTag = (tag: string) => {
    if (tag.trim() && !post.tags?.includes(tag.trim())) {
      updateField('tags', [...(post.tags || []), tag.trim()]);
    }
  };

  const removeTag = (tagToRemove: string) => {
    updateField('tags', post.tags?.filter(tag => tag !== tagToRemove) || []);
  };

  const nextStep = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleComplete = () => {
    // Auto-generate link if not set
    if (!post.link && post.title) {
      const slug = post.title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '');
      updateField('link', `/blog/${slug}`);
    }
    onComplete(post);
  };

  const isStepValid = () => {
    switch (currentStep) {
      case 1:
        return post.title.trim() !== '' && post.description.trim() !== '';
      case 2:
        return post.author.trim() !== '' && post.category !== '';
      case 3:
        return (post.content || '').trim() !== '';
      case 4:
        return true;
      default:
        return false;
    }
  };

  const renderStep1 = () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Basic Information</h3>
        <p className="text-gray-600 mb-6">Let's start with the essential details of your blog post.</p>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Title *
        </label>
        <input
          type="text"
          value={post.title}
          onChange={(e) => updateField('title', e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-[#f59d40] focus:border-[#f59d40]"
          placeholder="Enter your blog post title..."
        />
        <p className="mt-1 text-xs text-gray-500">
          {post.title.length}/100 characters
        </p>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Description *
        </label>
        <textarea
          value={post.description}
          onChange={(e) => updateField('description', e.target.value)}
          rows={3}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-[#f59d40] focus:border-[#f59d40]"
          placeholder="Write a compelling description for your blog post..."
        />
        <p className="mt-1 text-xs text-gray-500">
          {post.description.length}/200 characters
        </p>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Category *
        </label>
        <select
          value={post.category}
          onChange={(e) => updateField('category', e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-[#f59d40] focus:border-[#f59d40]"
        >
          <option value="">Select a category</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
    </div>
  );

  const renderStep2 = () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Author & Metadata</h3>
        <p className="text-gray-600 mb-6">Add author information and additional metadata.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Author *
          </label>
          <input
            type="text"
            value={post.author}
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
            value={post.date}
            onChange={(e) => updateField('date', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-[#f59d40] focus:border-[#f59d40]"
            placeholder="e.g., Mar 15, 2025"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Read Time
        </label>
        <input
          type="text"
          value={post.readTime}
          onChange={(e) => updateField('readTime', e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-[#f59d40] focus:border-[#f59d40]"
          placeholder="e.g., 5 min read"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Tags
        </label>
        <div className="flex flex-wrap gap-2 mb-2">
          {post.tags?.map((tag, index) => (
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
  );

  const renderStep3 = () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Content</h3>
        <p className="text-gray-600 mb-6">Write your blog post content. You can use Markdown formatting.</p>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Content *
        </label>
        <textarea
          value={post.content || ''}
          onChange={(e) => updateField('content', e.target.value)}
          rows={15}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-[#f59d40] focus:border-[#f59d40] font-mono text-sm"
          placeholder="Write your blog post content here... Use Markdown formatting for better structure."
        />
        <div className="mt-2 text-xs text-gray-500">
          Supports Markdown formatting. Use **bold**, *italic*, lists, quotes, and code blocks.
        </div>
        <div className="mt-2 text-xs text-gray-500">
          Word count: {(post.content || '').split(/\s+/).filter(word => word.length > 0).length}
        </div>
      </div>
    </div>
  );

  const renderStep4 = () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Settings & SEO</h3>
        <p className="text-gray-600 mb-6">Configure your post settings and SEO information.</p>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Status
        </label>
        <select
          value={post.status || 'draft'}
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
          URL Slug
        </label>
        <input
          type="text"
          value={post.link || ''}
          onChange={(e) => updateField('link', e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-[#f59d40] focus:border-[#f59d40]"
          placeholder="/blog/your-post-slug"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Featured Image URL
        </label>
        <input
          type="url"
          value={post.image || ''}
          onChange={(e) => updateField('image', e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-[#f59d40] focus:border-[#f59d40]"
          placeholder="https://example.com/image.jpg"
        />
      </div>

      <div className="flex items-center">
        <input
          type="checkbox"
          id="featured"
          checked={post.featured || false}
          onChange={(e) => updateField('featured', e.target.checked)}
          className="h-4 w-4 text-[#f59d40] focus:ring-[#f59d40] border-gray-300 rounded"
        />
        <label htmlFor="featured" className="ml-2 block text-sm text-gray-900">
          Featured Post
        </label>
      </div>

      {/* Preview */}
      <div className="border-t pt-6">
        <h4 className="text-md font-semibold text-gray-900 mb-4">Preview</h4>
        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="text-lg font-bold text-gray-900 mb-2">{post.title || 'Your Title Here'}</h3>
          <p className="text-gray-600 mb-3">{post.description || 'Your description here'}</p>
          <div className="flex items-center text-sm text-gray-500">
            <span>{post.author || 'Author'}</span>
            <span className="mx-2">•</span>
            <span>{post.date || 'Date'}</span>
            <span className="mx-2">•</span>
            <span>{post.readTime || 'Read time'}</span>
          </div>
        </div>
      </div>
    </div>
  );

  const steps = [
    { number: 1, title: 'Basic Info', icon: FileText },
    { number: 2, title: 'Author & Meta', icon: User },
    { number: 3, title: 'Content', icon: FileText },
    { number: 4, title: 'Settings', icon: Settings }
  ];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="border-b border-gray-200 px-6 py-4">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold text-[#2a2b2a]">Create New Blog Post</h2>
            <button
              onClick={onCancel}
              className="text-gray-500 hover:text-gray-700"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          
          {/* Progress Steps */}
          <div className="flex items-center justify-center mt-6">
            {steps.map((step, index) => (
              <div key={step.number} className="flex items-center">
                <div className={`flex items-center justify-center w-8 h-8 rounded-full ${
                  currentStep >= step.number 
                    ? 'bg-[#f59d40] text-white' 
                    : 'bg-gray-200 text-gray-600'
                }`}>
                  {currentStep > step.number ? (
                    <Check className="h-4 w-4" />
                  ) : (
                    <step.icon className="h-4 w-4" />
                  )}
                </div>
                <span className={`ml-2 text-sm font-medium ${
                  currentStep >= step.number ? 'text-[#f59d40]' : 'text-gray-500'
                }`}>
                  {step.title}
                </span>
                {index < steps.length - 1 && (
                  <div className={`w-12 h-0.5 mx-4 ${
                    currentStep > step.number ? 'bg-[#f59d40]' : 'bg-gray-200'
                  }`} />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {currentStep === 1 && renderStep1()}
          {currentStep === 2 && renderStep2()}
          {currentStep === 3 && renderStep3()}
          {currentStep === 4 && renderStep4()}
        </div>

        {/* Footer */}
        <div className="border-t border-gray-200 px-6 py-4">
          <div className="flex justify-between items-center">
            <button
              onClick={prevStep}
              disabled={currentStep === 1}
              className={`inline-flex items-center px-4 py-2 border border-gray-300 rounded-md text-sm font-medium ${
                currentStep === 1
                  ? 'text-gray-400 bg-gray-100 cursor-not-allowed'
                  : 'text-gray-700 bg-white hover:bg-gray-50'
              }`}
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Previous
            </button>

            <div className="flex gap-3">
              <button
                onClick={onCancel}
                className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
              >
                Cancel
              </button>
              
              {currentStep < 4 ? (
                <button
                  onClick={nextStep}
                  disabled={!isStepValid()}
                  className={`inline-flex items-center px-4 py-2 rounded-md text-sm font-medium ${
                    isStepValid()
                      ? 'bg-[#f59d40] text-white hover:bg-[#e88a2e]'
                      : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  Next
                  <ArrowRight className="h-4 w-4 ml-2" />
                </button>
              ) : (
                <button
                  onClick={handleComplete}
                  disabled={!isStepValid()}
                  className={`inline-flex items-center px-4 py-2 rounded-md text-sm font-medium ${
                    isStepValid()
                      ? 'bg-[#f59d40] text-white hover:bg-[#e88a2e]'
                      : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  <Check className="h-4 w-4 mr-2" />
                  Create Post
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogWizard; 