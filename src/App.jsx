import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, Sparkles, MousePointer } from 'lucide-react';

import { useTheme } from './hooks/useTheme';
import { useScrollSpy } from './hooks/useScrollSpy';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import ScrollToTop from './components/ScrollToTop';
import ResumeModal from './components/ResumeModal';
import ProjectModal from './components/ProjectModal';

// Sections
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Education from './sections/Education';
import Projects from './sections/Projects';
import Experience from './sections/Experience';
import Certifications from './sections/Certifications';
import Services from './sections/Services';
import Journey from './sections/Journey';
import Contact from './sections/Contact';

const sectionIds = [
  'home',
  'about',
  'skills',
  'education',
  'projects',
  'experience',
  'certifications',
  'services',
  'journey',
  'contact',
];

export default function App() {
  const { theme, toggleTheme, isDark } = useTheme();
  const activeSection = useScrollSpy(sectionIds);

  const [isLoading, setIsLoading] = useState(true);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [cursorEnabled, setCursorEnabled] = useState(true);

  // Initial smooth intro loader
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 700);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen bg-light-bg dark:bg-dark-bg text-slate-800 dark:text-slate-100 transition-colors duration-300 font-sans selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Optional Custom Cursor for Desktop */}
      <CustomCursor enabled={cursorEnabled} />

      {/* Initial Page Loading Animation */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-[#07080d]"
          >
            <div className="relative flex flex-col items-center">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-cyan-400 p-[2px] animate-spin-slow">
                <div className="w-full h-full rounded-[14px] bg-[#0c0f1c] flex items-center justify-center font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 font-mono text-xl">
                  AVN
                </div>
              </div>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: 140 }}
                transition={{ duration: 0.6 }}
                className="h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-400 rounded-full mt-5"
              />
              <span className="text-xs font-mono text-slate-400 mt-2 tracking-widest uppercase">
                Loading Portfolio...
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Navigation Bar */}
      <Navbar
        activeSection={activeSection}
        isDark={isDark}
        toggleTheme={toggleTheme}
        onOpenResume={() => setIsResumeOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <Hero onOpenResume={() => setIsResumeOpen(true)} />
        <About />
        <Skills />
        <Education />
        <Projects onOpenDetails={(proj) => setSelectedProject(proj)} />
        <Experience />
        <Certifications />
        <Services />
        <Journey />
        <Contact />
      </main>

      {/* Footer */}
      <Footer onOpenResume={() => setIsResumeOpen(true)} />

      {/* Floating Utilities */}
      <ScrollToTop />

      {/* Cursor toggle pill for desktop users (bottom-left) */}
      <div className="hidden lg:block fixed bottom-6 left-6 z-40">
        <button
          onClick={() => setCursorEnabled((prev) => !prev)}
          className="px-3 py-1.5 rounded-full text-[11px] font-mono glass-card border border-white/10 text-slate-400 hover:text-white hover:border-cyan-400/50 transition-all flex items-center gap-1.5 cursor-pointer shadow-lg"
          title={cursorEnabled ? 'Disable custom glowing cursor' : 'Enable custom glowing cursor'}
        >
          <MousePointer className="w-3 h-3 text-cyan-400" />
          <span>Cursor: {cursorEnabled ? 'Glow ON' : 'Default'}</span>
        </button>
      </div>

      {/* Resume Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />

      {/* Project Details Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}
