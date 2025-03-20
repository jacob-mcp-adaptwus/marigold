import React from 'react';
import Layout from './components/layout/Layout';
import HeroSection from './components/sections/HeroSection';
import ServicesSection from './components/sections/ServicesSection';
import AISolutionsSection from './components/sections/AISolutionsSection';
import ProductShowcaseSection from './components/sections/ProductShowcaseSection';
import TestimonialsSection from './components/sections/TestimonialsSection';
import TrainingSection from './components/sections/TrainingSection';
import CTASection from './components/sections/CTASection';

const MarigoldWebsite: React.FC = () => {
  return (
    <Layout>
      <HeroSection />
      <ServicesSection />
      <AISolutionsSection />
      <ProductShowcaseSection />
      <TestimonialsSection />
      <TrainingSection />
      <CTASection />
    </Layout>
  );
};

export default MarigoldWebsite;