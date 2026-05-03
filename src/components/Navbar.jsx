import React from 'react';

const Navbar = () => {
  return (
    <header className="fixed w-full top-0 z-50 bg-[#0a0a0a]/90 backdrop-blur-md border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
            <a href="#" className="text-2xl font-bold text-white tracking-tight">
                Prakhar Srivastava
            </a>
            <nav className="hidden md:flex gap-8">
                <a href="#about" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">About</a>
                <a href="#projects" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">Projects</a>
                <a href="#certifications" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">Certifications</a>
                <a href="#skills" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">Skills</a>
                <a href="#contact" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">Contact</a>
            </nav>
        </div>
    </header>
  );
};

export default Navbar;
