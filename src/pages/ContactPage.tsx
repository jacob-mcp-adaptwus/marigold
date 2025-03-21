import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    interestAreas: [] as string[]
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setFormData(prev => {
      if (checked) {
        return {
          ...prev,
          interestAreas: [...prev.interestAreas, value]
        };
      } else {
        return {
          ...prev,
          interestAreas: prev.interestAreas.filter(area => area !== value)
        };
      }
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to a server
    console.log('Form submitted:', formData);
    setSubmitted(true);
  };

  return (
    <Layout>
      <div className="bg-white/95 pt-24 pb-12 relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tight text-[#2a2b2a] sm:text-5xl md:text-6xl mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Let's discuss how Marigold ONE11 can help your business grow with AI solutions.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white/95 py-12 relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Contact Information */}
              <div className="md:col-span-1 bg-[#f8f8f8] p-6 rounded-xl">
                <h2 className="text-2xl font-bold text-[#2a2b2a] mb-6">Get In Touch</h2>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Mail className="h-6 w-6 text-[#f59d40] mr-3 mt-1" />
                    <div>
                      <h3 className="font-medium text-[#2a2b2a]">Email</h3>
                      <p className="text-gray-600">hello@marigold111.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone className="h-6 w-6 text-[#f59d40] mr-3 mt-1" />
                    <div>
                      <h3 className="font-medium text-[#2a2b2a]">Phone</h3>
                      <p className="text-gray-600">(402) 123-4567</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <MapPin className="h-6 w-6 text-[#f59d40] mr-3 mt-1" />
                    <div>
                      <h3 className="font-medium text-[#2a2b2a]">Office</h3>
                      <p className="text-gray-600">
                        17117 Oak Dr Suite G<br />
                        Omaha, NE 68130
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <h3 className="font-medium text-[#2a2b2a] mb-2">Follow Us</h3>
                  <div className="flex space-x-4">
                    {['twitter', 'facebook', 'linkedin', 'instagram'].map((social) => (
                      <a 
                        key={social} 
                        href={`https://www.${social}.com/marigoldone11`}
                        className="h-8 w-8 rounded-full bg-white flex items-center justify-center text-gray-500 hover:text-[#f59d40] transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span className="sr-only">{social}</span>
                        <div className="h-4 w-4">@</div>
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="md:col-span-2">
                {submitted ? (
                  <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
                    <h2 className="text-2xl font-bold text-green-700 mb-4">Thank You!</h2>
                    <p className="text-green-600 mb-6">
                      Your message has been received. We'll get back to you shortly.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                          Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          id="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-amber-500 focus:border-amber-500"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                          Email
                        </label>
                        <input
                          type="email"
                          name="email"
                          id="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-amber-500 focus:border-amber-500"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                          Phone
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          id="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-amber-500 focus:border-amber-500"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-gray-700">
                          Company
                        </label>
                        <input
                          type="text"
                          name="company"
                          id="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-amber-500 focus:border-amber-500"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                        Message
                      </label>
                      <textarea
                        name="message"
                        id="message"
                        rows={4}
                        required
                        value={formData.message}
                        onChange={handleChange}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-amber-500 focus:border-amber-500"
                      />
                    </div>
                    
                    <div>
                      <span className="block text-sm font-medium text-gray-700 mb-2">
                        I'm interested in (select all that apply):
                      </span>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
                        {[
                          'AI Integration', 
                          'Digital Marketing', 
                          'Business Automation', 
                          'Strategic Consulting',
                          'dAisy Ad Management',
                          'ONE11 Suite'
                        ].map((interest) => (
                          <div key={interest} className="flex items-center">
                            <input
                              id={interest.replace(/\s+/g, '-').toLowerCase()}
                              name="interestAreas"
                              value={interest}
                              type="checkbox"
                              onChange={handleCheckboxChange}
                              className="h-4 w-4 text-amber-600 focus:ring-amber-500 border-gray-300 rounded"
                            />
                            <label
                              htmlFor={interest.replace(/\s+/g, '-').toLowerCase()}
                              className="ml-2 text-sm text-gray-700"
                            >
                              {interest}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <button
                        type="submit"
                        className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500"
                      >
                        Submit <Send className="ml-2 h-4 w-4" />
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ContactPage; 