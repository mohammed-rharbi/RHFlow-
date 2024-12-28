import { Job , Params } from '@/app/types/types';
import JobInfoCard from '@/components/jobDetails';
import AddsCard from '@/components/addsCard';


async function fetchJob(id: string): Promise<Job> {
  const res = await fetch(`http://localhost:5000/jobs/get/job/${id}`, {
    cache: 'no-store',   });

  if (!res.ok) {
    throw new Error(`Failed to fetch job with ID: ${id}`);
  }

  return res.json();
}   

export default async function JobDetails({ params }: Params) {
  const { id } = params;

  let job: Job | null = null;
  try {
    job = await fetchJob(id);
  } catch (error) {
    console.error('Error fetching job:', error);
  }

  if (!job) {
    return <div>Job not found.</div>;
  }

  return (

<div className="h-full w-full bg-gray-50 rounded-lg shadow-lg p-8">
  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

    <div className="bg-white h-full rounded-lg shadow-md p-6 flex flex-col justify-between lg:col-span-2">
      <JobInfoCard job={job} />
    </div>

    <div className="bg-white rounded-lg shadow-md p-6 flex flex-col justify-between">
      <AddsCard />
    </div>
  </div>
</div>

  );
}
