import Link from 'next/link';
import { BookOpen, Mail, Github, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <BookOpen className="h-8 w-8 text-blue-500" />
              <span className="text-2xl font-bold text-white">Exambuddy</span>
            </div>
            <p className="text-gray-400 mb-4">
              Free resources for GATE CS aspirants. Focus on Computer Networks,
              Theory of Computation, and Compiler Design.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-500 transition-colors">
                <Mail className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-blue-500 transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-blue-500 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/blogs" className="hover:text-blue-500 transition-colors">
                  Blogs
                </Link>
              </li>
              <li>
                <Link href="/resources" className="hover:text-blue-500 transition-colors">
                  Resources
                </Link>
              </li>
              <li>
                <Link href="/books" className="hover:text-blue-500 transition-colors">
                  Books
                </Link>
              </li>
              <li>
                <Link href="/notifications" className="hover:text-blue-500 transition-colors">
                  Notifications
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Subjects</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/resources/computer-networks"
                  className="hover:text-blue-500 transition-colors"
                >
                  Computer Networks
                </Link>
              </li>
              <li>
                <Link
                  href="/resources/theory-of-computation"
                  className="hover:text-blue-500 transition-colors"
                >
                  Theory of Computation
                </Link>
              </li>
              <li>
                <Link
                  href="/resources/compiler-design"
                  className="hover:text-blue-500 transition-colors"
                >
                  Compiler Design
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Exambuddy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
