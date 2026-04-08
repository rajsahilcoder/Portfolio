import React, { useState, useEffect } from 'react';
import { Shield, Cpu } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionManager from '../components/layout/SectionManager';
import Hero from '../features/hero/Hero';
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
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-glow opacity-30" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-glow opacity-30" />

      <AnimatePresence mode="wait">
        {isInitializing ? (
          <motion.div
            key="loading"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col items-center justify-center h-screen bg-bg-primary text-accent-primary"
          >
            <Cpu className="w-16 h-16 animate-pulse mb-6" />
            <div className="txt-heading tracking-widest uppercase animate-pulse">
              System Initialization: Sahil.AI
            </div>
            <div className="mt-4 w-48 h-1 bg-bg-tertiary rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                className="h-full bg-accent-primary"
              />
            </div>
          </motion.div>
        ) : (
          <motion.main
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="p-8 max-w-7xl mx-auto"
          >
            <header className="flex justify-between items-center mb-16">
              <div className="flex items-center gap-3">
                <Shield className="text-accent-primary w-8 h-8" />
                <span className="txt-heading font-bold uppercase tracking-tighter">Sahil Raj</span>
              </div>
              <nav className="flex gap-8 text-secondary">
                {sections.map(s => (
                  <a key={s.id} href={`#${s.id}`} className="cursor-pointer hover:text-accent-primary transition-colors">
                    {s.title}
                  </a>
                ))}
              </nav>
            </header>

            <SectionManager sections={sections} />
          </motion.main>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
