import { Paragraph } from '.';

export interface Project {
  period: string;
  title: string;
  img: string;
  projectLinks: ProjectLink[];
  paragraphs: Paragraph[];
}

export interface ProjectLink {
  name: string;
  link: string;
  awesomeFontIcon: string[];
}
