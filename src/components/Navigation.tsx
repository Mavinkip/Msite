
import React from 'react';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';

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
        <div className="flex justify-between items-center py-6">
          {/* Logo Section with Enhanced Visibility */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-yellow-600/90 backdrop-blur-sm border border-yellow-300/30 flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-xl">G</span>
            </div>
            <div className="text-white bg-black/30 backdrop-blur-sm px-3 py-2 rounded-lg">
              <h1 className="text-xl font-bold tracking-wider text-shadow-lg">GOLDEN HORIZON MINING</h1>
              <p className="text-xs text-yellow-300 font-medium">Excellence in Gold Exploration</p>
            </div>
          </div>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center text-white bg-yellow-600/80 hover:bg-yellow-700/90 backdrop-blur-sm px-4 py-2 rounded-lg transition-colors duration-300">
            <Phone size={16} className="mr-2" />
            <span className="text-sm font-medium">+254 798 708617</span>
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
