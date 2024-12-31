import React from 'react'
import JobApplication from '@/components/jobApplication';
import { Params } from '@/app/types/types';

export default async function ApplyJob({params}: Params) {

  const {id} = await params;
  const userId = '676be2d49ee5fa779c990af6';

  return (

    <div className='h-screen w-full bg-gray-50 rounded-lg shadow-lg p-8'>


        <JobApplication jobId={id} userId={userId} />

    </div>
  )
}
