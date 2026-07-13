import React, { useState, useEffect } from 'react';
import { FileText, Menu, X, ArrowUpRight } from 'lucide-react';
import { portfolioData } from './portfolioData';

// Import components
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const { name, resumeUrl } = portfolioData.personalInfo;
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  // Monitor scroll for header background and current active anchor
  useEffect(() => {
    const handleScroll = () => {
      // Scrolled state
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Determine active section
      const sections = ['about', 'skills', 'projects', 'experience', 'achievements', 'contact'];
      let current = 'hero';

      const scrollPos = window.scrollY + 200;
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            current = sectionId;
            break;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Milestones', href: '#achievements' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <div className="relative min-h-screen bg-transparent text-text-espresso selection:bg-accent-slate/20 selection:text-text-espresso">
      {/* Editorial Grain Overlay */}
      <div className="editorial-grain" />

      {/* Responsive Fixed Video Backgrounds */}
      {/* Desktop Video (hidden on mobile, block on md and up) */}
      <video className="video-bg hidden md:block" autoPlay loop muted playsInline>
        <source src="/desktop.mp4" type="video/mp4" />
      </video>
      {/* Mobile Video (block on mobile, hidden on md and up) */}
      <video className="video-bg block md:hidden" autoPlay loop muted playsInline>
        <source src="/mobilea.mp4" type="video/mp4" />
      </video>
      {/* Dynamic Slate-Blue Color Overlay Tint */}
      <div className="video-bg-overlay" />

      {/* Sticky Header Navigation */}
      <header 
        className={`fixed top-0 left-0 w-full z-45 transition-all duration-300 ${
          scrolled 
            ? 'bg-bg-warm/80 backdrop-blur-md border-b border-text-espresso/10 py-4 shadow-sm' 
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo / Initials */}
          <a href="#" className="font-grotesque font-bold text-lg uppercase tracking-widest text-text-espresso flex items-center gap-1">
            <span>{name.split(' ')[0]}</span>
            <span className="font-serif italic font-normal text-accent-slate lowercase normal-case">{name.split(' ').slice(1).join('')}</span>
          </a>

          {/* Desktop Nav links */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`font-grotesque text-xs tracking-widest uppercase font-bold transition-colors ${
                  activeSection === link.href.slice(1)
                    ? 'text-accent-slate'
                    : 'text-text-espresso/60 hover:text-text-espresso'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Resume Download (Desktop) */}
          <div className="hidden lg:block">
            <a
              href={resumeUrl}
              download
              className="flex items-center gap-1.5 px-4 py-2 border border-text-espresso/25 hover:border-text-espresso text-text-espresso hover:bg-[#EAE3D5] rounded-xl text-xs font-grotesque font-bold uppercase tracking-wider transition-all"
            >
              <FileText size={14} />
              <span>Resume</span>
              <ArrowUpRight size={12} className="text-accent-slate" />
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            className="lg:hidden p-2 text-text-espresso/70 hover:text-text-espresso"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-bg-warm z-40 lg:hidden flex flex-col pt-24 px-8 space-y-6">
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`font-grotesque text-lg tracking-wider uppercase font-extrabold ${
                  activeSection === link.href.slice(1)
                    ? 'text-accent-slate'
                    : 'text-text-espresso/70'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>
          
          <div className="pt-6 border-t border-text-espresso/15">
            <a
              href={resumeUrl}
              download
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-3.5 bg-accent-slate text-bg-warm rounded-xl font-grotesque font-bold uppercase tracking-wider text-sm shadow-md"
            >
              <FileText size={16} />
              Download Resume PDF
            </a>
          </div>
        </div>
      )}

      {/* Core Pages Components */}
      <main className="pt-20">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Achievements />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
