import { Job } from '@/app/types/types'
import React from 'react'

export default function JobsCard({companyName, title, location, skills, employmentType, experience }: Job) {
  return (


    <div className="flex items-center p-6 space-x-4">

    <img
      src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXkLQRkPy03NXdPr4r5P13fjCy5wBZqrQIJA&s'}
      alt={companyName}
      className="w-16 h-16 object-cover rounded-full"
    />
    <div className="flex flex-col space-y-2">
      <h3 className="text-2xl font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors">
        {title}
      </h3>
      <p className="text-gray-600 text-sm font-medium">
        <span className="font-bold text-gray-800">{companyName}</span> - {location}
      </p>
      <p className="text-gray-500 text-sm">
        <span className="font-bold">Skills:</span> {skills.join(', ')}
      </p>
      <p className="text-gray-500 text-sm">
        <span className="font-bold">Employment Type:</span> {employmentType}
      </p>
      <p className="text-gray-500 text-sm">
        <span className="font-bold">Experience:</span> {experience}
      </p>
    </div>
  </div>
   
  )
}
