import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, Heart, Code2 } from 'lucide-react';
import { personalData } from '../data/personalData';

export default function Footer({ onOpenResume }) {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Education', href: '#education' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Certifications', href: '#certifications' },
    { label: 'Services', href: '#services' },
    { label: 'Journey', href: '#journey' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="relative border-t border-white/10 bg-[#070913] text-slate-400 overflow-hidden">
      {/* Subtle top ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-gradient-to-b from-blue-600/10 to-transparent pointer-events-none blur-2xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-cyan-400 p-[1.5px]">
                <div className="w-full h-full rounded-[10px] bg-[#0c0f1c] flex items-center justify-center font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 font-mono">
                  AVN
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white tracking-tight">
                  {personalData.name}
                </h3>
                <p className="text-xs text-cyan-400 font-medium">
                  {personalData.role}
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 max-w-md leading-relaxed">
              Crafting reactive, high-performance web applications with modern React.js, Tailwind CSS, and scalable REST APIs. Dedicated to continuous learning and building software with impact.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={personalData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-400/50 hover:bg-white/10 text-slate-300 hover:text-cyan-400 flex items-center justify-center transition-all"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={personalData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 hover:border-blue-400/50 hover:bg-white/10 text-slate-300 hover:text-blue-400 flex items-center justify-center transition-all"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${personalData.email}`}
                className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 hover:border-purple-400/50 hover:bg-white/10 text-slate-300 hover:text-purple-400 flex items-center justify-center transition-all"
                aria-label="Send Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              {navLinks.slice(0, 5).map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="hover:text-cyan-400 transition-colors inline-block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Additional Links & Actions */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Explore More
            </h4>
            <ul className="space-y-2 text-xs">
              {navLinks.slice(5).map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="hover:text-cyan-400 transition-colors inline-block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <button
                  onClick={onOpenResume}
                  className="hover:text-cyan-400 transition-colors text-left cursor-pointer"
                >
                  View & Download Resume
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright row */}
        <div className="pt-8 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p className="text-slate-400 text-center sm:text-left">
            © {currentYear} {personalData.name}. All rights reserved.
          </p>

          <div className="flex items-center gap-1.5 text-slate-400">
            <span>Designed & Developed with</span>
            <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500 inline" />
            <span>by <strong className="text-white font-semibold">Amey</strong></span>
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-cyan-400 hover:text-cyan-300 transition-colors font-medium cursor-pointer"
            aria-label="Back to top of page"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
