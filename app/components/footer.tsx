// components/footer.tsx
import React from 'react';
import { Brain } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          <div className="col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gray-900 dark:bg-white rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5 text-white dark:text-gray-900" />
              </div>
              <span className="text-xl font-semibold text-gray-900 dark:text-white">Decaf</span>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Product</h4>
            <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
              <li><a href="#" className="hover:text-gray-900 dark:hover:text-white">AI Study Plans</a></li>
              <li><a href="#" className="hover:text-gray-900 dark:hover:text-white">Sleep Tracking</a></li>
              <li><a href="#" className="hover:text-gray-900 dark:hover:text-white">Progress Analytics</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Resources</h4>
            <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
              <li><a href="#" className="hover:text-gray-900 dark:hover:text-white">Help Center</a></li>
              <li><a href="#" className="hover:text-gray-900 dark:hover:text-white">Study Guide</a></li>
              <li><a href="#" className="hover:text-gray-900 dark:hover:text-white">Blog</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Company</h4>
            <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
              <li><a href="#" className="hover:text-gray-900 dark:hover:text-white">About</a></li>
              <li><a href="#" className="hover:text-gray-900 dark:hover:text-white">Careers</a></li>
              <li><a href="#" className="hover:text-gray-900 dark:hover:text-white">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 dark:text-gray-500 text-sm">© 2025 Decaf. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-500 dark:text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 text-sm">Privacy</a>
            <a href="#" className="text-gray-500 dark:text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 text-sm">Terms</a>
            <a href="#" className="text-gray-500 dark:text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 text-sm">Security</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;