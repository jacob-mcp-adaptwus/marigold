import React from 'react';
import Layout from '../components/layout/Layout';
import { 
  CheckCircle2, 
  ArrowRight, 
  Megaphone, 
  LayoutGrid, 
  Clock, 
  BarChart, 
  BarChart2, 
  BarChart3,
  Presentation,
  Layers 
} from 'lucide-react';

// Helper function to format DAIsy text with colors
const ColoredDaisy = () => (
  <>
    <span className="text-[#2a8735]">D</span>
    <span className="text-[#f59d40]">AI</span>
    <span className="text-[#2a8735]">sy</span>
  </>
);

// Helper function to process text that might contain dAisy
const formatWithDaisy = (text: string) => {
  if (text.includes('dAisy')) {
    const parts = text.split('dAisy');
    return (
      <>
        {parts[0]}<ColoredDaisy />{parts[1]}
      </>
    );
  }
  return text;
};

interface FeatureProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const Feature: React.FC<FeatureProps> = ({ title, description, icon }) => {
  return (
    <div className="flex items-start p-4">
      <div className="flex-shrink-0 mt-1">
        {icon}
      </div>
      <div className="ml-4">
        <h3 className="text-lg font-medium text-gray-900">{title}</h3>
        <p className="mt-1 text-sm text-gray-500">{description}</p>
      </div>
    </div>
  );
};

interface SolutionCardProps {
  title: string | React.ReactNode;
  description: string;
  longDescription: string | React.ReactNode;
  features: FeatureProps[];
  imageSrc: string;
  ctaText: string;
  ctaHref: string;
  color: string;
  isReversed?: boolean;
  id?: string;
}

