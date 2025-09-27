// components/ThemeToggle.tsx
"use client";

import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../components/theme';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-md transition-colors border border-gray-200 dark:border-[#30363d] hover:border-gray-300 dark:hover:border-[#6e7681] hover:bg-gray-50 dark:hover:bg-[#21262d]"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      {theme === 'light' ? (
        <Moon className="w-5 h-5 text-blue-500 hover:text-blue-600" />
      ) : (
        <Sun className="w-5 h-5 text-yellow-500 hover:text-yellow-400" />
      )}
    </button>
  );
}