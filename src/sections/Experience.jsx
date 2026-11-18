import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, CheckCircle2, Sparkles, Send } from 'lucide-react';
import { experienceData } from '../data/experience';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';

export default function Experience() {
  return (
    <section id="experience" className="py-20 md:py-28 relative overflow-hidden bg-dot-pattern">
      {/* Background glow */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full bg-purple-600/10 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTitle
          badge="Fresher Pathway"
          title="Experience &"
          highlight="Learning Journey"
          description="As a motivated fresher and final-year BSc IT student, my experience stems from rigorous academic practicals, real-world full-stack capstone projects, and continuous self-driven software engineering."
        />

        {/* Experience Cards Stack */}
        <div className="max-w-4xl mx-auto space-y-6">
          {experienceData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.1 }}
              className={`p-6 sm:p-8 rounded-2xl glass-card border transition-all duration-300 ${
                item.isTarget
                  ? 'border-cyan-400/50 bg-gradient-to-r from-blue-950/40 via-cyan-950/20 to-slate-900/60 shadow-glow-cyan/15'
                  : item.isPlaceholder
                  ? 'border-dashed border-white/20 bg-white/[0.02]'
                  : 'border-white/10 bg-[#0f1222]/80 hover:border-white/20'
              }`}
            >
              {/* Header row */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-white/10">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        item.isTarget
                          ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-400/40'
                          : 'bg-white/5 text-slate-300 border border-white/10'
                      }`}
                    >
                      {item.badge}
                    </span>
                    <span className="text-xs text-slate-400 font-mono">
                      {item.type}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-white">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-cyan-400 font-medium">
                    {item.organization}
                  </p>
                </div>

                <div className="text-left sm:text-right text-xs text-slate-400 space-y-1">
                  <div className="flex items-center sm:justify-end gap-1.5 font-mono">
                    <Calendar className="w-3.5 h-3.5 text-blue-400" />
                    <span>{item.period}</span>
                  </div>
                  <div className="flex items-center sm:justify-end gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-purple-400" />
                    <span>{item.location}</span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-xs sm:text-sm text-slate-300 mt-4 leading-relaxed">
                {item.description}
              </p>

              {/* Bullet Points */}
              {item.points && (
                <div className="mt-4 space-y-2">
                  {item.points.map((point, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* Skills applied */}
              {item.skills && (
                <div className="mt-5 pt-4 border-t border-white/10 flex flex-wrap items-center gap-2">
                  <span className="text-[11px] font-mono text-slate-400">Core Stack:</span>
                  {item.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-0.5 rounded-md text-[11px] font-medium bg-white/5 border border-white/10 text-slate-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              )}

              {/* Contact Button if target card */}
              {item.isTarget && (
                <div className="mt-5 pt-3 flex items-center justify-end">
                  <Button
                    variant="primary"
                    size="sm"
                    href="#contact"
                    icon={Send}
                  >
                    Discuss Internship Opportunity
                  </Button>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
