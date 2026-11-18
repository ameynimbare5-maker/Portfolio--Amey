import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, Award, BookOpen, CheckCircle2 } from 'lucide-react';
import { educationData } from '../data/education';
import SectionTitle from '../components/SectionTitle';

export default function Education() {
  return (
    <section id="education" className="py-20 md:py-28 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 rounded-full bg-blue-600/10 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTitle
          badge="Academic Background"
          title="Education &"
          highlight="Credentials"
          description="A chronological timeline of my academic journey in Information Technology and foundational sciences in Mumbai."
        />

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto mt-12">
          {/* Vertical Glowing Timeline Line */}
          <div className="absolute left-4 sm:left-1/2 top-4 bottom-4 w-0.5 -translate-x-1/2 bg-gradient-to-b from-blue-500 via-purple-500 to-cyan-500/30" />

          <div className="space-y-12">
            {educationData.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className={`relative flex flex-col sm:flex-row items-start ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline node icon */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 z-20 flex items-center justify-center w-9 h-9 rounded-full bg-[#0b0e1b] border-2 border-cyan-400 shadow-glow-cyan">
                    <GraduationCap className="w-4 h-4 text-cyan-400" />
                  </div>

                  {/* Empty spacer for alternating two-column layout on desktop */}
                  <div className="hidden sm:block sm:w-1/2" />

                  {/* Card Content */}
                  <div
                    className={`ml-10 sm:ml-0 sm:w-1/2 ${
                      isEven ? 'sm:pr-10' : 'sm:pl-10'
                    }`}
                  >
                    <div className="p-6 sm:p-7 rounded-2xl glass-card border border-white/10 hover:border-cyan-500/40 transition-all bg-[#0f1222]/90 space-y-4">
                      {/* Top Badges */}
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/10 text-cyan-400 border border-blue-500/20">
                          <Calendar className="w-3.5 h-3.5" />
                          {item.academicYear}
                        </span>

                        <span
                          className={`text-xs px-2.5 py-0.5 rounded-md font-mono border ${
                            item.current
                              ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30'
                              : 'bg-white/5 text-slate-400 border-white/10'
                          }`}
                        >
                          {item.status}
                        </span>
                      </div>

                      {/* Degree & College */}
                      <div>
                        <h3 className="text-lg sm:text-xl font-bold text-white">
                          {item.degree}
                        </h3>
                        <p className="text-xs sm:text-sm text-cyan-400 font-medium mt-1">
                          {item.institution}
                        </p>
                        <p className="text-xs text-slate-400 flex items-center gap-1.5 mt-1">
                          <MapPin className="w-3.5 h-3.5 text-purple-400" />
                          {item.location} • {item.affiliations}
                        </p>
                      </div>

                      {/* Description */}
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                        {item.description}
                      </p>

                      {/* Key Courses */}
                      {item.keyCourses && (
                        <div>
                          <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block mb-2 flex items-center gap-1">
                            <BookOpen className="w-3 h-3 text-cyan-400" /> Key Coursework:
                          </span>
                          <div className="flex flex-wrap gap-1.5">
                            {item.keyCourses.map((course) => (
                              <span
                                key={course}
                                className="px-2.5 py-1 rounded-md text-[11px] bg-white/[0.04] text-slate-300 border border-white/5"
                              >
                                {course}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Grade / Score */}
                      {item.grade && (
                        <div className="pt-2 border-t border-white/10 flex items-center gap-2 text-xs font-mono text-cyan-300">
                          <Award className="w-3.5 h-3.5 text-amber-400" />
                          <span>Performance: {item.grade}</span>
                        </div>
                      )}
                    </div>
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
