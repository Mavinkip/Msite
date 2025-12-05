
import React, { useRef } from 'react';
import { ChevronDown, ArrowRight, BarChart2, Shield, Globe, Award } from 'lucide-react';

const HomePage: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const trustVideoRef = useRef<HTMLVideoElement>(null);

  const stats = [
    { label: 'Ounces of Gold', value: '1M+', icon: <BarChart2 className="w-8 h-8" /> },
    { label: 'Years of Excellence', value: '20+', icon: <Award className="w-8 h-8" /> },
    { label: 'Global Presence', value: '5+', icon: <Globe className="w-8 h-8" /> },
    { label: 'Industry Compliance', value: '100%', icon: <Shield className="w-8 h-8" /> }
  ];

  const goldBenefits = [
    { 
      title: 'Wealth Preservation', 
      description: 'Gold has maintained its value for centuries, making it the ultimate store of wealth in uncertain times.',
      image: '/images/gold1.jpg'
    },
    { 
      title: 'Inflation Hedge', 
      description: 'Protect your portfolio against inflation and currency devaluation with tangible gold assets.',
      image: '/images/gold2.jpg'
    },
    { 
      title: 'Portfolio Diversification', 
      description: 'Gold provides essential diversification to balance traditional investments and reduce overall risk.',
      image: '/images/gold3.jpg'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with Gold Background Video */}
      <section className="relative h-screen overflow-hidden">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          poster="/images/gold1.jpg"
        >
          <source src="/images/golldbeingmade.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-900/60"></div>
        
        <div className="relative h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-6xl font-light mb-6 leading-tight text-white">
                Securing Tomorrow's
                <br />
                <span className="text-5xl md:text-7xl font-bold text-gold-400">Wealth, Today</span>
              </h1>
              <p className="text-lg md:text-xl mb-8 font-light leading-relaxed text-gray-200">
                Invest in the timeless value of gold with our exclusive opportunities in gold exploration and production. 
                Partner with us to secure your financial future with tangible assets that stand the test of time.
              </p>
              
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <button className="bg-gold-600 hover:bg-gold-700 text-white font-medium py-3 px-8 rounded-md transition-colors duration-300 flex items-center">
                  Mine Gold With Us
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
                <button className="bg-transparent hover:bg-white/10 text-white border border-white/20 font-medium py-3 px-8 rounded-md transition-colors duration-300">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={32} className="text-gold-400/80" />
        </div>
      </section>

      {/* Trust Section with Leadership Video */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">
              Leadership in <span className="text-gold-600 font-semibold">Gold Endorsement</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Hear from industry leaders about the enduring value and strategic importance of gold in today's economy.
            </p>
          </div>
          
          <div className="relative max-w-4xl mx-auto rounded-xl overflow-hidden shadow-2xl">
            <video
              ref={trustVideoRef}
              className="w-full h-auto"
              poster="/images/gold2.jpg"
              controls
            >
              <source src="/images/trumptalking.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="absolute inset-0 flex items-center justify-center">
              <button 
                onClick={() => trustVideoRef.current?.play()} 
                className="bg-white/90 hover:bg-white text-gold-600 rounded-full p-4 shadow-lg hover:scale-105 transition-transform duration-300"
                aria-label="Play video"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Gold Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">
              Why <span className="text-gold-600 font-semibold">Invest in Gold</span> Today?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Gold has been a symbol of wealth and a store of value for thousands of years. 
              In today's volatile markets, it's more relevant than ever.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {goldBenefits.map((benefit, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={benefit.image} 
                    alt={benefit.title}
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="p-6">
                <div className="text-gold-400 flex justify-center mb-4">
                  {stat.icon}
                </div>
                <div className="text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-light mb-6">
            Ready to Secure Your Financial Future with Gold?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join us in unlocking the potential of gold investments. Our expert team is ready to guide you through every step of the process.
          </p>
          <button className="bg-gold-600 hover:bg-gold-700 text-white font-medium py-4 px-10 rounded-md text-lg transition-colors duration-300 inline-flex items-center">
            Partner With Us
            <ArrowRight className="ml-3 h-5 w-5" />
          </button>
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
