import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Code, Database, Globe, Layers } from 'lucide-react';
import { SKILLS } from '../../core/constants';

const categoryIcons: Record<string, React.ReactNode> = {
  "Languages & Frameworks": <Code className="w-5 h-5" />,
  "AI & Infrastructure": <Cpu className="w-5 h-5" />,
  "Core Engineering": <Layers className="w-5 h-5" />,
};

const SkillsMatrix: React.FC = () => {
  return (
    <div className="py-20 space-y-16">
      <div className="flex flex-col gap-3">
        <h2 className="txt-title uppercase tracking-tighter flex items-center gap-3">
          <Database className="text-accent-cyan" />
          Capabilities_Matrix
        </h2>
        <p className="txt-mono text-[10px] text-text-dim opacity-70 tracking-widest">
          Multi-disciplinary technical proficiency modules // Lvl_02_Access
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
        {SKILLS.map((group, groupIdx) => (
          <motion.div 
            key={groupIdx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: groupIdx * 0.1 }}
            viewport={{ once: true }}
            className="glass-panel p-8 space-y-8 flex flex-col border-border-main"
          >
            <div className="flex items-center gap-4 text-accent-cyan">
              <div className="p-2.5 bg-accent-cyan/10 rounded-sm border border-accent-cyan/20">
                {categoryIcons[group.category] || <Globe className="w-5 h-5" />}
              </div>
              <h3 className="txt-mono text-xs font-extrabold tracking-[0.2em] uppercase">
                {group.category}
              </h3>
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              {group.skills.map((skill, idx) => (
                <span 
                  key={idx}
                  className="px-4 py-2 bg-bg-secondary border border-border-main text-[11px] txt-mono text-text-dim hover:text-accent-cyan hover:border-accent-cyan hover:bg-accent-cyan/5 transition-all cursor-default font-bold"
                >
                  {skill}
                </span>
              ))}
            </div>

            <div className="mt-auto pt-6 border-t border-border-main/50 text-[9px] txt-mono text-text-micro uppercase flex justify-between tracking-widest font-bold">
              <span>Module_Integrity</span>
              <span className="text-accent-cyan opacity-80">100%</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SkillsMatrix;
