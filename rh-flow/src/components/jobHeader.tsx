import React from 'react';

export default function JobHeader() {
  return (
    <div className="bg-none overflow-hidden">
      <header className="container mx-auto px-6 py-12 text-center text-white relative z-10">
        <h1 className="text-5xl sm:text-7xl font-extrabold text-black leading-tight tracking-tight mb-6 drop-shadow-lg">
          Find Your Dream Job
        </h1>
        <p className="text-lg sm:text-2xl font-medium text-black mb-8">
          Discover opportunities that align with your passions and skills
        </p>
      </header>

      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-72 h-72 bg-pink-500 opacity-30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500 opacity-30 rounded-full blur-3xl"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-600 opacity-40 rounded-full blur-3xl"></div>
      </div>
    </div>
  );
}
