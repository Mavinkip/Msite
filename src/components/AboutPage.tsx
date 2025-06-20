
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
    <div className="space-y-16">
      {/* Header */}
      <section className="bg-gradient-to-r from-slate-900 to-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Who We Are</h1>
          <p className="text-xl text-slate-200 max-w-3xl mx-auto">
            A leading mining company in the Democratic Republic of Congo, 
            dedicated to responsible mineral extraction and community development
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-blue-50 p-8 rounded-2xl">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Mission</h2>
            <p className="text-lg text-slate-700 leading-relaxed">
              To responsibly extract and process high-quality minerals while contributing to 
              the economic development of the Democratic Republic of Congo and improving the 
              lives of local communities through sustainable mining practices and social investment.
            </p>
          </div>
          <div className="bg-yellow-50 p-8 rounded-2xl">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Vision</h2>
            <p className="text-lg text-slate-700 leading-relaxed">
              To become the most respected mining company in Central Africa, known for our 
              commitment to safety, environmental stewardship, and positive community impact 
              while delivering exceptional value to our stakeholders.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-slate-600">
              The principles that guide every aspect of our business operations
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
                <value.icon className="text-blue-600 mx-auto mb-4" size={48} />
                <h3 className="text-xl font-bold text-slate-900 mb-3">{value.title}</h3>
                <p className="text-slate-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company History */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Journey</h2>
          <p className="text-xl text-slate-600">
            Over 16 years of growth, innovation, and commitment to excellence
          </p>
        </div>
        <div className="relative">
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-0.5 w-1 bg-blue-200 h-full"></div>
          <div className="space-y-8">
            {timeline.map((item, index) => (
              <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>
                <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                  <div className="bg-white p-6 rounded-lg shadow-lg">
                    <div className="text-2xl font-bold text-blue-600 mb-2">{item.year}</div>
                    <p className="text-slate-700">{item.event}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Leadership Team</h2>
            <p className="text-xl text-slate-600">
              Experienced professionals leading our commitment to excellence
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Managing Director', dept: 'Executive Leadership' },
              { name: 'Operations Director', dept: 'Mining Operations' },
              { name: 'Community Relations Director', dept: 'Stakeholder Engagement' }
            ].map((leader, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="w-24 h-24 bg-slate-200 rounded-full mx-auto mb-4"></div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{leader.name}</h3>
                <p className="text-slate-600">{leader.dept}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
