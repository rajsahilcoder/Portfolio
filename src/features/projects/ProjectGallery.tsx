import React from 'react';
import { motion } from 'framer-motion';
import { Code, ExternalLink, Github, Terminal, ChevronRight } from 'lucide-react';
import { PROJECTS } from '../../core/constants';

const ProjectGallery: React.FC = () => {
  return (
    <div className="py-20 space-y-12">
      <div className="flex flex-col gap-2">
        <h2 className="txt-title uppercase tracking-tighter flex items-center gap-3">
          <Terminal className="text-accent-cyan" />
          Mission_Logs
        </h2>
        <p className="txt-mono text-[10px] text-text-dim opacity-70">
          Active system developments and experimental prototypes
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
        {PROJECTS.map((project, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="group glass-panel flex flex-col border-border-main"
          >
            {/* Project Header */}
            <div className="p-6 md:p-8 border-b border-border-main flex justify-between items-start">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-accent-cyan animate-pulse shadow-[0_0_8px_var(--accent-cyan)]" />
                  <h3 className="txt-heading text-lg font-bold tracking-tight">{project.title}</h3>
                </div>
                <div className="txt-mono text-[10px] text-accent-cyan opacity-60">
                  Mission_ID: {project.title.toLowerCase().replace(/\s+/g, '_')}_v1.0
                </div>
              </div>
              <div className="flex gap-4">
                <a href="#" className="p-2 hover:text-accent-cyan transition-colors">
                  <Github className="w-5 h-5 opacity-70 group-hover:opacity-100" />
                </a>
                <a href="#" className="p-2 hover:text-accent-cyan transition-colors">
                  <ExternalLink className="w-5 h-5 opacity-70 group-hover:opacity-100" />
                </a>
              </div>
            </div>

            {/* Project Content */}
            <div className="p-6 md:p-8 flex-1 space-y-8">
              <p className="txt-body text-sm leading-relaxed text-text-dim">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-x-6 gap-y-4 py-6 border-y border-border-main/30">
                {project.techStack.map((tech, tIdx) => (
                  <div key={tIdx} className="flex items-center gap-2 txt-mono text-[10px] text-text-micro font-bold tracking-widest group-hover:text-accent-cyan transition-colors">
                    <ChevronRight className="w-3.5 h-3.5 text-accent-cyan/40" />
                    {tech}
                  </div>
                ))}
              </div>
            </div>

            {/* Project Footer Status */}
            <div className="px-6 md:px-8 py-5 bg-bg-secondary/30 flex justify-between items-center">
              <span className="txt-mono text-[9px] text-text-micro uppercase font-bold opacity-60">Execute_Access</span>
              <button className="text-accent-cyan txt-mono text-[10px] font-extrabold tracking-[0.2em] hover:underline flex items-center gap-2 group/btn transition-all">
                INITIATE_TERMINAL
                <ChevronRight className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProjectGallery;
