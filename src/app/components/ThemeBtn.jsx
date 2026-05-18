"use client";
import React from 'react';
import { useTheme } from "@/contexts/ThemeContext";
const ThemeBtn = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
   
      <button
        onClick={toggleTheme}
        className="btn btn-ghost btn-sm btn-circle"
        aria-label="Toggle theme">
        {isDark ?
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M20.354 15.354A9 9 0 118.646 3.646 9.003 9.003 0 0020.354 15.354z"
            />
          </svg>
        : <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707M17.657 17.657l-.707-.707M6.343 6.343l-.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z"
            />
          </svg>
        }
      </button>
    
  );
};

export default ThemeBtn;


