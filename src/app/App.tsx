import React, { useState, useEffect } from 'react';
import { Shield, Cpu, Menu, X, Terminal } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionManager from '../components/layout/SectionManager';
import Hero from '../features/hero/Hero';
import About from '../features/about/About';
import SkillsMatrix from '../features/skills/SkillsMatrix';
import ExperienceLogs from '../features/experience/ExperienceLogs';
import ProjectGallery from '../features/projects/ProjectGallery';
import ContactUplink from '../features/contact/ContactUplink';
import { ISection } from '../core/types';

const App: React.FC = () => {
  const [isInitializing, setIsInitializing] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsInitializing(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const sections: ISection[] = [
    { id: 'hero', title: 'Mission Brief', component: <Hero /> },
    { id: 'about', title: 'Identity Matrix', component: <About /> },
    { id: 'skills', title: 'Capabilities Matrix', component: <SkillsMatrix /> },
    { id: 'experience', title: 'Deployment Logs', component: <ExperienceLogs /> },
    { id: 'projects', title: 'Mission Logs', component: <ProjectGallery /> },
    { id: 'contact', title: 'Secure Uplink', component: <ContactUplink /> },
  ];

  return (
    <div className="min-h-screen relative overflow-hidden bg-bg-dark">
      {/* Dynamic Background System */}
      <div className="grid-background" />
      <div className="grid-background grid-background-main" />
      <div className="light-orb" style={{ top: '-10%', left: '-10%' }} />
      <div className="light-orb" style={{ bottom: '-10%', right: '-10%', background: 'radial-gradient(circle, var(--accent-purple) 0%, transparent 70%)' }} />

      <AnimatePresence mode="wait">
        {isInitializing ? (
          <motion.div
            key="loading"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col items-center justify-center h-screen bg-bg-dark text-accent-cyan"
          >
            <div className="relative p-12">
              <div className="hud-corner hud-tr" />
              <div className="hud-corner hud-bl" />
              <Cpu className="w-16 h-16 animate-pulse mb-6 text-accent-cyan" />
              <div className="txt-mono tracking-widest animate-pulse">
                System Initialization: Sahil.AI_v1.0
              </div>
              <div className="mt-8 w-64 h-0.5 bg-bg-tertiary relative overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                  className="h-full bg-accent-cyan shadow-[0_0_10px_var(--accent-cyan)]"
                />
              </div>
            </div>
          </motion.div>
        ) : (
          <div key="content-wrapper" className="relative w-full h-full">
            <motion.main
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="px-6 md:px-16 lg:px-24 max-w-7xl mx-auto pt-12 pb-24"
            >
              <header className="flex justify-between items-center mb-12 md:mb-24 glass-panel p-4 px-6 md:px-8 border-bright relative z-50">
                <div className="flex items-center gap-3 md:gap-4 shrink-0">
                  <div className="w-8 h-8 md:w-10 md:h-10 bg-accent-cyan/10 flex items-center justify-center border border-accent-cyan/30">
                    <Shield className="text-accent-cyan w-5 h-5 md:w-6 md:h-6" />
                  </div>
                  <div className="flex flex-col">
                    <span className="txt-heading text-xs md:text-sm font-extrabold tracking-tighter leading-none">Sahil Raj</span>
                    <span className="txt-mono text-[8px] md:text-[10px] text-accent-cyan opacity-70">Lvl: Admin</span>
                  </div>
                </div>

                {/* Desktop Nav - Correctly Hidden on Mobile via global.css xl:flex */}
                <nav className="hidden xl:flex gap-1 md:gap-2">
                  {sections.map(s => (
                    <a key={s.id} href={`#${s.id}`} className="nav-link rounded text-[10px] md:text-xs">
                      {s.title}
                    </a>
                  ))}
                </nav>

                {/* Mobile Menu Trigger - Visible via xl:hidden */}
                <button 
                  onClick={() => setIsMobileMenuOpen(true)}
                  className="xl:hidden p-2 text-accent-cyan hover:bg-accent-cyan/10 transition-colors border border-transparent hover:border-accent-cyan/30"
                >
                  <Menu className="w-6 h-6" />
                </button>
              </header>

              <div className="relative">
                <SectionManager sections={sections} />
              </div>

              <footer className="mt-32 pt-12 border-t border-border-main flex justify-between items-center txt-mono text-[10px] text-text-micro">
                <span>© 2024 SYSTEM_ARCHITECT::SAHIL_RAJ</span>
                <div className="flex gap-6">
                  <span>LATENCY: 14MS</span>
                  <span>STATUS: OPERATIONAL</span>
                </div>
              </footer>
            </motion.main>

            {/* Mobile Navigation Overlay - POSITIONED ABSOLUTELY ON VIEWPORT */}
            <AnimatePresence>
              {isMobileMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.1 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="fixed inset-0 z-[1001] bg-bg-dark flex flex-col p-8 md:p-12 pt-48 xl:hidden overflow-hidden"
                >
                  <div className="absolute top-12 left-12 flex items-center gap-4 text-accent-cyan opacity-40">
                    <Terminal className="w-5 h-5" />
                    <span className="txt-mono text-xs tracking-widest uppercase">System_Navigation</span>
                  </div>
                  
                  <nav className="flex flex-col gap-6 md:gap-10">
                    {sections.map((s, idx) => (
                      <motion.a
                        key={s.id}
                        href={`#${s.id}`}
                        onClick={() => setIsMobileMenuOpen(false)}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 + 0.2 }}
                        className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-text-main hover:text-accent-cyan transition-all flex items-center gap-6 group hover:translate-x-4 duration-500"
                      >
                        <span className="text-accent-cyan/20 group-hover:text-accent-cyan transition-colors text-sm font-mono pt-2">0{idx + 1}</span>
                        {s.title}
                      </motion.a>
                    ))}
                  </nav>

                  <div className="mt-auto pt-12 border-t border-border-main/30 flex flex-col gap-4 text-text-micro txt-mono text-[10px]">
                    <div className="flex justify-between uppercase tracking-widest">
                      <span>Auth_Status: Verified</span>
                      <span className="text-accent-cyan animate-pulse">Active</span>
                    </div>
                    <div className="flex justify-between uppercase tracking-widest">
                      <span>Uplink_Signal: Stable</span>
                      <span>99.9%</span>
                    </div>
                  </div>
                  
                  {/* Close button - Fixed and obvious */}
                  <button 
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="absolute top-10 right-10 p-4 bg-accent-cyan text-bg-dark rounded-full shadow-neon active:scale-95 transition-transform"
                    style={{ zIndex: 1010 }}
                    aria-label="Close menu"
                  >
                    <X className="w-6 h-6" strokeWidth={3} />
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
