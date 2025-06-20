
import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import HomePage from '../components/HomePage';
import AboutPage from '../components/AboutPage';
import ActivitiesPage from '../components/ActivitiesPage';
import PublicationsPage from '../components/PublicationsPage';
import ResponsibilityPage from '../components/ResponsibilityPage';
import ContactPage from '../components/ContactPage';

const Index = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const renderCurrentPage = () => {
    switch(currentPage) {
      case 'home':
        return <HomePage />;
      case 'about':
        return <AboutPage />;
      case 'activities':
        return <ActivitiesPage />;
      case 'publications':
        return <PublicationsPage />;
      case 'responsibility':
        return <ResponsibilityPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation 
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />
      <main className="pb-16">
        {renderCurrentPage()}
      </main>
      
      {/* Footer */}
      <footer className="bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center">
                  <span className="text-slate-900 font-bold text-lg">K</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold">KOLWENZI CONGO</h3>
                  <p className="text-xs text-slate-300">Mining Excellence</p>
                </div>
              </div>
              <p className="text-slate-300 text-sm">
                Leading Congo's mining future through sustainable extraction and community development.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-slate-300">
                <li><button onClick={() => setCurrentPage('home')} className="hover:text-white transition-colors">Home</button></li>
                <li><button onClick={() => setCurrentPage('about')} className="hover:text-white transition-colors">Who We Are</button></li>
                <li><button onClick={() => setCurrentPage('activities')} className="hover:text-white transition-colors">Mining Operations</button></li>
                <li><button onClick={() => setCurrentPage('responsibility')} className="hover:text-white transition-colors">Corporate Responsibility</button></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-sm text-slate-300">
                <p>Kolwezi, Lualaba Province</p>
                <p>Democratic Republic of Congo</p>
                <p>+243 (0) 81 234 5678</p>
                <p>info@kolwenzicongo.cd</p>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Our Minerals</h4>
              <div className="flex flex-wrap gap-2">
                <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-xs">Copper</span>
                <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-xs">Cobalt</span>
                <span className="bg-gray-500 text-white px-3 py-1 rounded-full text-xs">Zinc</span>
              </div>
            </div>
          </div>
          
          <div className="border-t border-slate-700 pt-8 mt-8 text-center text-sm text-slate-400">
            <p>&copy; 2024 Groupe de Société de Minière (SARL) Kolwenzi Congo. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
