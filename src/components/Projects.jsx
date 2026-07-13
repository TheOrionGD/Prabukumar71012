import React from 'react';
import { motion } from 'framer-motion';
import { Folder, ExternalLink } from 'lucide-react';
import { portfolioData } from '../portfolioData';

// Import local image assets
import aegisImg from '../assets/aegis.svg';
import argorithmImg from '../assets/argorithm.svg';
import faceshieldImg from '../assets/faceshield.svg';

const projectImages = {
  aegis: aegisImg,
  argorithm: argorithmImg,
  faceshield: faceshieldImg
};

export default function Projects() {
  const projects = portfolioData.projects;

  // Custom visual layouts (asymmetry offsets and rotations) for desktop
  const projectStyles = [
    {
      align: "justify-start md:pl-12",
      rotate: "rotate-1",
      hoverRotate: "hover:rotate-0",
      offsetY: "md:translate-y-0"
    },
    {
      align: "justify-end md:pr-12",
      rotate: "-rotate-1",
      hoverRotate: "hover:rotate-0",
      offsetY: "md:translate-y-4"
    },
    {
      align: "justify-center",
      rotate: "rotate-2",
      hoverRotate: "hover:rotate-0",
      offsetY: "md:-translate-y-4"
    }
  ];

  return (
    <section id="projects" className="py-24 px-6 md:px-12 lg:px-24 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Folder Header Layout */}
        <div className="flex items-end mb-16 border-b-2 border-text-espresso/15">
          <div className="folder-tab">
            Selected Works
          </div>
        </div>

        {/* Header Intro */}
        <div className="max-w-xl mb-20">
          <h2 className="text-4xl md:text-6xl font-grotesque font-bold uppercase tracking-tight text-text-espresso">
            Crafting <span className="font-serif italic font-normal text-accent-slate lowercase normal-case">the</span> Future
          </h2>
          <p className="mt-4 font-sans text-text-espresso/70 text-lg">
            A selection of production-grade systems spanning system security, spatial computing, and computer vision.
          </p>
        </div>

        {/* Loose Asymmetrical Layout */}
        <div className="space-y-20 md:space-y-32">
          {projects.map((project, index) => {
            const style = projectStyles[index % projectStyles.length];
            const imageSrc = projectImages[project.id];

            return (
              <div 
                key={project.id} 
                className={`flex w-full ${style.align} ${style.offsetY} transition-transform duration-300`}
              >
                <motion.article 
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7, delay: index * 0.1 }}
                  className="w-full lg:max-w-4xl grid grid-cols-1 md:grid-cols-12 gap-8 items-center bg-[#EAE3D5]/40 backdrop-blur-md border border-text-espresso/10 p-6 md:p-8 rounded-3xl relative shadow-sm"
                >
                  {/* Small folder tab design inside cards */}
                  <div className="absolute -top-3 left-6 px-3 py-1 bg-[#EAE3D5] text-text-espresso/60 font-grotesque text-[10px] tracking-wider uppercase font-bold rounded-t-md border-t border-x border-text-espresso/10">
                    Project File
                  </div>

                  {/* Left Column: Description & Metadata */}
                  <div className="md:col-span-7 space-y-6 order-2 md:order-1">
                    <div className="space-y-2">
                      {/* Tech Stack tags */}
                      <div className="flex flex-wrap gap-2">
                        {project.stack.map(tag => (
                          <span 
                            key={tag} 
                            className="text-xs font-grotesque font-bold tracking-wider text-accent-slate uppercase bg-bg-warm px-2.5 py-1 rounded-md border border-text-espresso/5"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <h3 className="text-2xl md:text-3xl font-grotesque font-bold text-text-espresso uppercase tracking-tight leading-tight">
                        {project.title.split(' — ')[0]}
                      </h3>
                      
                      {project.title.includes(' — ') && (
                        <p className="font-serif italic text-accent-slate text-sm">
                          {project.title.split(' — ')[1]}
                        </p>
                      )}
                    </div>

                    {/* Bullet list of outcomes */}
                    <ul className="space-y-3 font-sans text-text-espresso/80 text-sm md:text-base leading-relaxed list-none pl-0">
                      {project.bullets.map((bullet, idx) => (
                        <li key={idx} className="relative pl-6">
                          <span className="absolute left-0 top-2.5 w-2 h-0.5 bg-accent-slate" />
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Right Column: Polaroid Picture Container */}
                  <div className="md:col-span-5 flex justify-center order-1 md:order-2">
                    <motion.div
                      whileHover={{ scale: 1.05, rotate: 0 }}
                      className={`bg-[#FAF8F5] p-4 pb-8 rounded-lg shadow-md border border-text-espresso/5 max-w-[280px] w-full transform ${style.rotate} transition-transform duration-300 relative cursor-pointer`}
                    >
                      {/* Polaroid Hanging Tape */}
                      <div className="polaroid-tape" />

                      {/* Polaroid Image */}
                      <div className="w-full aspect-square overflow-hidden bg-[#FAF8F5] border border-text-espresso/10 rounded-md">
                        {imageSrc ? (
                          <img 
                            src={imageSrc} 
                            alt={project.title}
                            className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-500" 
                          />
                        ) : (
                          <div className="w-full h-full flex flex-col items-center justify-center bg-[#EAE3D5]/30 text-text-espresso/35">
                            <Folder size={40} className="mb-2" />
                            <span className="font-grotesque text-xs tracking-wider uppercase font-bold">Workspace Asset</span>
                          </div>
                        )}
                      </div>

                      {/* Polaroid Caption */}
                      <div className="mt-4 text-center">
                        <span className="font-serif italic text-xs text-text-espresso/60 tracking-wider">
                          {project.title.split(' — ')[0].toLowerCase().replace(/\s+/g, '_')}.png
                        </span>
                      </div>
                    </motion.div>
                  </div>
                </motion.article>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
