import React from 'react';
import { motion } from 'framer-motion';
import { Shield, MapPin, Cpu, Activity, Signal } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="py-12 md:py-24 flex flex-col items-center xl:flex-row xl:items-start xl:text-left text-center gap-12 xl:gap-24">
      {/* Profile Image Section */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="relative group shrink-0"
      >
        {/* Profile Image HUD - Large Scale */}
        <div className="relative w-48 h-48 md:w-64 md:h-64 xl:w-80 xl:h-80 p-3 md:p-4 glass-panel border-bright overflow-visible">
          <div className="hud-corner hud-tr -top-3 -right-3 w-10 h-10 border-2" />
          <div className="hud-corner hud-bl -bottom-3 -left-3 w-10 h-10 border-2" />
          
          <div className="relative w-full h-full overflow-hidden rounded-sm grayscale group-hover:grayscale-0 transition-all duration-1000 ease-in-out">
            <img 
              src="profile.jpg" 
              alt="Sahil Raj" 
              className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-1000"
              onError={(e) => {
                e.currentTarget.src = 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sahil';
              }}
            />
            <div className="scan-line" />
          </div>

          {/* Technical Diagnostics Labels */}
          <div className="absolute -right-8 -top-8 hidden md:flex flex-col gap-2 pointer-events-none">
            <div className="flex items-center gap-2 bg-bg-dark/90 border border-accent-cyan/50 px-3 py-1.5 backdrop-blur-xl shadow-neon">
              <Signal className="w-3.5 h-3.5 text-accent-cyan" />
              <span className="txt-mono text-[9px] text-accent-cyan font-bold uppercase tracking-widest">ACTIVE</span>
            </div>
          </div>
        </div>

        {/* Floating Identity Status */}
        <div className="mt-8 flex flex-col gap-3 items-center xl:items-start text-[10px] txt-mono text-accent-cyan opacity-80 font-bold">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-accent-cyan animate-pulse mt-0.5" />
            <span>IDENTITY_LOCK: SECURE</span>
          </div>
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 opacity-50" />
            <span>AUTH_LEVEL: ADMIN</span>
          </div>
        </div>
      </motion.div>

      {/* Hero Content Section */}
      <div className="flex-1 space-y-10">
        <div className="space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex items-center justify-center xl:justify-start gap-4 text-accent-cyan"
          >
            <div className="w-2 h-2 rounded-full bg-accent-cyan animate-pulse shadow-[0_0_10px_var(--accent-cyan)]" />
            <span className="txt-mono text-xs font-bold tracking-[0.25em] uppercase">Status: Deployed_at_Oracle</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7, duration: 1.2 }}
            className="txt-hero gradient-text mb-4"
          >
            Agentic Architect <br className="hidden md:block" /> & AI Engineer
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="txt-body max-w-2xl mx-auto xl:mx-0 leading-relaxed text-text-dim text-lg"
          >
            Software Developer at <span className="text-accent-cyan font-bold">Oracle</span> specializing in AI-native systems. 
            I architect fault-tolerant Agentic AI workflows and optimize backend performance by <span className="text-white font-bold underline decoration-accent-cyan/30">60%</span>.
          </motion.p>
        </div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="flex flex-wrap gap-8 justify-center xl:justify-start pt-4"
        >
          <a href="#projects" className="btn-primary">
            Initiate Mission
          </a>
          <a href="#experience" className="btn-outline">
            Access Logs
          </a>
        </motion.div>

        {/* Bottom Technical Bar - Fixed Visibility */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.8 }}
          transition={{ delay: 1.5 }}
          className="pt-12 hidden lg:flex flex-wrap gap-x-12 gap-y-4 border-t border-border-main txt-mono text-[11px] text-text-dim font-bold tracking-widest"
        >
          <div className="flex items-center gap-3"><MapPin className="w-4 h-4 text-accent-cyan/60" /> HQ_BANGALORE_IN</div>
          <div className="flex items-center gap-3"><Cpu className="w-4 h-4 text-accent-cyan/60" /> ENGINE_OPENAI_G4</div>
          <div className="flex items-center gap-3"><Activity className="w-4 h-4 text-accent-cyan/60" /> EST_ESTABLISHMENT: 2024</div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
