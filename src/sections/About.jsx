import React from 'react';
import { motion } from 'framer-motion';
import {
  User,
  GraduationCap,
  MapPin,
  Clock,
  Sparkles,
  Target,
  Compass,
  CheckCircle,
  FileCode,
  FolderGit2,
  Award,
} from 'lucide-react';
import { personalData } from '../data/personalData';
import SectionTitle from '../components/SectionTitle';

export default function About() {
  const iconMap = {
    0: FolderGit2,
    1: FileCode,
    2: Award,
    3: Clock,
  };

  return (
    <section id="about" className="py-20 md:py-28 relative overflow-hidden">
      {/* Ambient background light */}
      <div className="absolute top-1/2 left-0 w-96 h-96 rounded-full bg-blue-600/10 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTitle
          badge="Discover My Story"
          title="About"
          highlight="Me"
          description="A motivated BSc IT student from Mumbai with a deep interest in modern web engineering, clean code architecture, and building user-centric digital experiences."
        />

        {/* Top Grid: Bio Story and Key Info Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          {/* Left Column: Narrative Story */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl glass-card border border-white/10 bg-[#0d101e]/80 space-y-4">
              <div className="flex items-center gap-2.5 pb-3 border-b border-white/10">
                <span className="p-2 rounded-lg bg-blue-500/10 text-cyan-400">
                  <User className="w-5 h-5" />
                </span>
                <div>
                  <h3 className="text-lg font-bold text-white">
                    Who I Am & What Drives Me
                  </h3>
                  <p className="text-xs text-slate-400 font-mono">
                    Frontend Developer • Continuous Learner • Problem Solver
                  </p>
                </div>
              </div>

              {personalData.aboutBio.map((paragraph, index) => (
                <p key={index} className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  {paragraph}
                </p>
              ))}

              {/* Career Goal Callout Box */}
              <div className="mt-4 p-4 rounded-xl bg-gradient-to-r from-blue-900/30 to-purple-900/30 border border-blue-500/20">
                <div className="flex items-start gap-3">
                  <Target className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider">
                      My Immediate Career Aspiration
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-300 mt-1 leading-relaxed">
                      To secure a software developer or frontend engineering internship at a forward-thinking technology team, where I can apply my React.js knowledge, build accessible interfaces, learn industry testing standards, and grow into a versatile full-stack software engineer.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Personal Highlights & Details */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 rounded-2xl glass-card border border-white/10 bg-[#0d101e]/80">
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-300 mb-4 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-cyan-400" /> Key Profile Information
              </h3>

              <div className="space-y-3.5">
                {personalData.highlights.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-white/[0.03] border border-white/5 hover:border-cyan-500/30 transition-colors"
                  >
                    <span className="text-[11px] font-mono text-cyan-400 block uppercase tracking-wider mb-0.5">
                      {item.label}
                    </span>
                    <span className="text-xs sm:text-sm text-white font-medium">
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Metrics / Statistics Cards (Honest & Realistic for a Fresher) */}
        <div>
          <div className="text-center mb-6">
            <span className="text-xs font-mono uppercase tracking-widest text-slate-400">
              // Quantitative Growth Metrics (Editable in personalData.js)
            </span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {personalData.stats.map((stat, idx) => {
              const Icon = iconMap[idx] || Sparkles;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="p-5 sm:p-6 rounded-2xl glass-card border border-white/10 text-center hover:border-cyan-500/40 hover:shadow-glow-cyan/10 transition-all bg-[#0f1222]/80 group"
                >
                  <div className="w-10 h-10 mx-auto rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-white group-hover:text-cyan-400 transition-colors">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm font-semibold text-slate-200 mt-1">
                    {stat.label}
                  </div>
                  <div className="text-[11px] text-slate-400 mt-0.5">
                    {stat.description}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
