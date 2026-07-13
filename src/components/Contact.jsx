import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Send, Check, Copy } from 'lucide-react';
import { portfolioData } from '../portfolioData';

// Inline SVGs for Brand Icons
const GithubIcon = ({ size = 20 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="inline-block">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = ({ size = 20 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="inline-block">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Contact() {
  const { email, linkedin, github } = portfolioData.personalInfo;
  
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    // Simulate API Submission
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="py-24 px-6 md:px-12 lg:px-24 bg-transparent">
      <div className="max-w-6xl mx-auto">
        {/* Folder Header Layout */}
        <div className="flex items-end mb-16 border-b-2 border-text-espresso/15">
          <div className="folder-tab">
            Connect
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Direct Info */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-grotesque font-bold uppercase tracking-tight text-text-espresso leading-none">
                Start a <span className="font-serif italic font-normal text-accent-slate lowercase normal-case block mt-2">conversation</span>
              </h2>
              <p className="mt-4 font-sans text-text-espresso/70 text-sm md:text-base leading-relaxed">
                Whether you're looking to hire, discuss machine learning pipelines, or chat about cloud & AI solutions, feel free to drop a line.
              </p>
            </div>

            {/* Tactile Copyable Email Box */}
            <div className="bg-[#FAF8F5]/40 backdrop-blur-md border border-text-espresso/10 p-6 rounded-2xl space-y-4">
              <div className="flex items-center gap-2">
                <Mail size={18} className="text-accent-slate" />
                <span className="font-grotesque text-xs tracking-widest text-text-espresso/50 uppercase font-bold">Email Address</span>
              </div>
              
              <div className="flex items-center justify-between gap-3 bg-bg-warm/40 backdrop-blur-sm px-4 py-3 rounded-xl border border-text-espresso/10">
                <a href={`mailto:${email}`} className="font-sans text-sm md:text-base font-semibold text-text-espresso hover:text-accent-slate transition-colors break-all">
                  {email}
                </a>
                
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="p-2 hover:bg-[#EAE3D5] rounded-lg text-text-espresso/60 hover:text-accent-slate transition-all"
                  title="Copy email address"
                >
                  {copied ? <Check size={16} className="text-green-600" /> : <Copy size={16} />}
                </button>
              </div>

              {/* Mailto Direct CTA Button */}
              <a
                href={`mailto:${email}`}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-accent-slate hover:bg-accent-slate-dark text-bg-warm font-grotesque font-bold text-sm uppercase tracking-wider rounded-xl transition-all duration-300 shadow-md"
              >
                Send Direct Mail
              </a>
            </div>

            {/* Alternate Social Links */}
            <div className="flex items-center gap-4">
              {linkedin && (
                <a
                  href={linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 border border-text-espresso/15 text-text-espresso hover:border-accent-slate hover:text-accent-slate rounded-xl text-xs font-grotesque font-bold uppercase tracking-wider transition-all"
                >
                  <LinkedinIcon size={14} />
                  LinkedIn
                </a>
              )}
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 border border-text-espresso/15 text-text-espresso hover:border-accent-slate hover:text-accent-slate rounded-xl text-xs font-grotesque font-bold uppercase tracking-wider transition-all"
              >
                <GithubIcon size={14} />
                GitHub
              </a>
            </div>
          </div>

          {/* Right Column: Local Submission Form */}
          <div className="lg:col-span-7 bg-[#FAF8F5]/45 backdrop-blur-md border border-text-espresso/10 p-8 rounded-3xl relative shadow-sm">
            <div className="absolute -top-3 left-6 px-3 py-1 bg-[#FAF8F5]/85 backdrop-blur-sm text-text-espresso/60 font-grotesque text-[10px] tracking-wider uppercase font-bold rounded-t-md border-t border-x border-text-espresso/10">
              Message Form
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="font-grotesque text-xs tracking-wider uppercase text-text-espresso/60 font-bold">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-[#FAF8F5]/50 backdrop-blur-sm border border-text-espresso/15 focus:border-accent-slate rounded-xl text-text-espresso placeholder-text-espresso/35 outline-none transition-colors text-sm"
                    placeholder="Enter your name"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="font-grotesque text-xs tracking-wider uppercase text-text-espresso/60 font-bold">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-[#FAF8F5]/50 backdrop-blur-sm border border-text-espresso/15 focus:border-accent-slate rounded-xl text-text-espresso placeholder-text-espresso/35 outline-none transition-colors text-sm"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="font-grotesque text-xs tracking-wider uppercase text-text-espresso/60 font-bold">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 bg-[#FAF8F5]/50 backdrop-blur-sm border border-text-espresso/15 focus:border-accent-slate rounded-xl text-text-espresso placeholder-text-espresso/35 outline-none transition-colors resize-none text-sm"
                  placeholder="How can I help you?"
                />
              </div>

              <div className="flex justify-end pt-2">
                <button
                  type="submit"
                  disabled={submitted}
                  className="flex items-center gap-2 px-6 py-3 bg-text-espresso hover:bg-accent-slate text-bg-warm font-grotesque font-bold text-sm uppercase tracking-wider rounded-xl transition-all duration-300 shadow-md hover:shadow-lg disabled:bg-green-700 disabled:shadow-none"
                >
                  <AnimatePresence mode="wait">
                    {submitted ? (
                      <motion.div
                        key="success"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex items-center gap-2"
                      >
                        <Check size={16} />
                        Sent!
                      </motion.div>
                    ) : (
                      <motion.div
                        key="send"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex items-center gap-2"
                      >
                        <Send size={14} />
                        Send Message
                      </motion.div>
                    )}
                  </AnimatePresence>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