const SolutionCard: React.FC<SolutionCardProps> = ({
  title,
  description,
  longDescription,
  features,
  imageSrc,
  ctaText,
  ctaHref,
  color,
  isReversed = false,
  id
}) => {
  return (
    <div id={id || (typeof title === 'string' ? title.toLowerCase().replace(/\s+/g, '-') : 'solution')} className="py-16 border-b border-gray-200 scroll-mt-20">
      <div className={`container mx-auto px-4 sm:px-6 lg:px-8 ${isReversed ? 'flex flex-col-reverse md:flex-row-reverse' : 'flex flex-col-reverse md:flex-row'} items-center gap-12`}>
        <div className="flex-1">
          <div className="max-w-xl">
            <h2 className="text-3xl font-bold tracking-tight text-[#2a2b2a] sm:text-4xl">
              {title}
            </h2>
            <p className="mt-3 text-xl text-gray-500">
              {description}
            </p>
            <p className="mt-4 text-gray-600">
              {longDescription}
            </p>
            <div className="mt-8 grid grid-cols-1 gap-4">
              {features.map((feature, index) => (
                <Feature
                  key={index}
                  title={feature.title}
                  description={feature.description}
                  icon={feature.icon}
                />
              ))}
            </div>
            <div className="mt-8">
              <a
                href={ctaHref}
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-[#bb141a] hover:bg-[#ea5830] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#bb141a]"
              >
                {ctaText}
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        <div className="flex-1 md:flex-initial md:w-2/5 flex items-center justify-center">
          <div className="p-8 rounded-lg bg-gray-50 flex items-center justify-center w-full max-w-sm aspect-video border border-gray-100">
            {(typeof title === 'string' && title === "dAisy Ad Management") || (id === "daisy-ad-management") ? (
              <Megaphone className="h-24 w-24 text-[#bb141a]" />
            ) : (typeof title === 'string' && title === "One11 Suite") ? (
              <LayoutGrid className="h-24 w-24 text-[#2a2b2a]" />
            ) : (
              <Presentation className="h-24 w-24 text-[#f59d40]" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const SolutionsPage: React.FC = () => {
  const solutions = [
    {
      title: <><ColoredDaisy /> Ad Management</>,
      description: "AI-powered advertising management that maximizes your ROI",
      longDescription: formatWithDaisy("Let dAisy do the heavy lifting! Our AI-powered ad management runs your campaigns 24/7, fine-tuning targeting, budgets, and performance—so you can sit back and watch the results roll in. Results faster, unplug sooner."),
      features: [
        {
          title: "Smart budget allocation",
          description: "Intelligent distribution of your ad spend to maximize performance",
          icon: <CheckCircle2 className="h-5 w-5 text-[#bb141a]" />
        },
        {
          title: "Automated Management Across Multiple Platforms",
          description: "Manage Google, Facebook, Instagram and TikTok ads from one dashboard",
          icon: <CheckCircle2 className="h-5 w-5 text-[#bb141a]" />
        },
        {
          title: "A/B testing automation",
          description: "Continuously test different ad variations to improve results",
          icon: <CheckCircle2 className="h-5 w-5 text-[#bb141a]" />
        },
        {
          title: "Real-time Analytics",
          description: "Clear dashboards showing your campaign performance at a glance",
          icon: <CheckCircle2 className="h-5 w-5 text-[#bb141a]" />
        },
        {
          title: "Smart Audience Targeting",
          description: "AI-driven audience segmentation to reach the right people",
          icon: <CheckCircle2 className="h-5 w-5 text-[#bb141a]" />
        }
      ],
      imageSrc: "/assets/images/daisy-dashboard.jpg",
      ctaText: "View Pricing",
      ctaHref: "/daisy",
      color: "#bb141a",
      id: "daisy-ad-management"
    },
    {
      title: "One11 Suite",
      description: "All-in-one business management platform for growing companies",
      longDescription: "Juggling customers, marketing, and invoices? The One11 Suite keeps it all in one place, automating the busywork so you can focus on growing your business (or finally taking that coffee break).",
      features: [
        {
          title: "Customer Relationship Management",
          description: "Track leads, deals, and customer interactions in one place",
          icon: <CheckCircle2 className="h-5 w-5 text-[#2a2b2a]" />
        },
        {
          title: "Appointments / Bookings",
          description: "Let clients book appointments directly into your calendar",
          icon: <CheckCircle2 className="h-5 w-5 text-[#2a2b2a]" />
        },
        {
          title: "Email & SMS Marketing",
          description: "Build automated marketing sequences that convert",
          icon: <CheckCircle2 className="h-5 w-5 text-[#2a2b2a]" />
        },
        {
          title: "Custom Integrations",
          description: "Connect with your favorite tools and automate workflows",
          icon: <CheckCircle2 className="h-5 w-5 text-[#2a2b2a]" />
        },
        {
          title: "Learning Management System",
          description: "Create, sell and deliver online courses to your customers",
          icon: <CheckCircle2 className="h-5 w-5 text-[#2a2b2a]" />
        }
      ],
      imageSrc: "/assets/images/one11-suite.jpg",
      ctaText: "Explore Features",
      ctaHref: "/one11",
      color: "#2a2b2a",
      isReversed: true
    },
    {
      title: "Future Development",
      description: "Innovative solutions currently in development",
      longDescription: "We're constantly innovating to bring you the next generation of business tools. Our development roadmap is shaped by customer feedback and emerging technologies to ensure you stay ahead of the competition.",
      features: [
        {
          title: "AI Content Generation",
          description: "Create marketing content, emails, and social posts with AI",
          icon: <CheckCircle2 className="h-5 w-5 text-[#f59d40]" />
        },
        {
          title: "Advanced Analytics Platform",
          description: "Deeper insights into your business performance across all channels",
          icon: <CheckCircle2 className="h-5 w-5 text-[#f59d40]" />
        },
        {
          title: "Mobile Applications",
          description: "Manage your business on-the-go with dedicated mobile apps",
          icon: <CheckCircle2 className="h-5 w-5 text-[#f59d40]" />
        },
        {
          title: "Customer Experience Platform",
          description: "All-in-one solution for customer service and support",
          icon: <CheckCircle2 className="h-5 w-5 text-[#f59d40]" />
        },
        {
          title: "Integration Marketplace",
          description: "Expand your capabilities with a growing library of integrations",
          icon: <CheckCircle2 className="h-5 w-5 text-[#f59d40]" />
        }
      ],
      imageSrc: "/assets/images/future-development.jpg",
      ctaText: "Join Waitlist",
      ctaHref: "/waitlist",
      color: "#f59d40"
    }
  ];

  return (
    <Layout>
      {/* Hero section */}
      <div className="bg-white pt-24 pb-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold tracking-tight text-[#2a2b2a] sm:text-5xl md:text-6xl">
              Our <span className="text-[#bb141a]">Solutions</span>
            </h1>
            <p className="mt-6 text-xl text-gray-500">
              Powerful tools designed to help businesses of all sizes grow faster, work smarter, and deliver exceptional customer experiences.
            </p>
          </div>
        </div>
      </div>

      {/* Solutions Previews */}
      <div className="bg-gray-50 py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="h-12 w-12 rounded-full bg-[#bb141a]/10 flex items-center justify-center mb-4">
                <Megaphone className="h-6 w-6 text-[#bb141a]" />
              </div>
              <h3 className="text-lg font-semibold text-[#2a2b2a] mb-2"><ColoredDaisy /> Ad Management</h3>
              <p className="text-gray-600 mb-4">AI-powered advertising platform that helps you create, manage, and optimize ad campaigns across multiple channels.</p>
              <a href="#daisy-ad-management" className="text-[#bb141a] font-medium inline-flex items-center">
                Learn more <ArrowRight className="ml-1 h-4 w-4" />
              </a>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="h-12 w-12 rounded-full bg-[#2a2b2a]/10 flex items-center justify-center mb-4">
                <LayoutGrid className="h-6 w-6 text-[#2a2b2a]" />
              </div>
              <h3 className="text-lg font-semibold text-[#2a2b2a] mb-2">One11 Suite</h3>
              <p className="text-gray-600 mb-4">All-in-one business platform with CRM, booking system, LMS, marketing automation, and custom integrations.</p>
              <a href="#one11-suite" className="text-[#2a2b2a] font-medium inline-flex items-center">
                Learn more <ArrowRight className="ml-1 h-4 w-4" />
              </a>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="h-12 w-12 rounded-full bg-[#f59d40]/10 flex items-center justify-center mb-4">
                <Presentation className="h-6 w-6 text-[#f59d40]" />
              </div>
              <h3 className="text-lg font-semibold text-[#2a2b2a] mb-2">Future Development</h3>
              <p className="text-gray-600 mb-4">Sneak peek at our upcoming products and features designed to give your business a competitive edge.</p>
              <a href="#future-development" className="text-[#f59d40] font-medium inline-flex items-center">
                Learn more <ArrowRight className="ml-1 h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Detailed Solution Sections */}
      <div className="bg-white">
        {solutions.map((solution, index) => (
          <SolutionCard
            key={index}
            title={solution.title}
            description={solution.description}
            longDescription={solution.longDescription}
            features={solution.features}
            imageSrc={solution.imageSrc}
            ctaText={solution.ctaText}
            ctaHref={solution.ctaHref}
            color={solution.color}
            isReversed={solution.isReversed}
            id={solution.id}
          />
        ))}
      </div>

      {/* CTA Section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-[#2a2b2a] mb-4">Ready to grow your business?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Schedule a demo to see how our solutions can help you achieve your business goals.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center px-8 py-4 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-[#bb141a] hover:bg-[#ea5830] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#bb141a]"
          >
            Schedule a Demo <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>
    </Layout>
  );
};

export default SolutionsPage; 