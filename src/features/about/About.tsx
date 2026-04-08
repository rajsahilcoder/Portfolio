import React from 'react';
import { motion } from 'framer-motion';
import { Fingerprint, Cpu, Zap, Code } from 'lucide-react';
import { RESUME_DATA } from '../../core/constants';

const About: React.FC = () => {
  const stats = [
    { label: 'System Maturity', value: 'Senior Level', icon: <Cpu className="w-5 h-5" /> },
    { label: 'Optimization Rate', value: '60% Efficiency', icon: <Zap className="w-5 h-5" /> },
    { label: 'Core Stack', value: 'AI / Full Stack', icon: <Code className="w-5 h-5" /> },
  ];

  return (
    <div className="py-20 grid lg:grid-cols-2 gap-16 items-start">
      <div className="space-y-8">
        <div className="flex items-center gap-4 text-accent-cyan">
          <div className="p-3 glass-panel border-accent-cyan/30">
            <Fingerprint className="w-8 h-8" />
          </div>
          <h2 className="txt-title uppercase tracking-tighter">Identity_Matrix</h2>
        </div>
        
        <p className="txt-body text-text-dim leading-relaxed text-lg">
          {RESUME_DATA.summary}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              whileHover={{ y: -5, borderColor: 'var(--accent-cyan)' }}
              className="p-6 glass-panel flex flex-col items-center justify-center text-center gap-3 border-border-main"
            >
              <div className="text-accent-cyan opacity-80">{stat.icon}</div>
              <div className="text-[10px] uppercase tracking-widest text-text-micro font-bold">{stat.label}</div>
              <div className="text-sm font-bold text-text-main">{stat.value}</div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="glass-panel p-8 space-y-8 relative overflow-hidden border-bright">
        <div className="absolute top-0 right-0 p-3 text-[10px] txt-mono text-text-micro uppercase tracking-widest bg-accent-cyan/10">
          SECURE_ACCESS_GRANTED
        </div>
        
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 rounded-full bg-accent-cyan animate-pulse shadow-[0_0_8px_var(--accent-cyan)]" />
          <h3 className="txt-mono text-sm uppercase tracking-widest text-accent-cyan font-bold">Mission_Objective</h3>
        </div>

        <div className="space-y-6 txt-mono text-[13px] text-text-dim">
          <div className="flex gap-4 group">
            <span className="text-accent-cyan font-bold opacity-40 group-hover:opacity-100 transition-opacity">01</span>
            <span className="group-hover:text-text-main transition-colors">Architecting fault-tolerant Agentic AI workflows that prioritize reliability and scale at Oracle.</span>
          </div>
          <div className="flex gap-4 group">
            <span className="text-accent-cyan font-bold opacity-40 group-hover:opacity-100 transition-opacity">02</span>
            <span className="group-hover:text-text-main transition-colors">Optimizing backend systems for maximum memory efficiency and O(1) complexity.</span>
          </div>
          <div className="flex gap-4 group">
            <span className="text-accent-cyan font-bold opacity-40 group-hover:opacity-100 transition-opacity">03</span>
            <span className="group-hover:text-text-main transition-colors">Delivering critical reliability improvements to high-traffic production environments.</span>
          </div>
        </div>

        <div className="pt-8 border-t border-border-main flex justify-between items-center text-[10px] txt-mono text-text-micro">
          <div className="uppercase">Location: {RESUME_DATA.location}</div>
          <div className="uppercase flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
            System: Online
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
