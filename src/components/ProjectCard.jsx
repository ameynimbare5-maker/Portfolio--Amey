import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Info, CheckCircle2, ArrowRight } from 'lucide-react';
import Button from './Button';

export default function ProjectCard({ project, onOpenDetails }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.4 }}
      className="group relative flex flex-col rounded-2xl glass-card overflow-hidden transition-all duration-300 hover:border-blue-500/50 hover:shadow-glow-blue/20 bg-[#0f1222]/80"
    >
      {/* Decorative top accent glow */}
      <div
        className="h-1.5 w-full transition-all duration-300 group-hover:h-2"
        style={{
          background: `linear-gradient(90deg, ${project.accentColor || '#3b82f6'}, #8b5cf6, #06b6d4)`,
        }}
      />

      {/* Visual Header / Mockup Banner */}
      <div className="relative p-6 bg-gradient-to-b from-white/[0.04] to-transparent border-b border-white/[0.06]">
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white/5 border border-white/10 text-cyan-400">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            {project.tag || 'Project'}
          </span>

          <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 bg-black/40 px-2.5 py-0.5 rounded-md border border-white/5">
            {project.category}
          </span>
        </div>

        <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
          {project.title}
        </h3>
        <p className="text-xs sm:text-sm text-slate-400 font-medium mt-1">
          {project.subtitle}
        </p>

        {/* Dynamic code/architecture badge preview */}
        <div className="mt-4 p-3 rounded-xl bg-black/40 border border-white/5 font-mono text-xs text-slate-400 flex items-center justify-between">
          <span className="text-slate-500">// Stack summary</span>
          <span className="text-cyan-400 truncate max-w-[200px]">
            {project.technologies.slice(0, 3).join(' • ')}
          </span>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
        <div>
          <p className="text-sm text-slate-300 line-clamp-3 leading-relaxed mb-4">
            {project.brief || project.description}
          </p>

          {/* Key feature bullets */}
          {project.features && (
            <div className="space-y-1.5 mb-4">
              {project.features.slice(0, 2).map((feat, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-slate-400">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                  <span className="line-clamp-1">{feat}</span>
                </div>
              ))}
            </div>
          )}

          {/* Tech Badges */}
          <div className="flex flex-wrap gap-1.5 pt-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-white/[0.04] text-slate-300 border border-white/[0.06] hover:border-cyan-500/40 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="pt-4 border-t border-white/[0.06] flex flex-wrap items-center justify-between gap-2">
          <button
            onClick={() => onOpenDetails(project)}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors cursor-pointer py-1"
          >
            <Info className="w-3.5 h-3.5" />
            <span>View Details</span>
            <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
          </button>

          <div className="flex items-center gap-2">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 transition-colors"
                title="View Source on GitHub"
                aria-label={`GitHub source code for ${project.title}`}
              >
                <Github className="w-4 h-4" />
              </a>
            )}
            {project.liveDemo && (
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-blue-600/20 hover:bg-blue-600/30 text-blue-400 hover:text-blue-300 border border-blue-500/30 transition-colors"
                title="Open Live Preview"
                aria-label={`Live demo for ${project.title}`}
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
