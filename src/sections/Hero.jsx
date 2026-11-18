import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Download,
  Mail,
  Github,
  Linkedin,
  ChevronDown,
  Sparkles,
  Code2,
  Terminal,
  Layers,
  MapPin,
  ExternalLink,
} from 'lucide-react';
import { personalData } from '../data/personalData';
import Button from '../components/Button';

export default function Hero({ onOpenResume }) {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  const roles = personalData.typingRoles;

  // Dynamic typing effect
  useEffect(() => {
    const handleTyping = () => {
      const fullText = roles[currentRoleIndex];
      if (!isDeleting) {
        // Typing forward
        setDisplayText(fullText.substring(0, displayText.length + 1));
        setTypingSpeed(80);

        if (displayText === fullText) {
          // Pause before deleting
          setTimeout(() => setIsDeleting(true), 1600);
        }
      } else {
        // Backspacing
        setDisplayText(fullText.substring(0, displayText.length - 1));
        setTypingSpeed(45);

        if (displayText === '') {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentRoleIndex, roles, typingSpeed]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-grid-pattern"
    >
      {/* Background Animated Gradient Orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-blue-600/20 blur-[120px] pointer-events-none animate-pulse-slow" />
      <div className="absolute top-1/3 -right-32 w-96 h-96 rounded-full bg-purple-600/20 blur-[130px] pointer-events-none animate-pulse-slow" />
      <div className="absolute bottom-10 left-1/3 w-80 h-80 rounded-full bg-cyan-500/15 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Text & Hero Details */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            {/* Availability Pill */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 backdrop-blur-md"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>{personalData.availability}</span>
            </motion.div>

            {/* Greeting & Name */}
            <div className="space-y-2">
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-base sm:text-lg font-medium text-cyan-400 font-mono"
              >
                Hello, I'm
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white"
              >
                {personalData.name}
              </motion.h1>

              {/* Dynamic Animated Typing Text */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="h-10 sm:h-12 flex items-center justify-center lg:justify-start gap-2"
              >
                <span className="text-xl sm:text-2xl md:text-3xl font-extrabold gradient-text">
                  {displayText}
                </span>
                <span className="w-0.5 h-6 sm:h-8 bg-cyan-400 animate-pulse" />
              </motion.div>
            </div>

            {/* Professional Introduction */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="text-base sm:text-lg text-slate-300 max-w-xl mx-auto lg:mx-0 leading-relaxed"
            >
              {personalData.heroIntro}
            </motion.p>

            {/* College & Location tag */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-3 text-xs sm:text-sm text-slate-400"
            >
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/5 border border-white/10">
                <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                {personalData.location}
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/5 border border-white/10">
                <Terminal className="w-3.5 h-3.5 text-purple-400" />
                {personalData.academicYear} Batch
              </span>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 pt-2"
            >
              <Button
                variant="primary"
                size="md"
                href="#projects"
                icon={ArrowRight}
                iconPosition="right"
              >
                Explore My Work
              </Button>

              <Button
                variant="cyan"
                size="md"
                onClick={onOpenResume}
                icon={Download}
              >
                Download Resume
              </Button>

              <Button
                variant="secondary"
                size="md"
                href="#contact"
                icon={Mail}
              >
                Contact Me
              </Button>
            </motion.div>

            {/* Social Media Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="pt-4 flex items-center justify-center lg:justify-start gap-4"
            >
              <span className="text-xs uppercase font-mono tracking-wider text-slate-400">
                Connect:
              </span>
              <div className="flex items-center gap-2">
                <a
                  href={personalData.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 hover:border-cyan-400 transition-all shadow-sm"
                  title="GitHub Profile"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={personalData.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-blue-400 border border-white/10 hover:border-blue-400 transition-all shadow-sm"
                  title="LinkedIn Profile"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={`mailto:${personalData.email}`}
                  className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-purple-400 border border-white/10 hover:border-purple-400 transition-all shadow-sm"
                  title="Send Direct Email"
                  aria-label="Send Direct Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Creative Interactive Avatar & Tech Badges */}
          <div className="lg:col-span-5 flex justify-center relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96"
            >
              {/* Outer Rotating Glowing Gradient Ring */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-blue-500 via-purple-600 to-cyan-400 p-[3px] animate-spin-slow opacity-80 blur-sm" />
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-blue-500 via-purple-600 to-cyan-400 p-[2px]" />

              {/* Avatar Center Card */}
              <div className="relative w-full h-full rounded-3xl bg-[#0b0e1b] border border-white/10 p-6 flex flex-col items-center justify-center text-center overflow-hidden shadow-2xl">
                {/* Background circuit grid effect */}
                <div className="absolute inset-0 bg-dot-pattern opacity-30" />

                {/* Developer Avatar Graphic */}
                <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-2xl bg-gradient-to-br from-blue-600/30 to-purple-600/30 border border-cyan-400/30 flex items-center justify-center shadow-glow-cyan/20 group">
                  <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-xl bg-[#0f1325] border border-white/10 flex flex-col items-center justify-center p-3 text-cyan-400">
                    <Code2 className="w-12 h-12 text-cyan-400 animate-float" />
                    <span className="text-[10px] font-mono text-slate-400 mt-1">&lt;AVN /&gt;</span>
                  </div>

                  {/* Status Indicator */}
                  <div className="absolute bottom-1 right-1 flex items-center gap-1 px-2 py-0.5 rounded-full bg-black/80 border border-emerald-500/50 text-[10px] text-emerald-400 font-mono">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Online
                  </div>
                </div>

                {/* Developer Persona Title */}
                <div className="mt-5 relative z-10">
                  <h3 className="text-base sm:text-lg font-bold text-white">
                    {personalData.name}
                  </h3>
                  <p className="text-xs text-cyan-400 font-mono mt-0.5">
                    TYBSc IT • Mumbai University
                  </p>
                </div>

                {/* Micro tech pills */}
                <div className="mt-3 flex flex-wrap justify-center gap-1.5 relative z-10">
                  {['React.js', 'Spring Boot', 'Tailwind', 'MongoDB'].map((tech) => (
                    <span
                      key={tech}
                      className="text-[10px] font-medium px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Floating Orbiting Badges */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-4 -left-4 sm:-left-6 px-3 py-2 rounded-xl glass-card border border-cyan-400/30 shadow-lg shadow-black/40 flex items-center gap-2"
              >
                <div className="w-7 h-7 rounded-lg bg-blue-500/20 text-cyan-400 flex items-center justify-center font-bold text-xs">
                  ⚛
                </div>
                <div className="text-left">
                  <span className="text-[10px] font-mono text-slate-400 block leading-tight">Focus</span>
                  <span className="text-xs font-bold text-white">React 18</span>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute -bottom-4 -right-4 sm:-right-6 px-3.5 py-2 rounded-xl glass-card border border-purple-400/30 shadow-lg shadow-black/40 flex items-center gap-2"
              >
                <div className="w-7 h-7 rounded-lg bg-purple-500/20 text-purple-400 flex items-center justify-center font-bold text-xs">
                  🚀
                </div>
                <div className="text-left">
                  <span className="text-[10px] font-mono text-slate-400 block leading-tight">Status</span>
                  <span className="text-xs font-bold text-emerald-400">Internship Ready</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Scroll-down indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="mt-16 sm:mt-20 flex flex-col items-center justify-center"
        >
          <a
            href="#about"
            className="group flex flex-col items-center text-xs font-mono text-slate-400 hover:text-cyan-400 transition-colors cursor-pointer"
            aria-label="Scroll down to About section"
          >
            <span className="mb-1.5 tracking-wider uppercase text-[10px]">Scroll Down</span>
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
              className="p-1.5 rounded-full border border-white/10 group-hover:border-cyan-400/50 transition-colors"
            >
              <ChevronDown className="w-4 h-4 text-cyan-400" />
            </motion.div>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
