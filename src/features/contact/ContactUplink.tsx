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
    <div className="py-20 space-y-12" id="contact">
      <div className="flex flex-col gap-2">
        <h2 className="txt-title uppercase tracking-tighter flex items-center gap-3">
          <Share2 className="text-accent-cyan" />
          Secure_Uplink
        </h2>
        <p className="txt-mono text-[10px] text-text-dim opacity-70">
          Establishing encrypted communication channels // E2E_PROTOCOL
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="glass-panel p-8 space-y-8 flex flex-col justify-between border-border-main">
          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <ShieldCheck className="w-5 h-5 text-accent-cyan opacity-80" />
              <h3 className="txt-mono text-xs uppercase tracking-widest text-accent-cyan font-bold">Comm_Protocol_Active</h3>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contactLinks.map((link, idx) => (
                <motion.a
                  key={idx}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-bg-secondary border border-border-main rounded-sm flex flex-col gap-3 hover:border-accent-cyan transition-all group"
                >
                  <div className="text-accent-cyan opacity-60 group-hover:opacity-100 transition-opacity [&>svg]:w-5 [&>svg]:h-5">
                    {link.icon}
                  </div>
                  <div className="space-y-1">
                    <div className="text-[9px] txt-mono text-text-micro uppercase tracking-widest font-bold">
                      {link.label}
                    </div>
                    <div className="text-[11px] txt-mono text-text-dim group-hover:text-text-main truncate">
                      {link.value}
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>

          <div className="pt-6 border-t border-border-main text-[9px] txt-mono text-text-micro uppercase flex justify-between">
            <span>Uplink_Status: Encrypted</span>
            <span>Signal_Locked: 100%</span>
          </div>
        </div>

        <div className="glass-panel p-8 flex flex-col items-center justify-center gap-10 relative overflow-hidden text-center border-bright">
          <div className="absolute top-0 right-0 p-3 text-[10px] txt-mono text-text-micro uppercase tracking-widest bg-accent-cyan/10">
            Auth_Level: Admin
          </div>

          <div className="w-24 h-24 rounded-full bg-accent-cyan/10 flex items-center justify-center text-accent-cyan animate-pulse shadow-[0_0_40px_rgba(0,242,255,0.2)]">
            <Download className="w-10 h-10" />
          </div>

          <div className="space-y-4">
            <h3 className="txt-heading text-xl font-bold uppercase tracking-tighter">Full_Credentials_Retrieval</h3>
            <p className="txt-body text-text-dim text-sm max-w-xs mx-auto leading-relaxed">
              Requesting system-wide intelligence report (Enhanced PDF Resume). Encrypted transfer protocol ready.
            </p>
          </div>

          <a 
            href="SahilRaj_Resume.pdf"
            download="SahilRaj_Resume.pdf"
            className="btn-primary w-full max-w-xs"
          >
            Initiate_Download
          </a>

          <div className="text-[10px] txt-mono text-text-micro uppercase flex items-center gap-2 font-bold tracking-widest">
            <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.5)]" />
            Transfer_Path_Open
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUplink;
