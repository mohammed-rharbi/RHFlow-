import React from 'react';
import { JobApp } from '@/app/types/types';

const applications: JobApp[] = [
  {
    _id:'1',
    userId: '123',
    jobId: '456',
    phoneNumber: '+123456789',
    resume: 'Resume_Link.pdf',
    coverLetter: 'I am very excited to join your company...',
  },
  {
    _id: '2',
    userId: '124',
    jobId: '457',
    phoneNumber: '+987654321',
    resume: 'Resume_Link_2.pdf',
    coverLetter: 'With my experience in development, I believe...',
  },
  {
    _id: '3',
    userId: '125',
    jobId: '458',
    phoneNumber: '+192837465',
    resume: 'Resume_Link_3.pdf',
    coverLetter: 'I am confident my skills align perfectly...',
  },
];

async function fetchApplications(): Promise<JobApp[]> {
    const res = await fetch('http://localhost:3000/api/job/getAll', { cache: 'no-store' });
  
    if (!res.ok) {
      throw new Error(`Failed to fetch jobs, status: ${res.status}`);
    }
  
    return res.json();
  }

export default function Applications() {


  return (
    <div className="h-full bg-gradient-to-r from-purple-50 to-indigo-100 p-12">
      <h1 className="text-4xl font-bold text-gray-800 mb-12 text-center tracking-wide">
        Job Applications
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {applications.map((app) => (
          <div
            key={app._id}
            className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-105"
          >
            <div className="relative bg-gradient-to-r from-indigo-600 to-blue-500 p-5 rounded-t-lg text-white">
              <h2 className="text-xl font-semibold">{app.userId}</h2>
              <p className="text-sm opacity-90">{app.jobId}</p>
            </div>
            <div className="p-6">
              <div className="mb-4">
                <p className="font-medium text-gray-700">
                  <strong>Phone:</strong> {app.phoneNumber}
                </p>
              </div>
              <a
                href={typeof app.resume === 'string' ? app.resume : '#'}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-blue-600 hover:underline font-medium mb-4"
              >
                <i className="fas fa-file-alt mr-2"></i> View Resume
              </a>
              <p className="text-gray-600 italic mb-6 line-clamp-3">
                {app.coverLetter}
              </p>
              <div className="flex gap-4">
                <button className="flex-grow py-2 px-4 text-white bg-green-500 rounded-lg hover:bg-green-600 shadow-md transition duration-300">
                  Approve
                </button>
                <button className="flex-grow py-2 px-4 text-white bg-red-500 rounded-lg hover:bg-red-600 shadow-md transition duration-300">
                  Reject
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
