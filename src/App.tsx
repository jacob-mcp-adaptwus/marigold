import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import MarigoldWebsite from './MarigoldWebsite';
import AIServicesPage from './pages/AIServicesPage';
import SolutionsPage from './pages/SolutionsPage';
import TrainingPage from './pages/TrainingPage';
import ResourcesPage from './pages/ResourcesPage';
import BlogPage from './pages/BlogPage';
import BlogPostPage from './pages/BlogPostPage';
import BlogManagementPage from './pages/BlogManagementPage';
import EnhancedBlogManagementPage from './pages/EnhancedBlogManagementPage';
import OurAIStoryPage from './pages/OurAIStoryPage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';
import CookieConsent from './components/ui/CookieConsent';
import { initGA, pageview } from './utils/analytics';

// Component to track page views
const PageViewTracker = () => {
  const location = useLocation();
  
  useEffect(() => {
    pageview(location.pathname);
  }, [location]);
  
  return null;
};

function App() {
  useEffect(() => {
    // Initialize Google Analytics
    initGA();
  }, []);

  return (
    <BrowserRouter>
      <PageViewTracker />
      <Routes>
        <Route path="/" element={<MarigoldWebsite />} />
        <Route path="/ai-services" element={<AIServicesPage />} />
        <Route path="/solutions" element={<SolutionsPage />} />
        <Route path="/training" element={<TrainingPage />} />
        <Route path="/resources" element={<ResourcesPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:slug" element={<BlogPostPage />} />
        <Route path="/blog-management" element={<BlogManagementPage />} />
        <Route path="/enhanced-blog-management" element={<EnhancedBlogManagementPage />} />
        <Route path="/our-ai-story" element={<OurAIStoryPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <CookieConsent />
    </BrowserRouter>
  );
}

export default App;