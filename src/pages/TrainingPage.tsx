import React from 'react';
import Layout from '../components/layout/Layout';
import { 
  CheckCircle2, 
  ArrowRight, 
  Mic, 
  BookOpen, 
  Users, 
  Laptop,
  GraduationCap
} from 'lucide-react';
import { HashLink } from 'react-router-hash-link';

interface TrainingCategoryProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  benefits: string[];
  ctaText: string;
  ctaLink: string;
  image?: React.ReactNode;
}

const TrainingCategory: React.FC<TrainingCategoryProps> = ({
  title,
  description,
  icon,
  color,
  benefits,
  ctaText,
  ctaLink,
  image
}) => {
  return (
    <div id={title.toLowerCase().replace(/\s+/g, '-')} className="scroll-mt-24">
      <div className="py-16 px-4 sm:px-6 lg:px-8 border-b border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
            {/* Left column - Content */}
            <div>
              <div className="flex items-center space-x-3">
                <div className={`p-2 rounded-full bg-opacity-10`} style={{ backgroundColor: `${color}20` }}>
                  <div className="h-8 w-8 flex items-center justify-center">
                    {icon}
                  </div>
                </div>
                <h2 className="text-3xl font-bold tracking-tight text-[#2a2b2a]">{title}</h2>
              </div>
              
              <p className="mt-4 text-lg text-gray-500">{description}</p>
              
              <div className="mt-8 space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0">
                      <CheckCircle2 className="h-5 w-5" style={{ color }} />
                    </div>
                    <p className="ml-3 text-base text-gray-500">{benefit}</p>
                  </div>
                ))}
              </div>
              
              <div className="mt-10">
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
            
            {/* Right column - Image */}
            <div className="mt-10 lg:mt-0 flex justify-center">
              <div className="bg-white rounded-lg p-8 shadow-lg border border-gray-100 flex items-center justify-center" style={{ minHeight: "320px", minWidth: "320px" }}>
                {image || (
                  <div className="p-4 bg-gray-50 rounded-full">
                    <div className="h-24 w-24" style={{ color }}>
                      {icon}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const TrainingPage: React.FC = () => {
  const trainingCategories: TrainingCategoryProps[] = [
    {
      title: "Speaking",
      description: "Expert speakers and presentations that inspire, educate, and motivate your team with actionable insights and strategies.",
      icon: <Mic className="h-8 w-8 text-[#bb141a]" />,
      color: "#bb141a",
      benefits: [
        "Industry experts with real-world experience",
        "Engaging presentations tailored to your audience",
        "Interactive Q&A sessions for deeper learning",
        "Customized content to address your specific challenges",
        "Inspiring stories and case studies that drive action"
      ],
      ctaText: "Book a Speaker",
      ctaLink: "/training/speaking",
      image: (
        <div className="relative rounded-lg overflow-hidden w-full aspect-video">
          <div className="absolute inset-0 bg-gradient-to-br from-[#bb141a] to-[#ea5830] opacity-10"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <Mic className="h-20 w-20 text-[#bb141a]" />
          </div>
          <div className="absolute bottom-0 left-0 right-0 py-4 px-6 bg-white bg-opacity-90">
            <h3 className="font-semibold text-lg text-[#2a2b2a]">Expert Speakers</h3>
            <p className="text-sm text-gray-600">Transform your organization with powerful insights</p>
          </div>
        </div>
      )
    },
    {
      title: "Topical",
      description: "Focused training sessions on specific topics and skills that provide immediate value and practical application.",
      icon: <BookOpen className="h-8 w-8 text-[#2a2b2a]" />,
      color: "#2a2b2a",
      benefits: [
        "Concentrated content for maximum impact",
        "Practical exercises to reinforce learning",
        "Handouts and resources for future reference",
        "Flexible scheduling options for busy teams",
        "Expert-led discussions on current industry trends"
      ],
      ctaText: "Explore Topics",
      ctaLink: "/training/topical",
      image: (
        <div className="relative rounded-lg overflow-hidden w-full aspect-video">
          <div className="absolute inset-0 bg-gradient-to-br from-[#2a2b2a] to-[#555555] opacity-10"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <BookOpen className="h-20 w-20 text-[#2a2b2a]" />
          </div>
          <div className="absolute bottom-0 left-0 right-0 py-4 px-6 bg-white bg-opacity-90">
            <h3 className="font-semibold text-lg text-[#2a2b2a]">Specialized Topics</h3>
            <p className="text-sm text-gray-600">Deep dives into subject matter expertise</p>
          </div>
        </div>
      )
    },
    {
      title: "Remote & In Person",
      description: "Flexible training delivery options that adapt to your team's needs, whether virtual, in-person, or hybrid.",
      icon: <Users className="h-8 w-8 text-[#f59d40]" />,
      color: "#f59d40",
      benefits: [
        "Seamless virtual experiences for remote teams",
        "Engaging in-person workshops and activities",
        "Hybrid options to accommodate diverse teams",
        "Interactive technology for maximum engagement",
        "Consistent quality regardless of delivery method"
      ],
      ctaText: "Schedule Training",
      ctaLink: "/training/delivery",
      image: (
        <div className="relative rounded-lg overflow-hidden w-full aspect-video">
          <div className="absolute inset-0 bg-gradient-to-br from-[#f59d40] to-[#f8cb9c] opacity-10"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex space-x-4">
              <Users className="h-16 w-16 text-[#f59d40]" />
              <Laptop className="h-16 w-16 text-[#f59d40]" />
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 py-4 px-6 bg-white bg-opacity-90">
            <h3 className="font-semibold text-lg text-[#2a2b2a]">Flexible Delivery</h3>
            <p className="text-sm text-gray-600">Training that fits your team's structure</p>
          </div>
        </div>
      )
    },
    {
      title: "LMS",
      description: "Our Learning Management System provides on-demand access to courses, tracking, and certification for continuous development.",
      icon: <GraduationCap className="h-8 w-8 text-[#627c42]" />,
      color: "#627c42",
      benefits: [
        "24/7 access to training materials and courses",
        "Progress tracking and performance analytics",
        "Self-paced learning paths for individual growth",
        "Certification and badge system for achievements",
        "Customizable learning journeys for your organization"
      ],
      ctaText: "Explore LMS",
      ctaLink: "/training/lms",
      image: (
        <div className="relative rounded-lg overflow-hidden w-full aspect-video">
          <div className="absolute inset-0 bg-gradient-to-br from-[#627c42] to-[#8ea772] opacity-10"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <GraduationCap className="h-20 w-20 text-[#627c42]" />
          </div>
          <div className="absolute bottom-0 left-0 right-0 py-4 px-6 bg-white bg-opacity-90">
            <h3 className="font-semibold text-lg text-[#2a2b2a]">Learning Platform</h3>
            <p className="text-sm text-gray-600">Continuous education at your fingertips</p>
          </div>
        </div>
      )
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <div className="bg-[#f8f8f8] pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-[#2a2b2a] sm:text-5xl md:text-6xl">
              <span className="block text-[#bb141a]">Beeezy Resources</span>
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-500">
              Customized training programs designed to develop skills, boost performance, and drive business growth.
            </p>
          </div>
        </div>
      </div>

      {/* Category Navigation */}
      <div className="flex flex-wrap gap-4 justify-center mb-12">
        {trainingCategories.map((category, index) => (
          <HashLink
            key={index}
            smooth
            to={`#${category.title.toLowerCase().replace(/\s+/g, '-')}`}
            className="text-[#2a2b2a] font-medium inline-flex items-center hover:text-[#f59d40] transition-colors"
          >
            {category.title}
            <ArrowRight className="ml-1 h-4 w-4" />
          </HashLink>
        ))}
      </div>

      {/* Training Categories */}
      <div className="bg-white">
        {trainingCategories.map((category, index) => (
          <TrainingCategory
            key={index}
            title={category.title}
            description={category.description}
            icon={category.icon}
            color={category.color}
            benefits={category.benefits}
            ctaText={category.ctaText}
            ctaLink={category.ctaLink}
            image={category.image}
          />
        ))}
      </div>

      {/* CTA Section */}
      <div className="bg-[#f8f8f8] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold text-[#2a2b2a] sm:text-4xl">
            <span className="block">Ready to elevate your team's skills?</span>
          </h2>
          <p className="mt-4 text-lg leading-6 text-gray-500">
            Contact us to discuss your training needs and create a customized program for your organization.
          </p>
          <div className="mt-8 flex justify-center">
            <div className="inline-flex rounded-md shadow">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#bb141a] hover:bg-[#ea5830]"
              >
                Schedule a Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default TrainingPage; 