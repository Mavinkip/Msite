
import React from 'react';
import { Heart, Users, Leaf, GraduationCap, Home, Stethoscope } from 'lucide-react';

const ResponsibilityPage: React.FC = () => {
  const initiatives = [
    {
      icon: GraduationCap,
      title: 'Education Programs',
      description: 'Investing in local education infrastructure and scholarship programs',
      stats: '500+ Students Supported',
      projects: [
        'Construction of 3 primary schools',
        'University scholarship program',
        'Technical training center',
        'Adult literacy programs'
      ],
      color: 'bg-blue-500'
    },
    {
      icon: Stethoscope,
      title: 'Healthcare Initiatives',
      description: 'Improving healthcare access and quality for local communities',
      stats: '10,000+ People Served',
      projects: [
        'Community health center construction',
        'Mobile medical clinics',
        'Vaccination campaigns',
        'Maternal health programs'
      ],
      color: 'bg-green-500'
    },
    {
      icon: Home,
      title: 'Infrastructure Development',
      description: 'Building essential infrastructure to support community growth',
      stats: '15 Projects Completed',
      projects: [
        'Clean water supply systems',
        'Road construction and maintenance',
        'Electricity grid expansion',
        'Community centers'
      ],
      color: 'bg-orange-500'
    }
  ];

  const environmental = [
    {
      title: 'Land Rehabilitation',
      description: 'Restoring mining areas to productive use after extraction',
      impact: '200+ Hectares Restored'
    },
    {
      title: 'Water Management',
      description: 'Protecting local water sources and implementing recycling systems',
      impact: '90% Water Recycled'
    },
    {
      title: 'Biodiversity Protection',
      description: 'Preserving local ecosystems and wildlife habitats',
      impact: '5 Species Protected'
    },
    {
      title: 'Carbon Footprint',
      description: 'Reducing emissions through clean technology and efficiency',
      impact: '25% Reduction Achieved'
    }
  ];

  const partnerships = [
    {
      name: 'UNICEF Congo',
      type: 'International NGO',
      focus: 'Child education and health'
    },
    {
      name: 'University of Kolwezi',
      type: 'Academic Institution',
      focus: 'Research and development'
    },
    {
      name: 'Local Chiefs Council',
      type: 'Traditional Authority',
      focus: 'Community governance'
    },
    {
      name: 'Congo Environmental Agency',
      type: 'Government Body',
      focus: 'Environmental compliance'
    }
  ];

  return (
    <div className="space-y-16">
      {/* Header */}
      <section className="bg-gradient-to-r from-green-800 to-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Corporate Responsibility</h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto">
            Our commitment to sustainable mining, community development, 
            and environmental stewardship in the Kolwezi region
          </p>
        </div>
      </section>

      {/* Community Impact */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Community Impact</h2>
          <p className="text-xl text-slate-600">
            Transforming lives through targeted social investment programs
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {initiatives.map((initiative, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className={`${initiative.color} h-48 flex items-center justify-center`}>
                <initiative.icon size={64} className="text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-slate-900 mb-3">{initiative.title}</h3>
                <p className="text-slate-600 mb-4">{initiative.description}</p>
                <div className="bg-slate-50 p-3 rounded-lg mb-4">
                  <div className="text-2xl font-bold text-blue-600">{initiative.stats}</div>
                </div>
                <ul className="space-y-2">
                  {initiative.projects.map((project, idx) => (
                    <li key={idx} className="text-sm text-slate-600 flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      {project}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Environmental Stewardship */}
      <section className="bg-green-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Environmental Stewardship</h2>
            <p className="text-xl text-slate-600">
              Protecting the environment for future generations through sustainable practices
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {environmental.map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
                <Leaf className="text-green-600 mx-auto mb-4" size={48} />
                <h3 className="text-lg font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600 text-sm mb-4">{item.description}</p>
                <div className="bg-green-100 text-green-800 px-3 py-2 rounded-full text-sm font-semibold">
                  {item.impact}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Economic Impact */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Economic Development</h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <Users className="text-blue-600 mt-1" size={24} />
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">Local Employment</h3>
                  <p className="text-slate-600">Over 500 direct jobs and 1,500 indirect employment opportunities</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Heart className="text-blue-600 mt-1" size={24} />
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">Community Investment</h3>
                  <p className="text-slate-600">$2.5 million annual investment in community development projects</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <GraduationCap className="text-blue-600 mt-1" size={24} />
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">Skills Development</h3>
                  <p className="text-slate-600">Comprehensive training programs building local technical expertise</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-slate-50 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Impact Numbers</h3>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
                <div className="text-slate-600">Direct Jobs</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">25</div>
                <div className="text-slate-600">Community Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">15,000</div>
                <div className="text-slate-600">Beneficiaries</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600 mb-2">$2.5M</div>
                <div className="text-slate-600">Annual Investment</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partnerships */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Strategic Partnerships</h2>
            <p className="text-xl text-slate-600">
              Collaborating with key stakeholders to maximize positive impact
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {partnerships.map((partner, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="text-blue-600" size={32} />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{partner.name}</h3>
                  <div className="text-sm text-blue-600 font-semibold mb-2">{partner.type}</div>
                  <p className="text-slate-600 text-sm">{partner.focus}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability Goals */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">2030 Sustainability Goals</h2>
          <p className="text-xl text-slate-600">
            Our commitment to the UN Sustainable Development Goals
          </p>
        </div>
        <div className="bg-gradient-to-r from-blue-900 to-green-800 text-white rounded-2xl p-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">Zero</div>
              <div className="text-lg">Environmental Incidents</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">100%</div>
              <div className="text-lg">Local Procurement Target</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">50%</div>
              <div className="text-lg">Renewable Energy Usage</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ResponsibilityPage;
