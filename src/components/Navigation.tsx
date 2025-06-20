
import React from 'react';
import { Menu, X, Home, Users, Briefcase, FileText, Heart, Mail } from 'lucide-react';

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
    { id: 'home', name: 'Home', icon: Home },
    { id: 'about', name: 'Who We Are', icon: Users },
    { id: 'activities', name: 'Mining Operations', icon: Briefcase },
    { id: 'publications', name: 'Publications', icon: FileText },
    { id: 'responsibility', name: 'Corporate Responsibility', icon: Heart },
    { id: 'contact', name: 'Contact', icon: Mail }
  ];

  return (
    <header className="bg-slate-900 text-white shadow-lg relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo Section */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center">
              <span className="text-slate-900 font-bold text-lg">K</span>
            </div>
            <div>
              <h1 className="text-xl font-bold">KOLWENZI CONGO</h1>
              <p className="text-xs text-slate-300">Mining Excellence</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-1">
            {pages.map(page => (
              <button
                key={page.id}
                onClick={() => setCurrentPage(page.id)}
                className={`px-4 py-2 rounded-lg transition-all duration-200 flex items-center space-x-2 ${
                  currentPage === page.id 
                    ? 'bg-yellow-500 text-slate-900 font-semibold' 
                    : 'hover:bg-slate-700 text-slate-200 hover:text-white'
                }`}
              >
                <page.icon size={16} />
                <span className="text-sm">{page.name}</span>
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-slate-700 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-slate-700">
            <div className="space-y-2">
              {pages.map(page => (
                <button
                  key={page.id}
                  onClick={() => {
                    setCurrentPage(page.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-200 flex items-center space-x-3 ${
                    currentPage === page.id 
                      ? 'bg-yellow-500 text-slate-900 font-semibold' 
                      : 'hover:bg-slate-700 text-slate-200'
                  }`}
                >
                  <page.icon size={18} />
                  <span>{page.name}</span>
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
