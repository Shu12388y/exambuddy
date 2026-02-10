export interface Resource {
  title: string;
  fileSize: string;
  description?: string;
}

export interface Subject {
  slug: string;
  name: string;
  description: string;
  icon: string;
  notes: Resource[];
  dpp: Resource[];
  pyq: Resource[];
  cheatSheets: Resource[];
}

export const subjects: Subject[] = [
  {
    slug: 'computer-networks',
    name: 'Computer Networks',
    description:
      'Master the fundamentals of computer networking including OSI model, TCP/IP, routing protocols, and network security.',
    icon: '🌐',
    notes: [
      {
        title: 'Complete Notes',
        fileSize: '15.2 MB',
        description: 'Comprehensive notes covering all topics',
      },
      {
        title: 'Short Notes',
        fileSize: '5.8 MB',
        description: 'Quick revision notes for all chapters',
      },
      {
        title: 'Last Day Revision',
        fileSize: '2.1 MB',
        description: 'Quick revision notes for exam day',
      },
    ],
    dpp: [
      {
        title: 'DPP Set 1 - Network Layer',
        fileSize: '1.5 MB',
        description: '50 practice problems',
      },
      {
        title: 'DPP Set 2 - Transport Layer',
        fileSize: '1.3 MB',
        description: '45 practice problems',
      },
      {
        title: 'DPP Set 3 - Application Layer',
        fileSize: '1.2 MB',
        description: '40 practice problems',
      },
    ],
    pyq: [
      {
        title: 'Topic-wise PYQ',
        fileSize: '8.5 MB',
        description: '10 years questions organized by topics',
      },
      {
        title: 'Year-wise PYQ (2014-2024)',
        fileSize: '6.2 MB',
        description: 'All previous year questions with solutions',
      },
    ],
    cheatSheets: [
      {
        title: 'Formula Sheet',
        fileSize: '850 KB',
        description: 'All important formulas at one place',
      },
      {
        title: 'Important Concepts',
        fileSize: '1.1 MB',
        description: 'Key concepts and definitions',
      },
    ],
  },
  {
    slug: 'theory-of-computation',
    name: 'Theory of Computation',
    description:
      'Explore automata theory, formal languages, computability, and complexity theory essential for GATE CS.',
    icon: '🔤',
    notes: [
      {
        title: 'Complete Notes',
        fileSize: '12.5 MB',
        description: 'Comprehensive notes covering all topics',
      },
      {
        title: 'Short Notes',
        fileSize: '4.8 MB',
        description: 'Quick revision notes for all chapters',
      },
      {
        title: 'Last Day Revision',
        fileSize: '1.8 MB',
        description: 'Quick revision notes for exam day',
      },
    ],
    dpp: [
      {
        title: 'DPP Set 1 - Finite Automata',
        fileSize: '1.2 MB',
        description: '45 practice problems',
      },
      {
        title: 'DPP Set 2 - Context-Free Languages',
        fileSize: '1.4 MB',
        description: '50 practice problems',
      },
      {
        title: 'DPP Set 3 - Turing Machines',
        fileSize: '1.1 MB',
        description: '40 practice problems',
      },
    ],
    pyq: [
      {
        title: 'Topic-wise PYQ',
        fileSize: '7.8 MB',
        description: '10 years questions organized by topics',
      },
      {
        title: 'Year-wise PYQ (2014-2024)',
        fileSize: '5.5 MB',
        description: 'All previous year questions with solutions',
      },
    ],
    cheatSheets: [
      {
        title: 'Formula Sheet',
        fileSize: '650 KB',
        description: 'All important formulas and theorems',
      },
      {
        title: 'Important Concepts',
        fileSize: '950 KB',
        description: 'Key concepts and closure properties',
      },
    ],
  },
  {
    slug: 'compiler-design',
    name: 'Compiler Design',
    description:
      'Learn lexical analysis, syntax analysis, semantic analysis, and code optimization techniques for building compilers.',
    icon: '⚙️',
    notes: [
      {
        title: 'Complete Notes',
        fileSize: '14.2 MB',
        description: 'Comprehensive notes covering all topics',
      },
      {
        title: 'Short Notes',
        fileSize: '5.2 MB',
        description: 'Quick revision notes for all chapters',
      },
      {
        title: 'Last Day Revision',
        fileSize: '2.0 MB',
        description: 'Quick revision notes for exam day',
      },
    ],
    dpp: [
      {
        title: 'DPP Set 1 - Lexical Analysis',
        fileSize: '1.3 MB',
        description: '45 practice problems',
      },
      {
        title: 'DPP Set 2 - Parsing',
        fileSize: '1.5 MB',
        description: '50 practice problems',
      },
      {
        title: 'DPP Set 3 - Code Optimization',
        fileSize: '1.2 MB',
        description: '40 practice problems',
      },
    ],
    pyq: [
      {
        title: 'Topic-wise PYQ',
        fileSize: '8.2 MB',
        description: '10 years questions organized by topics',
      },
      {
        title: 'Year-wise PYQ (2014-2024)',
        fileSize: '6.0 MB',
        description: 'All previous year questions with solutions',
      },
    ],
    cheatSheets: [
      {
        title: 'Formula Sheet',
        fileSize: '750 KB',
        description: 'All important algorithms and formulas',
      },
      {
        title: 'Important Concepts',
        fileSize: '1.0 MB',
        description: 'Key concepts and parsing techniques',
      },
    ],
  },
];
