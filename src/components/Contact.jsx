import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

const Contact = () => {
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    
    data.access_key = import.meta.env.VITE_WEB3FORMS_KEY;
    data.from_name = data.full_name;

    setStatus('Sending...');

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });
      
      const result = await response.json();
      if (result.success) {
        setStatus('Message sent successfully!');
        e.target.reset();
      } else {
        setStatus('Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error(error);
      setStatus('An error occurred. Please try again later.');
    }
    
    setTimeout(() => setStatus(''), 5000);
  };

  return (
    <>
      <section id="contact" className="py-32 bg-[#0a0a0a] text-white font-sans border-t border-zinc-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20 text-center md:text-left"
          >
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-zinc-100">Get In Touch.</h2>
            <p className="text-zinc-400 text-lg max-w-2xl leading-relaxed mx-auto md:mx-0">
              Whether you have a question, a project proposal, or just want to say hi, my inbox is always open.
            </p>
          </motion.div>

          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
            
            {/* Contact Info (Left) */}
            <motion.div 
              className="lg:w-1/3 flex flex-col gap-10"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div>
                <h3 className="text-2xl font-bold text-white mb-8">Let's collaborate</h3>
                <div className="space-y-6">
                  <div className="flex items-center gap-5 text-zinc-400 hover:text-white transition-colors">
                    <div className="w-12 h-12 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-300 shrink-0">
                      <Mail size={20} />
                    </div>
                    <span className="text-base font-medium break-all">prakharsrivastava019@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-5 text-zinc-400 hover:text-white transition-colors">
                    <div className="w-12 h-12 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-300 shrink-0">
                      <Phone size={20} />
                    </div>
                    <span className="text-base font-medium">+91 9792486222</span>
                  </div>
                  <div className="flex items-center gap-5 text-zinc-400 hover:text-white transition-colors">
                    <div className="w-12 h-12 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-300 shrink-0">
                      <MapPin size={20} />
                    </div>
                    <span className="text-base font-medium">Uttar Pradesh, India</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-zinc-500 uppercase tracking-widest mb-6">Social Profiles</h3>
                <div className="flex gap-4">
                  <a href="https://www.linkedin.com/in/prakhar-srivastava-58bb85303/" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-[#0A66C2] md:text-zinc-500 hover:text-[#0A66C2] hover:bg-zinc-800 transition-colors">
                    <FaLinkedin size={20} />
                  </a>
                  <a href="https://github.com/TechNinja-dev" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-white md:text-zinc-500 hover:text-white hover:bg-zinc-800 transition-colors">
                    <FaGithub size={20} />
                  </a>
                  <a href="https://leetcode.com/u/Prakhar_Logics/" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-[#FFA116] md:text-zinc-500 hover:text-[#FFA116] hover:bg-zinc-800 transition-colors">
                    <SiLeetcode size={20} />
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Contact Form (Right) */}
            <motion.div 
              className="lg:w-2/3"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <form onSubmit={handleSubmit} className="flex flex-col gap-6 p-8 md:p-10 bg-zinc-900/40 border border-zinc-800/80 rounded-3xl shadow-[0_0_40px_rgba(255,255,255,0.01)]">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium text-zinc-400 ml-1">Full Name</label>
                    <input 
                      type="text" 
                      name="full_name" 
                      required 
                      className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-5 py-4 text-white placeholder-zinc-600 focus:outline-none focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500 transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium text-zinc-400 ml-1">Email Address</label>
                    <input 
                      type="email" 
                      name="email" 
                      required 
                      className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-5 py-4 text-white placeholder-zinc-600 focus:outline-none focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500 transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-zinc-400 ml-1">Subject</label>
                  <input 
                    type="text" 
                    name="subject" 
                    className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-5 py-4 text-white placeholder-zinc-600 focus:outline-none focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500 transition-colors"
                    placeholder="How can I help you?"
                  />
                </div>
                
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-zinc-400 ml-1">Message</label>
                  <textarea 
                    name="message" 
                    required 
                    rows="5"
                    className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-5 py-4 text-white placeholder-zinc-600 focus:outline-none focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500 transition-colors resize-none"
                    placeholder="Write your message here..."
                  ></textarea>
                </div>
                
                <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mt-4">
                  <button 
                    type="submit" 
                    disabled={status === 'Sending...'}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-black font-semibold rounded-xl hover:bg-zinc-200 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {status === 'Sending...' ? (
                      <>
                        <div className="w-5 h-5 border-2 border-black/20 border-t-black rounded-full animate-spin"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={18} />
                        Send Message
                      </>
                    )}
                  </button>
                  
                  {status && (
                    <motion.p 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`text-sm font-medium px-4 py-2 rounded-lg ${status.includes('success') ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' : 'bg-red-500/10 text-red-400 border border-red-500/20'}`}
                    >
                      {status}
                    </motion.p>
                  )}
                </div>
              </form>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Modern Footer */}
      <footer className="bg-[#050505] py-8 border-t border-zinc-900 text-center">
        <p className="text-zinc-500 text-sm">
          © 2026 Made by <span className="text-zinc-300 font-medium">Prakhar Srivastava</span>. All rights reserved.
        </p>
      </footer>
    </>
  );
};

export default Contact;
