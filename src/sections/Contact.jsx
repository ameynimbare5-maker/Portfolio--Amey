import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Mail,
  Send,
  MapPin,
  Linkedin,
  Github,
  CheckCircle2,
  AlertCircle,
  Copy,
  Check,
  Clock,
  Sparkles,
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { personalData } from '../data/personalData';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // 'idle' | 'sending' | 'success' | 'error'
  const [statusMessage, setStatusMessage] = useState('');
  const [copiedEmail, setCopiedEmail] = useState(false);

  // Email service configuration options:
  // Option A: Formspree (e.g., https://formspree.io/f/YOUR_FORM_ID)
  // Option B: Web3Forms (e.g., https://api.web3forms.com/submit with your access_key)
  // Option C: Native mailto link button
  const FORMSPREE_ENDPOINT = ''; // Add your Formspree endpoint if desired

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) {
      errs.name = 'Please provide your name.';
    } else if (formData.name.trim().length < 2) {
      errs.name = 'Name must be at least 2 characters.';
    }

    if (!formData.email.trim()) {
      errs.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Please provide a valid email format (e.g. name@domain.com).';
    }

    if (!formData.subject.trim()) {
      errs.subject = 'Please provide a brief subject.';
    }

    if (!formData.message.trim()) {
      errs.message = 'Please provide your message.';
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Message must be at least 10 characters.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const triggerConfetti = () => {
    confetti({
      particleCount: 70,
      spread: 60,
      origin: { y: 0.8 },
      colors: ['#3b82f6', '#8b5cf6', '#06b6d4'],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('sending');
    setStatusMessage('Preparing your message...');

    // If a live Formspree endpoint is configured, send the real HTTP POST
    if (FORMSPREE_ENDPOINT) {
      try {
        const response = await fetch(FORMSPREE_ENDPOINT, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          setStatus('success');
          setStatusMessage('Thank you! Your message has been sent directly to Amey.');
          triggerConfetti();
          setFormData({ name: '', email: '', subject: '', message: '' });
        } else {
          throw new Error('Service response not ok');
        }
      } catch (err) {
        setStatus('error');
        setStatusMessage(
          'Could not reach email gateway. Please click the "Direct Email" button on the left or send to ' +
            personalData.email
        );
      }
    } else {
      // Realistic simulation mode with clear notice
      setTimeout(() => {
        setStatus('success');
        setStatusMessage(
          `Message simulated successfully! (Note: To route real submissions to your inbox, configure your endpoint in src/sections/Contact.jsx or use the Direct Email button below).`
        );
        triggerConfetti();
        setFormData({ name: '', email: '', subject: '', message: '' });
      }, 1200);
    }
  };

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(personalData.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section id="contact" className="py-20 md:py-28 relative overflow-hidden bg-grid-pattern">
      {/* Background glow effects */}
      <div className="absolute top-1/4 right-0 w-96 h-96 rounded-full bg-blue-600/15 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 rounded-full bg-purple-600/10 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTitle
          badge="Let's Build Together"
          title="Get In"
          highlight="Touch"
          description="Have an internship opportunity, a project idea, or a technical inquiry? Send a message below or connect with me directly."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Contact Information */}
          <div className="lg:col-span-5 space-y-5">
            <div className="p-6 sm:p-8 rounded-2xl glass-card border border-white/10 bg-[#0f1222]/90 space-y-6">
              <div>
                <h3 className="text-xl font-bold text-white">
                  Contact Information
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 mt-1 leading-relaxed">
                  I am actively seeking software engineering internships and junior frontend developer roles in Mumbai or remote.
                </p>
              </div>

              {/* Contact item: Email */}
              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5 space-y-2">
                <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-cyan-400" /> Primary Email
                </span>
                <div className="flex items-center justify-between gap-2">
                  <a
                    href={`mailto:${personalData.email}`}
                    className="text-xs sm:text-sm font-semibold text-white hover:text-cyan-400 transition-colors truncate"
                  >
                    {personalData.email}
                  </a>
                  <button
                    onClick={copyEmailToClipboard}
                    className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-cyan-400 transition-colors shrink-0 cursor-pointer"
                    title="Copy email to clipboard"
                    type="button"
                  >
                    {copiedEmail ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>
                {copiedEmail && (
                  <span className="text-[10px] text-emerald-400 font-mono block">
                    Copied to clipboard!
                  </span>
                )}
              </div>

              {/* Contact item: Location */}
              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5">
                <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 flex items-center gap-1.5 mb-1">
                  <MapPin className="w-3.5 h-3.5 text-purple-400" /> Location & Mobility
                </span>
                <p className="text-xs sm:text-sm font-semibold text-white">
                  {personalData.location}
                </p>
                <p className="text-[11px] text-slate-400 mt-0.5">
                  Available for On-site (Mumbai Metro) / Hybrid / Remote
                </p>
              </div>

              {/* Social Channels */}
              <div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block mb-3">
                  Profiles & Code Repositories
                </span>
                <div className="grid grid-cols-2 gap-3">
                  <a
                    href={personalData.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-200 hover:text-white flex items-center gap-2.5 transition-all"
                  >
                    <Github className="w-4 h-4 text-cyan-400" />
                    <span className="text-xs font-semibold">GitHub</span>
                  </a>

                  <a
                    href={personalData.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-200 hover:text-white flex items-center gap-2.5 transition-all"
                  >
                    <Linkedin className="w-4 h-4 text-blue-400" />
                    <span className="text-xs font-semibold">LinkedIn</span>
                  </a>
                </div>
              </div>

              {/* Direct Mailto Button */}
              <div className="pt-2">
                <Button
                  variant="secondary"
                  size="sm"
                  href={`mailto:${personalData.email}?subject=Inquiry%20via%20Portfolio`}
                  icon={Mail}
                  className="w-full"
                >
                  Open in Email Client (Mailto)
                </Button>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl glass-card border border-white/10 bg-[#0f1222]/90">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-white">
                  Send a Direct Message
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 mt-1">
                  Fill in your details and message. I typically respond within 24 hours.
                </p>
              </div>

              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                {/* Name & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5"
                    >
                      Your Name <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. John Doe"
                      className={`w-full px-4 py-2.5 rounded-xl bg-white/5 border text-sm text-white placeholder-slate-500 focus:outline-none transition-all ${
                        errors.name
                          ? 'border-red-500/60 focus:border-red-400'
                          : 'border-white/10 focus:border-cyan-400/80 focus:bg-white/[0.08]'
                      }`}
                    />
                    {errors.name && (
                      <p className="mt-1 text-[11px] text-red-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3 shrink-0" />
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5"
                    >
                      Your Email <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. john@example.com"
                      className={`w-full px-4 py-2.5 rounded-xl bg-white/5 border text-sm text-white placeholder-slate-500 focus:outline-none transition-all ${
                        errors.email
                          ? 'border-red-500/60 focus:border-red-400'
                          : 'border-white/10 focus:border-cyan-400/80 focus:bg-white/[0.08]'
                      }`}
                    />
                    {errors.email && (
                      <p className="mt-1 text-[11px] text-red-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3 shrink-0" />
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label
                    htmlFor="contact-subject"
                    className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5"
                  >
                    Subject <span className="text-cyan-400">*</span>
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="e.g. Internship Opportunity / Project Collaboration"
                    className={`w-full px-4 py-2.5 rounded-xl bg-white/5 border text-sm text-white placeholder-slate-500 focus:outline-none transition-all ${
                      errors.subject
                        ? 'border-red-500/60 focus:border-red-400'
                        : 'border-white/10 focus:border-cyan-400/80 focus:bg-white/[0.08]'
                    }`}
                  />
                  {errors.subject && (
                    <p className="mt-1 text-[11px] text-red-400 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3 shrink-0" />
                      {errors.subject}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5"
                  >
                    Your Message <span className="text-cyan-400">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your message here... tell me about your project, timeline, or internship requirements."
                    className={`w-full px-4 py-2.5 rounded-xl bg-white/5 border text-sm text-white placeholder-slate-500 focus:outline-none transition-all resize-y ${
                      errors.message
                        ? 'border-red-500/60 focus:border-red-400'
                        : 'border-white/10 focus:border-cyan-400/80 focus:bg-white/[0.08]'
                    }`}
                  />
                  {errors.message && (
                    <p className="mt-1 text-[11px] text-red-400 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3 shrink-0" />
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Status Notice */}
                {status !== 'idle' && (
                  <motion.div
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`p-3.5 rounded-xl text-xs sm:text-sm flex items-start gap-2.5 ${
                      status === 'success'
                        ? 'bg-emerald-500/10 text-emerald-300 border border-emerald-500/30'
                        : status === 'error'
                        ? 'bg-red-500/10 text-red-300 border border-red-500/30'
                        : 'bg-blue-500/10 text-cyan-300 border border-blue-500/30'
                    }`}
                  >
                    {status === 'success' && <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5 text-emerald-400" />}
                    {status === 'error' && <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-red-400" />}
                    {status === 'sending' && <Clock className="w-4 h-4 shrink-0 mt-0.5 text-cyan-400 animate-spin" />}
                    <span className="leading-relaxed">{statusMessage}</span>
                  </motion.div>
                )}

                {/* Submit Button */}
                <div className="pt-2 flex items-center justify-between gap-4">
                  <Button
                    type="submit"
                    variant="primary"
                    size="md"
                    disabled={status === 'sending'}
                    icon={Send}
                  >
                    {status === 'sending' ? 'Sending Message...' : 'Send Message'}
                  </Button>

                  <span className="text-[11px] text-slate-400 font-mono hidden sm:inline">
                    Protected by client validation
                  </span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
