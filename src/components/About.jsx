import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play } from 'lucide-react';
import { SiPython, SiFastapi, SiReact, SiMongodb, SiMysql, SiScikitlearn } from 'react-icons/si';

const TypewriterText = ({ onComplete }) => {
  const blocks = [
    { text: "As a Python developer focusing on AI/ML, I bridge the gap between theory and real-world applications. I previously served as an AI/ML Intern at ", bold: false },
    { text: "Labmentix", bold: true },
    { text: " and a Web Dev Intern at ", bold: false },
    { text: "Acmegrade", bold: true },
    { text: ".\n\nMy academic journey—a BCA specializing in AI/ML (powered by IBM)—fuels my passion for building scalable, data-driven solutions. I thrive in disciplined environments where multitasking meets problem-solving.", bold: false }
  ];

  const [charIndex, setCharIndex] = useState(0);
  const totalChars = blocks.reduce((acc, b) => acc + b.text.length, 0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCharIndex(prev => {
        if (prev < totalChars) return prev + 1;
        clearInterval(interval);
        if (onComplete) onComplete();
        return prev;
      });
    }, 15);
    return () => clearInterval(interval);
  }, [totalChars, onComplete]);

  let renderedChars = 0;

  return (
    <div className="whitespace-pre-wrap text-zinc-400 font-sans text-base leading-relaxed">
      {blocks.map((block, i) => {
        const blockStart = renderedChars;
        const blockEnd = blockStart + block.text.length;
        renderedChars = blockEnd;

        if (charIndex < blockStart) return null;

        const visibleText = block.text.substring(0, charIndex - blockStart);

        return (
          <span key={i} className={block.bold ? "text-white font-medium" : ""}>
            {visibleText}
          </span>
        );
      })}
      {charIndex < totalChars && (
        <span className="inline-block w-2 h-4 bg-zinc-400 ml-1 animate-pulse align-middle"></span>
      )}
    </div>
  );
};

const SystemStatus = () => {
  const [logs, setLogs] = useState([]);
  const fullLogs = [
    "Initializing core profile...",
    "Loading AI/ML models...",
    "Connecting to FastAPI...",
    "Establishing database connection...",
    "Ready for deployment."
  ];

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < fullLogs.length) {
        setLogs(prev => [...prev, fullLogs[index]]);
        index++;
      } else {
        setTimeout(() => {
          setLogs([]);
          index = 0;
        }, 3000);
      }
    }, 800);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col h-full w-full bg-[#1e1e1e] p-4 font-mono text-xs overflow-hidden relative">
      <div className="flex items-center gap-2 mb-3 pb-2 border-b border-zinc-800/50 text-zinc-400 text-[11px] uppercase tracking-wider">
        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
        System Log
      </div>
      <div className="flex flex-col gap-1.5 flex-1 justify-start pt-1">
        <AnimatePresence>
          {logs.map((log, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-zinc-400"
            >
              <span className="text-emerald-400 mr-2">[OK]</span>
              {log}
            </motion.div>
          ))}
        </AnimatePresence>
        {logs.length < fullLogs.length && (
          <div className="mt-1 flex items-center">
            <span className="text-zinc-600 mr-2">[..]</span>
            <span className="w-1.5 h-3 bg-zinc-500 animate-pulse"></span>
          </div>
        )}
      </div>
    </div>
  );
};

