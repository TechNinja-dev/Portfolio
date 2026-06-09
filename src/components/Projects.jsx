import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const projectData = {
  dmart: {
    title: "Developer Mart",
    img: "/dmart.png",
    v_url: "https://developer-mart.vercel.app/",
    g_url: "https://github.com/TechNinja-dev/Developer-Mart.git",
    desc: "A one-stop web platform for developers of all levels — from rookies to pros. Explore programming resources, write and run code live in the browser (powered by Gemini AI), and access tutorials.",
    tags: ["ReactJS", "Code Editors", "API", "Learning", "FastAPI"]
  },
  craftsathi: {
    title: "CraftSathi",
    img: "/craftsathi_home.png",
    v_url: "https://craftsathi.prakharsrivastava019.workers.dev/",
    g_url: "https://github.com/TechNinja-dev/CraftSathi.git",
    desc: "An AI-powered platform featuring authentication, generative content creation, craft analysis, and a modern glassmorphism UI. Includes a community network and saved posts functionality.",
    tags: ["React", "FastAPI", "MongoDB", "Generative AI"]
  },
  ai: {
    title: "Brain Tumour Prediction",
    img: "/brain-tumour.png",
    v_url: "https://github.com/TechNinja-dev/Brain-Tumour-Prediction",
    g_url: "https://github.com/TechNinja-dev/Brain-Tumour-Prediction",
    desc: "A Brain Tumor Prediction System built using Deep Learning and deployed with an interactive Streamlit web UI. It allows users to upload MRI scans and get predictions on whether a brain tumor is present.",
    tags: ["Deep Learning", "Streamlit", "Python", "Machine Learning"]
  }
};

const Projects = () => {
  const [activeProject, setActiveProject] = useState(null);

  const openPopup = (id) => {
    setActiveProject(projectData[id]);
    document.body.style.overflow = 'hidden';
  };

  const closePopup = () => {
    setActiveProject(null);
    document.body.style.overflow = 'auto';
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') closePopup();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <section id="projects" className="py-32 bg-[#050505] text-white font-sans border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Selected Projects.</h2>
          <p className="text-zinc-400 text-lg max-w-2xl leading-relaxed">
            A showcase of my recent work, focusing on AI-driven web applications, scalable architectures, and modern user interfaces.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(projectData).map(([id, project], index) => (
            <motion.div
              key={id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onClick={() => openPopup(id)}
              className="group cursor-pointer bg-zinc-900/50 border border-zinc-800 rounded-2xl overflow-hidden hover:border-zinc-700 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 flex flex-col"
            >
              <div className="aspect-video overflow-hidden relative border-b border-zinc-800">
                <div className="absolute inset-0 bg-zinc-900/20 z-10 group-hover:bg-transparent transition-colors"></div>
                <img 
                  src={project.img} 
                  alt={project.title} 
                  className="w-full h-full object-cover grayscale-0 opacity-100 md:grayscale md:opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                />
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <h3 className="text-2xl font-bold mb-4 group-hover:text-white text-zinc-100 transition-colors">{project.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-8 line-clamp-3 flex-1">
                  {project.desc}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.slice(0, 3).map((tag, i) => (
                    <span key={i} className="px-3 py-1.5 bg-zinc-800/80 text-zinc-300 text-xs font-medium rounded-md">
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="px-3 py-1.5 bg-zinc-800/50 text-zinc-500 text-xs font-medium rounded-md">
                      +{project.tags.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal Popup */}
      <AnimatePresence>
        {activeProject && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md"
            onClick={(e) => {
              if (e.target === e.currentTarget) closePopup();
            }}
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-[#0a0a0a] border border-zinc-800 rounded-3xl overflow-hidden shadow-2xl w-full max-w-4xl max-h-[90vh] flex flex-col"
            >
              <div className="relative aspect-video sm:aspect-[21/9] border-b border-zinc-800 flex-shrink-0 bg-zinc-900">
                <button 
                  onClick={closePopup}
                  className="absolute top-6 right-6 z-20 p-2.5 bg-black/50 hover:bg-black/80 text-white rounded-full backdrop-blur-md transition-colors border border-white/10"
                >
                  <X size={20} />
                </button>
                <img 
                  src={activeProject.img} 
                  alt={activeProject.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="p-8 sm:p-10 overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-8 mb-10">
                  <div>
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 tracking-tight">{activeProject.title}</h2>
                    <div className="flex flex-wrap gap-2">
                      {activeProject.tags.map((tag, i) => (
                        <span key={i} className="px-3 py-1.5 bg-zinc-900 border border-zinc-800 text-zinc-300 text-sm font-medium rounded-md">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-4 flex-shrink-0 w-full md:w-auto">
                    <a 
                      href={activeProject.v_url} 
                      target="_blank" 
                      rel="noreferrer"
                      className="flex-1 md:flex-none flex items-center justify-center gap-2 px-6 py-3 bg-white text-black font-semibold rounded-xl hover:bg-zinc-200 transition-colors"
                    >
                      <ExternalLink size={18} />
                      Visit Site
                    </a>
                    <a 
                      href={activeProject.g_url} 
                      target="_blank" 
                      rel="noreferrer"
                      className="flex-1 md:flex-none flex items-center justify-center gap-2 px-6 py-3 bg-zinc-900 text-white font-semibold rounded-xl hover:bg-zinc-800 transition-colors border border-zinc-800"
                    >
                      <FaGithub size={18} />
                      Source Code
                    </a>
                  </div>
                </div>

                <div className="space-y-6 text-zinc-400 leading-relaxed text-lg">
                  <p>{activeProject.desc}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
