export interface Skill {
  name: string;
  styleClass: string;
  value: number;
}

export const skills: Skill[] = [
  {
    name: 'Java/Spring',
    styleClass: 'main-color-dark',
    value: 75
  },
  {
    name: 'HTML/(s)CSS',
    styleClass: 'main-color',
    value: 80
  },
  {
    name: 'Angular',
    styleClass: 'main-color-dark',
    value: 65
  },
  {
    name: 'SQL',
    styleClass: 'main-color',
    value: 70
  },
  {
    name: 'Typescript',
    styleClass: 'main-color-dark',
    value: 80
  },
  {
    name: 'NodeJs/Nestjs',
    styleClass: 'main-color-dark',
    value: 85
  },
  {
    name: 'DevOps',
    styleClass: 'main-color-light',
    value: 55
  },
  {
    name: 'IdPs',
    styleClass: 'main-color-light',
    value: 40
  },
  {
    name: 'Unit & Integration Testing',
    styleClass: 'main-color',
    value: 65
  }
];
