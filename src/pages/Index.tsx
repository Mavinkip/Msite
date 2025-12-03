
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
      <main className="relative">
        {renderCurrentPage()}
      </main>
      
      {/* Footer */}
      <footer className="bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-light mb-4">QUICK LINKS</h3>
              <ul className="space-y-2 text-sm text-blue-200">
                <li><button onClick={() => setCurrentPage('home')} className="hover:text-white transition-colors">Home</button></li>
                <li><button onClick={() => setCurrentPage('about')} className="hover:text-white transition-colors">Who We Are</button></li>
                <li><button onClick={() => setCurrentPage('activities')} className="hover:text-white transition-colors">Mining Operations</button></li>
                <li><button onClick={() => setCurrentPage('responsibility')} className="hover:text-white transition-colors">Corporate Responsibility</button></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-light mb-4">CONTACT US</h3>
              <div className="space-y-2 text-sm text-blue-200">
                <p>Kolwezi, Lualaba Province</p>
                <p>Democratic Republic of Congo</p>
                <p>+243 (0) 81 234 5678</p>
                <p>info@kolwenzicongo.cd</p>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-light mb-4">FIND US</h3>
              <div className="w-full h-32 bg-blue-800 rounded"></div>
            </div>
            
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center">
                  <span className="text-white font-bold">K</span>
                </div>
                <div>
                  <h3 className="text-lg font-light">GROUPE DE SOCIETE DE MINEIRE (SARL)</h3>
                  <p className="text-xs text-blue-200">Mining Excellence</p>
                </div>
              </div>
              <p className="text-sm text-blue-200 leading-relaxed">
                We are a leading mining company with operations in Goma and Kolwezi, DRC. We specialize in responsible mining practices, mineral exploration, and sustainable development.
              </p>
            </div>
          </div>
          
          <div className="border-t border-blue-800 pt-8 mt-8 text-center text-sm text-blue-300">
            <p>© 2024 Groupe de Société de Minière (SARL) Kolwenzi Congo. All Rights Reserved</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
