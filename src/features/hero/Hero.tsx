import React from 'react';
import { motion } from 'framer-motion';
import { Activity, Terminal } from 'lucide-react';
import { RESUME_DATA } from '../../core/constants';

const Hero: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <motion.section 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="flex flex-col lg:flex-row gap-16 items-center py-20"
    >
      <div className="flex-1 space-y-6">
        <motion.div 
          variants={itemVariants}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border-primary text-accent-primary text-sm font-medium"
        >
          <Activity className="w-4 h-4 animate-pulse" />
          Status: Active Deployment at Oracle
        </motion.div>
        
        <motion.h1 
          variants={itemVariants}
          className="txt-hero"
        >
          Agentic <span className="text-accent-primary">Architect</span> <br />
          & AI Systems Engineer
        </motion.h1>

        <motion.p 
          variants={itemVariants}
          className="txt-body text-secondary max-w-xl"
        >
          {RESUME_DATA.summary}
        </motion.p>

        <motion.div 
          variants={itemVariants}
          className="flex gap-4 pt-4"
        >
          <button className="px-8 py-3 bg-accent-primary text-bg-primary font-bold rounded-lg hover:shadow-[0_0_20px_rgba(88,166,255,0.4)] transition-all">
            Initiate Mission
          </button>
          <button className="px-8 py-3 border border-border-primary rounded-lg hover:border-accent-primary transition-all">
            View Logs
          </button>
        </motion.div>
      </div>

      <motion.div 
        variants={itemVariants}
        className="relative group"
      >
        <div className="w-80 h-96 glass-panel relative overflow-hidden flex items-center justify-center">
          {/* Scanning Line Effect */}
          <motion.div 
            animate={{ top: ["0%", "100%", "0%"] }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            className="absolute left-0 right-0 h-[2px] bg-accent-primary shadow-[0_0_15px_var(--accent-primary)] z-10 opacity-50"
          />
          
          <img 
            src="/src/assets/profile.jpg" 
            alt="Sahil Raj" 
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 opacity-80 group-hover:opacity-100"
          />
          
          <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/80 to-transparent" />
        </div>
        
        {/* Decorative Corner Accents */}
        <div className="absolute -top-4 -right-4 w-24 h-24 border-t-2 border-r-2 border-accent-primary opacity-50 group-hover:opacity-100 transition-opacity" />
        <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b-2 border-l-2 border-accent-primary opacity-50 group-hover:opacity-100 transition-opacity" />
        
        {/* Tech Detail Labels */}
        <div className="absolute top-4 left-[-2rem] -rotate-90 origin-right txt-small uppercase tracking-widest opacity-30 group-hover:opacity-60">
          Identity_Lock: Verified
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Hero;
