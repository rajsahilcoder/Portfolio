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

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {PROJECTS.map((project, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="group glass-panel flex flex-col"
          >
            {/* Project Header */}
            <div className="p-6 border-b border-border-main flex justify-between items-start">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-accent-cyan animate-pulse" />
                  <h3 className="txt-heading text-lg font-bold">{project.title}</h3>
                </div>
                <div className="txt-mono text-[10px] text-accent-cyan opacity-60">
                  Mission_ID: {project.title.toLowerCase().replace(/\s+/g, '_')}_v1.0
                </div>
              </div>
              <div className="flex gap-4">
                <a href="#" className="p-2 hover:text-accent-cyan transition-colors">
                  <Github className="w-5 h-5" />
                </a>
                <a href="#" className="p-2 hover:text-accent-cyan transition-colors">
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Project Content */}
            <div className="p-6 flex-1 space-y-6">
              <p className="txt-body text-sm leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-4 py-4 border-y border-border-main/50">
                {project.techStack.map((tech, tIdx) => (
                  <div key={tIdx} className="flex items-center gap-2 txt-mono text-[10px] text-text-dim group-hover:text-accent-cyan transition-colors">
                    <ChevronRight className="w-3 h-3 text-accent-cyan/50" />
                    {tech}
                  </div>
                ))}
              </div>
            </div>

            {/* Project Footer Status */}
            <div className="px-6 py-4 bg-bg-secondary flex justify-between items-center">
              <span className="txt-mono text-[9px] text-text-micro uppercase">Execute_Access</span>
              <button className="text-accent-cyan txt-mono text-[10px] font-bold tracking-widest hover:underline flex items-center gap-2">
                INITIATE_TERMINAL
                <ChevronRight className="w-3 h-3" />
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProjectGallery;
