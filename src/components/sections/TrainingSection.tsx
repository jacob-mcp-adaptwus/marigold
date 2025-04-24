import React from 'react';
import { Calendar, Users, ArrowRight, MapPin } from 'lucide-react';

interface TrainingCourse {
  title: string;
  description: string;
  icon: React.ReactNode;
  date: string;
  duration: string;
  level: string;
  link: string;
}

const TrainingSection: React.FC = () => {
  const courses: TrainingCourse[] = [
    {
      title: "AI Omaha Event",
      description: "Join us for a special event in Omaha focused on AI innovation, networking with industry leaders, and hands-on workshops.",
      icon: <MapPin className="h-6 w-6 text-[#bb141a]" />,
      date: "Next Event: March 15, 2024",
      duration: "2 Days",
      level: "All Levels",
      link: "/training/ai-omaha"
    },
    {
      title: "AI Marketing Mastery",
      description: "Learn how to leverage AI tools to create data-driven marketing campaigns that deliver measurable results.",
      icon: <Calendar className="h-6 w-6 text-[#bb141a]" />,
      date: "Next Session: October 15, 2023",
      duration: "4 Weeks",
      level: "Intermediate",
      link: "/training/ai-marketing"
    },
    {
      title: "Digital Transformation Workshop",
      description: "A comprehensive workshop for business leaders on implementing AI solutions across your organization.",
      icon: <Users className="h-6 w-6 text-[#bb141a]" />,
      date: "Next Session: November 2, 2023",
      duration: "2 Days",
      level: "Advanced",
      link: "/training/digital-transformation"
    }
  ];

  return (
    <section className="py-16 bg-[#f8f8f8] relative overflow-hidden">
      {/* Subtle background with barely visible tech lines and marigold elements */}
      <div className="absolute inset-0">
        {/* Extremely subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: 'linear-gradient(to right, rgba(187, 20, 26, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(187, 20, 26, 0.1) 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}></div>
        
        {/* Very subtle marigold flowers - center left */}
        <div className="absolute top-1/2 left-20 -translate-y-1/2 opacity-[0.08]">
          <div className="relative w-40 h-40">
            <div className="absolute inset-0" style={{
              background: 'radial-gradient(circle at center, #f59d40 15%, transparent 65%)'
            }}></div>
            {[...Array(8)].map((_, i) => (
              <div 
                key={i} 
                className="absolute w-14 h-14 bg-[#f59d40] rounded-full"
                style={{
                  left: '50%',
                  top: '50%',
                  transform: `translate(-50%, -50%) rotate(${i * 45}deg) translateX(16px)`,
                  filter: 'blur(0.5px)'
                }}
              ></div>
            ))}
          </div>
        </div>
        
        {/* Almost invisible tech circuit lines */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#bb141a] to-transparent opacity-[0.08]"></div>
          <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#bb141a] to-transparent opacity-[0.08]"></div>
          <div className="absolute left-1/4 top-0 w-px h-full bg-gradient-to-b from-transparent via-[#bb141a] to-transparent opacity-[0.08]"></div>
          <div className="absolute left-3/4 top-0 w-px h-full bg-gradient-to-b from-transparent via-[#bb141a] to-transparent opacity-[0.08]"></div>
          
          {/* Add circuit nodes at intersections */}
          <div className="absolute top-1/4 left-1/4 w-3 h-3 rounded-full bg-[#bb141a] opacity-[0.12]"></div>
          <div className="absolute top-1/4 left-3/4 w-3 h-3 rounded-full bg-[#bb141a] opacity-[0.12]"></div>
          <div className="absolute top-3/4 left-1/4 w-3 h-3 rounded-full bg-[#bb141a] opacity-[0.12]"></div>
          <div className="absolute top-3/4 left-3/4 w-3 h-3 rounded-full bg-[#bb141a] opacity-[0.12]"></div>
          
          {/* Additional circuit traces */}
          <div className="absolute top-1/2 left-1/4 w-[calc(50%-3rem)] h-px bg-gradient-to-r from-[#bb141a] to-transparent opacity-[0.08] transform -skew-y-12"></div>
          <div className="absolute top-1/2 right-1/4 w-[calc(50%-3rem)] h-px bg-gradient-to-l from-[#bb141a] to-transparent opacity-[0.08] transform skew-y-12"></div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-[#2a2b2a]">
            Learn, Grow, and <span className="text-[#bb141a]">Connect</span> with AI
          </h2>
          <p className="text-[#2a2b2a] max-w-3xl mx-auto text-lg md:text-xl">
            Develop your team's AI skills with our specialized training programs<br />
            designed for modern business challenges
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 opacity-[0.03]" style={{
                background: 'radial-gradient(circle at top right, #bb141a, transparent 70%)'
              }}></div>
              
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-[#bb141a]/10 flex items-center justify-center">
                  {course.icon}
                </div>
                <h3 className="text-xl font-bold text-[#2a2b2a]">{course.title}</h3>
              </div>
              
              <p className="text-gray-600 mb-6">{course.description}</p>
              
              <div className="border-t border-gray-100 pt-4 mb-4">
                <div className="flex flex-col space-y-2 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500">Date:</span>
                    <span className="font-medium">{course.date}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500">Duration:</span>
                    <span className="font-medium">{course.duration}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500">Level:</span>
                    <span className="font-medium">{course.level}</span>
                  </div>
                </div>
              </div>
              
              <a 
                href={course.link} 
                className="inline-flex items-center text-[#bb141a] hover:text-[#ea5830] transition-colors font-medium"
              >
                Learn more <ArrowRight className="ml-1 h-4 w-4" />
              </a>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="/training" 
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-[#bb141a] text-white font-medium hover:bg-[#ea5830] transition-colors hover:scale-105 transform transition-transform duration-300"
          >
            View All Training Programs <ArrowRight className="ml-2 h-4 w-4 animate-wiggle" />
          </a>
          
          {/* Add wiggle animation */}
          <style>{`
            @keyframes wiggle {
              0%, 100% { transform: translateX(0); }
              25% { transform: translateX(2px); }
              75% { transform: translateX(-2px); }
            }
            .animate-wiggle {
              animation: wiggle 1s ease-in-out infinite;
            }
          `}</style>
        </div>
      </div>
    </section>
  );
};

export default TrainingSection; 