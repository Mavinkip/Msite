import React from 'react';
import { BarChart2, Compass, HardHat, Shield, Award, Globe, MapPin, Clock, Layers, Activity, Factory } from 'lucide-react';

const ActivitiesPage: React.FC = () => {
  // Gold Mining Operations
  const goldOperations = [
    {
      title: 'Open-Pit Gold Mining',
      location: 'Western Region',
      status: 'Active',
      image: '/images/gold1.jpg',
      stats: [
        { label: 'Annual Production', value: '250,000 oz', icon: <BarChart2 className="w-5 h-5" /> },
        { label: 'Reserves', value: '5.2M oz', icon: <Layers className="w-5 h-5" /> },
        { label: 'Mine Life', value: '15+ years', icon: <Clock className="w-5 h-5" /> }
      ],
      description: 'Our flagship open-pit operation utilizes state-of-the-art mining technology to extract high-grade gold ore with industry-leading efficiency and environmental responsibility.'
    },
    {
      title: 'Underground Operations',
      location: 'Northern Shaft',
      status: 'Expanding',
      image: '/images/gold2.jpg',
      stats: [
        { label: 'Annual Production', value: '180,000 oz', icon: <BarChart2 className="w-5 h-5" /> },
        { label: 'Reserves', value: '3.8M oz', icon: <Layers className="w-5 h-5" /> },
        { label: 'Mine Life', value: '12+ years', icon: <Clock className="w-5 h-5" /> }
      ],
      description: 'Specialized underground mining operations targeting high-grade gold veins with minimal environmental impact and maximum safety standards.'
    },
    {
      title: 'Exploration Projects',
      location: 'Multiple Sites',
      status: 'Development',
      image: '/images/gold3.jpg',
      stats: [
        { label: 'Target Resources', value: '8-10M oz', icon: <BarChart2 className="w-5 h-5" /> },
        { label: 'Exploration Budget', value: '$50M', icon: <Award className="w-5 h-5" /> },
        { label: 'Timeline', value: '5-year plan', icon: <Clock className="w-5 h-5" /> }
      ],
      description: 'Aggressive exploration program focused on discovering and developing the next generation of world-class gold deposits.'
    }
  ];

  // Gold Processing
  const processingStages = [
    {
      stage: '1',
      title: 'Crushing & Grinding',
      description: 'Ore is reduced to fine particles to liberate gold particles',
      icon: <Activity className="w-8 h-8 text-yellow-600" />
    },
    {
      stage: '2',
      title: 'Gravity Concentration',
      description: 'Initial gold recovery using gravity separation techniques',
      icon: <Compass className="w-8 h-8 text-yellow-600" />
    },
    {
      stage: '3',
      title: 'Leaching',
      description: 'Gold is dissolved using a cyanide solution',
      icon: <HardHat className="w-8 h-8 text-yellow-600" />
    },
    {
      stage: '4',
      title: 'Recovery',
      description: 'Gold is recovered from solution using carbon adsorption',
      icon: <Shield className="w-8 h-8 text-yellow-600" />
    },
    {
      stage: '5',
      title: 'Refining',
      description: 'Final purification to produce 99.99% pure gold bars',
      icon: <Award className="w-8 h-8 text-yellow-600" />
    }
  ];

  // Reserve Estimates
  const reserveData = [
    { category: 'Proven Reserves', ounces: '2,450,000', grade: '1.8 g/t', type: 'Open Pit' },
    { category: 'Probable Reserves', ounces: '3,785,000', grade: '1.5 g/t', type: 'Open Pit' },
    { category: 'Indicated Resources', ounces: '6,200,000', grade: '1.2 g/t', type: 'Underground' },
    { category: 'Inferred Resources', ounces: '8,750,000', grade: '1.0 g/t', type: 'Exploration' }
  ];

  // Facilities data
  const facilities = [
    {
      name: 'Main Processing Plant',
      type: 'Gold Processing',
      status: 'Active',
      capacity: '10,000 TPD'
    },
    {
      name: 'Tailings Storage Facility',
      type: 'Waste Management',
      status: 'Active',
      capacity: '50M Tons'
    },
    {
      name: 'Exploration Camp',
      type: 'Field Operations',
      status: 'Active',
      capacity: '150 Personnel'
    },
    {
      name: 'Refinery Facility',
      type: 'Gold Refining',
      status: 'Upgrading',
      capacity: '5,000 oz/day'
    }
  ];

  // Key Projects
  const keyProjects = [
    {
      name: 'Golden Ridge Expansion',
      location: 'Western Region',
      status: 'Permitting',
      target: 'Increase production by 40%',
      timeline: '2024-2026'
    },
    {
      name: 'Deep Exploration Program',
      location: 'Northern Belt',
      status: 'Drilling',
      target: 'Identify new high-grade zones',
      timeline: '2023-2025'
    },
    {
      name: 'Processing Plant Upgrade',
      location: 'Central Facility',
      status: 'Design Phase',
      target: 'Improve recovery rates to 95%+',
      timeline: '2024-2025'
    }
  ];

  return (
    <div className="bg-gray-50">
      {/* Hero Header */}
      <section className="relative bg-gradient-to-br from-gray-900 to-yellow-900 text-white pt-32 pb-20">
        <div className="absolute inset-0 bg-[url('/images/gold2.jpg')] bg-cover bg-center opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-light mb-6">Gold Operations</h1>
          <div className="h-1 w-24 bg-yellow-500 mx-auto mb-8"></div>
          <p className="text-xl md:text-2xl text-yellow-100 max-w-4xl mx-auto">
            World-class gold mining operations delivering sustainable value through responsible production and exploration excellence
          </p>
        </div>
      </section>

      {/* Gold Operations Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">
              Our <span className="text-yellow-600 font-semibold">Gold Operations</span>
            </h2>
            <div className="h-1 w-20 bg-yellow-500 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Strategically located gold mining operations with a proven track record of production excellence and responsible mining practices
            </p>
          </div>
          
          {/* Operations Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {goldOperations.map((operation, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="h-48 overflow-hidden">
                  <img
                    src={operation.image}
                    alt={operation.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{operation.title}</h3>
                      <div className="flex items-center text-gray-600">
                        <MapPin className="w-4 h-4 mr-2" />
                        <span>{operation.location}</span>
                      </div>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      operation.status === 'Active' 
                        ? 'bg-green-100 text-green-800' 
                        : operation.status === 'Expanding' 
                        ? 'bg-blue-100 text-blue-800' 
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {operation.status}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-6">{operation.description}</p>
                  <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-100">
                    {operation.stats.map((stat, idx) => (
                      <div key={idx} className="text-center">
                        <div className="flex justify-center mb-2 text-yellow-600">
                          {stat.icon}
                        </div>
                        <div className="text-lg font-bold text-gray-900">{stat.value}</div>
                        <div className="text-sm text-gray-500">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Flow */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Gold Processing Flow</h2>
            <p className="text-xl text-gray-600">
              From ore to pure gold - our comprehensive extraction and refining process
            </p>
          </div>
          <div className="grid md:grid-cols-5 gap-8 relative">
            {processingStages.map((process, index) => (
              <div key={index} className="text-center relative">
                <div className="bg-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg border-2 border-yellow-100">
                  {process.icon}
                </div>
                <div className="w-10 h-10 rounded-full bg-yellow-500 text-white flex items-center justify-center mx-auto mb-4 font-bold">
                  {process.stage}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{process.title}</h3>
                <p className="text-gray-600 text-sm">{process.description}</p>
                {index < processingStages.length - 1 && (
                  <div className="hidden md:block absolute top-10 right-0 w-full h-0.5 bg-yellow-200 transform translate-x-1/2"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Gold Facilities</h2>
            <p className="text-xl text-gray-600">
              Modern gold mining infrastructure and processing capabilities
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Facility</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Type</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Status</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Capacity</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {facilities.map((facility, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">{facility.name}</td>
                      <td className="px-6 py-4 text-sm text-gray-600">{facility.type}</td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex px-3 py-1 text-xs font-semibold rounded-full ${
                          facility.status === 'Active'
                            ? 'bg-green-100 text-green-800'
                            : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {facility.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">{facility.capacity}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Safety & Compliance */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Safety & Compliance in Gold Mining</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Shield className="text-yellow-600 mt-1" size={24} />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Gold Industry Safety Standards</h3>
                    <p className="text-gray-600">International safety protocols and regular training programs for all gold mining personnel</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Globe className="text-yellow-600 mt-1" size={24} />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Environmental Stewardship</h3>
                    <p className="text-gray-600">Strict adherence to environmental regulations and sustainable gold mining practices</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Factory className="text-yellow-600 mt-1" size={24} />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Gold Quality Assurance</h3>
                    <p className="text-gray-600">Comprehensive quality control systems ensuring 99.99% pure gold production</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Gold Mining Safety Statistics</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Zero Accidents in Gold Operations</span>
                  <span className="text-2xl font-bold text-green-600">365 Days</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Gold Safety Training Hours</span>
                  <span className="text-2xl font-bold text-yellow-600">2,500+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Certified Gold Mining Personnel</span>
                  <span className="text-2xl font-bold text-blue-600">95%</span>
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