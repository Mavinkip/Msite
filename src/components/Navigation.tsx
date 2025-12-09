
import React from 'react';
import { Menu, X, Phone, ChevronDown, Mail } from 'lucide-react';

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
  
  const isHomePage = currentPage === 'home';

  return (
    <header className="absolute top-0 left-0 right-0 z-50 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo and Contact Section */}
          <div className="flex flex-col items-center">
            <div className={`items-center ${isHomePage ? 'flex' : 'hidden'} md:flex`}>
              <img 
                src="/images/logo.png"
                alt="Groupe de Societe de Mineire Logo"
                className="h-40 md:h-60 w-auto cursor-pointer object-contain"
                onClick={() => setCurrentPage('home')}
                style={{ minWidth: '200px', maxWidth: '300px' }}
              />
            </div>
            {/* Contact Info - Moved below logo */}
            <div className="hidden lg:flex items-center text-white bg-yellow-600/80 hover:bg-yellow-700/90 backdrop-blur-sm px-4 py-2 rounded-lg transition-colors duration-300 mt-2">
              <Mail size={16} className="mr-2" />
              <a href="mailto:info@groupedesocietedemineire.com" className="text-sm font-medium hover:underline">
                info@groupedesocietedemineire.com
              </a>
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
