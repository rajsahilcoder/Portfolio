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
          <>
            <motion.main
              key="content"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="px-8 md:px-16 lg:px-24 max-w-7xl mx-auto pt-12 pb-24"
            >
              <header className="flex justify-between items-center mb-12 md:mb-24 glass-panel p-4 px-6 md:px-8 border-bright relative z-50">
                <div className="flex items-center gap-3 md:gap-4">
                  <div className="w-8 h-8 md:w-10 md:h-10 bg-accent-cyan/10 flex items-center justify-center border border-accent-cyan/30">
                    <Shield className="text-accent-cyan w-5 h-5 md:w-6 md:h-6" />
                  </div>
                  <div className="flex flex-col">
                    <span className="txt-heading text-xs md:text-sm font-extrabold tracking-tighter leading-none">Sahil Raj</span>
                    <span className="txt-mono text-[8px] md:text-[10px] text-accent-cyan opacity-70">Lvl: Admin</span>
                  </div>
                </div>

                {/* Desktop Nav */}
                <nav className="hidden xl:flex gap-1 md:gap-2">
                  {sections.map(s => (
                    <a key={s.id} href={`#${s.id}`} className="nav-link rounded text-[10px] md:text-xs">
                      {s.title}
                    </a>
                  ))}
                </nav>

                {/* Mobile Menu Trigger */}
                <button 
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="xl:hidden p-2 text-accent-cyan hover:bg-accent-cyan/10 transition-colors border border-transparent hover:border-accent-cyan/30"
                >
                  {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
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

            {/* Mobile Navigation Backdrop/Overlay */}
            <AnimatePresence>
              {isMobileMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, x: "100%" }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: "100%" }}
                  transition={{ type: "spring", damping: 25, stiffness: 200 }}
                  className="fixed inset-0 z-[100] bg-bg-dark/95 backdrop-blur-xl flex flex-col p-12 pt-32 xl:hidden"
                >
                  <div className="absolute top-12 left-12 flex items-center gap-4 text-accent-cyan opacity-40">
                    <Terminal className="w-5 h-5" />
                    <span className="txt-mono text-xs tracking-widest uppercase">System_Navigation</span>
                  </div>
                  
                  <nav className="flex flex-col gap-8">
                    {sections.map((s, idx) => (
                      <motion.a
                        key={s.id}
                        href={`#${s.id}`}
                        onClick={() => setIsMobileMenuOpen(false)}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.05 + 0.2 }}
                        className="text-2xl md:text-4xl font-black uppercase tracking-tighter text-text-main hover:text-accent-cyan transition-colors flex items-center gap-4 group"
                      >
                        <span className="text-accent-cyan/20 group-hover:text-accent-cyan transition-colors text-sm font-mono">0{idx + 1}</span>
                        {s.title}
                      </motion.a>
                    ))}
                  </nav>

                  <div className="mt-auto pt-12 border-t border-border-main/30 flex flex-col gap-4 text-text-micro txt-mono text-[9px]">
                    <div className="flex justify-between uppercase">
                      <span>Auth_Status: Verified</span>
                      <span className="text-accent-cyan">Active</span>
                    </div>
                    <div className="flex justify-between uppercase">
                      <span>Uplink_Signal: Stable</span>
                      <span>99.9%</span>
                    </div>
                  </div>
                  
                  <button 
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="absolute top-12 right-12 p-3 bg-accent-cyan text-bg-dark rounded-full shadow-[0_0_20px_var(--accent-cyan)]"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
