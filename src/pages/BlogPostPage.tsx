import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Tag, Share2, Twitter, Linkedin, Copy, BookOpen, Clock, User } from 'lucide-react';
import Layout from '../components/layout/Layout';
import { blogPosts } from '../data/blogPosts';

const BlogPostPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [copied, setCopied] = useState(false);

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
      'marketing-tools-should-make-life-easier': '#D58F03', // Dark Yellow
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

  const handleShare = (method: 'copy' | 'twitter' | 'linkedin') => {
    const url = window.location.href;
    const title = post?.title || 'Check out this blog post';
    
    switch (method) {
      case 'copy':
        navigator.clipboard.writeText(url);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
        break;
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`, '_blank');
        break;
      case 'linkedin':
        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank');
        break;
    }
  };

  const post = blogPosts.find(p => p.link === `/blog/${slug}`);

  if (!post) {
    return (
      <Layout>
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Blog Post Not Found</h1>
            <p className="text-gray-600 mb-8">The blog post you're looking for doesn't exist.</p>
            <Link
              to="/blog"
              className="inline-flex items-center px-4 py-2 bg-[#f59d40] text-white rounded-lg hover:bg-[#e88a2e] transition-colors"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Blog
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  // Get related posts (excluding current post)
  const relatedPosts = blogPosts
    .filter(p => p.id !== post.id && p.category === post.category)
    .slice(0, 3);

  const blogColor = getBlogColor(post.id);

  // Enhanced markdown rendering function
  const renderMarkdown = (content: string) => {
    return content
      // Headers
      .replace(/^# (.*$)/gim, '<h1 class="text-4xl font-bold text-gray-900 mb-8 mt-12 first:mt-0 leading-tight">$1</h1>')
      .replace(/^## (.*$)/gim, '<h2 class="text-2xl font-bold text-gray-900 mb-6 mt-10 leading-tight">$1</h2>')
      .replace(/^### (.*$)/gim, '<h3 class="text-xl font-bold text-gray-900 mb-4 mt-8 leading-tight">$1</h3>')
      
      // Bold and italic
      .replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold text-gray-900">$1</strong>')
      .replace(/\*(.*?)\*/g, '<em class="italic">$1</em>')
      
      // Horizontal rules
      .replace(/^---$/gim, '<hr class="my-12 border-2 border-gray-200 rounded-full">')
      
      // Blockquotes
      .replace(/^> (.*$)/gim, '<blockquote class="border-l-4 border-[#f59d40] pl-6 py-4 my-8 bg-orange-50 rounded-r-lg"><p class="text-lg text-gray-700 italic">$1</p></blockquote>')
      
      // Lists - improved handling with proper spacing
      .replace(/^- (.*$)/gim, '<li class="mb-4 text-gray-700 leading-relaxed">$1</li>')
      .replace(/(<li.*<\/li>)/gm, '<ul class="list-disc pl-8 mb-8 space-y-3">$1</ul>')
      
      // Numbered lists - improved regex to handle various formats
      .replace(/^\d+\. (.*$)/gim, '<li class="mb-4 text-gray-700 leading-relaxed">$1</li>')
      .replace(/(<li.*<\/li>)/gm, '<ol class="list-decimal pl-8 mb-8 space-y-3">$1</ol>')
      
      // Checkboxes
      .replace(/^- \[ \] (.*$)/gim, '<li class="mb-4 text-gray-700 leading-relaxed flex items-start"><input type="checkbox" class="mr-3 mt-1" disabled />$1</li>')
      .replace(/^- \[x\] (.*$)/gim, '<li class="mb-4 text-gray-700 leading-relaxed flex items-start"><input type="checkbox" class="mr-3 mt-1" checked disabled />$1</li>')
      
      // Bold text on its own line (for emphasis)
      .replace(/^\*\*(.*?)\*\*$/gim, '<p class="mb-6 text-lg font-semibold text-gray-900">$1</p>')
      
      // Paragraphs with better spacing
      .replace(/\n\n/g, '</p><p class="mb-8 text-gray-700 leading-relaxed text-lg">')
      .replace(/^/, '<p class="mb-8 text-gray-700 leading-relaxed text-lg">')
      .replace(/$/, '</p>');
  };

  return (
    <Layout>
      {/* Enhanced Header Banner */}
      <div 
        className="relative h-48 md:h-64"
        style={{ 
          background: `linear-gradient(135deg, ${blogColor} 0%, ${blogColor}dd 50%, ${blogColor}aa 100%)`
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black bg-opacity-20"></div>
        
        <div className="relative z-10 container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            {/* Back to blog link */}
            <div className="mb-6">
              <Link 
                to="/blog"
                className="inline-flex items-center text-white hover:text-orange-200 transition-colors text-sm font-medium"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Blog
              </Link>
            </div>
            
            {/* Title and Meta */}
            <div className="text-center">
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                {post.title}
              </h1>
              
              {/* Meta Information */}
              <div className="flex flex-wrap items-center justify-center gap-6 text-white text-sm">
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>{post.readTime}</span>
                </div>
                <div className="flex items-center gap-2">
                  <BookOpen className="h-4 w-4" />
                  <span>{post.date}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Category and Tags */}
          <div className="mb-12">
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span 
                className="inline-block px-4 py-2 text-white text-sm font-semibold rounded-full"
                style={{ backgroundColor: blogColor }}
              >
                {post.category}
              </span>
              {post.featured && (
                <span className="inline-block px-4 py-2 bg-yellow-400 text-yellow-900 text-sm font-semibold rounded-full">
                  ⭐ Featured
                </span>
              )}
            </div>
            
            {/* Tags */}
            {post.tags && post.tags.length > 0 && (
              <div className="flex flex-wrap gap-3">
                {post.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors"
                  >
                    <Tag className="h-3 w-3 mr-1" />
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Article Content */}
          <article className="prose prose-lg max-w-none">
            <div className="text-gray-700 leading-relaxed">
              {post.content ? (
                <div 
                  className="prose prose-lg max-w-none"
                  dangerouslySetInnerHTML={{ 
                    __html: renderMarkdown(post.content)
                  }}
                />
              ) : (
                <div>
                  <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                    {post.description}
                  </p>
                  <p className="text-gray-700 mb-6 text-lg">
                    This is a comprehensive article about {post.title.toLowerCase()}. 
                    The content would include detailed insights, practical examples, and actionable strategies.
                  </p>
                  <p className="text-gray-700 mb-6 text-lg">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                  <p className="text-gray-700 mb-6 text-lg">
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </p>
                </div>
              )}
            </div>
          </article>

          {/* Enhanced Share Section */}
          <div className="mt-16 pt-8 border-t-2 border-gray-200">
            <div className="bg-gradient-to-r from-orange-50 to-yellow-50 rounded-xl p-8">
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="mb-6 md:mb-0">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center">
                    <Share2 className="h-5 w-5 mr-2" />
                    Share this article
                  </h3>
                  <p className="text-gray-600">Help others discover this valuable content</p>
                </div>
                <div className="flex space-x-3">
                  <button
                    onClick={() => handleShare('copy')}
                    className="px-6 py-3 bg-white text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium border border-gray-200 flex items-center"
                  >
                    <Copy className="h-4 w-4 mr-2" />
                    {copied ? 'Copied!' : 'Copy Link'}
                  </button>
                  <button
                    onClick={() => handleShare('twitter')}
                    className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors text-sm font-medium flex items-center"
                  >
                    <Twitter className="h-4 w-4 mr-2" />
                    Twitter
                  </button>
                  <button
                    onClick={() => handleShare('linkedin')}
                    className="px-6 py-3 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-colors text-sm font-medium flex items-center"
                  >
                    <Linkedin className="h-4 w-4 mr-2" />
                    LinkedIn
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Related Articles */}
          {relatedPosts.length > 0 && (
            <div className="mt-20">
              <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Related Articles</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {relatedPosts.map((relatedPost) => {
                  const relatedColor = getBlogColor(relatedPost.id);
                  
                  return (
                    <div key={relatedPost.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                      <div 
                        className="h-32"
                        style={{ 
                          background: `linear-gradient(135deg, ${relatedColor} 0%, ${relatedColor}dd 50%, ${relatedColor}aa 100%)`
                        }}
                      ></div>
                      <div className="p-6">
                        <div className="flex items-center gap-2 mb-3">
                          <span 
                            className="inline-block px-2 py-1 text-white text-xs font-medium rounded-full"
                            style={{ backgroundColor: relatedColor }}
                          >
                            {relatedPost.category}
                          </span>
                          <span className="text-gray-500 text-xs">{relatedPost.readTime}</span>
                        </div>
                        <h4 className="font-bold text-gray-900 mb-3 line-clamp-2 text-lg leading-tight">
                          {relatedPost.title}
                        </h4>
                        <p className="text-gray-600 text-sm mb-4 line-clamp-3 leading-relaxed">
                          {relatedPost.description}
                        </p>
                        <Link
                          to={relatedPost.link}
                          className="inline-flex items-center text-[#f59d40] hover:text-[#e88a2e] text-sm font-semibold transition-colors"
                        >
                          Read More 
                          <ArrowLeft className="h-4 w-4 ml-1 rotate-180" />
                        </Link>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default BlogPostPage; 