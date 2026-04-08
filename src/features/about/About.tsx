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
        <div className="flex items-center gap-4 text-accent-primary">
          <Fingerprint className="w-8 h-8" />
          <h2 className="txt-title uppercase tracking-tighter">Identity_Matrix</h2>
        </div>
        
        <p className="txt-body text-secondary leading-relaxed">
          {RESUME_DATA.summary}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              whileHover={{ scale: 1.02 }}
              className="p-4 glass-panel flex flex-col items-center justify-center text-center gap-2"
            >
              <div className="text-accent-primary opacity-80">{stat.icon}</div>
              <div className="text-xs uppercase tracking-widest text-muted">{stat.label}</div>
              <div className="text-sm font-bold text-primary">{stat.value}</div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="glass-panel p-8 space-y-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-2 text-[10px] font-mono text-muted uppercase">
          SECURE_ACCESS_GRANTED
        </div>
        
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 rounded-full bg-accent-primary animate-pulse" />
          <h3 className="txt-heading text-sm uppercase tracking-widest text-accent-primary">Mission_Objective</h3>
        </div>

        <div className="space-y-4 font-mono text-sm text-secondary">
          <div className="flex gap-4">
            <span className="text-accent-primary">01</span>
            <span>Architecting fault-tolerant Agentic AI workflows that prioritize reliability and scale.</span>
          </div>
          <div className="flex gap-4">
            <span className="text-accent-primary">02</span>
            <span>Optimizing backend systems for O(1) performance and maximum memory efficiency.</span>
          </div>
          <div className="flex gap-4">
            <span className="text-accent-primary">03</span>
            <span>Delivering critical reliability improvements to high-traffic production environments.</span>
          </div>
        </div>

        <div className="pt-6 border-t border-border-primary flex justify-between items-center">
          <div className="txt-small uppercase">Location: {RESUME_DATA.location}</div>
          <div className="txt-small uppercase">Status: Online</div>
        </div>
      </div>
    </div>
  );
};

export default About;
