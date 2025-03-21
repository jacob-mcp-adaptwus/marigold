import React, { useEffect } from 'react';
import Layout from '../components/layout/Layout';
import { 
  CheckCircle2, 
  ArrowRight, 
  BookText, 
  Video, 
  Brain,
  Calendar,
  Clock,
  User
} from 'lucide-react';
import { useLocation } from 'react-router-dom';

interface ResourceCardProps {
  title: string;
  description: string;
  date?: string;
  author?: string;
  readTime?: string;
  category: string;
  image?: React.ReactNode;
  link: string;
  color: string;
}

const ResourceCard: React.FC<ResourceCardProps> = ({
  title,
  description,
  date,
  author,
  readTime,
  category,
  image,
  link,
  color
}) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden transition-all hover:shadow-xl border border-gray-100">
      {/* Image Section */}
      <div className="relative h-48 bg-gray-50 overflow-hidden">
        {image || (
          <div className="absolute inset-0 flex items-center justify-center">
            {category === "Blog" && <BookText className="h-16 w-16" style={{ color }} />}
            {category === "Webinar" && <Video className="h-16 w-16" style={{ color }} />}
            {category === "GPT" && <Brain className="h-16 w-16" style={{ color }} />}
          </div>
        )}
        <div className="absolute top-0 right-0 m-2 px-2 py-1 rounded text-xs font-medium text-white" style={{ backgroundColor: color }}>
          {category}
        </div>
      </div>
      
      {/* Content Section */}
      <div className="p-5">
        <h3 className="text-lg font-semibold text-[#2a2b2a] leading-tight mb-2">{title}</h3>
        <p className="text-gray-500 text-sm mb-4 line-clamp-2">{description}</p>
        
        {/* Metadata */}
        <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
          {date && (
            <div className="flex items-center">
              <Calendar className="h-3 w-3 mr-1" />
              <span>{date}</span>
            </div>
          )}
          {author && (
            <div className="flex items-center">
              <User className="h-3 w-3 mr-1" />
              <span>{author}</span>
            </div>
          )}
          {readTime && (
            <div className="flex items-center">
              <Clock className="h-3 w-3 mr-1" />
              <span>{readTime}</span>
            </div>
          )}
        </div>
        
        {/* Link */}
        <a 
          href={link}
          className="inline-flex items-center text-sm font-medium"
          style={{ color }}
        >
          Read More
          <ArrowRight className="ml-1 h-4 w-4" />
        </a>
      </div>
    </div>
  );
};

interface ResourceSectionProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  resources: ResourceCardProps[];
  ctaText: string;
  ctaLink: string;
}

