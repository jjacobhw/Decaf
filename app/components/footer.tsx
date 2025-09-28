import React from 'react';
import { Brain } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-[#161b22] border-t border-gray-200 dark:border-[#30363d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          <div className="col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-xl font-semibold text-gray-900 dark:text-[#f0f6fc]">Decaf</span>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-[#f0f6fc] mb-4">Product</h4>
            <ul className="space-y-3 text-sm text-gray-600 dark:text-[#8b949e]">
              <li><a href="#" className="hover:text-gray-900 dark:hover:text-[#f0f6fc] transition-colors">AI Study Plans</a></li>
              <li><a href="#" className="hover:text-gray-900 dark:hover:text-[#f0f6fc] transition-colors">Sleep Tracking</a></li>
              <li><a href="#" className="hover:text-gray-900 dark:hover:text-[#f0f6fc] transition-colors">Progress Analytics</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-[#f0f6fc] mb-4">Resources</h4>
            <ul className="space-y-3 text-sm text-gray-600 dark:text-[#8b949e]">
              <li><a href="#" className="hover:text-gray-900 dark:hover:text-[#f0f6fc] transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-gray-900 dark:hover:text-[#f0f6fc] transition-colors">Study Guide</a></li>
              <li><a href="#" className="hover:text-gray-900 dark:hover:text-[#f0f6fc] transition-colors">Blog</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-[#f0f6fc] mb-4">Company</h4>
            <ul className="space-y-3 text-sm text-gray-600 dark:text-[#8b949e]">
              <li><a href="#" className="hover:text-gray-900 dark:hover:text-[#f0f6fc] transition-colors">About</a></li>
              <li><a href="#" className="hover:text-gray-900 dark:hover:text-[#f0f6fc] transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-gray-900 dark:hover:text-[#f0f6fc] transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-[#30363d] flex justify-between items-center">
          <p className="text-gray-500 dark:text-[#8b949e] text-sm">© {new Date().getFullYear()} Decaf. All rights reserved.</p>
          <div className="flex space-x-2">
            <a 
              href="https://github.com/jjacobhw/Decaf" 
              className="inline-flex items-center p-2 text-gray-600 hover:text-black dark:text-[#8b949e] dark:hover:text-[#f0f6fc] transition-colors border border-transparent hover:border-gray-300 dark:hover:border-[#30363d] rounded-lg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a 
              href="https://linkedin.com/in/jjacobhw" 
              className="inline-flex items-center p-2 text-gray-600 hover:text-blue-600 dark:text-[#8b949e] dark:hover:text-[#58a6ff] transition-colors border border-transparent hover:border-gray-300 dark:hover:border-[#30363d] rounded-lg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer