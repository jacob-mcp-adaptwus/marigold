import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MarigoldWebsite from './MarigoldWebsite';
import AIServicesPage from './pages/AIServicesPage';
import SolutionsPage from './pages/SolutionsPage';
import TrainingPage from './pages/TrainingPage';
import ResourcesPage from './pages/ResourcesPage';
import BlogPage from './pages/BlogPage';
import OurAIStoryPage from './pages/OurAIStoryPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MarigoldWebsite />} />
        <Route path="/ai-services" element={<AIServicesPage />} />
        <Route path="/solutions" element={<SolutionsPage />} />
        <Route path="/training" element={<TrainingPage />} />
        <Route path="/resources" element={<ResourcesPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/our-ai-story" element={<OurAIStoryPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;