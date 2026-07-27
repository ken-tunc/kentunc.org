export type Career = {
  label: string;
  description: string;
  /** Month the role started. `Date` months are 0-based. */
  since: Date;
  /** Omitted while the role is ongoing. */
  until?: Date;
};

export const careers: readonly Career[] = [
  {
    label: 'Keio University',
    description: 'Information and Computer Science (ICS).',
    since: new Date(2013, 3),
    until: new Date(2017, 2),
  },
  {
    label: 'Keio University Graduate School',
    description: 'Majored in Software Engineering (Software Defect Prediction).',
    since: new Date(2017, 3),
    until: new Date(2019, 2),
  },
  {
    label: 'Yahoo! JAPAN',
    description: 'Software Engineer',
    since: new Date(2019, 3),
    until: new Date(2022, 3),
  },
  {
    label: 'M3, Inc.',
    description: 'Software Engineer',
    since: new Date(2022, 4),
  },
];

/** Formats a month as `YYYY/MM`. */
export function formatMonth(date: Date): string {
  const month = String(date.getMonth() + 1).padStart(2, '0');
  return `${date.getFullYear()}/${month}`;
}

export function formatPeriod(career: Career): string {
  const until = career.until ? formatMonth(career.until) : 'Present';
  return `${formatMonth(career.since)} ~ ${until}`;
}

export function isOngoing(career: Career): boolean {
  return career.until === undefined;
}
