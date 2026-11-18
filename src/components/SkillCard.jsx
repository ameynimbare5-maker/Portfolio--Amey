import React from 'react';
import { motion } from 'framer-motion';
import {
  Code2,
  FileCode,
  FileCode2,
  Palette,
  Layout,
  Sparkles,
  Columns3,
  Server,
  Cpu,
  Terminal,
  Layers,
  Database,
  Binary,
  GitBranch,
  Github,
  Monitor,
  Send,
} from 'lucide-react';

const iconMap = {
  Code2,
  FileCode,
  FileCode2,
  Palette,
  Layout,
  Sparkles,
  Columns3,
  Server,
  Cpu,
  Terminal,
  Layers,
  Database,
  Binary,
  GitBranch,
  Github,
  Monitor,
  Send,
};

export default function SkillCard({ skill, index }) {
  const IconComponent = iconMap[skill.icon] || Code2;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35, delay: (index % 6) * 0.05 }}
      whileHover={{ y: -4, scale: 1.01 }}
      className="group relative p-5 rounded-2xl glass-card transition-all duration-300 hover:border-cyan-500/40 hover:shadow-glow-cyan/10 bg-[#0f1222]/80 flex flex-col justify-between"
    >
      <div>
        {/* Top row: Icon and Level badge */}
        <div className="flex items-center justify-between mb-3">
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110 shadow-sm"
            style={{
              backgroundColor: `${skill.color || '#3b82f6'}15`,
              color: skill.color || '#3b82f6',
              border: `1px solid ${skill.color || '#3b82f6'}30`,
            }}
          >
            <IconComponent className="w-5 h-5" />
          </div>

          <div className="text-right">
            <span
              className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold border"
              style={{
                backgroundColor: `${skill.color || '#3b82f6'}12`,
                color: skill.color || '#3b82f6',
                borderColor: `${skill.color || '#3b82f6'}30`,
              }}
            >
              {skill.levelLabel}
            </span>
          </div>
        </div>

        {/* Skill Title & Experience */}
        <div className="mb-2">
          <h4 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
            {skill.name}
          </h4>
          <span className="text-[11px] text-slate-400 font-medium">
            {skill.experience}
          </span>
        </div>

        {/* Description */}
        {skill.description && (
          <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed mb-4">
            {skill.description}
          </p>
        )}
      </div>

      {/* Progress Bar */}
      <div>
        <div className="flex justify-between items-center text-[11px] font-mono text-slate-400 mb-1.5">
          <span>Proficiency</span>
          <span className="text-cyan-400 font-semibold">{skill.level}%</span>
        </div>
        <div className="h-1.5 w-full rounded-full bg-slate-800 overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${skill.level}%` }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
            className="h-full rounded-full"
            style={{
              background: `linear-gradient(90deg, ${skill.color || '#3b82f6'}, #06b6d4)`,
            }}
          />
        </div>
      </div>
    </motion.div>
  );
}
