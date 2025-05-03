import React from 'react';
import { Calendar, Users, ArrowRight, MapPin, Network, BrainCircuit, Coffee, Lightbulb, Users2 } from 'lucide-react';

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
      title: "AI Omaha Meetup",
      description: "Join us for a casual networking event with AI professionals and enthusiasts. Share ideas, make connections, and learn about the latest AI trends.",
      icon: <BrainCircuit className="h-6 w-6 text-[#bb141a]" />,
      date: "Next Event: June 5, 2024",
      duration: "2 Hours",
      level: "All Levels",
      link: "https://www.meetup.com/ai_omaha/"
    },
    {
      title: "Lunch and Learn",
      description: "Event hosted by Elevator downtown, a co-warehousing community. Join us for an informative session with lunch and fellow AI enthusiasts and professionals.",
      icon: <Coffee className="h-6 w-6 text-[#bb141a]" />,
      date: "Next Event: June 10, 2024",
      duration: "1 Hour",
      level: "All Levels",
      link: "https://www.elevatorspaces.com/events"
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
            Connect with the <span className="text-[#bb141a]">AI Community</span>
          </h2>
          <p className="text-[#2a2b2a] max-w-3xl mx-auto text-lg md:text-xl">
            Join local AI enthusiasts, share insights, and explore the latest trends<br />
            through our community events and meetups
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {courses.map((course, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6 relative overflow-hidden flex flex-col h-full">
              <div className="absolute top-0 right-0 w-24 h-24 opacity-[0.03]" style={{
                background: 'radial-gradient(circle at top right, #bb141a, transparent 70%)'
              }}></div>
              
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-[#bb141a]/10 flex items-center justify-center">
                  {course.icon}
                </div>
                <h3 className="text-xl font-bold text-[#2a2b2a]">{course.title}</h3>
              </div>
              
              <p className="text-gray-600 mb-6 h-24">{course.description}</p>
              
              <div className="border-t border-gray-100 pt-4 mb-4 mt-auto">
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
        
        {/* Hidden for now - will add real events later */}
        <div className="text-center mt-12 hidden">
          <a 
            href="/events/ai-omaha" 
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-[#bb141a] text-white font-medium hover:bg-[#ea5830] transition-colors hover:scale-105 transform transition-transform duration-300"
          >
            View All AI Omaha Events <ArrowRight className="ml-2 h-4 w-4 animate-wiggle" />
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