export interface Career {
  label: string;
  description: string;
  since: Date;
  until?: Date;
}

export const careers: Career[] = [
  {
    label: 'Keio University',
    description: 'Information and Computer Science (ICS).',
    since: new Date(2013, 3),
    until: new Date(2017, 2),
  },
  {
    label: 'Keio University Graduate School',
    description:
      'Majored in Software Engineering (Software Defect Prediction).',
    since: new Date(2017, 3),
    until: new Date(2019, 2),
  },
  {
    label: 'Yahoo! JAPAN',
    description: 'Software Engineer',
    since: new Date(2019, 3),
  },
];
