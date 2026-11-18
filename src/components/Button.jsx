import React from 'react';
import { motion } from 'framer-motion';

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  download,
  target,
  rel,
  icon: Icon,
  iconPosition = 'left',
  className = '',
  disabled = false,
  type = 'button',
  ...props
}) {
  const sizeStyles = {
    sm: 'px-4 py-2 text-xs font-semibold rounded-lg gap-1.5',
    md: 'px-5 py-2.5 text-sm font-semibold rounded-xl gap-2',
    lg: 'px-6 py-3.5 text-base font-semibold rounded-xl gap-2.5',
  };

  const variantStyles = {
    primary:
      'bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-500 hover:via-indigo-500 hover:to-purple-500 text-white shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 border border-blue-400/20',
    secondary:
      'bg-slate-900/80 hover:bg-slate-800/90 text-slate-100 border border-white/10 hover:border-white/20 backdrop-blur-md dark:bg-white/5 dark:hover:bg-white/10 dark:text-white',
    cyan:
      'bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 border border-cyan-400/30',
    outline:
      'bg-transparent hover:bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/30 hover:border-blue-400/60',
    ghost:
      'bg-transparent hover:bg-slate-200/50 dark:hover:bg-white/5 text-slate-700 dark:text-slate-300 hover:text-blue-500 dark:hover:text-blue-400',
    danger:
      'bg-red-500/10 hover:bg-red-500/20 text-red-400 border border-red-500/30',
  };

  const baseClasses = `inline-flex items-center justify-center font-medium transition-all duration-200 select-none disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  const content = (
    <>
      {Icon && iconPosition === 'left' && <Icon className="w-4 h-4 shrink-0 transition-transform group-hover:-translate-x-0.5" />}
      <span>{children}</span>
      {Icon && iconPosition === 'right' && <Icon className="w-4 h-4 shrink-0 transition-transform group-hover:translate-x-0.5" />}
    </>
  );

  if (href) {
    return (
      <motion.a
        whileHover={{ scale: disabled ? 1 : 1.02 }}
        whileTap={{ scale: disabled ? 1 : 0.98 }}
        href={href}
        download={download}
        target={target}
        rel={target === '_blank' ? 'noopener noreferrer' : rel}
        className={`group ${baseClasses}`}
        onClick={onClick}
        {...props}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      whileHover={{ scale: disabled ? 1 : 1.02 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
      type={type}
      disabled={disabled}
      className={`group ${baseClasses}`}
      onClick={onClick}
      {...props}
    >
      {content}
    </motion.button>
  );
}
