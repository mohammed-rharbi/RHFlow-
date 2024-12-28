import React from 'react';
import { Job } from '@/app/types/types';

export default function JobInfoCard({ job }: { job: Job }) {
  return (
    <div className="max-w-4xl mx-auto w-full mt-6 bg-white shadow rounded-lg">
      <div className="p-6 border-b">

        <div className="flex items-start justify-between">

          <div className="flex items-center gap-4">
            <img
              src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXkLQRkPy03NXdPr4r5P13fjCy5wBZqrQIJA&s'}
              alt={job.companyName}
              className="w-16 h-16 object-contain rounded-lg"
            />
            <div>
              <h2 className="text-xl font-bold text-gray-800">{job.title}</h2>
              <p className="text-gray-600">{job.companyName}</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
          <div className="flex items-center gap-2">
            <span className="text-gray-500">Type:</span>
            <p className="text-gray-800 font-medium">{job.employmentType}</p>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-gray-500">Location:</span>
            <p className="text-gray-800 font-medium">{job.location}</p>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-gray-500">Experience:</span>
            <p className="text-gray-800 font-medium">{job.experience}</p>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-gray-500">Salary:</span>
            <p className="text-gray-800 font-medium">{}</p>
          </div>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">Job Description</h3>
        <p className="text-gray-600">{job.description || 'No description provided.'}</p>
      </div>

      <div className="p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">Required Skills</h3>
        <div className="flex flex-wrap gap-2">
          {job.skills.map((skill, index) => (
            <span
              key={index}
              className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div className="p-6 border-t flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <button className="w-full sm:w-auto px-6 py-3 bg-yellow-500 text-white font-semibold rounded-lg hover:bg-yellow-600 transition">
          Apply Now
        </button>
        <button className="w-full sm:w-auto px-6 py-3 bg-gray-100 text-gray-800 font-semibold rounded-lg hover:bg-gray-200 transition border">
          Save
        </button>
      </div>
    </div>
  );
}
