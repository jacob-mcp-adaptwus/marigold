import React from 'react';
import Layout from '../components/layout/Layout';
import { 
  ArrowRight, 
  BookText,
  Calendar,
  Clock,
  User,
  Search
} from 'lucide-react';

interface BlogPostProps {
  title: string;
  description: string;
  date: string;
  author: string;
  readTime: string;
  category: string;
  image?: string;
  link: string;
}

const BlogPost: React.FC<BlogPostProps> = ({
  title,
  description,
  date,
  author,
  readTime,
  category,
  image,
  link
}) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden transition-all hover:shadow-xl border border-gray-100">
      {/* Image Section */}
      <div className="relative h-48 bg-gray-50 overflow-hidden">
        {image ? (
          <img src={image} alt={title} className="w-full h-full object-cover" />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <BookText className="h-16 w-16 text-[#2a2b2a]" />
          </div>
        )}
        <div className="absolute top-0 right-0 m-2 px-2 py-1 rounded text-xs font-medium text-white bg-[#2a2b2a]">
          {category}
        </div>
      </div>
      
      {/* Content Section */}
      <div className="p-5">
        <h3 className="text-xl font-semibold text-[#2a2b2a] leading-tight mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">{description}</p>
        
        {/* Metadata */}
        <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
          <div className="flex items-center">
            <Calendar className="h-3 w-3 mr-1" />
            <span>{date}</span>
          </div>
          <div className="flex items-center">
            <User className="h-3 w-3 mr-1" />
            <span>{author}</span>
          </div>
          <div className="flex items-center">
            <Clock className="h-3 w-3 mr-1" />
            <span>{readTime}</span>
          </div>
        </div>
        
        {/* Link */}
        <a 
          href={link}
          className="inline-flex items-center text-sm font-medium text-[#2a2b2a]"
        >
          Read Full Article
          <ArrowRight className="ml-1 h-4 w-4" />
        </a>
      </div>
    </div>
  );
};

const BlogPage: React.FC = () => {
  // Sample blog posts data
  const blogPosts: BlogPostProps[] = [
    {
      title: "Leveraging AI to Transform Your Marketing Strategy",
      description: "Learn how AI-powered solutions can revolutionize your marketing efforts and drive better results. This comprehensive guide explores practical applications of artificial intelligence in modern marketing campaigns, showing real-world examples of successful implementations and strategies you can adopt today.",
      date: "Mar 10, 2025",
      author: "Sarah Johnson",
      readTime: "5 min read",
      category: "AI Marketing",
      link: "/blog/ai-marketing-strategy"
    },
    {
      title: "The Future of Customer Engagement with AI",
      description: "Discover how artificial intelligence is reshaping the way businesses connect with their customers. From personalized experiences to automated interactions that feel human, we explore the cutting-edge technologies that are setting new standards for customer engagement in the digital age.",
      date: "Feb 28, 2025",
      author: "Michael Chen",
      readTime: "8 min read",
      category: "Customer Experience",
      link: "/blog/future-customer-engagement"
    },
    {
      title: "5 Ways to Optimize Your Ad Campaigns with dAisy",
      description: "Practical tips for getting the most out of your advertising budget using our AI-powered platform. Learn how to leverage data-driven insights, automated optimization, and machine learning to create more effective campaigns that deliver measurable results and higher ROI.",
      date: "Feb 15, 2025",
      author: "Alex Rivera",
      readTime: "6 min read",
      category: "Advertising",
      link: "/blog/optimize-ad-campaigns"
    },
    {
      title: "The Role of AI in Content Creation",
      description: "How artificial intelligence is helping marketers create more effective content at scale. Explore the tools and techniques that are transforming content marketing, from AI-generated copy to intelligent content curation and personalization strategies.",
      date: "Feb 05, 2025",
      author: "Emily Zhang",
      readTime: "7 min read",
      category: "Content Marketing",
      link: "/blog/ai-content-creation"
    },
    {
      title: "Understanding Audience Behavior Through AI Analytics",
      description: "Deep dive into how AI analytics tools can help you gain unprecedented insights into your audience's behaviors and preferences. Learn how to use these insights to craft more targeted campaigns and marketing strategies that resonate with your ideal customers.",
      date: "Jan 22, 2025",
      author: "James Wilson",
      readTime: "10 min read",
      category: "Data Analytics",
      link: "/blog/ai-audience-analytics"
    },
    {
      title: "The Ethics of AI in Marketing: Finding the Balance",
      description: "Exploring the ethical considerations and best practices for implementing AI in your marketing strategy responsibly. This thought-provoking piece examines privacy concerns, transparency issues, and how to maintain authentic customer relationships in an age of automation.",
      date: "Jan 15, 2025",
      author: "Dr. Lisa Patel",
      readTime: "12 min read",
      category: "AI Ethics",
      link: "/blog/ethics-ai-marketing"
    }
  ];

  // Categories for filter
  const categories = ["All", "AI Marketing", "Customer Experience", "Advertising", "Content Marketing", "Data Analytics", "AI Ethics"];

  return (
    <Layout>
      {/* Hero Section */}
      <div className="bg-[#f8f8f8] pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-[#2a2b2a] sm:text-5xl md:text-6xl">
              <span className="inline-block">Our&nbsp;</span>
              <span className="inline-block text-[#f59d40]">Blog</span>
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-500">
              Explore AI strategies, business automation tips, digital marketing insights, 
              <br />
              and technology trends that help you deliver results faster and unplug sooner.
            </p>
          </div>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="bg-white py-8 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Search */}
            <div className="w-full md:w-1/3 mb-4 md:mb-0">
              <div className="relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  className="focus:ring-[#f59d40] focus:border-[#f59d40] block w-full pl-10 sm:text-sm border-gray-300 rounded-md py-2"
                  placeholder="Search articles..."
                />
              </div>
            </div>
            
            {/* Categories */}
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                    index === 0 
                      ? 'bg-[#2a2b2a] text-white' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Blog Posts Grid */}
      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <BlogPost key={index} {...post} />
            ))}
          </div>
          
          {/* Pagination */}
          <div className="mt-12 flex justify-center">
            <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
              <a
                href="#"
                className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
              >
                <span className="sr-only">Previous</span>
                <ArrowRight className="h-5 w-5 transform rotate-180" />
              </a>
              <a
                href="#"
                className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-[#2a2b2a] text-sm font-medium text-white"
              >
                1
              </a>
              <a
                href="#"
                className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                2
              </a>
              <a
                href="#"
                className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                3
              </a>
              <span className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700">
                ...
              </span>
              <a
                href="#"
                className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                8
              </a>
              <a
                href="#"
                className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
              >
                <span className="sr-only">Next</span>
                <ArrowRight className="h-5 w-5" />
              </a>
            </nav>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default BlogPage; 