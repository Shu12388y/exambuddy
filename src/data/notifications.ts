export interface Notification {
  id: string;
  title: string;
  date: string;
  description: string;
  importantDate?: string;
}

export const notifications: Notification[] = [
  {
    id: '1',
    title: 'GATE 2025 Registration Open',
    date: 'Aug 15, 2024',
    description:
      'Indian Institute of Technology (IIT) has announced the registration dates for GATE 2025. Interested candidates can apply through the official GATE website. The exam will be conducted in February 2025.',
    importantDate: 'Sep 30, 2024',
  },
  {
    id: '2',
    title: 'ISRO Scientist Recruitment 2024',
    date: 'Aug 20, 2024',
    description:
      'Indian Space Research Organisation (ISRO) invites applications for Scientist/Engineer positions. GATE qualified candidates are encouraged to apply. This is an excellent opportunity for CS graduates.',
    importantDate: 'Sep 15, 2024',
  },
  {
    id: '3',
    title: 'BARC Recruitment Through GATE',
    date: 'Aug 25, 2024',
    description:
      'Bhabha Atomic Research Centre (BARC) announces recruitment for Scientific Officer positions. GATE CS score is mandatory. Attractive salary package and research opportunities available.',
    importantDate: 'Oct 5, 2024',
  },
  {
    id: '4',
    title: 'IIT Bombay M.Tech Admissions 2025',
    date: 'Sep 1, 2024',
    description:
      'IIT Bombay has released the notification for M.Tech admissions for the academic year 2025-26. Applications are invited from GATE qualified candidates in Computer Science and related disciplines.',
    importantDate: 'Oct 15, 2024',
  },
  {
    id: '5',
    title: 'PSU Recruitment Calendar 2025',
    date: 'Sep 5, 2024',
    description:
      'List of Public Sector Undertakings (PSUs) recruiting through GATE 2025 has been announced. Major companies include ONGC, NTPC, BHEL, IOCL, and many more with excellent compensation packages.',
    importantDate: 'Nov 1, 2024',
  },
  {
    id: '6',
    title: 'DRDO Entry Scheme for CS Engineers',
    date: 'Sep 10, 2024',
    description:
      'Defence Research and Development Organisation (DRDO) announces entry scheme for Computer Science engineers through GATE. Work on cutting-edge defense technology projects with competitive benefits.',
    importantDate: 'Oct 20, 2024',
  },
  {
    id: '7',
    title: 'IISc Bangalore PhD Admissions',
    date: 'Sep 15, 2024',
    description:
      'Indian Institute of Science (IISc) Bangalore invites applications for PhD programs in Computer Science. GATE qualified candidates will receive preference. Fellowship and research grants available.',
    importantDate: 'Nov 10, 2024',
  },
  {
    id: '8',
    title: 'IIIT Admissions 2025',
    date: 'Sep 18, 2024',
    description:
      'Indian Institutes of Information Technology (IIITs) announce M.Tech and MS admissions for 2025. GATE CS score is mandatory. Multiple specializations available in Computer Science domain.',
    importantDate: 'Nov 5, 2024',
  },
];
