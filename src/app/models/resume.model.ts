export interface Contact {
  id: string;
  label: string;
  value: string;
  href?: string;
}

export interface ResumeHeaderData {
  name: string;
  position: string;
  contacts: Contact[];
}

export interface ExperienceItemData {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
  stack?: string[];
}

export interface ProjectItemData {
  id: string;
  title: string;
  role?: string;
  period?: string;
  description: string;
  link?: string;
  stack?: string[];
}

export interface SkillGroup {
  id: string;
  title: string;
  items: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  year: string;
}

export interface ResumeData {
  header: ResumeHeaderData;
  aboutMe: string;
  skills: SkillGroup[];
  experience: ExperienceItemData[];
  projects: ProjectItemData[];
  education: EducationItem[];
  additionalInfo: string;
}

export type Theme = 'light' | 'dark';
