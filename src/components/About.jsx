import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, MapPin, BookOpen } from 'lucide-react';
import { portfolioData } from '../portfolioData';

export default function About() {
  const { bio, education, location, majorLabel, milestoneLabel } = portfolioData.about;

  return (
    <section id="about" className="py-24 px-6 md:px-12 lg:px-24 max-w-6xl mx-auto">
      {/* Folder Header Layout */}
      <div className="flex items-end mb-8 border-b-2 border-text-espresso/15">
        <div className="folder-tab">
          About & Education
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Biography Column (8 cols on large screens) */}
        <div className="lg:col-span-7 space-y-6">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-grotesque font-bold uppercase tracking-tight text-text-espresso"
          >
            Engineering <span className="font-serif italic font-normal text-accent-slate lowercase normal-case">with</span> Purpose
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-lg md:text-xl font-sans text-text-espresso/80 leading-relaxed font-light"
          >
            {bio}
          </motion.p>

          <div className="pt-4 flex flex-wrap gap-4 text-xs font-grotesque tracking-wider uppercase font-bold text-text-espresso/60">
            {location && (
              <span className="flex items-center gap-1.5 px-3 py-1.5 bg-[#EAE3D5] rounded-lg">
                <MapPin size={14} className="text-accent-slate" />
                {location}
              </span>
            )}
            {majorLabel && (
              <span className="flex items-center gap-1.5 px-3 py-1.5 bg-[#EAE3D5] rounded-lg">
                <BookOpen size={14} className="text-accent-slate" />
                {majorLabel}
              </span>
            )}
            {milestoneLabel && (
              <span className="flex items-center gap-1.5 px-3 py-1.5 bg-[#EAE3D5] rounded-lg">
                <Award size={14} className="text-accent-slate" />
                {milestoneLabel}
              </span>
            )}
          </div>
        </div>

        {/* Education Column (5 cols on large screens) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:col-span-5 bg-[#EAE3D5]/60 backdrop-blur-md border border-text-espresso/10 p-8 rounded-2xl relative shadow-sm"
        >
          {/* Subtle paper tab motif corner */}
          <div className="absolute top-0 right-0 w-8 h-8 bg-bg-warm rounded-bl-xl border-l border-b border-text-espresso/10" />

          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-accent-slate/15 rounded-xl text-accent-slate">
              <GraduationCap size={24} />
            </div>
            <div>
              <h3 className="font-grotesque text-xs tracking-widest text-accent-slate uppercase font-bold">
                Education
              </h3>
              <p className="font-grotesque text-sm font-bold text-text-espresso/50">
                Academic Background
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-grotesque text-lg font-extrabold text-text-espresso uppercase leading-tight">
              {education.degree}
            </h4>
            <p className="font-sans text-sm text-text-espresso/70 font-medium">
              {education.institution}
            </p>
            
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 pt-4 border-t border-text-espresso/10 text-sm">
              <div>
                <span className="block text-xs font-grotesque text-text-espresso/40 uppercase tracking-widest font-bold">Timeline</span>
                <span className="font-semibold text-text-espresso">{education.period}</span>
              </div>
              {education.cgpa && (
                <div className="sm:text-right">
                  <span className="block text-xs font-grotesque text-text-espresso/40 uppercase tracking-widest font-bold">
                    {education.cgpa.includes('.') || !isNaN(parseFloat(education.cgpa)) ? 'CGPA' : 'Status'}
                  </span>
                  <span className="font-serif italic font-bold text-accent-slate text-lg">
                    {education.cgpa}
                    {(education.cgpa.includes('.') || !isNaN(parseFloat(education.cgpa))) && ' / 10.0'}
                  </span>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
