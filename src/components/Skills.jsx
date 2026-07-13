import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../portfolioData';

export default function Skills() {
  const skills = portfolioData.skills;

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
  };

  return (
    <section id="skills" className="py-24 px-6 md:px-12 lg:px-24 bg-transparent">
      <div className="max-w-6xl mx-auto">
        {/* Folder Header Layout */}
        <div className="flex items-end mb-12 border-b-2 border-text-espresso/15">
          <div className="folder-tab">
            Technical Arsenal
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
          <div className="md:col-span-1">
            <h2 className="text-4xl md:text-5xl font-grotesque font-bold uppercase tracking-tight text-text-espresso leading-none">
              Skills <span className="font-serif italic font-normal text-accent-slate lowercase normal-case block mt-2">and</span> Expertise
            </h2>
            <p className="mt-4 font-sans text-text-espresso/60 text-sm max-w-xs leading-relaxed">
              Curated tools, languages, and concepts compiled across academic projects, research work, and hacking.
            </p>
          </div>

          <div className="md:col-span-2 space-y-8">
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="space-y-8"
            >
              {skills.map((categoryGroup, index) => (
                <div key={categoryGroup.category} className="space-y-3">
                  <h3 className="font-grotesque text-xs tracking-widest text-accent-slate uppercase font-bold">
                    {categoryGroup.category}
                  </h3>
                  
                  <div className="flex flex-wrap gap-2.5">
                    {categoryGroup.items.map((skill) => (
                      <motion.span
                        key={skill}
                        variants={itemVariants}
                        whileHover={{ scale: 1.03, backgroundColor: "#7C9BB0", color: "#F1EBE0" }}
                        className="px-4 py-2 bg-bg-warm border border-text-espresso/10 hover:border-accent-slate text-text-espresso rounded-xl text-sm font-sans font-medium transition-colors duration-250 cursor-default select-none shadow-sm"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
