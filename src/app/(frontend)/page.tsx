import Link from 'next/link';
import { ArrowRight, BookOpen, Bell } from 'lucide-react';
import BlogSection from '@/sections/BlogSection';
import NotificationSection from '@/sections/NotificationSection';
import ResourceSection from '@/sections/ResourceSection';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-linear-to-br from-blue-600 to-purple-600 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Free GATE Resources
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100">
            Blogs • Study Resources • Notes • PYQs • Important Updates & Notifications
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/resources"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-bold text-lg hover:bg-blue-50 transition-colors inline-flex items-center"
            >
              Explore Resources
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              href="/notifications"
              className="bg-purple-700 text-white px-8 py-3 rounded-lg font-bold text-lg hover:bg-purple-800 transition-colors inline-flex items-center border-2 border-white"
            >
              Latest Notifications
              <Bell className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>


    {/* Notification Section */}
      <NotificationSection/>


      {/* Blogs Section */}
      <BlogSection/>



      {/* Resource Section */}
      <ResourceSection/>

      <section className="py-16 px-4 bg-linear-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <BookOpen className="h-16 w-16 text-white mx-auto mb-6" />
          <h2 className="text-4xl font-bold text-white mb-4">
            Join our community for daily GATE resources
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Get access to free study materials, practice tests, and expert guidance
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-bold text-lg hover:bg-blue-50 transition-colors">
            Join Now
          </button>
        </div>
      </section>
    </div>
  );
}
