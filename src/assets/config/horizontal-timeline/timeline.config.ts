export interface HorizontalTimelineEntry {
  location: string;
  date: string;
  title: string;
  smallTitle: string;
  description: string;
}

export const horizontalTimelineEntries: HorizontalTimelineEntry[] = [
  {
    location: 'GTSM @ Merchtem',
    date: 'June 2013',
    title: 'Industrial Sciences',
    smallTitle: '',
    description: 'Studied at GTSM @ Merchtem and graduated in Industrial Sciences',
  }, {
    location: '',
    date: 'August 2013',
    title: 'Drivers License cat. B',
    smallTitle: '',
    description: 'Drivers license @ age of 18 - cat. B',
  }, {
    location: 'KuLeuven, campus Gent',
    date: '2013 - 2016',
    title: 'Master of Science',
    smallTitle: 'Academic bachelor',
    description: 'Studied at KuLeuven in order to graduate in Master of Science bachelor.',
  }, {
    location: 'KuLeuven, campus Gent',
    date: 'June 2017',
    title: 'Master of Science EL/ICT technology',
    smallTitle: 'Specialisation: ICT',
    description: 'Studied at KuLeuven and graduated as Industrial engineer, Master of Sciences ICT.',
  }
];
