import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Award, Calendar, MapPin } from 'lucide-react';
import { WORK_EXPERIENCE } from '../../core/constants';

const ExperienceLogs: React.FC = () => {
  return (
    <div className="py-20 space-y-12">
      <div className="flex flex-col gap-2">
        <h2 className="txt-title uppercase tracking-tighter flex items-center gap-3">
          <Terminal className="text-accent-primary" />
          Deployment_Logs
        </h2>
        <p className="txt-small uppercase tracking-widest text-muted">
          Chronological record of system engagements and breakthroughs
        </p>
      </div>

      <div className="relative border-l border-border-primary ml-4 md:ml-8 space-y-12 pt-4">
        {WORK_EXPERIENCE.map((exp, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="relative pl-8 group"
          >
            {/* Timeline Node */}
            <div className="absolute left-[-5px] top-1 w-2.5 h-2.5 rounded-full bg-border-primary group-hover:bg-accent-primary transition-colors border-[3px] border-bg-primary" />
            
            <div className="glass-panel p-6 space-y-4 hover:shadow-[0_0_20px_var(--accent-glow)] transition-all">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h3 className="txt-heading text-lg font-bold text-accent-primary">{exp.role}</h3>
                  <div className="flex items-center gap-2 text-sm text-primary font-semibold">
                    {exp.company}
                    {exp.company === "Oracle" && <span title="YES Award Recipient"><Award className="w-4 h-4 text-yellow-500" /></span>}
                  </div>
                </div>
                <div className="flex flex-col md:items-end text-xs font-mono text-muted uppercase space-y-1">
                  <div className="flex items-center gap-2"><Calendar className="w-3 h-3" /> {exp.period}</div>
                  <div className="flex items-center gap-2"><MapPin className="w-3 h-3" /> {exp.location}</div>
                </div>
              </div>

              <ul className="space-y-3">
                {exp.highlights.map((highlight, hIdx) => (
                  <li key={hIdx} className="flex gap-3 text-sm text-secondary leading-relaxed">
                    <span className="text-accent-primary font-bold mt-1">›</span>
                    {highlight}
                  </li>
                ))}
              </ul>

              <div className="pt-4 border-t border-border-primary/50 text-[10px] font-mono text-muted uppercase flex justify-between">
                <span>Deployment_Ref: {exp.company.substring(0, 3)}_{idx}</span>
                <span className="text-accent-primary opacity-50 group-hover:opacity-100 transition-opacity">Status: Logged</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceLogs;
