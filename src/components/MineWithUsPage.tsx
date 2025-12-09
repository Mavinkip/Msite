import React from 'react';
import { ArrowRight, Mail, Phone, MapPin, Clock } from 'lucide-react';

const MineWithUsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 to-blue-800 text-white">
      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-light mb-6">
            Partner With Us
          </h1>
          <div className="h-1 w-20 bg-gold-500 mx-auto mb-8"></div>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-12">
            Join us in our mission to extract valuable resources while maintaining the highest standards of environmental and social responsibility.
          </p>
          
          <div className="max-w-2xl mx-auto bg-white/10 backdrop-blur-sm rounded-xl p-8 shadow-2xl">
            <h2 className="text-2xl md:text-3xl font-light mb-6">
              Let's Start a Conversation
            </h2>
            <p className="mb-8 text-blue-100">
              Contact our team to discuss partnership opportunities, investment options, or any inquiries about our operations.
            </p>
            
            <div className="space-y-6 mb-10 text-left max-w-md mx-auto">
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-gold-600 p-2 rounded-full mt-1">
                  <Mail className="h-5 w-5 text-white" />
                </div>
                <div className="ml-4">
                  <h3 className="text-sm font-medium text-gold-400">Email Us</h3>
                  <a 
                    href="mailto:info@groupedesocietedemineire.com" 
                    className="text-lg text-white hover:text-gold-300 transition-colors"
                  >
                    info@groupedesocietedemineire.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-gold-600 p-2 rounded-full mt-1">
                  <Phone className="h-5 w-5 text-white" />
                </div>
                <div className="ml-4">
                  <h3 className="text-sm font-medium text-gold-400">Call Us</h3>
                  <a 
                    href="tel:+243123456789" 
                    className="text-lg text-white hover:text-gold-300 transition-colors"
                  >
                    +243 123 456 789
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-gold-600 p-2 rounded-full mt-1">
                  <MapPin className="h-5 w-5 text-white" />
                </div>
                <div className="ml-4">
                  <h3 className="text-sm font-medium text-gold-400">Location</h3>
                  <p className="text-lg text-white">
                    Kolwezi, Lualaba Province, DRC
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-gold-600 p-2 rounded-full mt-1">
                  <Clock className="h-5 w-5 text-white" />
                </div>
                <div className="ml-4">
                  <h3 className="text-sm font-medium text-gold-400">Working Hours</h3>
                  <p className="text-lg text-white">Mon - Fri: 8:00 AM - 5:00 PM</p>
                  <p className="text-lg text-white">Sat: 9:00 AM - 1:00 PM</p>
                </div>
              </div>
            </div>
            
            <a 
              href="mailto:info@groupedesocietedemineire.com" 
              className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-md text-blue-900 bg-gold-500 hover:bg-gold-400 transition-colors duration-300 md:py-4 md:text-lg md:px-10"
            >
              Send Us an Email
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </section>
      
      {/* Why Partner With Us */}
      <section className="py-20 bg-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-white mb-4">
              Why Partner With Us?
            </h2>
            <div className="h-1 w-20 bg-gold-500 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Proven Track Record',
                description: 'Over 15 years of successful mining operations with a commitment to excellence and sustainability.'
              },
              {
                title: 'Ethical Practices',
                description: 'We adhere to the highest standards of environmental responsibility and community engagement.'
              },
              {
                title: 'Growth Opportunities',
                description: 'Be part of a growing enterprise with expanding operations across the DRC.'
              }
            ].map((item, index) => (
              <div key={index} className="bg-white/5 p-8 rounded-xl hover:bg-white/10 transition-colors">
                <h3 className="text-xl font-light text-gold-400 mb-3">{item.title}</h3>
                <p className="text-blue-100">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-light text-white mb-6">
            Ready to Start a Partnership?
          </h2>
          <p className="text-xl text-blue-100 mb-10">
            Our team is ready to discuss how we can work together to achieve mutual success.
          </p>
          <a 
            href="mailto:info@groupedesocietedemineire.com" 
            className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-md text-blue-900 bg-gold-500 hover:bg-gold-400 transition-colors duration-300 md:py-4 md:text-lg md:px-10"
          >
            Contact Us Today
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default MineWithUsPage;
