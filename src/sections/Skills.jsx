import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { skillCategories, skillsData } from '../data/skills';
import SkillCard from '../components/SkillCard';
import SectionTitle from '../components/SectionTitle';

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredSkills =
    selectedCategory === 'all'
      ? skillsData
      : skillsData.filter((skill) => skill.category === selectedCategory);

  return (
    <section id="skills" className="py-20 md:py-28 relative overflow-hidden bg-dot-pattern">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-0 w-96 h-96 rounded-full bg-purple-600/15 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 rounded-full bg-blue-600/10 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTitle
          badge="Core Competencies"
          title="Technical"
          highlight="Skills"
          description="A structured overview of the programming languages, frontend libraries, backend architectures, databases, and development tools I work with daily."
        />

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {skillCategories.map((category) => {
            const isSelected = selectedCategory === category.id;
            return (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                type="button"
                className={`relative px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? 'text-white bg-gradient-to-r from-blue-600 to-indigo-600 shadow-md shadow-blue-500/30 border border-blue-400/40'
                    : 'text-slate-300 hover:text-white bg-white/[0.03] hover:bg-white/[0.08] border border-white/10'
                }`}
              >
                {category.name}
                {category.id !== 'all' && (
                  <span className="ml-1.5 px-1.5 py-0.5 rounded-full text-[10px] bg-black/40 text-slate-400">
                    {skillsData.filter((s) => s.category === category.id).length}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Skills Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5"
        >
          <AnimatePresence>
            {filteredSkills.map((skill, index) => (
              <SkillCard key={skill.name} skill={skill} index={index} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Customization Note */}
        <div className="mt-12 text-center">
          <p className="text-xs text-slate-400 font-mono">
            * All skills, proficiency levels, and tools are easily updated via <code className="text-cyan-400">src/data/skills.js</code>
          </p>
        </div>
      </div>
    </section>
  );
}
