import React from 'react';
import { motion } from 'framer-motion';

export default function SectionTitle({
  badge,
  title,
  highlight,
  description,
  align = 'center',
  className = ''
}) {
  const isCenter = align === 'center';

  return (
    <div className={`mb-12 md:mb-16 ${isCenter ? 'text-center max-w-3xl mx-auto' : 'max-w-2xl'} ${className}`}>
      {badge && (
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-3 border ${
            isCenter ? 'mx-auto' : ''
          } bg-blue-500/10 text-blue-400 border-blue-500/20 backdrop-blur-md`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
          {badge}
        </motion.div>
      )}

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white"
      >
        {title}{' '}
        {highlight && (
          <span className="gradient-text">
            {highlight}
          </span>
        )}
      </motion.h2>

      {description && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-normal"
        >
          {description}
        </motion.p>
      )}

      {/* Subtle glowing accent line */}
      <motion.div
        initial={{ width: 0, opacity: 0 }}
        whileInView={{ width: isCenter ? '60px' : '45px', opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className={`h-1 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-400 mt-5 ${
          isCenter ? 'mx-auto' : ''
        }`}
      />
    </div>
  );
}
