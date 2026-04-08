import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <div className="py-12 md:py-20 flex flex-col items-center text-center space-y-8 md:space-y-12">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="relative group mt-2 md:mt-8"
      >
        {/* Profile Image HUD */}
        <div className="relative w-32 h-32 md:w-48 md:h-48 p-2 md:p-3 glass-panel border-bright overflow-visible">
          <div className="hud-corner hud-tr -top-2 -right-2 md:-top-3 md:-right-3 w-6 h-6 md:w-8 md:h-8 border-2" />
          <div className="hud-corner hud-bl -bottom-2 -left-2 md:-bottom-3 md:-left-3 w-6 h-6 md:w-8 md:h-8 border-2" />
          
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
          
          <div className="absolute -bottom-5 md:-bottom-8 left-1/2 -translate-x-1/2 px-4 md:px-6 py-1 md:py-1.5 bg-accent-cyan text-bg-dark txt-mono text-[8px] md:text-[10px] font-extrabold tracking-[0.2em] whitespace-nowrap shadow-[0_0_15px_var(--accent-cyan)]">
            SYSTEM_IDENTITY: VERIFIED
          </div>
        </div>

        {/* Decorative HUD Details */}
        <div className="absolute -right-20 top-0 hidden xl:block opacity-60">
          <div className="flex flex-col gap-2 items-end">
            <div className="w-24 h-[1px] bg-accent-cyan/40" />
            <div className="txt-mono text-[9px] text-accent-cyan uppercase">Coordinates: 12.9716° N</div>
            <div className="txt-mono text-[9px] text-accent-cyan uppercase">Core_State: Stable</div>
            <div className="txt-mono text-[9px] text-accent-cyan uppercase">System_Auth: Lvl_01</div>
          </div>
        </div>
      </motion.div>

      <div className="space-y-8 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex items-center justify-center gap-4 text-accent-cyan"
        >
          <div className="w-2 h-2 rounded-full bg-accent-cyan animate-pulse shadow-[0_0_10px_var(--accent-cyan)]" />
          <span className="txt-mono text-xs font-bold tracking-[0.25em]">STATUS: DEPLOYED_AT_ORACLE</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7, duration: 1.2 }}
          className="txt-hero gradient-text"
        >
          Agentic Architect <br /> & AI Systems Engineer
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="txt-body max-w-3xl mx-auto leading-relaxed text-text-dim px-4"
        >
          Software Developer at <span className="text-accent-blue font-semibold">Oracle</span> specializing in AI-native systems and high-scale microservices. 
          Optimizing backend efficiency by <span className="text-white font-bold px-1 underline decoration-accent-cyan/30">60%</span> and architecting fault-tolerant Agentic AI workflows.
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
        className="flex flex-wrap gap-8 justify-center pt-8"
      >
        <a href="#projects" className="btn-primary">
          Initiate Mission
        </a>
        <a href="#experience" className="btn-outline">
          Access Logs
        </a>
      </motion.div>
    </div>
  );
};

export default Hero;
