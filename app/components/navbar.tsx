"use client";

import { useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import ThemeToggle from './themetoggle';
import { X, Menu } from 'lucide-react';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const controls = useAnimation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const scrollToHero = async () => {
    // Animate the logo click
    await controls.start({
      scale: 0.95,
      transition: { duration: 0.1 }
    });
    
    controls.start({
      scale: 1,
      transition: { duration: 0.2, ease: "easeOut" }
    });

    // Smooth scroll to hero section
    const startPosition = window.pageYOffset;
    const targetPosition = 0;
    const distance = targetPosition - startPosition;
    const duration = 800; // 800ms
    let start: number | null = null;

    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      
      // Easing function for smooth animation
      const easeInOutCubic = (progress: number) => progress < 0.5 
        ? 4 * progress * progress * progress 
        : (progress - 1) * (2 * progress - 2) * (2 * progress - 2) + 1;
      
      const currentPosition = startPosition + (distance * easeInOutCubic(progress));
      window.scrollTo(0, currentPosition);
      
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-[#0d1117]/95 backdrop-blur-md border-b border-gray-200 dark:border-[#30363d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <motion.button 
              animate={controls}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToHero}
              className="text-xl font-semibold text-gray-900 dark:text-[#f0f6fc] transition-opacity cursor-pointer"
            >
              Decaf
            </motion.button>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#documentation" className="text-gray-600 dark:text-[#8b949e] hover:text-gray-900 dark:hover:text-[#f0f6fc] transition-colors font-medium">
              Documentation
            </a>
            <a href="#analytics" className="text-gray-600 dark:text-[#8b949e] hover:text-gray-900 dark:hover:text-[#f0f6fc] transition-colors font-medium">
              Analytics
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
              href="#analytics" 
              className="block px-3 py-2 text-gray-600 dark:text-[#8b949e] hover:text-gray-900 dark:hover:text-[#f0f6fc] transition-colors font-medium"
              onClick={closeMenu}
            >
              Analytics
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
                className="w-full bg-gray-900 dark:bg-white hover:bg-gray-800 dark:hover:bg-gray-100 text-white dark:text-gray-900 px-4 py-2 rounded-md font-medium transition-colors"
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