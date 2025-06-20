
import React from 'react';
import { Menu, X, Phone } from 'lucide-react';

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
    { id: 'activities', name: 'Mining Operations' },
    { id: 'publications', name: 'Publications' },
    { id: 'responsibility', name: 'Corporate Responsibility' },
    { id: 'contact', name: 'Contact Us' }
  ];

  return (
    <header className="absolute top-0 left-0 right-0 z-50 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          {/* Logo Section */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center">
              <span className="text-white font-bold text-lg">K</span>
            </div>
            <div className="text-white">
              <h1 className="text-xl font-light tracking-wider">KOLWENZI CONGO</h1>
              <p className="text-xs text-white/80 font-light">Mining & Development</p>
            </div>
          </div>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center text-white">
            <Phone size={16} className="mr-2" />
            <span className="text-sm font-light">+243 (0) 81 234 5678</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {pages.map(page => (
              <button
                key={page.id}
                onClick={() => setCurrentPage(page.id)}
                className={`text-sm font-light transition-colors duration-200 ${
                  currentPage === page.id 
                    ? 'text-white border-b border-white pb-1' 
                    : 'text-white/80 hover:text-white'
                }`}
              >
                {page.name}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 bg-blue-900/95 backdrop-blur-sm rounded-lg mt-2">
            <div className="space-y-2">
              {pages.map(page => (
                <button
                  key={page.id}
                  onClick={() => {
                    setCurrentPage(page.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`block w-full text-left px-4 py-3 text-sm transition-colors duration-200 ${
                    currentPage === page.id 
                      ? 'text-white bg-white/10' 
                      : 'text-white/80 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {page.name}
                </button>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navigation;
