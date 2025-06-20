
import React from 'react';
import { Users, Award, Globe, Handshake } from 'lucide-react';

const AboutPage: React.FC = () => {
  const values = [
    {
      icon: Award,
      title: 'Excellence',
      description: 'Committed to the highest standards in mining operations and safety protocols'
    },
    {
      icon: Handshake,
      title: 'Integrity',
      description: 'Transparent business practices and ethical conduct in all our operations'
    },
    {
      icon: Globe,
      title: 'Sustainability',
      description: 'Environmental stewardship and responsible resource management'
    },
    {
      icon: Users,
      title: 'Community',
      description: 'Supporting local communities and fostering long-term partnerships'
    }
  ];

  const timeline = [
    { year: '2008', event: 'Company founded in Kolwezi with initial copper mining concessions' },
    { year: '2012', event: 'Expanded operations to include cobalt extraction and processing' },
    { year: '2016', event: 'Achieved international certification for sustainable mining practices' },
    { year: '2019', event: 'Launched community development program affecting 10,000+ residents' },
    { year: '2022', event: 'Introduced advanced zinc processing technology' },
    { year: '2024', event: 'Celebrating 16 years of mining excellence in Congo' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section with consistent blue theme */}
      <section 
        className="relative h-96 bg-cover bg-center text-white flex items-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-blue-900/75"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-light mb-6">Who We Are</h1>
          <div className="h-1 w-20 bg-white mx-auto mb-6"></div>
          <p className="text-xl font-light max-w-3xl mx-auto">
            A leading mining company in the Democratic Republic of Congo, 
            dedicated to responsible mineral extraction and community development
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gradient-to-b from-gray-100 to-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16">
            <div className="text-center">
              <h2 className="text-3xl font-light text-blue-900 mb-6">Our Mission</h2>
              <div className="h-1 w-16 bg-blue-600 mx-auto mb-6"></div>
              <p className="text-lg text-gray-700 leading-relaxed">
                To responsibly extract and process high-quality minerals while contributing to 
                the economic development of the Democratic Republic of Congo and improving the 
                lives of local communities through sustainable mining practices and social investment.
              </p>
            </div>
            <div className="text-center">
              <h2 className="text-3xl font-light text-blue-900 mb-6">Our Vision</h2>
              <div className="h-1 w-16 bg-blue-600 mx-auto mb-6"></div>
              <p className="text-lg text-gray-700 leading-relaxed">
                To become the most respected mining company in Central Africa, known for our 
                commitment to safety, environmental stewardship, and positive community impact 
                while delivering exceptional value to our stakeholders.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gradient-to-b from-blue-800 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light mb-4">Our Core Values</h2>
            <div className="h-1 w-20 bg-white mx-auto mb-6"></div>
            <p className="text-xl font-light">
              The principles that guide every aspect of our business operations
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center group">
                <div className="w-24 h-24 mx-auto mb-6 border border-white/30 transform rotate-45 flex items-center justify-center group-hover:border-white transition-colors duration-300">
                  <div className="transform -rotate-45">
                    <value.icon size={32} className="text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-light mb-3">{value.title}</h3>
                <p className="text-blue-200 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company History */}
      <section className="py-20 bg-gradient-to-b from-gray-100 to-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-blue-900 mb-4">Our Journey</h2>
            <div className="h-1 w-20 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 font-light">
              Over 16 years of growth, innovation, and commitment to excellence
            </p>
          </div>
          <div className="space-y-8">
            {timeline.map((item, index) => (
              <div key={index} className="flex items-center">
                <div className="w-24 text-right pr-8">
                  <div className="text-2xl font-light text-blue-600">{item.year}</div>
                </div>
                <div className="w-4 h-4 bg-blue-600 rounded-full"></div>
                <div className="flex-1 pl-8">
                  <p className="text-gray-700">{item.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
