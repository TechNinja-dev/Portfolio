import React from 'react';
import { motion } from 'framer-motion';

const skillsData = [
  {
    category: "Python & Machine Learning",
    items: [
      { name: "Python Programming", level: 90 },
      { name: "Machine Learning", level: 85 },
      { name: "Data Analysis (Pandas, NumPy, Matplotlib)", level: 80 }
    ]
  },
  {
    category: "Web Development",
    items: [
      { name: "FastAPI", level: 85 },
      { name: "HTML/CSS/JavaScript", level: 80 },
      { name: "MongoDB | MySQL", level: 75 }
    ]
  },
  {
    category: "Core Competencies",
    items: [
      { name: "Problem Solving", level: 90 },
      { name: "Data Structures & Algorithms", level: 85 },
      { name: "Git & Version Control", level: 80 }
    ]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-32 bg-[#050505] text-white font-sans border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-24 text-center md:text-left"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-zinc-100">Skills & Expertise.</h2>
          <p className="text-zinc-400 text-lg max-w-2xl leading-relaxed mx-auto md:mx-0">
            A quantitative overview of my technical capabilities. I focus deeply on scalable backend architectures and machine learning systems.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 lg:gap-20">
          {skillsData.map((group, groupIdx) => (
            <motion.div 
              key={groupIdx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: groupIdx * 0.1 }}
              className="flex flex-col gap-8"
            >
              <h3 className="text-xl font-semibold tracking-tight text-white pb-4 border-b border-zinc-800/80">
                {group.category}
              </h3>
              
              <div className="flex flex-col gap-8">
                {group.items.map((skill, skillIdx) => (
                  <div key={skillIdx} className="group">
                    <div className="flex justify-between items-end mb-3">
                      <span className="text-sm font-medium text-zinc-300 group-hover:text-white transition-colors">{skill.name}</span>
                      <span className="text-xs font-mono text-zinc-500">{skill.level}%</span>
                    </div>
                    
                    {/* Progress Bar Track */}
                    <div className="h-1.5 w-full bg-zinc-900 rounded-full overflow-hidden relative">
                      {/* Animated Progress */}
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, delay: 0.2 + (skillIdx * 0.1), ease: "easeOut" }}
                        className="absolute top-0 left-0 h-full bg-gradient-to-r from-zinc-500 to-zinc-100 rounded-full shadow-[0_0_10px_rgba(255,255,255,0.2)]"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;
