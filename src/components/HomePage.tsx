
import React from 'react';
import { ChevronDown, Pickaxe, Mountain, Shield, ArrowRight } from 'lucide-react';

const HomePage: React.FC = () => {
  const stats = [
    { label: 'Years of Experience', value: '15+' },
    { label: 'Mining Concessions', value: '8' },
    { label: 'Local Employees', value: '500+' },
    { label: 'Community Projects', value: '25+' }
  ];

  const miningOperations = [
    { 
      name: 'Copper Mining', 
      description: 'High-grade copper extraction from our primary concessions',
      image: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      details: 'Advanced ore processing with 50,000+ tons annually'
    },
    { 
      name: 'Cobalt Production', 
      description: 'Strategic cobalt mining essential for battery technology',
      image: 'https://images.unsplash.com/photo-1518709594023-6eab9bab7b23?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      details: 'Artisanal mining programs with international certifications'
    },
    { 
      name: 'Zinc Processing', 
      description: 'Modern zinc extraction with environmental controls',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      details: 'State-of-the-art technology with quality grade 55-60%'
    },
    { 
      name: 'Environmental Safety', 
      description: 'Sustainable mining practices for future generations',
      image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      details: 'ISO certified environmental management systems'
    },
    { 
      name: 'Community Development', 
      description: 'Supporting local communities through mining partnerships',
      image: 'https://images.unsplash.com/photo-1509228627152-72ae9be3fbb8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      details: 'Education and healthcare programs for 25+ communities'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section with Sea Life Style */}
      <section className="relative h-screen bg-gradient-to-b from-blue-600/90 to-blue-800/90 text-white overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?ixlib=rb-4.0.3&auto=format&fit=crop&w=2072&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-blue-900/60"></div>
        
        <div className="relative h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-2xl">
              <h1 className="text-5xl md:text-7xl font-light mb-6 leading-tight">
                INTO THE
                <br />
                <span className="text-6xl md:text-8xl font-bold">MINING LIFE</span>
              </h1>
              <p className="text-lg md:text-xl mb-8 font-light leading-relaxed text-blue-100">
                Mining excellence is about exploring. It offers a sense of tranquility through extraction, processing, or simply gazing at the earth. This experience connects you to the beauty and mystery of underground life.
              </p>
              
              {/* Social Icons */}
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center cursor-pointer hover:bg-white/30 transition-colors">
                  <span className="text-sm font-bold">f</span>
                </div>
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center cursor-pointer hover:bg-white/30 transition-colors">
                  <span className="text-sm font-bold">@</span>
                </div>
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center cursor-pointer hover:bg-white/30 transition-colors">
                  <span className="text-sm font-bold">▶</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={32} className="text-white/80" />
        </div>
      </section>

      {/* Mining Operations Locations */}
      <section className="py-16 bg-gradient-to-b from-gray-100 to-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-light text-gray-800 mb-4">Featured Mining Operations</h2>
            <div className="flex justify-center space-x-8 mb-8">
              <button className="text-blue-900 font-semibold border-b-2 border-blue-900 pb-2">DRC</button>
             
            </div>
          </div>
          
          {/* Pentagon Grid Layout */}
          <div className="relative max-w-4xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              {/* Top Row */}
              <div className="md:col-start-1 md:ml-[-50px] flex justify-center">
                <div className="pentagon-container">
                  <div 
                    className="pentagon bg-cover bg-center relative overflow-hidden cursor-pointer group"
                    style={{ backgroundImage: `url(${miningOperations[0].image})` }}
                  >
                    <div className="pentagon-overlay group-hover:bg-blue-900/80 transition-colors duration-300">
                      <div className="pentagon-content">
                        <h3 className="text-white font-semibold text-lg">{miningOperations[0].name}</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Middle Row */}
              <div className="flex justify-center md:ml-[-20px]">
                <div className="pentagon-container">
                  <div 
                    className="pentagon bg-cover bg-center relative overflow-hidden cursor-pointer group"
                    style={{ backgroundImage: `url(${miningOperations[1].image})` }}
                  >
                    <div className="pentagon-overlay group-hover:bg-blue-900/80 transition-colors duration-300">
                      <div className="pentagon-content">
                        <h3 className="text-white font-semibold text-lg">{miningOperations[1].name}</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-center">
                <div className="pentagon-container">
                  <div 
                    className="pentagon bg-cover bg-center relative overflow-hidden cursor-pointer group"
                    style={{ backgroundImage: `url(${miningOperations[2].image})` }}
                  >
                    <div className="pentagon-overlay group-hover:bg-blue-900/80 transition-colors duration-300">
                      <div className="pentagon-content">
                        <h3 className="text-white font-semibold text-lg">{miningOperations[2].name}</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Bottom Row */}
              <div className="md:col-start-2 flex justify-center md:ml-[-20px]">
                <div className="pentagon-container">
                  <div 
                    className="pentagon bg-cover bg-center relative overflow-hidden cursor-pointer group"
                    style={{ backgroundImage: `url(${miningOperations[3].image})` }}
                  >
                    <div className="pentagon-overlay group-hover:bg-blue-900/80 transition-colors duration-300">
                      <div className="pentagon-content">
                        <h3 className="text-white font-semibold text-lg">{miningOperations[3].name}</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="md:col-start-3 flex justify-center">
                <div className="pentagon-container">
                  <div 
                    className="pentagon bg-cover bg-center relative overflow-hidden cursor-pointer group"
                    style={{ backgroundImage: `url(${miningOperations[4].image})` }}
                  >
                    <div className="pentagon-overlay group-hover:bg-blue-900/80 transition-colors duration-300">
                      <div className="pentagon-content">
                        <h3 className="text-white font-semibold text-lg">{miningOperations[4].name}</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section 
        className="relative py-20 bg-cover bg-center text-white"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1518709594023-6eab9bab7b23?ixlib=rb-4.0.3&auto=format&fit=crop&w=2025&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-blue-900/80"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-light mb-4">Contact Us</h2>
            <div className="h-1 w-20 bg-white mx-auto mb-8"></div>
            <p className="text-xl font-light">We'll follow up by phone within 24 hours</p>
          </div>
          
          <form className="grid md:grid-cols-3 gap-6 mb-8">
            <input 
              type="text" 
              placeholder="Name" 
              className="bg-transparent border border-white/30 px-4 py-3 text-white placeholder-white/70 focus:border-white focus:outline-none"
            />
            <input 
              type="email" 
              placeholder="Email" 
              className="bg-transparent border border-white/30 px-4 py-3 text-white placeholder-white/70 focus:border-white focus:outline-none"
            />
            <input 
              type="tel" 
              placeholder="Phone" 
              className="bg-transparent border border-white/30 px-4 py-3 text-white placeholder-white/70 focus:border-white focus:outline-none"
            />
          </form>
          
          <textarea 
            placeholder="Message" 
            rows={4}
            className="w-full bg-transparent border border-white/30 px-4 py-3 text-white placeholder-white/70 focus:border-white focus:outline-none mb-8"
          />
          
          <div className="text-center">
            <button className="px-12 py-3 bg-transparent border border-white text-white hover:bg-white hover:text-blue-900 transition-all duration-300">
              submit
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="text-4xl md:text-5xl font-light mb-2">{stat.value}</div>
                <div className="text-blue-200 font-light">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
