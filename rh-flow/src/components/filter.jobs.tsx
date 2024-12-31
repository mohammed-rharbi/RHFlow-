'use client';

import React, { useState } from 'react';
import { FilterJobsProps } from '../app/types/types';



export default function FilterJobs({ onFilter }: FilterJobsProps) {
  const [search, setSearch] = useState('');
  const [location, setLocation] = useState('');
  const [experience, setExperience] = useState(''); 
  const [employment, setEmployment] = useState('');

  const handleFilter = () => {
    onFilter({ search, location, experience, employment });
  };

  return (
    <div className="lg:col-span-1 h-[500px] bg-white p-6 rounded-lg z-10 shadow-md">
      <h2 className="text-xl font-semibold text-gray-800 mb-6">Filter Jobs</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleFilter();
        }}
        className="space-y-4"
      >
        <div className="flex flex-col">
          <label className="block text-gray-700">Job Title</label>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search for job title"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div className="flex flex-col">
          <label className="block text-gray-700">Location</label>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Enter location"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div className="flex flex-col">
          <label className="block text-gray-700">Experience Level</label>
          <select
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option value="">Select Experience</option>
            <option value="Junior">Junior</option>
            <option value="Mid">Mid</option>
            <option value="Senior">Senior</option>
          </select>
        </div>

        <div className="flex flex-col">
          <label className="block text-gray-700">Employment Type</label>
          <select
            value={employment}
            onChange={(e) => setEmployment(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
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
  );
}
