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
          <Database className="text-accent-primary" />
          Capabilities_Matrix
        </h2>
        <p className="txt-small uppercase tracking-widest text-muted">
          Multi-disciplinary technical proficiency modules
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
            <div className="flex items-center gap-3 text-accent-primary">
              {categoryIcons[group.category] || <Globe className="w-5 h-5" />}
              <h3 className="txt-heading text-sm uppercase tracking-widest font-bold">
                {group.category}
              </h3>
            </div>

            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill, idx) => (
                <span 
                  key={idx}
                  className="px-3 py-1 bg-bg-tertiary border border-border-primary rounded text-xs font-mono text-secondary hover:text-accent-primary hover:border-accent-primary transition-colors cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>

            <div className="mt-auto pt-4 border-t border-border-primary/50 text-[10px] font-mono text-muted uppercase">
              Module_Integrity: 100%
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SkillsMatrix;
