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
      ctaLink: "/contact",
      image: (
        <div className="relative rounded-lg overflow-hidden w-full aspect-video">
          <div className="absolute inset-0 bg-gradient-to-br from-[#bb141a] to-[#ea5830] opacity-20"></div>
          
          {/* Animated microphone and sound waves */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative">
              <Mic className="h-28 w-28 text-[#bb141a] animate-pulse" />
              {/* Sound wave animation */}
              <div className="absolute -left-16 top-1/2 transform -translate-y-1/2">
                <div className="flex space-x-2">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div 
                      key={i} 
                      className="w-2 rounded-full bg-[#bb141a] opacity-80"
                      style={{ 
                        height: `${i * 10}px`, 
                        animation: `soundWave ${0.5 + i * 0.1}s ease-in-out infinite alternate` 
                      }}
                    ></div>
                  ))}
                </div>
              </div>
              <div className="absolute -right-16 top-1/2 transform -translate-y-1/2">
                <div className="flex space-x-2">
                  {[5, 4, 3, 2, 1].map((i) => (
                    <div 
                      key={i} 
                      className="w-2 rounded-full bg-[#bb141a] opacity-80"
                      style={{ 
                        height: `${i * 10}px`, 
                        animation: `soundWave ${0.5 + i * 0.1}s ease-in-out infinite alternate` 
                      }}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Animated text box */}
          <div className="absolute bottom-0 left-0 right-0 py-4 px-6 bg-white bg-opacity-95 border-t-2 border-[#bb141a]">
            <div className="flex items-center justify-center">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#bb141a] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-[#bb141a]"></span>
              </span>
            </div>
          </div>
          
          {/* Add a stylesheet for the sound wave animation */}
          <style>{`
            @keyframes soundWave {
              0% { height: 5px; }
              100% { height: 40px; }
            }
          `}</style>
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
      ctaLink: "/contact",
      image: (
        <div className="relative rounded-lg overflow-hidden w-full aspect-video">
          <div className="absolute inset-0 bg-gradient-to-br from-[#2a2b2a] to-[#555555] opacity-15"></div>
          
          {/* Open book with animated text */}
          <div className="absolute inset-0 flex items-center justify-center">
            {/* Book container */}
            <div className="relative w-72 h-56 flex">
              {/* Left page */}
              <div className="w-1/2 h-full bg-white shadow-inner rounded-tl-md rounded-bl-md border-t border-l border-b border-gray-300 flex flex-col p-4 items-center">
                <div className="w-full">
                  {/* Text lines that appear one by one */}
                  <div className="h-1.5 w-full bg-[#333] opacity-0 rounded-sm" 
                    style={{ animation: "fadeIn 0.5s ease-in-out forwards, pulse 3s ease-in-out infinite", animationDelay: "0.3s" }}>
                  </div>
                  <div className="h-1.5 w-5/6 bg-[#333] mt-3 opacity-0 rounded-sm" 
                    style={{ animation: "fadeIn 0.5s ease-in-out forwards, pulse 3s ease-in-out infinite", animationDelay: "0.6s" }}>
                  </div>
                  <div className="h-1.5 w-full bg-[#333] mt-3 opacity-0 rounded-sm" 
                    style={{ animation: "fadeIn 0.5s ease-in-out forwards, pulse 3s ease-in-out infinite", animationDelay: "0.9s" }}>
                  </div>
                  
                  <div className="h-1.5 w-3/4 bg-[#333] mt-6 opacity-0 rounded-sm" 
                    style={{ animation: "fadeIn 0.5s ease-in-out forwards, pulse 3s ease-in-out infinite", animationDelay: "1.2s" }}>
                  </div>
                  <div className="h-1.5 w-5/6 bg-[#333] mt-3 opacity-0 rounded-sm" 
                    style={{ animation: "fadeIn 0.5s ease-in-out forwards, pulse 3s ease-in-out infinite", animationDelay: "1.5s" }}>
                  </div>
                  <div className="h-1.5 w-full bg-[#333] mt-3 opacity-0 rounded-sm" 
                    style={{ animation: "fadeIn 0.5s ease-in-out forwards, pulse 3s ease-in-out infinite", animationDelay: "1.8s" }}>
                  </div>
                  <div className="h-1.5 w-4/5 bg-[#333] mt-3 opacity-0 rounded-sm" 
                    style={{ animation: "fadeIn 0.5s ease-in-out forwards, pulse 3s ease-in-out infinite", animationDelay: "2.1s" }}>
                  </div>
                </div>
                
                {/* Page number */}
                <div className="mt-auto text-sm text-gray-400">1</div>
              </div>
              
              {/* Book spine/binding */}
              <div className="w-4 h-full bg-gradient-to-r from-[#2a2b2a] to-[#444444] shadow-md flex flex-col justify-around items-center">
                <div className="w-1 h-1 rounded-full bg-[#555555]"></div>
                <div className="w-1 h-1 rounded-full bg-[#555555]"></div>
                <div className="w-1 h-1 rounded-full bg-[#555555]"></div>
              </div>
              
              {/* Right page */}
              <div className="w-1/2 h-full bg-white shadow-inner rounded-tr-md rounded-br-md border-t border-r border-b border-gray-300 flex flex-col p-4 items-center">
                <div className="w-full">
                  {/* Animated highlighting effect */}
                  <div className="relative w-full h-1.5 bg-[#333] opacity-70 rounded-sm">
                    <div className="absolute inset-0 bg-[#2a2b2a] rounded-sm" 
                      style={{ animation: "highlight 3s ease-in-out infinite" }}>
                    </div>
                  </div>
                  <div className="relative w-5/6 h-1.5 bg-[#333] mt-3 opacity-70 rounded-sm">
                    <div className="absolute inset-0 bg-[#2a2b2a] rounded-sm" 
                      style={{ animation: "highlight 3s ease-in-out infinite", animationDelay: "0.5s" }}>
                    </div>
                  </div>
                  <div className="relative w-full h-1.5 bg-[#333] mt-3 opacity-70 rounded-sm">
                    <div className="absolute inset-0 bg-[#2a2b2a] rounded-sm" 
                      style={{ animation: "highlight 3s ease-in-out infinite", animationDelay: "1s" }}>
                    </div>
                  </div>
                  
                  <div className="relative w-3/4 h-1.5 bg-[#333] mt-6 opacity-70 rounded-sm">
                    <div className="absolute inset-0 bg-[#2a2b2a] rounded-sm" 
                      style={{ animation: "highlight 3s ease-in-out infinite", animationDelay: "1.5s" }}>
                    </div>
                  </div>
                  <div className="relative w-5/6 h-1.5 bg-[#333] mt-3 opacity-70 rounded-sm">
                    <div className="absolute inset-0 bg-[#2a2b2a] rounded-sm" 
                      style={{ animation: "highlight 3s ease-in-out infinite", animationDelay: "2s" }}>
                    </div>
                  </div>
                </div>
                
                {/* Page number */}
                <div className="mt-auto text-sm text-gray-400">2</div>
              </div>
              
              {/* Animated page turning overlay */}
              <div className="absolute top-0 right-0 w-36 h-full bg-white shadow-md"
                style={{ 
                  transformOrigin: "left center", 
                  animation: "pageTurn 8s ease-in-out infinite",
                  borderTopRightRadius: "3px",
                  borderBottomRightRadius: "3px",
                  zIndex: 5
                }}>
                <div className="w-full h-full flex flex-col p-4">
                  <div className="w-full">
                    <div className="h-1.5 w-5/6 bg-[#333] opacity-50 rounded-sm"></div>
                    <div className="h-1.5 w-full bg-[#333] mt-3 opacity-50 rounded-sm"></div>
                    <div className="h-1.5 w-3/4 bg-[#333] mt-3 opacity-50 rounded-sm"></div>
                    <div className="h-1.5 w-5/6 bg-[#333] mt-6 opacity-50 rounded-sm"></div>
                    <div className="h-1.5 w-2/3 bg-[#333] mt-3 opacity-50 rounded-sm"></div>
                  </div>
                  <div className="mt-auto self-end text-sm text-gray-400">3</div>
                </div>
              </div>
              
              {/* Book icon */}
              <div className="absolute -bottom-2 -right-2 p-1 bg-[#2a2b2a] rounded-full z-10">
                <BookOpen className="h-7 w-7 text-white animate-pulse" />
              </div>
            </div>
          </div>
          
          {/* Animated text box */}
          <div className="absolute bottom-0 left-0 right-0 py-4 px-6 bg-white bg-opacity-95 border-t-2 border-[#2a2b2a]">
            <div className="flex items-center justify-center">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2a2b2a] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-[#2a2b2a]"></span>
              </span>
            </div>
          </div>
          
          {/* Animations */}
          <style>{`
            @keyframes fadeIn {
              0% { opacity: 0; }
              100% { opacity: 0.7; }
            }
            
            @keyframes highlight {
              0%, 100% { transform: scaleX(0); transform-origin: left; }
              50%, 55% { transform: scaleX(1); transform-origin: left; }
              56%, 100% { transform: scaleX(0); transform-origin: right; }
            }
            
            @keyframes pageTurn {
              0%, 30% { transform: rotateY(0deg); opacity: 0; }
              35% { opacity: 1; }
              45%, 55% { transform: rotateY(-180deg); opacity: 1; }
              60% { opacity: 0; }
              100% { transform: rotateY(-180deg); opacity: 0; }
            }
            
            @keyframes pulse {
              0%, 100% { opacity: 0.7; }
              50% { opacity: 0.5; }
            }
          `}</style>
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
      ctaLink: "/contact",
      image: (
        <div className="relative rounded-lg overflow-hidden w-full aspect-video">
          <div className="absolute inset-0 bg-gradient-to-br from-[#f59d40] to-[#f8cb9c] opacity-15"></div>
          
          {/* Flexible delivery animation */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative">
              {/* Virtual/Remote Scene */}
              <div className="absolute -left-28 top-0 flex flex-col items-center transition-all duration-1000"
                style={{ animation: "floatIn 4s ease-in-out infinite alternate" }}>
                {/* Laptop */}
                <div className="relative w-28 h-20 bg-[#444] rounded-md flex items-center justify-center shadow-lg mb-2">
                  {/* Screen */}
                  <div className="w-24 h-16 bg-[#f8f8f8] rounded-sm overflow-hidden">
                    {/* Virtual people on screen */}
                    <div className="flex flex-wrap justify-center p-1 gap-1">
                      {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="w-4 h-4 rounded-full bg-[#f59d40]" 
                          style={{ 
                            opacity: 0.8,
                            animation: `pulse ${0.8 + i * 0.2}s ease-in-out infinite alternate`,
                            animationDelay: `${i * 0.1}s`
                          }} 
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <Laptop className="h-7 w-7 text-[#f59d40] animate-pulse" />
              </div>
              
              {/* In-Person Scene */}
              <div className="absolute -right-28 top-0 flex flex-col items-center"
                style={{ animation: "floatIn 4s ease-in-out infinite alternate-reverse" }}>
                {/* Meeting table */}
                <div className="relative w-32 h-16 bg-[#f5f5f5] rounded-lg shadow-lg mb-2 flex items-center justify-center">
                  {/* People around table */}
                  <div className="absolute" style={{ animation: "spin 20s linear infinite" }}>
                    {[0, 60, 120, 180, 240, 300].map((angle, i) => (
                      <div 
                        key={i} 
                        className="absolute w-5 h-5 rounded-full bg-[#f59d40] -translate-x-1/2 -translate-y-1/2 border border-white"
                        style={{ 
                          transform: `rotate(${angle}deg) translate(14px) rotate(-${angle}deg)`,
                          opacity: 0.8
                        }}
                      />
                    ))}
                  </div>
                </div>
                <Users className="h-7 w-7 text-[#f59d40] animate-pulse" />
              </div>
              
              {/* Central connector animation */}
              <div className="relative">
                <div className="w-16 h-16 rounded-full bg-[#f59d40] bg-opacity-20 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-[#f59d40] bg-opacity-30 flex items-center justify-center animate-pulse">
                    <div className="w-8 h-8 rounded-full bg-[#f59d40] bg-opacity-50 flex items-center justify-center">
                      {/* Connecting lines */}
                      <div className="absolute w-60 h-2 flex items-center justify-center">
                        <div className="h-0.5 bg-[#f59d40] transition-all duration-700"
                          style={{ 
                            width: "100%",
                            animation: "expandLine 2s ease-in-out infinite alternate" 
                          }}>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Animated text box */}
          <div className="absolute bottom-0 left-0 right-0 py-4 px-6 bg-white bg-opacity-95 border-t-2 border-[#f59d40]">
            <div className="flex items-center justify-center">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#f59d40] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-[#f59d40]"></span>
              </span>
            </div>
          </div>
          
          {/* Animations */}
          <style>{`
            @keyframes floatIn {
              0% { transform: translateX(0px); }
              100% { transform: translateX(20px); }
            }
            
            @keyframes expandLine {
              0% { transform: scaleX(0.5); opacity: 0.3; }
              100% { transform: scaleX(1); opacity: 0.7; }
            }
            
            @keyframes pulse {
              0% { transform: scale(0.8); }
              100% { transform: scale(1); }
            }
            
            @keyframes spin {
              0% { transform: rotate(0deg); }
              100% { transform: rotate(360deg); }
            }
          `}</style>
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
      ctaText: "Coming Soon",
      ctaLink: "#",
      image: (
        <div className="relative rounded-lg overflow-hidden w-full aspect-video">
          <div className="absolute inset-0 bg-gradient-to-br from-[#627c42] to-[#8ea772] opacity-15"></div>
          
          {/* Simplified learning animation */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative">
              {/* Simple graduation cap with subtle animation */}
              <div className="relative w-40 h-40 flex items-center justify-center">
                <div className="relative">
                  {/* Graduation cap with subtle float animation */}
                  <div className="relative"
                    style={{ animation: "float 3s ease-in-out infinite alternate" }}>
                    <GraduationCap className="h-24 w-24 text-[#627c42]" />
                  </div>
                  
                  {/* Simple circular progress indicator */}
                  <div className="absolute -inset-4 rounded-full border-4 border-[#627c42] border-opacity-25"
                    style={{ animation: "pulse 4s ease-in-out infinite" }}>
                    <div className="absolute top-0 bottom-0 left-0 right-0 rounded-full border-t-4 border-l-4 border-[#627c42]"
                      style={{ animation: "spin 5s linear infinite" }}>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Simple book underneath */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
                <div className="w-24 h-6 bg-[#7d9c58] rounded-sm flex items-center justify-center shadow-md">
                  <div className="w-20 h-4 bg-white rounded-sm opacity-70"></div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Animated text box */}
          <div className="absolute bottom-0 left-0 right-0 py-4 px-6 bg-white bg-opacity-95 border-t-2 border-[#627c42]">
            <div className="flex items-center justify-center">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#627c42] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-[#627c42]"></span>
              </span>
            </div>
          </div>
          
          {/* Simplified animations */}
          <style>{`
            @keyframes float {
              0% { transform: translateY(0px); }
              100% { transform: translateY(-6px); }
            }
            
            @keyframes pulse {
              0%, 100% { transform: scale(1); opacity: 0.25; }
              50% { transform: scale(1.05); opacity: 0.5; }
            }
            
            @keyframes spin {
              0% { transform: rotate(0deg); }
              100% { transform: rotate(360deg); }
            }
          `}</style>
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