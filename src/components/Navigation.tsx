
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface NavigationProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
}

const Navigation: React.FC<NavigationProps> = ({
  currentPage,
  setCurrentPage,
  mobileMenuOpen,
  setMobileMenuOpen
}) => {
  const [logoError, setLogoError] = useState(false);
  
  const pages = [
    { id: 'home', name: 'Home' },
    { id: 'about', name: 'Who We Are' },
    { id: 'activities', name: 'Gold Operations' },
    { id: 'publications', name: 'Publications' },
    { id: 'responsibility', name: 'Responsibility' },
    { id: 'contact', name: 'Contact' }
  ];

  return (
    <header className="absolute top-0 left-0 right-0 z-50 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo and Contact Section */}
          <div className="flex flex-col items-center">
            <div className="items-center flex md:flex">
              {logoError ? (
                <div 
                  onClick={() => setCurrentPage('home')}
                  className="h-40 md:h-60 flex items-center justify-center cursor-pointer px-4"
                  style={{ minWidth: '200px', maxWidth: '300px' }}
                >
                  <span className="text-white text-xl md:text-2xl font-bold text-center">
                    GROUPE DE SOCIETE<br />DE MINEIRE
                  </span>
                </div>
              ) : (
                <img 
                  src="/images/logo.png"
                  alt="Groupe de Societe de Mineire Logo"
                  className="h-40 md:h-60 w-auto cursor-pointer object-contain"
                  onClick={() => setCurrentPage('home')}
                  onError={() => setLogoError(true)}
                  style={{ minWidth: '200px', maxWidth: '300px' }}
                />
              )}
            </div>
          </div>

          {/* Menu Button and Dropdown */}
          <div className="relative">
            <button
              className="p-2 text-white hover:bg-white/10 rounded transition-colors bg-black/20 backdrop-blur-sm"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Vertical Navigation Menu - Positioned under menu icon */}
            {mobileMenuOpen && (
              <nav className="absolute top-full right-0 mt-2 bg-gray-900/95 backdrop-blur-sm rounded-lg p-4 min-w-[250px] shadow-xl border border-yellow-600/30">
                <div className="space-y-1">
                  {pages.map(page => (
                    <button
                      key={page.id}
                      onClick={() => {
                        setCurrentPage(page.id);
                        setMobileMenuOpen(false);
                      }}
                      className={`block w-full text-left px-3 py-2 text-sm transition-colors duration-200 rounded ${
                        currentPage === page.id 
                          ? 'text-yellow-400 bg-yellow-600/20' 
                          : 'text-white/80 hover:text-yellow-300 hover:bg-yellow-600/10'
                      }`}
                    >
                      {page.name}
                    </button>
                  ))}
                </div>
              </nav>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
