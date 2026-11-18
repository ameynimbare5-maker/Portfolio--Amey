import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';

export default function ThemeToggle({ isDark, toggleTheme, className = '' }) {
  return (
    <button
      onClick={toggleTheme}
      type="button"
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className={`relative p-2 rounded-xl transition-all duration-300 border backdrop-blur-md cursor-pointer ${
        isDark
          ? 'bg-slate-800/80 border-slate-700/80 text-amber-300 hover:border-amber-400/50 hover:shadow-glow-cyan/20'
          : 'bg-white/90 border-slate-200 text-indigo-600 hover:border-indigo-400 shadow-sm'
      } ${className}`}
    >
      <motion.div
        key={isDark ? 'moon' : 'sun'}
        initial={{ rotate: -90, scale: 0.5, opacity: 0 }}
        animate={{ rotate: 0, scale: 1, opacity: 1 }}
        exit={{ rotate: 90, scale: 0.5, opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="flex items-center justify-center w-5 h-5"
      >
        {isDark ? (
          <Sun className="w-4 h-4 text-amber-300 fill-amber-300/30" />
        ) : (
          <Moon className="w-4 h-4 text-indigo-600 fill-indigo-600/30" />
        )}
      </motion.div>
    </button>
  );
}