const ResourceSection: React.FC<ResourceSectionProps> = ({
  title,
  description,
  icon,
  color,
  resources,
  ctaText,
  ctaLink
}) => {
  const sectionId = title.toLowerCase().replace(/\s+/g, '-');
  
  return (
    <div 
      id={sectionId} 
      className="py-16 px-4 sm:px-6 lg:px-8 scroll-mt-24 md:scroll-mt-28 border-b border-gray-200"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-2 rounded-full mb-4" style={{ backgroundColor: `${color}20` }}>
            <div className="h-10 w-10" style={{ color }}>
              {icon}
            </div>
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-[#2a2b2a]">{title}</h2>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-500">{description}</p>
        </div>
        
        {/* Resource Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
          {resources.map((resource, idx) => (
            <ResourceCard key={idx} {...resource} />
          ))}
        </div>
        
        {/* CTA Button */}
        <div className="text-center">
          <a
            href={ctaLink}
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white focus:outline-none focus:ring-2 focus:ring-offset-2"
            style={{ backgroundColor: color, boxShadow: `0 4px 6px -1px ${color}20` }}
          >
            {ctaText}
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>
    </div>
  );
};

const ResourcesPage: React.FC = () => {
  const location = useLocation();
  
  // Scroll to the hash fragment after the page loads
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.substring(1); // Remove the leading #
      const element = document.getElementById(id);
      if (element) {
        // Add a slight delay to make sure page is fully rendered
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 300);
      }
    }
  }, [location]);

  // Blog resources
  const blogResources: ResourceCardProps[] = [
    {
      title: "Leveraging AI to Transform Your Marketing Strategy",
      description: "Learn how AI-powered solutions can revolutionize your marketing efforts and drive better results.",
      date: "Mar 10, 2025",
      author: "Sarah Johnson",
      readTime: "5 min read",
      category: "Blog",
      link: "/blog",
      color: "#2a2b2a"
    },
    {
      title: "The Future of Customer Engagement with AI",
      description: "Discover how artificial intelligence is reshaping the way businesses connect with their customers.",
      date: "Feb 28, 2025",
      author: "Michael Chen",
      readTime: "8 min read",
      category: "Blog",
      link: "/blog",
      color: "#2a2b2a"
    },
    {
      title: "5 Ways to Optimize Your Ad Campaigns with dAisy",
      description: "Practical tips for getting the most out of your advertising budget using our AI-powered platform.",
      date: "Feb 15, 2025",
      author: "Alex Rivera",
      readTime: "6 min read",
      category: "Blog",
      link: "/blog",
      color: "#2a2b2a"
    },
  ];

  // Webinar resources
  const webinarResources: ResourceCardProps[] = [
    {
      title: "Mastering Cross-Platform Ad Management",
      description: "Join our experts as they walk through strategies for managing ads across multiple platforms efficiently.",
      date: "Apr 5, 2025",
      author: "David Miller",
      readTime: "45 minutes",
      category: "Webinar",
      link: "/webinars/cross-platform-management",
      color: "#bb141a"
    },
    {
      title: "Digital Transformation: Integrating AI Into Your Business",
      description: "Learn how to successfully implement AI solutions to drive growth and efficiency in your organization.",
      date: "Mar 22, 2025",
      author: "Jennifer Lee",
      readTime: "60 minutes",
      category: "Webinar",
      link: "/webinars/digital-transformation",
      color: "#bb141a"
    },
    {
      title: "Building Customer Loyalty with Personalized Marketing",
      description: "Discover how to use AI to create personalized marketing campaigns that foster long-term customer relationships.",
      date: "Mar 8, 2025",
      author: "Robert Taylor",
      readTime: "50 minutes",
      category: "Webinar",
      link: "/webinars/personalized-marketing",
      color: "#bb141a"
    },
  ];

  // GPT resources
  const gptResources: ResourceCardProps[] = [
    {
      title: "Content Creator GPT",
      description: "A specialized GPT designed to help you create engaging content for your marketing campaigns.",
      category: "GPT",
      link: "/gpts/content-creator",
      color: "#f59d40"
    },
    {
      title: "Ad Analysis GPT",
      description: "Upload your ad performance data and get AI-powered insights and recommendations for optimization.",
      category: "GPT",
      link: "/gpts/ad-analysis",
      color: "#f59d40"
    },
    {
      title: "Customer Support Assistant GPT",
      description: "Enhance your customer service with this GPT trained to handle common support inquiries.",
      category: "GPT",
      link: "/gpts/support-assistant",
      color: "#f59d40"
    },
  ];

  const resourceSections: ResourceSectionProps[] = [
    {
      title: "Blog",
      description: "Stay up-to-date with the latest insights, tips, and trends in digital marketing and AI technology.",
      icon: <BookText className="h-10 w-10" />,
      color: "#2a2b2a",
      resources: blogResources,
      ctaText: "View All Articles",
      ctaLink: "/blog"
    },
    {
      title: "On Demand Webinars",
      description: "Access our library of educational webinars featuring industry experts discussing strategies and best practices.",
      icon: <Video className="h-10 w-10" />,
      color: "#bb141a",
      resources: webinarResources,
      ctaText: "Browse All Webinars",
      ctaLink: "/webinars"
    },
    {
      title: "GPTs",
      description: "Explore our collection of specialized AI assistants designed to help you with specific tasks and challenges.",
      icon: <Brain className="h-10 w-10" />,
      color: "#f59d40",
      resources: gptResources,
      ctaText: "Discover All GPTs",
      ctaLink: "/gpts"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <div className="bg-[#f8f8f8] pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-[#2a2b2a] sm:text-5xl md:text-6xl">
              <span className="inline-block">Knowledge </span>
              <span className="inline-block text-[#f59d40]">Resources</span>
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-500">
              Explore our collection of articles, webinars, and AI tools designed to help you grow your business.
            </p>
          </div>
        </div>
      </div>

      {/* Navigation Cards */}
      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {resourceSections.map((section, index) => (
              <a 
                key={index}
                href={`#${section.title.toLowerCase().replace(/\s+/g, '-')}`}
                className="bg-white overflow-hidden shadow rounded-lg hover:shadow-md transition-shadow duration-300"
              >
                <div className="p-5">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <div className="h-10 w-10 rounded-md flex items-center justify-center" style={{ color: section.color }}>
                        {section.icon}
                      </div>
                    </div>
                    <div className="ml-3">
                      <h3 className="text-lg font-medium text-[#2a2b2a]">{section.title}</h3>
                    </div>
                  </div>
                  <div className="mt-4 text-sm text-gray-500 line-clamp-2">
                    {section.description}
                  </div>
                </div>
                <div className="bg-gray-50 px-5 py-3 flex justify-between items-center">
                  <span className="text-xs font-medium text-gray-500 uppercase">Explore</span>
                  <ArrowRight className="h-4 w-4 text-gray-400" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Resource Sections */}
      <div className="bg-white py-12">
        {resourceSections.map((section, index) => (
          <ResourceSection
            key={index}
            title={section.title}
            description={section.description}
            icon={section.icon}
            color={section.color}
            resources={section.resources}
            ctaText={section.ctaText}
            ctaLink={section.ctaLink}
          />
        ))}
      </div>
    </Layout>
  );
};

export default ResourcesPage; 