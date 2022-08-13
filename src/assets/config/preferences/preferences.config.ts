export interface Preference {
  value: number;
  color: string;
  name: string;
  fontSize: number;
}

export const preferences: Preference[] = [
  {
    value: 200,
    color: 'rgba(4,124,124,0.8)',
    name: 'Fullstack Development',
    fontSize: 1.75,
  },
  {
    value: 110,
    color: 'rgba(2,77,84,0.8)',
    name: 'Testing & QA',
    fontSize: 1.2,
  },
  {
    value: 170,
    color: 'rgba(8,172,172,0.8)',
    name: 'Backend & Databases',
    fontSize: 1.5,
  },
  {
    value: 110,
    color: 'rgba(4,183,184,0.8)',
    name: 'DevOps',
    fontSize: 1,
  },
  {
    value: 140,
    color: 'rgba(52,223,224,0.8)',
    name: 'Security & Performance',
    fontSize: 1.25,
  },
];