const About = () => {
  const [runState, setRunState] = useState('idle'); // 'idle' | 'running' | 'complete'
  const [runKey, setRunKey] = useState(0);

  const handleRun = () => {
    setRunState('running');
    setRunKey(prev => prev + 1);
  };
  return (
    <section id="about" className="min-h-screen bg-[#0a0a0a] text-white flex items-center pt-24 pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-16 lg:gap-24 pt-4">

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
              Python Developer.<br />
              <span className="text-zinc-500">ML Enthusiast.</span>
            </h1>

            <p className="text-lg text-zinc-400 max-w-xl leading-relaxed mb-10">
              Crafting efficient code for AI-driven web applications. Currently mastering machine learning while building scalable backends with FastAPI.
            </p>

            {/* Buttons Row */}
            <div className="flex flex-wrap gap-4 mb-6">
              <a href="#projects" className="flex-1 sm:flex-none min-w-[140px] px-6 py-3 text-center bg-white text-black font-semibold rounded-lg hover:bg-zinc-200 transition-colors">
                Explore My Work
              </a>
              <a href="#contact" className="flex-1 sm:flex-none min-w-[140px] px-6 py-3 text-center bg-zinc-900 text-white font-semibold rounded-lg border border-zinc-800 hover:bg-zinc-800 transition-colors">
                Get in Touch
              </a>
            </div>

            {/* Widgets Row */}
            <div className="flex flex-col sm:flex-row gap-6 mb-10 w-full items-stretch">

              {/* Left Column: System Status Widget */}
              <div className="hidden sm:block w-full sm:flex-1 rounded-xl overflow-hidden border border-zinc-800 shadow-xl">
                <SystemStatus />
              </div>

              {/* Right Column: IDE Interactive Widget */}
              <div className="w-full sm:flex-1 rounded-xl overflow-hidden border border-zinc-800 bg-[#1e1e1e] shadow-xl flex flex-col">
                {/* Header */}
                <div className="flex items-center justify-between px-4 py-2.5 bg-[#252526] border-b border-zinc-800">
                  <div className="flex gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]"></div>
                  </div>
                  <div className="text-zinc-400 text-[11px] font-mono tracking-wider">main.py</div>
                  <div className="flex gap-2">
                    {runState === 'complete' && (
                      <button
                        onClick={() => setRunState('idle')}
                        className="flex items-center gap-1.5 text-[11px] font-semibold px-2 py-1 rounded transition-all text-zinc-400 hover:text-red-400 bg-[#333333] hover:bg-[#444444]"
                      >
                        Clear
                      </button>
                    )}
                    <button
                      onClick={handleRun}
                      disabled={runState === 'running'}
                      className={`flex items-center gap-1.5 text-[11px] font-semibold px-2 py-1 rounded transition-all ${runState === 'running' ? 'text-zinc-500 bg-[#333333] cursor-not-allowed' : runState === 'complete' ? 'text-emerald-400 bg-[#333333] hover:bg-[#444444]' : 'text-zinc-300 hover:text-white bg-[#333333] hover:bg-[#444444]'}`}
                    >
                      <Play size={12} className={runState === 'running' ? "text-zinc-500" : "text-emerald-400"} />
                      {runState === 'running' ? 'Running...' : runState === 'complete' ? 'Re-run' : 'Run'}
                    </button>
                  </div>
                </div>

                {/* Code Area */}
                <div className="p-5 font-mono text-xs md:text-sm overflow-x-auto leading-relaxed [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                  <div className="text-zinc-300">
                    <span className="text-[#c586c0]">from</span> <span className="text-[#4ec9b0]">Prakhar</span> <span className="text-[#c586c0]">import</span> about
                  </div>
                  <div className="text-zinc-300 mt-2">
                    <span className="text-[#569cd6]">class</span> <span className="text-[#4ec9b0]">Profile</span>:
                  </div>
                  <div className="text-zinc-300 pl-4 mt-1">
                    <span className="text-[#569cd6]">def</span> <span className="text-[#dcdcaa]">__init__</span>(<span className="text-[#9cdcfe]">self</span>):
                  </div>
                  <div className="text-zinc-300 pl-8 mt-1">
                    <span className="text-[#dcdcaa]">about</span>()
                  </div>
                  <div className="text-zinc-300 mt-2">
                    <span className="text-[#4ec9b0]">Profile</span>()
                  </div>
                </div>
              </div>
            </div>

            {/* Separator */}
            <div className="w-full h-px bg-zinc-800 mb-8"></div>

            {/* Dedicated Terminal Output Area (Fixed Height prevents layout shifts) */}
            <div className="w-full h-[280px] sm:h-[220px] rounded-xl border border-zinc-800 bg-[#0f0f0f] p-6 shadow-inner overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
              {runState !== 'idle' ? (
                <div className="h-full">
                  <div className="flex items-center gap-2 text-zinc-500 text-xs font-mono mb-4">
                    <span className="text-emerald-400">➜</span>
                    <span>~ python main.py</span>
                  </div>
                  <TypewriterText key={runKey} onComplete={() => setRunState('complete')} />
                </div>
              ) : (
                <div className="h-full flex flex-col items-center justify-center text-zinc-600 font-mono text-sm opacity-50 space-y-2">
                  <div className="text-2xl">⚡</div>
                  <p>Click 'Run' to execute profile</p>
                </div>
              )}
            </div>
          </motion.div>

          {/* Right Image Column */}
          <motion.div
            className="w-full lg:w-[450px] flex-shrink-0 lg:mt-[58px]"
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
