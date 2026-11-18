import React from 'react';
import { motion } from 'framer-motion';
import {
  Layout,
  Smartphone,
  Code2,
  Radio,
  Server,
  Database,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react';
import { servicesData } from '../data/services';
import SectionTitle from '../components/SectionTitle';

const serviceIcons = {
  Layout,
  Smartphone,
  Code2,
  Radio,
  Server,
  Database,
};

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-28 relative overflow-hidden bg-dot-pattern">
      {/* Background ambient light */}
      <div className="absolute top-1/2 left-1/3 w-96 h-96 rounded-full bg-blue-600/10 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTitle
          badge="Capabilities & Offerings"
          title="What I"
          highlight="Can Do"
          description="Combining modern frontend engineering with foundational backend & database skills to deliver reliable, responsive digital solutions."
        />

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {servicesData.map((service, index) => {
            const Icon = serviceIcons[service.icon] || Code2;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -6 }}
                className="p-7 rounded-2xl glass-card border border-white/10 hover:border-cyan-500/40 hover:shadow-glow-cyan/15 transition-all bg-[#0f1222]/80 flex flex-col justify-between group"
              >
                <div>
                  {/* Top Icon with colored aura */}
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-transform group-hover:scale-110 shadow-sm"
                    style={{
                      backgroundColor: `${service.color || '#3b82f6'}15`,
                      color: service.color || '#3b82f6',
                      border: `1px solid ${service.color || '#3b82f6'}30`,
                    }}
                  >
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors mb-2">
                    {service.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5">
                    {service.description}
                  </p>
                </div>

                <div>
                  <h4 className="text-[11px] font-mono uppercase tracking-wider text-slate-400 mb-2.5">
                    Core Deliverables:
                  </h4>
                  <ul className="space-y-2 mb-4">
                    {service.deliverables.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2
                          className="w-3.5 h-3.5 shrink-0 mt-0.5"
                          style={{ color: service.color || '#06b6d4' }}
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 pt-2 border-t border-white/10 w-full group/link"
                  >
                    <span>Request Collaboration</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
