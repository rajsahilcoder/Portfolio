import React from 'react';
import { ISection } from '../../core/types';

interface SectionManagerProps {
  sections: ISection[];
}

const SectionManager: React.FC<SectionManagerProps> = ({ sections }) => {
  return (
    <div className="flex flex-col gap-y-20">
      {sections.map((section) => (
        <section 
          key={section.id} 
          id={section.id}
          className="animate-fade-in"
        >
          {section.component}
        </section>
      ))}
    </div>
  );
};

export default SectionManager;
