import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Award, Calendar, MapPin } from 'lucide-react';
import { WORK_EXPERIENCE } from '../../core/constants';

const ExperienceLogs: React.FC = () => {
  return (
    <div className="py-20 space-y-12">
      <div className="flex flex-col gap-2">
        <h2 className="txt-title uppercase tracking-tighter flex items-center gap-3">
          <Terminal className="text-accent-cyan" />
          Deployment_Logs
        </h2>
        <p className="txt-mono text-[10px] text-text-dim opacity-70">
          Chronological record of system engagements and breakthroughs // LOG_v2.0
        </p>
      </div>

      <div className="relative border-l border-border-main ml-2 md:ml-8 space-y-12 pt-4">
        {WORK_EXPERIENCE.map((exp, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="relative pl-6 md:pl-10 group"
          >
            {/* Timeline Node */}
            <div className="absolute left-[-6px] top-1.5 w-3 h-3 rounded-full bg-border-main group-hover:bg-accent-cyan transition-all border-4 border-bg-dark shadow-[0_0_10px_rgba(0,242,255,0)] group-hover:shadow-[0_0_10px_rgba(0,242,255,0.5)]" />
            
            <div className="glass-panel p-6 space-y-6 hover:shadow-[0_0_20px_var(--accent-glow)] transition-all">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="space-y-1">
                  <h3 className="txt-heading text-lg font-bold text-accent-cyan uppercase tracking-tight">{exp.role}</h3>
                  <div className="flex items-center gap-2 text-sm text-text-main font-semibold">
                    {exp.company}
                    {exp.company === "Oracle" && <span title="YES Award Recipient" className="p-1 bg-yellow-500/10 rounded-full"><Award className="w-3.5 h-3.5 text-yellow-500" /></span>}
                  </div>
                </div>
                <div className="flex flex-col md:items-end text-[10px] txt-mono text-text-dim uppercase space-y-1.5 opacity-80">
                  <div className="flex items-center gap-2 bg-bg-secondary px-2 py-1 rounded-sm"><Calendar className="w-3 h-3 text-accent-cyan" /> {exp.period}</div>
                  <div className="flex items-center gap-2 bg-bg-secondary px-2 py-1 rounded-sm"><MapPin className="w-3 h-3 text-accent-cyan" /> {exp.location}</div>
                </div>
              </div>

              <ul className="space-y-4">
                {exp.highlights.map((highlight, hIdx) => (
                  <li key={hIdx} className="flex gap-4 text-sm text-text-dim leading-relaxed">
                    <span className="text-accent-cyan font-bold opacity-50">•</span>
                    {highlight}
                  </li>
                ))}
              </ul>

              <div className="pt-6 border-t border-border-main text-[9px] txt-mono text-text-micro uppercase flex justify-between">
                <span>Deployment_Ref: {exp.company.substring(0, 3)}_{idx}</span>
                <span className="text-accent-cyan font-bold tracking-widest opacity-50 group-hover:opacity-100 transition-opacity">Status: Logged</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceLogs;
