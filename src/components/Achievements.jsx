import React from 'react';
import { motion } from 'framer-motion';
import { Award, Compass, Cpu, Users, BookOpen } from 'lucide-react';
import { portfolioData } from '../portfolioData';

// Helper to assign icons/labels based on keywords
const getAchievementMeta = (title) => {
  const lower = title.toLowerCase();
  if (lower.includes('patent')) {
    return {
      label: 'Patent',
      color: 'bg-amber-100 text-amber-800 border-amber-200',
      icon: Cpu
    };
  }
  if (lower.includes('hackathon') || lower.includes('performer')) {
    return {
      label: 'Hackathon',
      color: 'bg-emerald-100 text-emerald-800 border-emerald-200',
      icon: Award
    };
  }
  if (lower.includes('president') || lower.includes('club')) {
    return {
      label: 'Leadership',
      color: 'bg-blue-100 text-blue-800 border-blue-200',
      icon: Users
    };
  }
  return {
    label: 'Certification',
    color: 'bg-purple-100 text-purple-800 border-purple-200',
      icon: BookOpen
  };
};

export default function Achievements() {
  const achievements = portfolioData.achievements;

  return (
    <section id="achievements" className="py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto">
        {/* Folder Header Layout */}
        <div className="flex items-end mb-16 border-b-2 border-text-espresso/15">
          <div className="folder-tab">
            Milestones & Honors
          </div>
        </div>

        {/* Section Intro */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-grotesque font-bold uppercase tracking-tight text-text-espresso">
            Recognitions <span className="font-serif italic font-normal text-accent-slate lowercase normal-case">& achievements</span>
          </h2>
        </div>

        <div className="space-y-4">
          {achievements.map((item, index) => {
            const meta = getAchievementMeta(item.title);
            const Icon = meta.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ x: 10 }}
                className="flex items-start gap-4 p-5 md:p-6 bg-[#FAF8F5]/45 backdrop-blur-md border border-text-espresso/10 rounded-2xl hover:border-accent-slate transition-all duration-300 shadow-sm"
              >
                <div className={`p-3 rounded-xl ${meta.color} border shrink-0`}>
                  <Icon size={20} />
                </div>
                
                <div className="space-y-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="font-grotesque text-[10px] tracking-wider uppercase font-bold text-accent-slate">
                      {meta.label}
                    </span>
                    <span className="h-1 w-1 bg-text-espresso/20 rounded-full" />
                    <h3 className="font-grotesque text-sm md:text-base font-extrabold uppercase text-text-espresso tracking-tight leading-tight">
                      {item.title}
                    </h3>
                  </div>
                  
                  <p className="font-sans text-xs md:text-sm text-text-espresso/70">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
