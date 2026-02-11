import React from 'react';

export default function ErrorPage() {
  return (
    <div className="min-h-screen bg-linear-to-br from-red-50 via-white to-orange-50 flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        {/* Error icon */}
        <div className="mb-8">
          <div className="w-24 h-24 mx-auto bg-red-100 rounded-full flex items-center justify-center">
            <svg 
              className="w-12 h-12 text-red-600" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" 
              />
            </svg>
          </div>
        </div>

        {/* Error message */}
        <h1 className="text-6xl font-bold text-gray-800 mb-4">Oops!</h1>
        <h2 className="text-2xl font-semibold text-gray-700 mb-3">Something went wrong</h2>
        <p className="text-gray-600 mb-8">
          We encountered an unexpected error. Don&apos;t worry, it&apos;s not your fault. 
          Please try again or go back to the previous page.
        </p>
      </div>
    </div>
  );
}