import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github, CheckCircle2, Layers, ShieldCheck, Lightbulb, Sparkles } from 'lucide-react';
import Button from './Button';

export default function ProjectModal({ project, isOpen, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-3xl glass-card rounded-2xl border border-white/20 shadow-2xl overflow-hidden z-10 my-8 max-h-[90vh] flex flex-col bg-[#0d101e]"
        >
          {/* Header Banner */}
          <div className="relative p-6 sm:p-8 bg-gradient-to-r from-blue-900/40 via-purple-900/30 to-slate-900/50 border-b border-white/10">
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/20 text-blue-300 border border-blue-500/30">
                {project.tag || 'Project Showcase'}
              </span>
              <span className="px-2.5 py-0.5 rounded-full text-xs text-slate-400 font-mono bg-white/5 border border-white/10 uppercase">
                {project.category}
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              {project.title}
            </h2>
            <p className="text-sm sm:text-base text-cyan-400 font-medium mt-1">
              {project.subtitle}
            </p>
          </div>

          {/* Modal Scrollable Body */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-slate-300">
            {/* Overview */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                Overview & Purpose
              </h3>
              <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Technologies Used */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                Tech Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-lg text-xs font-medium bg-white/5 border border-white/10 text-cyan-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Key Features */}
            {project.features && (
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-cyan-400" /> Key Features & Capabilities
                </h3>
                <ul className="space-y-2.5">
                  {project.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Architecture Details */}
            {project.architecture && (
              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 space-y-3">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-300 flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-blue-400" /> Architecture Highlights
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  {Object.entries(project.architecture).map(([key, val]) => (
                    <div key={key} className="p-2.5 rounded-lg bg-black/30 border border-white/5">
                      <span className="font-semibold text-blue-300 capitalize block mb-0.5">{key}</span>
                      <span className="text-slate-400">{val}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Challenges Solved */}
            {project.challengesSolved && (
              <div className="p-4 rounded-xl bg-purple-500/5 border border-purple-500/20">
                <h3 className="text-xs font-bold uppercase tracking-wider text-purple-300 flex items-center gap-1.5 mb-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-purple-400" /> Challenge & Problem Solved
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {project.challengesSolved}
                </p>
              </div>
            )}

            {/* Key Learnings */}
            {project.keyLearnings && (
              <div className="p-4 rounded-xl bg-cyan-500/5 border border-cyan-500/20">
                <h3 className="text-xs font-bold uppercase tracking-wider text-cyan-300 flex items-center gap-1.5 mb-1.5">
                  <Lightbulb className="w-3.5 h-3.5 text-cyan-400" /> Key Technical Takeaway
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {project.keyLearnings}
                </p>
              </div>
            )}
          </div>

          {/* Modal Footer */}
          <div className="p-4 sm:p-6 border-t border-white/10 bg-slate-900/70 flex flex-wrap items-center justify-between gap-3">
            <span className="text-xs text-slate-400 font-mono">
              Status: Actively Maintained Project
            </span>
            <div className="flex items-center gap-3">
              {project.github && (
                <Button
                  variant="secondary"
                  size="sm"
                  href={project.github}
                  target="_blank"
                  icon={Github}
                >
                  GitHub Repo
                </Button>
              )}
              {project.liveDemo && (
                <Button
                  variant="primary"
                  size="sm"
                  href={project.liveDemo}
                  target="_blank"
                  icon={ExternalLink}
                >
                  Live Preview
                </Button>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
