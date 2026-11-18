import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Terminal,
  Globe,
  Code2,
  Radio,
  Server,
  Rocket,
  CheckCircle2,
  ArrowRight,
  Clock,
} from 'lucide-react';
import { journeyData } from '../data/journey';
import SectionTitle from '../components/SectionTitle';

const journeyIcons = {
  Terminal,
  Globe,
  Code2,
  Radio,
  Server,
  Rocket,
};

export default function Journey() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="journey" className="py-20 md:py-28 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/3 left-10 w-96 h-96 rounded-full bg-purple-600/10 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTitle
          badge="Milestone Progression"
          title="My Development"
          highlight="Journey"
          description="A chronological walkthrough of my evolution from writing basic C logic loops to architecting interactive React interfaces and full-stack API services."
        />

        {/* Milestone Steps Bar (Desktop / Tablet) */}
        <div className="hidden lg:grid grid-cols-6 gap-2 mb-10 p-2 rounded-2xl glass-card border border-white/10 bg-[#0d101d]">
          {journeyData.map((item, index) => {
            const Icon = journeyIcons[item.icon] || Code2;
            const isActive = activeStep === index;

            return (
              <button
                key={item.step}
                onClick={() => setActiveStep(index)}
                className={`p-3 rounded-xl text-left transition-all duration-200 cursor-pointer flex flex-col justify-between ${
                  isActive
                    ? 'bg-gradient-to-b from-blue-600/30 to-purple-600/20 border border-cyan-400/50 shadow-md'
                    : 'hover:bg-white/5 border border-transparent'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-mono text-cyan-400 font-bold">
                    STEP {item.step}
                  </span>
                  <span className="text-[10px] font-mono text-slate-400">{item.year}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon
                    className="w-4 h-4 shrink-0"
                    style={{ color: item.color || '#06b6d4' }}
                  />
                  <span className="text-xs font-semibold text-white truncate">
                    {item.tag}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Milestone Spotlight (Desktop & Tablet) */}
        <div className="hidden lg:block">
          {(() => {
            const current = journeyData[activeStep];
            const Icon = journeyIcons[current.icon] || Code2;

            return (
              <motion.div
                key={current.step}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35 }}
                className="p-8 rounded-2xl glass-card border border-white/15 bg-[#0f1222]/90 shadow-2xl relative overflow-hidden"
              >
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                  <div className="space-y-4 max-w-2xl">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center"
                        style={{
                          backgroundColor: `${current.color || '#3b82f6'}20`,
                          color: current.color || '#3b82f6',
                          border: `1px solid ${current.color || '#3b82f6'}40`,
                        }}
                      >
                        <Icon className="w-6 h-6" />
                      </div>

                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-mono font-bold text-cyan-400">
                            Milestone {current.step} • {current.year}
                          </span>
                          {current.current && (
                            <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 animate-pulse">
                              Active Focus
                            </span>
                          )}
                        </div>
                        <h3 className="text-2xl font-bold text-white mt-0.5">
                          {current.title}
                        </h3>
                      </div>
                    </div>

                    <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
                      {current.description}
                    </p>
                  </div>

                  {/* Key Takeaways */}
                  <div className="p-5 rounded-xl bg-white/[0.03] border border-white/10 md:w-80 shrink-0 space-y-3">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-cyan-400 flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5" /> Key Growth Takeaways
                    </h4>
                    <ul className="space-y-2">
                      {current.takeaways.map((takeaway, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                          <span>{takeaway}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            );
          })()}
        </div>

        {/* Mobile Vertical Timeline Accordion */}
        <div className="lg:hidden space-y-4">
          {journeyData.map((item, index) => {
            const Icon = journeyIcons[item.icon] || Code2;

            return (
              <div
                key={item.step}
                className="p-5 rounded-2xl glass-card border border-white/10 bg-[#0f1222]/80 space-y-3"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-cyan-400">
                    STEP {item.step} • {item.year}
                  </span>
                  <span className="text-xs text-slate-400 font-mono">{item.tag}</span>
                </div>

                <div className="flex items-center gap-2.5">
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                    style={{
                      backgroundColor: `${item.color || '#3b82f6'}20`,
                      color: item.color || '#3b82f6',
                    }}
                  >
                    <Icon className="w-4 h-4" />
                  </div>
                  <h4 className="text-base font-bold text-white">
                    {item.title}
                  </h4>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {item.description}
                </p>

                <div className="pt-2 border-t border-white/10 space-y-1.5">
                  {item.takeaways.map((point, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-[11px] text-slate-400">
                      <CheckCircle2 className="w-3 h-3 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
