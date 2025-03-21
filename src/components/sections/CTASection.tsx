import React from 'react';
import Button from '../ui/Button';

const CTASection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-[#bb141a] to-[#ea5830] text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-xl mb-8 text-white">
            Schedule a free 30-minute AI strategy session with our experts today.
          </p>
          <Button
            variant="white"
            size="lg"
            withArrow
            href="/contact"
          >
            Take the First Step
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;