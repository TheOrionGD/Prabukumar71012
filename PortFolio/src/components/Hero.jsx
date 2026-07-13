import React from 'react';
import { motion } from 'framer-motion';
import { Mail, FileText, ArrowDown } from 'lucide-react';
import { portfolioData } from '../portfolioData';

// Inline SVGs for Brand Icons since they are deprecated in latest Lucide React
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

export default function Hero() {
  const { name, role, tagline, email, linkedin, github, resumeUrl } = portfolioData.personalInfo;

  // Split name for stylistic pairing
  const nameParts = name.split(' ');
  const firstName = nameParts[0];
  const restName = nameParts.slice(1).join(' ');

  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center px-6 py-20 md:px-12 lg:px-24">
      {/* Background Decorative Element: Large subtle folder motif outline */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[80%] border-2 border-[#EADFC9]/50 rounded-[40px] pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto w-full">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 mb-6"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-accent-slate"></span>
          <span className="font-grotesque text-xs md:text-sm font-bold tracking-widest text-accent-slate uppercase">
            {role}
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-grotesque font-extrabold text-text-espresso leading-[0.9] tracking-tighter uppercase mb-8"
        >
          {firstName}{' '}
          <span className="font-serif italic font-normal text-accent-slate lowercase normal-case block md:inline">
            {restName}
          </span>
        </motion.h1>

        {/* Tagline / Positioning Statement */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-2xl font-sans font-medium text-text-espresso/80 max-w-2xl leading-relaxed mb-12"
        >
          {tagline}
        </motion.p>

        {/* Action Buttons & Socials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row sm:items-center gap-6 mb-16"
        >
          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="px-6 py-3.5 bg-accent-slate hover:bg-accent-slate-dark text-bg-warm font-grotesque font-bold text-sm uppercase tracking-wider rounded-xl transition-all duration-300 shadow-md shadow-accent-slate/20 hover:shadow-lg hover:shadow-accent-slate/30 transform hover:-translate-y-0.5"
            >
              View Projects
            </a>
            <a
              href={resumeUrl}
              download
              className="flex items-center gap-2 px-6 py-3.5 border-2 border-text-espresso/30 hover:border-text-espresso text-text-espresso font-grotesque font-bold text-sm uppercase tracking-wider rounded-xl transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <FileText size={16} />
              Resume
            </a>
            <a
              href="#contact"
              className="px-6 py-3.5 border-2 border-accent-slate/40 hover:border-accent-slate text-accent-slate hover:bg-accent-slate/5 font-grotesque font-bold text-sm uppercase tracking-wider rounded-xl transition-all duration-300 transform hover:-translate-y-0.5"
            >
              Contact
            </a>
          </div>

          {/* Social Links Divider for Desktop */}
          <span className="hidden sm:block h-8 w-px bg-text-espresso/20" />

          {/* Socials */}
          <div className="flex items-center gap-4">
            {linkedin && (
              <a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 text-text-espresso/70 hover:text-accent-slate border border-text-espresso/10 hover:border-accent-slate rounded-xl transition-all duration-300 hover:bg-[#EAE3D5] flex items-center justify-center"
                aria-label="LinkedIn"
              >
                <LinkedinIcon size={20} />
              </a>
            )}
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 text-text-espresso/70 hover:text-accent-slate border border-text-espresso/10 hover:border-accent-slate rounded-xl transition-all duration-300 hover:bg-[#EAE3D5] flex items-center justify-center"
              aria-label="GitHub"
            >
              <GithubIcon size={20} />
            </a>
            <a
              href={`mailto:${email}`}
              className="p-3 text-text-espresso/70 hover:text-accent-slate border border-text-espresso/10 hover:border-accent-slate rounded-xl transition-all duration-300 hover:bg-[#EAE3D5] flex items-center justify-center"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex items-center gap-2 text-text-espresso/45 font-grotesque text-xs tracking-widest uppercase font-semibold"
        >
          <span>Scroll to explore</span>
          <ArrowDown size={14} className="animate-bounce" />
        </motion.div>
      </div>
    </section>
  );
}
