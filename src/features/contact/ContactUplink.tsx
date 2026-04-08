import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Twitter, Download, ShieldCheck, Share2 } from 'lucide-react';
import { RESUME_DATA } from '../../core/constants';

const ContactUplink: React.FC = () => {
  const contactLinks = [
    { label: 'Uplink_Email', value: RESUME_DATA.email, icon: <Mail />, href: `mailto:${RESUME_DATA.email}` },
    { label: 'Uplink_LinkedIn', value: 'sahil-raj', icon: <Linkedin />, href: 'https://linkedin.com/in/sahil-raj' },
    { label: 'Uplink_GitHub', value: 'rajsahilcoder', icon: <Github />, href: 'https://github.com/rajsahilcoder' },
    { label: 'Uplink_Twitter', value: 'astralamind', icon: <Twitter />, href: 'https://twitter.com/astralamind' },
  ];

  return (
    <div className="py-20 space-y-12">
      <div className="flex flex-col gap-2">
        <h2 className="txt-title uppercase tracking-tighter flex items-center gap-3">
          <Share2 className="text-accent-primary" />
          Secure_Uplink
        </h2>
        <p className="txt-small uppercase tracking-widest text-muted">
          Establishing encrypted communication channels
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="glass-panel p-8 space-y-8 flex flex-col justify-between">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <ShieldCheck className="w-5 h-5 text-accent-primary opacity-80" />
              <h3 className="txt-heading text-sm uppercase tracking-widest text-accent-primary">Comm_Protocol_Active</h3>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contactLinks.map((link, idx) => (
                <motion.a
                  key={idx}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  className="p-4 bg-bg-secondary border border-border-primary rounded flex flex-col gap-2 hover:border-accent-primary transition-all group"
                >
                  <div className="text-accent-primary opacity-60 group-hover:opacity-100 transition-opacity [&>svg]:w-5 [&>svg]:h-5">
                    {link.icon}
                  </div>
                  <div className="text-[10px] font-mono text-muted uppercase tracking-widest">
                    {link.label}
                  </div>
                  <div className="text-xs font-bold text-secondary group-hover:text-primary truncate">
                    {link.value}
                  </div>
                </motion.a>
              ))}
            </div>
          </div>

          <div className="pt-6 border-t border-border-primary text-[10px] font-mono text-muted uppercase flex justify-between">
            <span>Uplink_Status: Encrypted</span>
            <span>Signal_Locked: 100%</span>
          </div>
        </div>

        <div className="glass-panel p-8 flex flex-col items-center justify-center gap-8 relative overflow-hidden text-center">
          <div className="absolute top-0 right-0 p-3 text-[10px] font-mono text-muted uppercase">
            Auth_Level: Admin
          </div>

          <div className="w-20 h-20 rounded-full bg-accent-primary/10 flex items-center justify-center text-accent-primary animate-pulse shadow-[0_0_30px_var(--accent-glow)]">
            <Download className="w-8 h-8" />
          </div>

          <div className="space-y-3">
            <h3 className="txt-heading text-xl font-bold uppercase tracking-tighter">Full_Credentials_Retrieval</h3>
            <p className="txt-body text-secondary text-sm max-w-xs mx-auto">
              Requesting system-wide intelligence report (Enhanced PDF Resume). Encrypted transfer protocol ready.
            </p>
          </div>

          <motion.a 
            href="/SahilRaj_Resume.pdf"
            download="SahilRaj_Resume.pdf"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full max-w-xs py-4 bg-accent-primary text-bg-primary font-bold uppercase tracking-widest text-sm rounded shadow-[0_0_20px_var(--accent-glow)] hover:bg-white transition-all flex items-center justify-center gap-3"
          >
            Initiate_Download
          </motion.a>

          <div className="text-[10px] font-mono text-muted uppercase flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500" />
            Transfer_Path_Open
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUplink;
