import { IProject, IWorkExperience, ISkillGroup } from './types';

export const RESUME_DATA = {
  name: "Sahil Raj",
  location: "Bengaluru, Karnataka",
  phone: "+91 9693438548",
  email: "sahil.1si20ad022@gmail.com",
  github: "rajsahilcoder",
  summary: "Software Developer at Oracle specializing in AI-native systems and high-scale microservices. Proven track record of optimizing backend memory efficiency by 60% and architecting fault-tolerant Agentic AI workflows.",
};

export const WORK_EXPERIENCE: IWorkExperience[] = [
  {
    company: "Oracle",
    role: "Software Developer",
    period: "June 2024 -- Present",
    location: "Bengaluru, India",
    highlights: [
      "Developed and scaled high-availability microservices using Python, C++, and React.",
      "Architected a custom Python Dependency Injection system and an O(1) Jump Map compiler.",
      "Achieved a 60% improvement in memory efficiency through algorithmic refactoring.",
      "Received internal YES Award for delivering critical reliability improvements."
    ]
  },
  {
    company: "Coding Ninjas",
    role: "Teaching Assistant (Internship)",
    period: "August 2023 -- January 2024",
    location: "Remote",
    highlights: [
      "Mentored 200+ students in DSA, solving 420+ complex problems.",
      "Improved student assignment completion rates by 30% through targeted debugging."
    ]
  },
  {
    company: "CMTI Bangalore",
    role: "Software Engineer Intern",
    period: "May 2023 -- August 2023",
    location: "Bangalore, Karnataka",
    highlights: [
      "Engineered a real-time IoT Smart Energy Monitoring System using C++ and Embedded Controllers.",
      "Achieved a 15% reduction in energy wastage via predictive maintenance."
    ]
  }
];

export const PROJECTS: IProject[] = [
  {
    id: "homigo",
    title: "Homigo | AI-Native Rental Platform",
    description: "Architected a fault-tolerant Agentic AI workflow in Python using Temporal.io and React 19 Generative UI.",
    techStack: ["Python", "React 19", "FastAPI", "LangChain", "Temporal", "Pinecone"],
    role: "Full Stack & AI Engineer",
    highlights: [
      "Integrated RAG pipelines with Pinecone ensuring 99% type safety.",
      "Engineered Generative UI with Streaming SSR for real-time dynamic rendering.",
      "Designed scalable backend with Dynamic Model Routing, achieving 40% cost reduction."
    ],
    status: "Active"
  }
];

export const SKILLS: ISkillGroup[] = [
  {
    category: "Languages & Frameworks",
    skills: ["Python", "C++", "TypeScript", "React 19", "FastAPI", "SQL", "Node.js"]
  },
  {
    category: "AI & Infrastructure",
    skills: ["Agentic AI", "LLMs", "LangChain", "Temporal.io", "RAG Pipelines", "Docker", "Redis"]
  },
  {
    category: "Core Engineering",
    skills: ["DSA", "System Design", "Load Balancing", "Caching", "Distributed Systems"]
  }
];
