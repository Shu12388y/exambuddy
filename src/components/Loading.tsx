import React from 'react';

export default function LoadingPage() {
  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center">
      <div className="text-center">
        {/* Animated spinner */}
        <div className="relative w-24 h-24 mx-auto mb-8">
          <div className="absolute top-0 left-0 w-full h-full border-4 border-blue-200 rounded-full"></div>
          <div className="absolute top-0 left-0 w-full h-full border-4 border-blue-600 rounded-full border-t-transparent animate-spin"></div>
        </div>
        
        {/* Loading text */}
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Loading</h2>
        <p className="text-gray-600">Please wait while we prepare everything...</p>
        
        {/* Animated dots */}
        <div className="flex justify-center gap-2 mt-6">
          <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
          <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
          <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
        </div>
      </div>
    </div>
  );
}