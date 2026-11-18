import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, Printer, Mail, Phone, MapPin, GraduationCap, CheckCircle2, ExternalLink } from 'lucide-react';
import { personalData } from '../data/personalData';
import Button from './Button';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-3xl glass-card rounded-2xl border border-white/20 shadow-2xl overflow-hidden z-10 my-8 max-h-[90vh] flex flex-col bg-[#0d101d]"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-slate-900/50">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
              <h3 className="text-base sm:text-lg font-bold text-white">
                Resume Overview • {personalData.name}
              </h3>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrint}
                className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-colors cursor-pointer"
                title="Print or Save as PDF"
              >
                <Printer className="w-4 h-4" />
              </button>
              <button
                onClick={onClose}
                className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Printable Resume Body */}
          <div id="printable-resume" className="p-6 sm:p-8 overflow-y-auto space-y-6 text-slate-300 print:text-black print:bg-white">
            {/* Header section */}
            <div className="border-b border-white/10 pb-6 print:border-black/20">
              <h1 className="text-2xl sm:text-3xl font-extrabold text-white print:text-black">
                {personalData.name}
              </h1>
              <p className="text-cyan-400 font-medium text-sm sm:text-base mt-1 print:text-blue-700">
                {personalData.role}
              </p>

              <div className="flex flex-wrap gap-4 mt-3 text-xs sm:text-sm text-slate-400 print:text-gray-700">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-cyan-400 print:text-black" />
                  {personalData.location}
                </span>
                <span className="flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-cyan-400 print:text-black" />
                  {personalData.email}
                </span>
                <span className="flex items-center gap-1.5">
                  <GraduationCap className="w-3.5 h-3.5 text-cyan-400 print:text-black" />
                  TYBSc Information Technology (2026–2027)
                </span>
              </div>
            </div>

            {/* Career Objective */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-cyan-400 print:text-blue-800 mb-2">
                Career Objective
              </h2>
              <p className="text-sm leading-relaxed text-slate-300 print:text-gray-800">
                Ambitious and detail-oriented TYBSc IT student with hands-on proficiency in React.js, modern JavaScript (ES6+), Tailwind CSS, and REST API development. Seeking an internship or entry-level software developer position where I can apply my problem-solving skills, collaborate with seasoned engineers, and build scalable digital solutions.
              </p>
            </div>

            {/* Education */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-cyan-400 print:text-blue-800 mb-3">
                Education
              </h2>
              <div className="space-y-3">
                <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 print:border-gray-300 print:bg-gray-50">
                  <div className="flex flex-wrap justify-between items-start gap-1">
                    <h3 className="text-sm font-semibold text-white print:text-black">
                      BSc Information Technology (TYBSc IT)
                    </h3>
                    <span className="text-xs text-cyan-400 font-mono print:text-gray-600">2026–2027</span>
                  </div>
                  <p className="text-xs text-slate-400 mt-0.5 print:text-gray-700">
                    {personalData.college} • University of Mumbai
                  </p>
                  <p className="text-xs text-slate-400 mt-1">
                    Specialized coursework: Advanced Web Dev, Database Management, Java Enterprise, Software Engineering.
                  </p>
                </div>
              </div>
            </div>

            {/* Technical Skills Snapshot */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-cyan-400 print:text-blue-800 mb-3">
                Technical Proficiencies
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10">
                  <span className="font-semibold text-white block mb-1">Frontend:</span>
                  <span className="text-slate-400">React.js, JavaScript (ES6+), Tailwind CSS, HTML5, CSS3, Bootstrap</span>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10">
                  <span className="font-semibold text-white block mb-1">Backend & DB:</span>
                  <span className="text-slate-400">Node.js, Express.js, Java, Spring Boot, MongoDB, MySQL</span>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10">
                  <span className="font-semibold text-white block mb-1">Programming Languages:</span>
                  <span className="text-slate-400">Java, Python, C++, C, JavaScript</span>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10">
                  <span className="font-semibold text-white block mb-1">Developer Tools:</span>
                  <span className="text-slate-400">Git, GitHub, VS Code, IntelliJ IDEA, Postman, Vite</span>
                </div>
              </div>
            </div>

            {/* Key Academic & Self-Directed Projects */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-cyan-400 print:text-blue-800 mb-3">
                Featured Projects
              </h2>
              <div className="space-y-3 text-xs">
                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10">
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-semibold text-white">Digital Citizen Assist</span>
                    <span className="text-cyan-400 font-mono">React • Spring Boot • MongoDB</span>
                  </div>
                  <p className="text-slate-400">
                    Engineered an e-governance utility helping citizens easily access government schemes with step-by-step document guidance and search.
                  </p>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10">
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-semibold text-white">Student Management System</span>
                    <span className="text-cyan-400 font-mono">React • Node.js • Express • MongoDB</span>
                  </div>
                  <p className="text-slate-400">
                    Developed a full CRUD student records management portal with REST API controllers, form validations, and department filters.
                  </p>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10">
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-semibold text-white">College Portal PWA</span>
                    <span className="text-cyan-400 font-mono">ASP.NET Core • C# • PWA</span>
                  </div>
                  <p className="text-slate-400">
                    Progressive Web App with offline service worker caching for campus timetables, notices, and examination circulars.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Actions */}
          <div className="p-4 sm:p-6 border-t border-white/10 bg-slate-900/80 flex flex-wrap items-center justify-between gap-3">
            <span className="text-xs text-slate-400 hidden sm:inline">
              * Place your formal PDF resume in <code className="text-cyan-400">public/resume.pdf</code> to link directly.
            </span>
            <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
              <Button
                variant="secondary"
                size="sm"
                onClick={handlePrint}
                icon={Printer}
              >
                Print / Save PDF
              </Button>
              <Button
                variant="primary"
                size="sm"
                href="#contact"
                onClick={onClose}
                icon={Mail}
              >
                Get in Touch
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
