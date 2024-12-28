'use client';

import React, { useState } from 'react';
import { Job } from '../app/types/types';
import FilterJobs from '@/components/filter.jobs';
import JobsCard from '@/components/jobsCard';
import Link from 'next/link';
import JobHeader from '@/components/jobHeader';

export default function HomeJobs({ jobs }: { jobs: Job[] }) {
  const [filteredJobs, setFilteredJobs] = useState<Job[]>(jobs);

  const handleFilter = (filters: { search: string; location: string; experience: string; employment: string }) => {
    const { search, location, experience, employment } = filters;

    const filtered = jobs.filter((job) => {
      return (
        (!search || job.title.toLowerCase().includes(search.toLowerCase())) &&
        (!location || job.location.toLowerCase().includes(location.toLowerCase())) &&
        (!experience || job.experience === experience) &&
        (!employment || job.employmentType === employment)
      );
    });

    setFilteredJobs(filtered);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-gray-100 text-gray-800 py-12 px-6">
      <div className="max-w-screen-xl mx-auto">
        <JobHeader />
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">

          <FilterJobs onFilter={handleFilter} />

          <div className="grid grid-cols-1 lg:col-span-3 gap-8">
            {filteredJobs.length > 0 ? (
              filteredJobs.map((job) => (
                <div
                  key={job._id}
                  className="group relative bg-white w-full rounded-lg shadow-lg overflow-hidden border border-gray-200 hover:shadow-2xl transition-all duration-300"
                >
                  <JobsCard {...job} />

                  <div className="absolute bottom-0 left-0 right-0 bg-indigo-100 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">

                    <Link href={`/jobInfo/${job._id}`}>
                    <button 
                    className="w-full text-white bg-indigo-600 hover:bg-indigo-700 py-2 rounded-lg text-sm font-medium"
                    >
                      View Details
                    </button>
                    </Link>
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
