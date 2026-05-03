import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="min-h-screen bg-[#0a0a0a] text-white flex items-center pt-24 pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Left Content Column */}
          <motion.div 
            className="flex-1 flex flex-col items-start text-left"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-zinc-800 bg-zinc-900 text-zinc-300 text-sm font-medium mb-6">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              Available for new opportunities
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-[1.1]">
              Python Developer.<br/>
              <span className="text-zinc-500">ML Enthusiast.</span>
            </h1>
            
            <p className="text-lg text-zinc-400 max-w-xl leading-relaxed mb-10">
              Crafting efficient code for AI-driven web applications. Currently mastering machine learning while building scalable backends with FastAPI.
            </p>

            <div className="flex flex-wrap gap-4 mb-16">
              <a href="#projects" className="px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-zinc-200 transition-colors">
                Explore My Work
              </a>
              <a href="#contact" className="px-6 py-3 bg-zinc-900 text-white font-semibold rounded-lg border border-zinc-800 hover:bg-zinc-800 transition-colors">
                Get in Touch
              </a>
            </div>

            {/* Biography Section */}
            <div className="w-full h-px bg-zinc-800 mb-8"></div>
            
            <div className="space-y-4 text-zinc-400 text-base leading-relaxed max-w-2xl">
              <p>
                As a Python developer focusing on AI/ML, I bridge the gap between theory and real-world applications. 
                I previously served as an AI/ML Intern at <strong className="text-white font-medium">Labmentix</strong> and a Web Dev Intern at <strong className="text-white font-medium">Acmegrade</strong>.
              </p>
              <p>
                My academic journey—a BCA specializing in AI/ML (powered by IBM)—fuels my passion for building scalable, 
                data-driven solutions. I thrive in disciplined environments where multitasking meets problem-solving.
              </p>
            </div>
          </motion.div>

          {/* Right Image Column */}
          <motion.div 
            className="w-full lg:w-[450px] flex-shrink-0"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5] shadow-2xl group">
              <img 
                src="https://i.postimg.cc/G36GbWcC/prakhar.jpg" 
                alt="Prakhar Srivastava" 
                className="absolute inset-0 w-full h-full object-cover grayscale-0 opacity-100 md:grayscale md:opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition duration-500"
              />
              {/* Vignette blend effect matching the background color */}
              <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_80px_30px_#0a0a0a]"></div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
