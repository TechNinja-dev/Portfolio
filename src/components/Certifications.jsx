import React from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';

const certificationsData = [
  {
    id: "genai",
    title: "GenAI Academy - Completion Certificate",
    img: "/cert1.png",
    url: "https://certificate.hack2skill.com/user/genai2/2025H2S04GENAI-A100231",
    desc: "Completed the GenAI Academy — the first phase of the GenAI Exchange Hackathon — gaining hands-on experience with generative AI concepts, tools, and real-world applications.",
    issuer: "Hack2Skill"
  },
  {
    id: "bcg",
    title: "BCG Virtual Job Simulation for Data Science",
    img: "/cert2.png",
    url: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/SKZxezskWgmFjRvj9/Tcz8gTtprzAS4xSoK_SKZxezskWgmFjRvj9_zWWGT8icK6tTmBMSd_1749814173589_completion_certificate.pdf",
    desc: "Completed a virtual job simulation focused on practical data science tasks, including data cleaning, exploratory analysis, and predictive modeling to solve real business problems.",
    issuer: "BCG / Forage"
  },
  {
    id: "hp",
    title: "AI for Beginners",
    img: "/cert3.png",
    url: "https://www.life-global.org/certificate/57e8c737-046f-464e-a266-d6eee6857b75",
    desc: "Certified in “AI for Beginners” by HP LIFE, covering foundational concepts of artificial intelligence, its applications, and ethical considerations in modern technology.",
    issuer: "HP LIFE"
  }
];

const Certifications = () => {
  return (
    <section id="certifications" className="py-32 bg-[#0a0a0a] text-white font-sans border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-zinc-100">Certifications.</h2>
            <p className="text-zinc-400 text-lg max-w-2xl leading-relaxed">
              Continuous learning is critical in AI/ML. Here are the credentials that validate my expertise and dedication to the craft.
            </p>
          </div>
          <div className="hidden md:flex items-center justify-center w-16 h-16 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 shadow-xl">
            <Award size={32} />
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificationsData.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group flex flex-col bg-zinc-900/40 border border-zinc-800 rounded-2xl overflow-hidden hover:border-zinc-700 transition-all duration-300 hover:shadow-[0_0_40px_rgba(255,255,255,0.02)] hover:-translate-y-1"
            >
              <div className="aspect-[4/3] overflow-hidden relative border-b border-zinc-800 bg-zinc-900">
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent opacity-60 z-10 pointer-events-none"></div>
                <img 
                  src={cert.img} 
                  alt={cert.title} 
                  className="w-full h-full object-cover object-top grayscale-0 opacity-100 md:grayscale md:opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                />
              </div>
              
              <div className="p-8 flex flex-col flex-1">
                <div className="text-xs font-semibold tracking-wider text-zinc-500 uppercase mb-3">
                  {cert.issuer}
                </div>
                <h3 className="text-xl font-bold mb-4 text-zinc-100 group-hover:text-white transition-colors leading-snug">
                  {cert.title}
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-8 flex-1">
                  {cert.desc}
                </p>
                
                <a 
                  href={cert.url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full px-5 py-3 mt-auto bg-zinc-800 hover:bg-zinc-100 text-zinc-300 hover:text-black font-semibold rounded-xl transition-all duration-300 border border-zinc-700 hover:border-white"
                >
                  <ExternalLink size={18} />
                  View Credential
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Certifications;
