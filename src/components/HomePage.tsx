
import React from 'react';
import { ChevronRight, Pickaxe, Mountain, Shield } from 'lucide-react';

const HomePage: React.FC = () => {
  const stats = [
    { label: 'Years of Experience', value: '15+' },
    { label: 'Mining Concessions', value: '8' },
    { label: 'Local Employees', value: '500+' },
    { label: 'Community Projects', value: '25+' }
  ];

  const minerals = [
    { name: 'Copper', description: 'High-grade copper extraction', color: 'bg-orange-500' },
    { name: 'Cobalt', description: 'Strategic cobalt mining', color: 'bg-blue-500' },
    { name: 'Zinc', description: 'Premium zinc production', color: 'bg-gray-500' }
  ];

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              GROUPE DE SOCIETE DE MINEIRE
              <span className="block text-yellow-400">(SARL)</span>
              <span className="block text-3xl md:text-4xl mt-4">KOLWENZI CONGO</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-slate-200 leading-relaxed">
              Leading Congo's mining future through sustainable extraction, 
              community development, and environmental stewardship
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {minerals.map((mineral, index) => (
                <div key={index} className={`${mineral.color} text-white px-6 py-3 rounded-full font-semibold text-lg shadow-lg`}>
                  {mineral.name}
                </div>
              ))}
            </div>
            <button className="bg-yellow-500 hover:bg-yellow-400 text-slate-900 px-8 py-4 rounded-lg font-bold text-lg transition-all duration-200 transform hover:scale-105 shadow-xl">
              Discover Our Operations
              <ChevronRight className="inline ml-2" size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-blue-900 mb-2">{stat.value}</div>
              <div className="text-slate-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Our Expertise */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Mining Expertise</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Located in the mineral-rich Kolwezi region of the Democratic Republic of Congo, 
              we specialize in responsible extraction of critical minerals
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {minerals.map((mineral, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className={`h-48 ${mineral.color} flex items-center justify-center`}>
                  <Pickaxe size={64} className="text-white" />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">{mineral.name}</h3>
                  <p className="text-slate-600 mb-4">{mineral.description}</p>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li>• High-grade ore extraction</li>
                    <li>• Advanced processing facilities</li>
                    <li>• International quality standards</li>
                    <li>• Sustainable mining practices</li>
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Commitment */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Our Commitment to Excellence</h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <Mountain className="text-blue-600 mt-1" size={24} />
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">Sustainable Mining</h3>
                  <p className="text-slate-600">Environmental protection and resource conservation at the core of our operations</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Shield className="text-blue-600 mt-1" size={24} />
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">Safety First</h3>
                  <p className="text-slate-600">Comprehensive safety protocols ensuring the wellbeing of our workforce</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <ChevronRight className="text-blue-600 mt-1" size={24} />
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">Community Development</h3>
                  <p className="text-slate-600">Investing in local communities through education, healthcare, and infrastructure</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-blue-50 to-slate-100 p-8 rounded-2xl">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Mining in Kolwezi</h3>
              <p className="text-slate-600 mb-6">
                Kolwezi is renowned as one of the world's most significant mining regions, 
                rich in copper and cobalt deposits essential for modern technology and renewable energy.
              </p>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="text-3xl font-bold text-blue-900 mb-2">Congo's Mining Hub</div>
                <div className="text-slate-600">Strategic location in the Copperbelt</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
