export interface Book {
  id: string;
  title: string;
  author: string;
  subject: string;
  cover: string;
  description: string;
}

export const books: Book[] = [
  {
    id: '1',
    title: 'Computer Networks',
    author: 'Andrew S. Tanenbaum',
    subject: 'Computer Networks',
    cover: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=600',
    description:
      'The classic textbook for understanding computer networks. Covers all fundamental concepts with real-world examples and case studies.',
  },
  {
    id: '2',
    title: 'Data Communications and Networking',
    author: 'Behrouz A. Forouzan',
    subject: 'Computer Networks',
    cover: 'https://images.pexels.com/photos/2908984/pexels-photo-2908984.jpeg?auto=compress&cs=tinysrgb&w=600',
    description:
      'Comprehensive coverage of data communications and networking concepts with excellent diagrams and explanations.',
  },
  {
    id: '3',
    title: 'Computer Networking: A Top-Down Approach',
    author: 'James F. Kurose and Keith W. Ross',
    subject: 'Computer Networks',
    cover: 'https://images.pexels.com/photos/4114722/pexels-photo-4114722.jpeg?auto=compress&cs=tinysrgb&w=600',
    description:
      'Modern approach to networking with emphasis on Internet protocols and applications. Excellent for GATE preparation.',
  },
  {
    id: '4',
    title: 'Introduction to the Theory of Computation',
    author: 'Michael Sipser',
    subject: 'Theory of Computation',
    cover: 'https://images.pexels.com/photos/590493/pexels-photo-590493.jpeg?auto=compress&cs=tinysrgb&w=600',
    description:
      'The definitive text on theory of computation. Clear explanations of automata, computability, and complexity theory.',
  },
  {
    id: '5',
    title: 'Theory of Computer Science',
    author: 'K.L.P. Mishra and N. Chandrasekaran',
    subject: 'Theory of Computation',
    cover: 'https://images.pexels.com/photos/1370295/pexels-photo-1370295.jpeg?auto=compress&cs=tinysrgb&w=600',
    description:
      'Excellent book for GATE preparation covering automata theory, formal languages, and computability in detail.',
  },
  {
    id: '6',
    title: 'Introduction to Automata Theory, Languages, and Computation',
    author: 'John E. Hopcroft, Rajeev Motwani, and Jeffrey D. Ullman',
    subject: 'Theory of Computation',
    cover: 'https://images.pexels.com/photos/4132935/pexels-photo-4132935.jpeg?auto=compress&cs=tinysrgb&w=600',
    description:
      'Classic textbook on automata theory with comprehensive coverage of all fundamental concepts.',
  },
  {
    id: '7',
    title: 'Compilers: Principles, Techniques, and Tools',
    author: 'Alfred V. Aho, Monica S. Lam, Ravi Sethi, and Jeffrey D. Ullman',
    subject: 'Compiler Design',
    cover: 'https://images.pexels.com/photos/2908984/pexels-photo-2908984.jpeg?auto=compress&cs=tinysrgb&w=600',
    description:
      'The Dragon Book - the most comprehensive reference on compiler design. Essential for serious students.',
  },
  {
    id: '8',
    title: 'Modern Compiler Implementation in C',
    author: 'Andrew W. Appel',
    subject: 'Compiler Design',
    cover: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=600',
    description:
      'Practical approach to compiler construction with implementation details and code examples.',
  },
  {
    id: '9',
    title: 'Engineering a Compiler',
    author: 'Keith Cooper and Linda Torczon',
    subject: 'Compiler Design',
    cover: 'https://images.pexels.com/photos/4114722/pexels-photo-4114722.jpeg?auto=compress&cs=tinysrgb&w=600',
    description:
      'Modern treatment of compiler design with emphasis on optimization techniques and practical aspects.',
  },
];
