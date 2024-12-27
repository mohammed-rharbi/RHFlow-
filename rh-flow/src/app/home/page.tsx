import React from 'react';
import { Job } from '../types/types';



async function fetchJobs(): Promise<Job[]> {
  const res = await fetch('http://localhost:5000/jobs/get/all/jobs', {
    cache: 'no-store',
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch jobs, status: ${res.status}`);
  }

  return res.json();
}

export default async function Home() {
  let jobs: Job[] = [];
  try {
    jobs = await fetchJobs();
  } catch (error) {
    console.error('Error fetching jobs:', error);
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-gray-100 text-gray-800 py-12 px-6">
    <div className="max-w-screen-xl mx-auto">

      <div className="bg-white p-6 shadow-md rounded-lg mb-8">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-center text-gray-900 mb-6">Find Your Ideal Job Today</h1>
        <div className="flex justify-center items-center space-x-4">
          <input
            type="text"
            placeholder="Search for job title"
            className="w-full md:w-2/3 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg">Search</button>
        </div>
      </div>
  
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">

        <div className="lg:col-span-1 h-[500px] bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-800 mb-6">Filter Jobs</h2>
          <form className="space-y-4">
            <div className="flex flex-col">
              <label className="block text-gray-700">Job Title</label>
              <input
                type="text"
                placeholder="Search for job title"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
  
            <div className="flex flex-col">
              <label className="block text-gray-700">Location</label>
              <input
                type="text"
                placeholder="Enter location"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
  
            <div className="flex flex-col">
              <label className="block text-gray-700">Experience Level</label>
              <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500">
                <option value="">Select Experience</option>
                <option value="Junior">Junior</option>
                <option value="Mid">Mid</option>
                <option value="Senior">Senior</option>
              </select>
            </div>
  
            <div className="flex flex-col">
              <label className="block text-gray-700">Employment Type</label>
              <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500">
                <option value="">Select Employment Type</option>
                <option value="Full-time">Full-time</option>
                <option value="Part-time">Part-time</option>
                <option value="Contract">Contract</option>
              </select>
            </div>
  
            <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-lg mt-4">
              Apply Filters
            </button>
          </form>
        </div>
  
        <div className="grid grid-cols-1 lg:col-span-3  gap-8">
        {jobs.length > 0 ? (
          jobs.map((job) => (
            <div
              key={job._id}
              className="group relative bg-white w-full rounded-lg shadow-lg overflow-hidden border border-gray-200 hover:shadow-2xl transition-all duration-300"
            >
        <div className="flex items-center p-6 space-x-4">

          <img
            src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXkLQRkPy03NXdPr4r5P13fjCy5wBZqrQIJA&s'}
            alt={job.companyName}
            className="w-16 h-16 object-cover rounded-full"
          />
          <div className="flex flex-col space-y-2">
            <h3 className="text-2xl font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors">
              {job.title}
            </h3>
            <p className="text-gray-600 text-sm font-medium">
              <span className="font-bold text-gray-800">{job.companyName}</span> - {job.location}
            </p>
            <p className="text-gray-500 text-sm">
              <span className="font-bold">Skills:</span> {job.skills.join(', ')}
            </p>
            <p className="text-gray-500 text-sm">
              <span className="font-bold">Employment Type:</span> {job.employmentType}
            </p>
            <p className="text-gray-500 text-sm">
              <span className="font-bold">Experience:</span> {job.experience}
            </p>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 bg-indigo-100 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button className="w-full text-white bg-indigo-600 hover:bg-indigo-700 py-2 rounded-lg text-sm font-medium">
            View Details
          </button>
        </div>
      </div>
    ))
  ) : (
    <div className="text-center text-gray-500 col-span-1">
      <p className="bg-gray-100 inline-block px-6 py-3 rounded-lg shadow-sm">
        No jobs found. Check back soon!
      </p>
    </div>
  )}
</div>

      </div>
    </div>
  </div>
  
  
  );
  
}
