import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projectCategories, projectsData } from '../data/projects';
import ProjectCard from '../components/ProjectCard';
import SectionTitle from '../components/SectionTitle';

export default function Projects({ onOpenDetails }) {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredProjects =
    selectedCategory === 'all'
      ? projectsData
      : projectsData.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="py-20 md:py-28 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/4 left-10 w-96 h-96 rounded-full bg-blue-600/15 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-cyan-600/10 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTitle
          badge="Featured Engineering"
          title="Showcase"
          highlight="Projects"
          description="A selection of full-stack and frontend applications I have architected, covering e-governance solutions, student data management, and offline Progressive Web Apps."
        />

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {projectCategories.map((category) => {
            const isSelected = selectedCategory === category.id;
            return (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                type="button"
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? 'text-white bg-gradient-to-r from-blue-600 to-indigo-600 shadow-md shadow-blue-500/30 border border-blue-400/40'
                    : 'text-slate-300 hover:text-white bg-white/[0.03] hover:bg-white/[0.08] border border-white/10'
                }`}
              >
                {category.name}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onOpenDetails={onOpenDetails}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* GitHub CTA banner */}
        <div className="mt-16 p-6 sm:p-8 rounded-2xl glass-card border border-white/10 bg-gradient-to-r from-blue-900/20 via-purple-900/20 to-slate-900/40 text-center max-w-3xl mx-auto space-y-3">
          <h3 className="text-lg sm:text-xl font-bold text-white">
            Looking for more code repositories and experiments?
          </h3>
          <p className="text-xs sm:text-sm text-slate-300">
            I continuously push code, explore algorithmic problems, and build micro-tools on GitHub.
          </p>
          <div className="pt-2">
            <a
              href="https://github.com/ameynimbare"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold bg-white/10 hover:bg-white/15 text-white border border-white/20 transition-all hover:border-cyan-400"
            >
              <span>Explore ameynimbare on GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
