"use client";

import { useState } from 'react';
import ThemeToggle from './themetoggle';
import { X, Menu } from 'lucide-react';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-[#0d1117]/95 backdrop-blur-md border-b border-gray-200 dark:border-[#30363d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <span className="text-xl font-semibold text-gray-900 dark:text-[#f0f6fc]">
              Decaf
            </span>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#documentation" className="text-gray-600 dark:text-[#8b949e] hover:text-gray-900 dark:hover:text-[#f0f6fc] transition-colors font-medium">
              Documentation
            </a>
            <a href="#solutions" className="text-gray-600 dark:text-[#8b949e] hover:text-gray-900 dark:hover:text-[#f0f6fc] transition-colors font-medium">
              Solutions
            </a>
            <a href="#pricing" className="text-gray-600 dark:text-[#8b949e] hover:text-gray-900 dark:hover:text-[#f0f6fc] transition-colors font-medium">
              Pricing
            </a>
            <a href="#resources" className="text-gray-600 dark:text-[#8b949e] hover:text-gray-900 dark:hover:text-[#f0f6fc] transition-colors font-medium">
              Resources
            </a>
          </div>

          {/* CTA Buttons and Theme Toggle */}
          <div className="flex items-center space-x-4">
            {/* Desktop CTA Buttons and Theme Toggle */}
            <div className="hidden md:flex items-center space-x-4">
              {/* Theme Toggle - Now positioned to the left of Login button */}
              <ThemeToggle />
              
              {/* Login Button */}
              <button className="bg-gray-900 dark:bg-white hover:bg-gray-800 dark:hover:bg-gray-100 text-white dark:text-gray-900 px-4 py-2 rounded-md font-medium transition-colors">
                Log In
              </button>
            </div>

            {/* Mobile: Theme Toggle and Menu Button */}
            <div className="md:hidden flex items-center space-x-3">
              {/* Theme Toggle - Now to the left of hamburger menu */}
              <ThemeToggle />
              
              {/* Mobile Menu Button */}
              <button 
                className="text-gray-600 dark:text-[#8b949e] hover:text-gray-900 dark:hover:text-[#f0f6fc]"
                onClick={toggleMenu}
                aria-label="Toggle menu"
              >
                {isMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu with Animation */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white/80 dark:bg-[#0d1117]/95 backdrop-blur-md border-t border-gray-200 dark:border-[#30363d]">
            <a 
              href="#documentation" 
              className="block px-3 py-2 text-gray-600 dark:text-[#8b949e] hover:text-gray-900 dark:hover:text-[#f0f6fc] transition-colors font-medium"
              onClick={closeMenu}
            >
              Documentation
            </a>
            <a 
              href="#solutions" 
              className="block px-3 py-2 text-gray-600 dark:text-[#8b949e] hover:text-gray-900 dark:hover:text-[#f0f6fc] transition-colors font-medium"
              onClick={closeMenu}
            >
              Solutions
            </a>
            <a 
              href="#pricing" 
              className="block px-3 py-2 text-gray-600 dark:text-[#8b949e] hover:text-gray-900 dark:hover:text-[#f0f6fc] transition-colors font-medium"
              onClick={closeMenu}
            >
              Pricing
            </a>
            <a 
              href="#resources" 
              className="block px-3 py-2 text-gray-600 dark:text-[#8b949e] hover:text-gray-900 dark:hover:text-[#f0f6fc] transition-colors font-medium"
              onClick={closeMenu}
            >
              Resources
            </a>
            
            {/* Mobile CTA Button */}
            <div className="pt-4 pb-2">
              <button 
                className="w-full bg-white dark:bg-white hover:bg-gray-100 dark:hover:bg-gray-100 text-gray-900 dark:text-gray-900 px-4 py-2 rounded-md font-medium transition-colors"
                onClick={closeMenu}
              >
                Log In
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;