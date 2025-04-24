import React from 'react';
import CaseStudyCard from '../ui/CaseStudyCard';
import Button from '../ui/Button';

// Helper function to format DAIsy text with colors
const ColoredDaisy = () => (
  <>
    <span className="text-[#2a8735]">D</span>
    <span className="text-[#f59d40]">AI</span>
    <span className="text-[#2a8735]">sy</span>
  </>
);

// Helper function to process descriptions that might contain dAisy
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

const CaseStudiesSection: React.FC = () => {
  const caseStudies = [
    {
      title: 'E-commerce Revenue Growth',
      company: 'RetailPlus',
      industry: 'E-commerce',
      description: 'Implementation of dAisy Ad Management led to a 127% increase in ROAS and 45% growth in overall revenue.',
      metrics: ['127% ROAS increase', '45% revenue growth', '68% reduction in ad spend waste'],
      link: '/case-studies/retailplus'
    },
    {
      title: 'Manufacturing Process Automation',
      company: 'IndusTech',
      industry: 'Manufacturing',
      description: 'AI-powered automation solution reduced production costs by 32% while improving quality control metrics.',
      metrics: ['32% cost reduction', '28% productivity increase', '62% fewer quality issues'],
      link: '/case-studies/industech'
    }
  ];

  return (
    <section id="case-studies" className="py-16 bg-[#ddd9d9] relative">
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: 'radial-gradient(#f59d40 2px, transparent 2px)',
        backgroundSize: '30px 30px'
      }}></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-block px-3 py-1 bg-[#f59d40] bg-opacity-20 rounded-full text-sm font-semibold text-[#2a2b2a] mb-3">CASE STUDIES</div>
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-[#2a2b2a]">
            Success <span className="text-[#f59d40]">Stories</span>
          </h2>
          <p className="text-[#2a2b2a] max-w-3xl mx-auto">
            See how our AI solutions have helped businesses like yours transform and grow.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {caseStudies.map((study, index) => (
            <CaseStudyCard
              key={index}
              title={study.title}
              company={study.company}
              industry={study.industry}
              description={formatWithDaisy(study.description)}
              metrics={study.metrics}
              link={study.link}
            />
          ))}
        </div>
        
        <div className="text-center mt-10">
          <Button
            variant="primary"
            size="md"
            withArrow
            href="/case-studies"
          >
            View All Case Studies
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;