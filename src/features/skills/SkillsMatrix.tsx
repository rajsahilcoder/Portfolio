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
    <div className="py-20 space-y-12">
      <div className="flex flex-col gap-2">
        <h2 className="txt-title uppercase tracking-tighter flex items-center gap-3">
          <Database className="text-accent-cyan" />
          Capabilities_Matrix
        </h2>
        <p className="txt-mono text-[10px] text-text-dim opacity-70">
          Multi-disciplinary technical proficiency modules // Lvl_02_Access
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {SKILLS.map((group, groupIdx) => (
          <motion.div 
            key={groupIdx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: groupIdx * 0.1 }}
            viewport={{ once: true }}
            className="glass-panel p-6 space-y-6 flex flex-col"
          >
            <div className="flex items-center gap-3 text-accent-cyan">
              <div className="p-2 bg-accent-cyan/10 rounded-sm">
                {categoryIcons[group.category] || <Globe className="w-5 h-5" />}
              </div>
              <h3 className="txt-mono text-xs font-bold tracking-widest">
                {group.category}
              </h3>
            </div>

            <div className="flex flex-wrap gap-3">
              {group.skills.map((skill, idx) => (
                <span 
                  key={idx}
                  className="px-3 py-1.5 bg-bg-secondary border border-border-main text-[11px] txt-mono text-text-dim hover:text-accent-cyan hover:border-accent-cyan transition-all cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>

            <div className="mt-auto pt-4 border-t border-border-main text-[9px] txt-mono text-text-micro uppercase flex justify-between">
              <span>Module_Integrity</span>
              <span className="text-accent-cyan">100%</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SkillsMatrix;
