import React from 'react';
import { motion } from 'framer-motion';
import { Activity, Terminal } from 'lucide-react';
import { RESUME_DATA } from '../../core/constants';

const Hero: React.FC = () => {
  return (
    <section className="flex flex-col lg:flex-row gap-16 items-center py-20">
      <div className="flex-1 space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border-primary text-accent-primary text-sm font-medium">
          <Activity className="w-4 h-4" />
          Status: Active Deployment at Oracle
        </div>
        <h1 className="txt-hero">
          Agentic <span className="text-accent-primary">Architect</span> & AI Systems Engineer
        </h1>
        <p className="txt-body text-secondary max-w-xl">
          {RESUME_DATA.summary}
        </p>
        <div className="flex gap-4 pt-4">
          <button className="px-8 py-3 bg-accent-primary text-bg-primary font-bold rounded-lg hover:shadow-[0_0_20px_rgba(88,166,255,0.4)] transition-all">
            Initiate Mission
          </button>
          <button className="px-8 py-3 border border-border-primary rounded-lg hover:border-accent-primary transition-all">
            View Logs
          </button>
        </div>
      </div>
      <div className="relative">
        <div className="w-80 h-96 glass-panel relative overflow-hidden flex items-center justify-center">
          <Terminal className="w-12 h-12 text-muted" />
        </div>
        <div className="absolute -top-4 -right-4 w-24 h-24 border-t-2 border-r-2 border-accent-primary opacity-50" />
        <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b-2 border-l-2 border-accent-primary opacity-50" />
      </div>
    </section>
  );
};

export default Hero;
