import { BookOpen, Target, Users, Heart } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-linear-to-r from-blue-600 to-purple-600 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">About Exambuddy</h1>
          <p className="text-xl text-blue-100">
            Your trusted companion for GATE CS preparation
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="bg-white rounded-xl shadow-lg p-8 md:p-12 mb-12">
          <div className="flex items-center justify-center mb-8">
            <BookOpen className="h-16 w-16 text-blue-600" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            Our Mission
          </h2>
          <p className="text-lg text-gray-700 mb-4 leading-relaxed">
            Exambuddy is dedicated to providing free, high-quality study resources for
            GATE Computer Science aspirants. We believe that quality education should be
            accessible to everyone, regardless of their financial background.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Our mission is to help students excel in their GATE CS examination by
            providing comprehensive study materials, practice problems, and expert
            guidance, completely free of cost.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex items-center justify-center mb-6">
              <Target className="h-12 w-12 text-purple-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
              Our Focus
            </h3>
            <p className="text-gray-700 leading-relaxed">
              We focus exclusively on three core subjects that form the foundation of
              Computer Science: Computer Networks, Theory of Computation, and Compiler
              Design. This focused approach allows us to provide in-depth, high-quality
              content for these crucial subjects.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex items-center justify-center mb-6">
              <Users className="h-12 w-12 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
              Who We Serve
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Exambuddy is designed for GATE CS aspirants who want to strengthen their
              understanding of core Computer Science subjects. Whether you are a
              beginner starting your preparation or an advanced student looking for
              practice materials, we have resources for everyone.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
          <div className="flex items-center justify-center mb-8">
            <Heart className="h-16 w-16 text-red-500" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            What You Will Find Here
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border-l-4 border-blue-600 pl-4">
              <h4 className="font-bold text-lg text-gray-900 mb-2">
                Comprehensive Notes
              </h4>
              <p className="text-gray-700">
                Complete study notes, short notes, and last-day revision materials for
                all three subjects.
              </p>
            </div>

            <div className="border-l-4 border-purple-600 pl-4">
              <h4 className="font-bold text-lg text-gray-900 mb-2">
                Practice Problems
              </h4>
              <p className="text-gray-700">
                Daily Practice Problems (DPP) sets to strengthen your problem-solving
                skills.
              </p>
            </div>

            <div className="border-l-4 border-blue-600 pl-4">
              <h4 className="font-bold text-lg text-gray-900 mb-2">
                Previous Year Questions
              </h4>
              <p className="text-gray-700">
                Topic-wise and year-wise previous year GATE questions with detailed
                solutions.
              </p>
            </div>

            <div className="border-l-4 border-purple-600 pl-4">
              <h4 className="font-bold text-lg text-gray-900 mb-2">Expert Guidance</h4>
              <p className="text-gray-700">
                Strategic blogs and tips from experts to help you prepare effectively.
              </p>
            </div>

            <div className="border-l-4 border-blue-600 pl-4">
              <h4 className="font-bold text-lg text-gray-900 mb-2">
                Book Recommendations
              </h4>
              <p className="text-gray-700">
                Curated list of best textbooks for each subject to guide your
                preparation.
              </p>
            </div>

            <div className="border-l-4 border-purple-600 pl-4">
              <h4 className="font-bold text-lg text-gray-900 mb-2">
                Timely Notifications
              </h4>
              <p className="text-gray-700">
                Stay updated with exam dates, job postings, and important announcements.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg text-gray-700 mb-6">
            Join thousands of GATE CS aspirants who trust Exambuddy for their
            preparation.
          </p>
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-bold text-lg hover:opacity-90 transition-opacity">
            Start Your Journey Today
          </button>
        </div>
      </div>
    </div>
  );
}
