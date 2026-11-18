import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, Calendar, ExternalLink, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { certificationCategories, certificationsData } from '../data/certifications';
import SectionTitle from '../components/SectionTitle';

export default function Certifications() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredItems =
    selectedCategory === 'all'
      ? certificationsData
      : certificationsData.filter((item) => item.category === selectedCategory);

  return (
    <section id="certifications" className="py-20 md:py-28 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 right-10 w-96 h-96 rounded-full bg-cyan-600/10 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTitle
          badge="Continuous Learning"
          title="Certifications &"
          highlight="Achievements"
          description="A verifiable record of technical workshops, online coursework, academic distinctions, and hackathon participations."
        />

        {/* Filter categories */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {certificationCategories.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                type="button"
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? 'text-white bg-gradient-to-r from-blue-600 to-indigo-600 shadow-md shadow-blue-500/30 border border-blue-400/40'
                    : 'text-slate-300 hover:text-white bg-white/[0.03] hover:bg-white/[0.08] border border-white/10'
                }`}
              >
                {cat.name}
              </button>
            );
          })}
        </div>

        {/* Cards Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredItems.map((item, index) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: (index % 3) * 0.1 }}
                whileHover={{ y: -4 }}
                className="p-6 rounded-2xl glass-card border border-white/10 hover:border-cyan-500/40 transition-all bg-[#0f1222]/80 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-blue-500/10 text-cyan-400 border border-blue-500/20">
                      {item.badge}
                    </span>
                    <span className="text-[11px] font-mono text-slate-400 flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-purple-400" />
                      {item.issueDate}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-white mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs text-cyan-400 font-medium mb-3">
                    {item.issuer}
                  </p>

                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>

                <div>
                  {item.skills && (
                    <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/10 mb-3">
                      {item.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-2 py-0.5 rounded text-[10px] font-medium bg-white/5 text-slate-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  )}

                  <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 pt-1">
                    <span>ID: {item.credentialId}</span>
                    {item.verificationUrl && item.verificationUrl !== '#' && (
                      <a
                        href={item.verificationUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-cyan-400 hover:text-cyan-300 flex items-center gap-1"
                      >
                        Verify <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Note on editing */}
        <div className="mt-10 text-center">
          <p className="text-xs text-slate-400 font-mono">
            * Add or modify certificates in <code className="text-cyan-400">src/data/certifications.js</code>
          </p>
        </div>
      </div>
    </section>
  );
}
