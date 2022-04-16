import { Paragraph } from '.';

export interface Experience {
  period: string;
  title: string;
  employer: string;
  employerLink: string | null;
  employmentRate: string;
  paragraphs: Paragraph[];
}
