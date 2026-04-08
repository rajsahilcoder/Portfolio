import React, { useState, useEffect } from 'react';
import { Shield, Cpu } from 'lucide-react';
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

  useEffect(() => {
    const timer = setTimeout(() => setIsInitializing(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const sections: ISection[] = [
    {
      id: 'hero',
      title: 'Mission Brief',
      component: <Hero />,
    },
    {
      id: 'about',
      title: 'Identity Matrix',
      component: <About />,
    },
    {
      id: 'skills',
      title: 'Capabilities Matrix',
      component: <SkillsMatrix />,
    },
    {
      id: 'experience',
      title: 'Deployment Logs',
      component: <ExperienceLogs />,
    },
    {
      id: 'projects',
      title: 'Mission Logs',
      component: <ProjectGallery />,
    },
    {
      id: 'contact',
      title: 'Secure Uplink',
      component: <ContactUplink />,
    },
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
          <motion.main
            key="content"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="px-6 max-w-7xl mx-auto pt-12 pb-24"
          >
            <header className="flex justify-between items-center mb-24 glass-panel p-4 px-8 border-bright">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-accent-cyan/10 flex items-center justify-center border border-accent-cyan/30">
                  <Shield className="text-accent-cyan w-6 h-6" />
                </div>
                <div className="flex flex-col">
                  <span className="txt-heading text-sm font-extrabold tracking-tighter leading-none">Sahil Raj</span>
                  <span className="txt-mono text-[10px] text-accent-cyan opacity-70">Security_Level: Admin</span>
                </div>
              </div>
              <nav className="hidden md:flex gap-2">
                {sections.map(s => (
                  <a key={s.id} href={`#${s.id}`} className="nav-link rounded">
                    {s.title}
                  </a>
                ))}
              </nav>
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
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
