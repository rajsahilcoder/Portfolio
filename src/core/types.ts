import { ReactNode } from 'react';

export interface ISection {
  id: string;
  title: string;
  component: ReactNode;
  icon?: ReactNode;
}

export interface IProject {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  role?: string;
  highlights: string[];
  link?: string;
  status?: 'Active' | 'Completed' | 'Research';
}

export interface IWorkExperience {
  company: string;
  role: string;
  period: string;
  location: string;
  highlights: string[];
}

export interface ISkillGroup {
  category: string;
  skills: string[];
}
