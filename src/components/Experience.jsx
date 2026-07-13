import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';
import { portfolioData } from '../portfolioData';

export default function Experience() {
  const experiences = portfolioData.experience;

  return (
    <section id="experience" className="py-24 px-6 md:px-12 lg:px-24 bg-transparent">
      <div className="max-w-4xl mx-auto">
        {/* Folder Header Layout */}
        <div className="flex items-end mb-16 border-b-2 border-text-espresso/15">
          <div className="folder-tab">
            Experience Timeline
          </div>
        </div>

        {/* Section Intro */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-grotesque font-bold uppercase tracking-tight text-text-espresso">
            Professional <span className="font-serif italic font-normal text-accent-slate lowercase normal-case">internships</span>
          </h2>
        </div>

        {/* Timeline Path */}
        <div className="relative pl-6 md:pl-12 border-l-2 border-text-espresso/15 ml-4 space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative"
            >
              {/* Timeline dot */}
              <div className="absolute -left-[31px] md:-left-[55px] top-1.5 w-4 h-4 bg-accent-slate rounded-full border-4 border-bg-warm" />

              <div className="bg-[#FAF8F5]/45 backdrop-blur-md border border-text-espresso/10 p-6 md:p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                  <div>
                    <h3 className="font-grotesque text-xl font-extrabold uppercase text-text-espresso tracking-tight">
                      {exp.role}
                    </h3>
                    <p className="font-serif italic text-accent-slate text-sm">
                      {exp.company}
                    </p>
                  </div>
                  
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#EAE3D5]/70 rounded-lg text-xs font-grotesque text-text-espresso/70 font-semibold max-w-max">
                    <Calendar size={12} className="text-accent-slate" />
                    {exp.period}
                  </div>
                </div>

                <p className="font-sans text-sm md:text-base text-text-espresso/80 leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
