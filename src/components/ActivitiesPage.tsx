import React from 'react';
import { Pickaxe, Truck, Factory, Shield, Zap, Globe } from 'lucide-react';

const ActivitiesPage: React.FC = () => {
  const operations = [
    {
      icon: Pickaxe,
      title: 'Copper Mining',
      image: '/images/copper.jpg',
      description: 'High-grade copper extraction from our primary concessions in the Kolwezi region',
      details: [
        'Open-pit and underground mining operations',
        'Advanced ore processing and concentration',
        'Annual production capacity: 50,000+ tons',
        'Grade: 3.5-4.2% copper content'
      ]
    },
    {
      icon: <Zap className="h-8 w-8 text-blue-600" />,
      title: 'Cobalt Production',
      image: '/images/cobalt.jpg', // Fixed path
      description: 'Strategic cobalt mining essential for battery technology and renewable energy',
      details: [
        'Artisanal and small-scale mining (ASM) programs',
        'Cobalt hydroxide production',
        'Annual production: 2,500+ tons',
        'International quality certifications'
      ]
    },
    {
      icon: Factory,
      title: 'Zinc Processing',
      image: '/images/zinc.jpg',
      description: 'Modern zinc extraction and processing facilities with environmental controls',
      details: [
        'State-of-the-art processing technology',
        'Zinc concentrate production',
        'Environmental impact minimization',
        'Quality grade: 55-60% zinc content'
      ]
    }
  ];

  const processes = [
    {
      icon: Globe,
      title: 'Exploration',
      description: 'Geological surveys and resource assessment using modern technology'
    },
    {
      icon: Pickaxe,
      title: 'Extraction',
      description: 'Safe and efficient mining operations following international standards'
    },
    {
      icon: Factory,
      title: 'Processing',
      description: 'Advanced mineral processing and concentration facilities'
    },
    {
      icon: Truck,
      title: 'Distribution',
      description: 'Reliable supply chain and logistics to international markets'
    }
  ];

  const facilities = [
    { name: 'Kolwezi Main Mine', type: 'Copper & Cobalt', status: 'Active', capacity: '50,000 t/year' },
    { name: 'Processing Plant A', type: 'Concentration', status: 'Active', capacity: '100,000 t/year' },
    { name: 'Zinc Facility', type: 'Zinc Processing', status: 'Active', capacity: '25,000 t/year' },
    { name: 'Exploration Site B', type: 'Prospecting', status: 'Development', capacity: 'TBD' }
  ];

  return (
    <div className="space-y-16">
      {/* Header */}
      <section className="bg-gradient-to-r from-slate-900 to-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Mining Operations</h1>
          <p className="text-xl text-slate-200 max-w-3xl mx-auto">
            Comprehensive mining activities focused on copper, cobalt, and zinc extraction
            in the mineral-rich Kolwezi region
          </p>
        </div>
      </section>

      {/* Main Operations */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Mining Operations</h2>
          <p className="text-xl text-slate-600">
            Three primary mineral extraction and processing operations
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {operations.map((operation, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="h-48 overflow-hidden">
                <img
                  src={operation.image}
                  alt={operation.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-slate-900 mb-3">{operation.title}</h3>
                <p className="text-slate-600 mb-4">{operation.description}</p>
                <ul className="space-y-2">
                  {operation.details.map((detail, idx) => (
                    <li key={idx} className="text-sm text-slate-600 flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Process Flow */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Mining Process</h2>
            <p className="text-xl text-slate-600">
              From exploration to distribution - our comprehensive mining workflow
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {processes.map((process, index) => (
              <div key={index} className="text-center">
                <div className="bg-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <process.icon className="text-blue-600" size={32} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{process.title}</h3>
                <p className="text-slate-600 text-sm">{process.description}</p>
                {index < processes.length - 1 && (
                  <div className="hidden md:block absolute mt-4 ml-20 w-8 h-0.5 bg-blue-300"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities Overview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Facilities</h2>
          <p className="text-xl text-slate-600">
            Modern mining infrastructure and processing capabilities
          </p>
        </div>
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-slate-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">Facility</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">Type</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">Status</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">Capacity</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {facilities.map((facility, index) => (
                  <tr key={index} className="hover:bg-slate-50">
                    <td className="px-6 py-4 text-sm font-medium text-slate-900">{facility.name}</td>
                    <td className="px-6 py-4 text-sm text-slate-600">{facility.type}</td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${facility.status === 'Active'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-yellow-100 text-yellow-800'
                        }`}>
                        {facility.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-600">{facility.capacity}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Safety & Compliance */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">Safety & Compliance</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Shield className="text-blue-600 mt-1" size={24} />
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">Safety Standards</h3>
                    <p className="text-slate-600">International safety protocols and regular training programs for all personnel</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Globe className="text-blue-600 mt-1" size={24} />
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">Environmental Compliance</h3>
                    <p className="text-slate-600">Strict adherence to environmental regulations and sustainable mining practices</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Factory className="text-blue-600 mt-1" size={24} />
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">Quality Assurance</h3>
                    <p className="text-slate-600">Comprehensive quality control systems ensuring product excellence</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Safety Statistics</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-slate-600">Zero Accidents</span>
                  <span className="text-2xl font-bold text-green-600">365 Days</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-600">Safety Training Hours</span>
                  <span className="text-2xl font-bold text-blue-600">2,500+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-600">Certified Personnel</span>
                  <span className="text-2xl font-bold text-purple-600">95%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ActivitiesPage;
