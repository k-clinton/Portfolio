export interface SocialLinks {
  github: string;
  linkedin: string;
  twitter: string;
  email: string;
}

export interface Project {
  title: string;
  description: string;
  image: string;
  tech: string[];
  github: string;
  live: string;
}

export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string[];
}

export interface SkillCategory {
  title: string;
  icon: JSX.Element;
  skills: string[];
}