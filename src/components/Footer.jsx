import React from 'react';
import { Mail } from 'lucide-react';
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

export default function Footer() {
  const { name, role, email, linkedin, github } = portfolioData.personalInfo;

  return (
    <footer className="py-12 px-6 md:px-12 border-t border-text-espresso/10 bg-transparent text-center">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-left space-y-1">
          <h3 className="font-grotesque font-bold uppercase text-sm tracking-widest text-text-espresso">
            {name}
          </h3>
          <p className="font-sans text-xs text-text-espresso/60">
            {role} © {new Date().getFullYear()} — Built with React & Tailwind CSS.
          </p>
        </div>

        <div className="flex items-center gap-4">
          {linkedin && (
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-espresso/60 hover:text-accent-slate transition-colors flex items-center justify-center"
              aria-label="LinkedIn"
            >
              <LinkedinIcon size={16} />
            </a>
          )}
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-espresso/60 hover:text-accent-slate transition-colors flex items-center justify-center"
            aria-label="GitHub"
          >
            <GithubIcon size={16} />
          </a>
          <a
            href={`mailto:${email}`}
            className="text-text-espresso/60 hover:text-accent-slate transition-colors flex items-center justify-center"
            aria-label="Email"
          >
            <Mail size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}
