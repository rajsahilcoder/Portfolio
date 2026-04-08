import React, { useState, useEffect } from 'react';
import { Terminal, Shield, Cpu, Activity } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const App: React.FC = () => {
  const [isInitializing, setIsInitializing] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsInitializing(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Glows */}
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
                <span className="cursor-pointer hover:text-accent-primary transition-colors">Mission</span>
                <span className="cursor-pointer hover:text-accent-primary transition-colors">Capabilities</span>
                <span className="cursor-pointer hover:text-accent-primary transition-colors">Deployments</span>
                <span className="cursor-pointer hover:text-accent-primary transition-colors">Export</span>
              </nav>
            </header>

            <section className="flex flex-col lg:flex-row gap-16 items-center py-20">
              <div className="flex-1 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border-primary text-accent-primary text-sm font-medium">
                  <Activity className="w-4 h-4" />
                  Status: Active Deployment at Oracle
                </div>
                <h1 className="txt-hero">
                  Agentic <span className="text-accent-primary">Architect</span> & AI Systems Engineer
                </h1>
                <p className="txt-body text-secondary max-w-xl">
                  Specializing in AI-native systems, high-scale microservices, and autonomous workflows.
                  Engineering the next generation of intelligent software infrastructures.
                </p>
                <div className="flex gap-4 pt-4">
                  <button className="px-8 py-3 bg-accent-primary text-bg-primary font-bold rounded-lg hover:shadow-[0_0_20px_rgba(88,166,255,0.4)] transition-all">
                    Initiate Mission
                  </button>
                  <button className="px-8 py-3 border border-border-primary rounded-lg hover:border-accent-primary transition-all">
                    View Logs
                  </button>
                </div>
              </div>
              <div className="relative">
                <div className="w-80 h-96 glass-panel relative overflow-hidden flex items-center justify-center">
                   {/* Placeholder for Profile Pic */}
                   <Terminal className="w-12 h-12 text-muted" />
                </div>
                {/* Decorative Elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 border-t-2 border-r-2 border-accent-primary opacity-50" />
                <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b-2 border-l-2 border-accent-primary opacity-50" />
              </div>
            </section>
          </motion.main>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
