export interface Blog {
  slug: string;
  title: string;
  category: string;
  image: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
}

export const blogs: Blog[] = [
  {
    slug: 'complete-guide-gate-cs-preparation',
    title: 'Complete Guide to GATE CS Preparation Strategy',
    category: 'Strategy',
    image: 'https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=800',
    excerpt: 'Master the art of GATE CS preparation with our comprehensive strategy guide covering all core subjects.',
    content: `
      <h2>Introduction</h2>
      <p>Preparing for GATE CS requires a structured approach and dedication. This guide will help you navigate through the preparation journey.</p>

      <h2>Core Subjects Focus</h2>
      <p>Focus on mastering the three core subjects: Computer Networks, Theory of Computation, and Compiler Design.</p>

      <h2>Study Plan</h2>
      <p>Create a realistic study plan that covers all topics systematically. Allocate more time to weak areas while maintaining strong subjects.</p>

      <h2>Practice Strategy</h2>
      <p>Regular practice is key. Solve previous year questions and take mock tests to assess your preparation level.</p>
    `,
    date: 'Jan 15, 2024',
    author: 'Exambuddy Team',
  },
  {
    slug: 'computer-networks-important-topics',
    title: 'Most Important Topics in Computer Networks for GATE',
    category: 'Computer Networks',
    image: 'https://images.pexels.com/photos/2881229/pexels-photo-2881229.jpeg?auto=compress&cs=tinysrgb&w=800',
    excerpt: 'Discover the high-weightage topics in Computer Networks that frequently appear in GATE CS exam.',
    content: `
      <h2>OSI Model and TCP/IP</h2>
      <p>Understanding the layers and their functions is fundamental to Computer Networks.</p>

      <h2>Routing Algorithms</h2>
      <p>Distance Vector and Link State routing algorithms are frequently tested topics.</p>

      <h2>Transport Layer Protocols</h2>
      <p>TCP and UDP protocols, their features, and differences are crucial for GATE preparation.</p>

      <h2>Network Security</h2>
      <p>Basic concepts of encryption, authentication, and secure communication protocols.</p>
    `,
    date: 'Jan 20, 2024',
    author: 'Rajesh Kumar',
  },
  {
    slug: 'theory-of-computation-basics',
    title: 'Theory of Computation: Building Strong Foundations',
    category: 'TOC',
    image: 'https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=800',
    excerpt: 'Learn the fundamental concepts of TOC that form the basis for advanced topics in GATE CS.',
    content: `
      <h2>Finite Automata</h2>
      <p>Master DFA, NFA, and their conversions. These form the foundation of TOC.</p>

      <h2>Regular Languages</h2>
      <p>Regular expressions, regular grammars, and pumping lemma are essential topics.</p>

      <h2>Context-Free Grammars</h2>
      <p>Understanding CFG, parse trees, and derivations is crucial for compiler design as well.</p>

      <h2>Turing Machines</h2>
      <p>The theoretical foundation of computation and decidability.</p>
    `,
    date: 'Jan 25, 2024',
    author: 'Priya Sharma',
  },
  {
    slug: 'compiler-design-interview-questions',
    title: 'Top Compiler Design Questions for GATE and Interviews',
    category: 'Compiler Design',
    image: 'https://images.pexels.com/photos/276452/pexels-photo-276452.jpeg?auto=compress&cs=tinysrgb&w=800',
    excerpt: 'A curated list of important compiler design questions that are frequently asked in GATE and technical interviews.',
    content: `
      <h2>Lexical Analysis</h2>
      <p>Tokenization, regular expressions, and finite automata implementation.</p>

      <h2>Syntax Analysis</h2>
      <p>Top-down and bottom-up parsing techniques are heavily tested.</p>

      <h2>Semantic Analysis</h2>
      <p>Type checking, symbol tables, and intermediate code generation.</p>

      <h2>Code Optimization</h2>
      <p>Various optimization techniques and their applications.</p>
    `,
    date: 'Feb 1, 2024',
    author: 'Amit Patel',
  },
  {
    slug: 'last-month-revision-strategy',
    title: 'Last Month Revision Strategy for GATE CS',
    category: 'Strategy',
    image: 'https://images.pexels.com/photos/5905857/pexels-photo-5905857.jpeg?auto=compress&cs=tinysrgb&w=800',
    excerpt: 'Effective revision techniques to maximize your score in the final month before GATE CS exam.',
    content: `
      <h2>Focus on Revision</h2>
      <p>Stop learning new topics. Focus entirely on revision and practice.</p>

      <h2>Mock Tests</h2>
      <p>Take full-length mock tests regularly to simulate exam conditions.</p>

      <h2>Formula Sheets</h2>
      <p>Create and revise formula sheets for quick last-minute revision.</p>

      <h2>Previous Year Questions</h2>
      <p>Solve PYQs multiple times to understand question patterns.</p>
    `,
    date: 'Feb 5, 2024',
    author: 'Exambuddy Team',
  },
  {
    slug: 'networking-protocols-explained',
    title: 'Essential Networking Protocols Every CS Student Must Know',
    category: 'Computer Networks',
    image: 'https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg?auto=compress&cs=tinysrgb&w=800',
    excerpt: 'A comprehensive overview of networking protocols that are essential for GATE CS preparation.',
    content: `
      <h2>HTTP and HTTPS</h2>
      <p>Application layer protocols for web communication.</p>

      <h2>DNS</h2>
      <p>Domain Name System and its working mechanism.</p>

      <h2>DHCP</h2>
      <p>Dynamic Host Configuration Protocol for IP address assignment.</p>

      <h2>ARP and RARP</h2>
      <p>Address Resolution Protocols for mapping between IP and MAC addresses.</p>
    `,
    date: 'Feb 10, 2024',
    author: 'Neha Singh',
  },
];
