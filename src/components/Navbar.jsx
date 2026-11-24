import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, FileText, Sparkles, Terminal } from 'lucide-react';
import { personalData } from '../data/personalData';
import ThemeToggle from './ThemeToggle';
import Button from './Button';

export default function Navbar({
  activeSection,
  isDark,
  toggleTheme,
  onOpenResume,
}) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Skills', href: '#skills', id: 'skills' },
    { label: 'Education', href: '#education', id: 'education' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'Experience', href: '#experience', id: 'experience' },
    { label: 'Certifications', href: '#certifications', id: 'certifications' },
    { label: 'Services', href: '#services', id: 'services' },
    { label: 'Journey', href: '#journey', id: 'journey' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${isScrolled
          ? 'py-3 bg-[#080a12]/85 dark:bg-[#07080d]/90 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/20'
          : 'py-5 bg-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Brand */}
          <a
            href="#home"
            className="flex items-center gap-2.5 group cursor-pointer"
            aria-label="Amey Vasant Nimbare - Home"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-cyan-400 p-[1.5px] shadow-glow-blue/40 group-hover:shadow-glow-cyan/50 transition-all">
              <div className="w-full h-full rounded-[10px] bg-[#0c0f1c] flex items-center justify-center">
                <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 text-sm tracking-wider font-mono">
                  AVN
                </span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-slate-100 text-sm sm:text-base tracking-tight group-hover:text-cyan-400 transition-colors flex items-center gap-1.5">
                Amey Nimbare
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" title="Available for Opportunities" />
              </span>
              <span className="text-[10px] text-slate-400 font-mono tracking-wider">
                TYBSc IT • Mumbai
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-1 p-1 rounded-full bg-white/[0.04] dark:bg-white/[0.03] border border-white/10 backdrop-blur-md">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  className={`relative px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 ${isActive
                      ? 'text-cyan-300'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                    }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="activePill"
                      className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600/40 to-cyan-500/30 border border-cyan-400/30 -z-10 shadow-sm shadow-cyan-500/20"
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Action Buttons (Right) */}
          <div className="hidden sm:flex items-center gap-2.5">
            <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} />

            <Button
              variant="cyan"
              size="sm"
              onClick={onOpenResume}
              icon={FileText}
            >
              Resume
            </Button>
          </div>

          {/* Mobile menu button and quick theme toggle */}
          <div className="flex items-center gap-2 xl:hidden">
            <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} />

            <button
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              type="button"
              className="p-2 rounded-xl bg-white/5 border border-white/10 text-slate-200 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-cyan-400" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="xl:hidden bg-[#0c0f1c]/95 backdrop-blur-xl border-b border-white/10 shadow-2xl overflow-hidden"
          >
            <div className="max-w-7xl mx-auto px-4 py-5 space-y-3">
              <div className="grid grid-cols-2 gap-2">
                {navLinks.map((link) => {
                  const isActive = activeSection === link.id;
                  return (
                    <a
                      key={link.id}
                      href={link.href}
                      onClick={handleLinkClick}
                      className={`px-3.5 py-2 rounded-xl text-xs font-semibold flex items-center justify-between border transition-all ${isActive
                          ? 'bg-blue-600/20 text-cyan-300 border-cyan-500/40'
                          : 'bg-white/[0.02] text-slate-300 border-white/5 hover:border-white/15'
                        }`}
                    >
                      <span>{link.label}</span>
                      {isActive && <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />}
                    </a>
                  );
                })}
              </div>

              <div className="pt-3 border-t border-white/10 flex items-center justify-between gap-3">
                <Button
                  variant="primary"
                  size="sm"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenResume();
                  }}
                  icon={FileText}
                  className="w-full"
                >
                  Download / View Resume
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
