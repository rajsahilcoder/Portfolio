import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, ExternalLink, Box, Code, CheckCircle, Radio } from 'lucide-react';
import { PROJECTS } from '../../core/constants';

const ProjectGallery: React.FC = () => {
  return (
    <div className="py-20 space-y-12">
      <div className="flex flex-col gap-2">
        <h2 className="txt-title uppercase tracking-tighter flex items-center gap-3">
          <Box className="text-accent-primary" />
          Mission_Logs
        </h2>
        <p className="txt-small uppercase tracking-widest text-muted">
          Active system developments and experimental prototypes
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {PROJECTS.map((project, idx) => (
          <motion.div 
            key={project.id}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="group glass-panel p-8 flex flex-col space-y-6 hover:shadow-[0_0_30px_var(--accent-glow)] transition-all"
          >
            <div className="flex justify-between items-start">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <h3 className="txt-heading text-xl font-bold group-hover:text-accent-primary transition-colors">
                    {project.title}
                  </h3>
                  {project.status === 'Active' ? (
                    <Radio className="w-3 h-3 text-green-500 animate-pulse" />
                  ) : (
                    <CheckCircle className="w-3 h-3 text-accent-primary" />
                  )}
                </div>
                <div className="txt-small uppercase tracking-widest text-accent-primary/60">
                  Role: {project.role}
                </div>
              </div>
              {project.link && (
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 bg-bg-tertiary rounded hover:bg-accent-primary hover:text-bg-primary transition-all"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
            </div>

            <p className="txt-body text-secondary text-sm leading-relaxed">
              {project.description}
            </p>

            <ul className="space-y-2">
              {project.highlights.map((highlight, hIdx) => (
                <li key={hIdx} className="flex gap-2 text-xs text-muted font-mono uppercase">
                  <span className="text-accent-primary">»</span>
                  {highlight}
                </li>
              ))}
            </ul>

            <div className="pt-6 border-t border-border-primary flex flex-wrap gap-2">
              {project.techStack.map((tech, tIdx) => (
                <div key={tIdx} className="flex items-center gap-1.5 px-2 py-1 bg-bg-secondary border border-border-primary rounded text-[10px] font-mono text-secondary">
                  <Code className="w-3 h-3 text-accent-primary opacity-50" />
                  {tech}
                </div>
              ))}
            </div>

            <div className="pt-4 flex justify-between items-center text-[10px] font-mono text-muted uppercase">
              <span>Mission_ID: {project.id}_v1.0</span>
              <span className="opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
                <Terminal className="w-3 h-3" /> Execute_Access
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProjectGallery;
