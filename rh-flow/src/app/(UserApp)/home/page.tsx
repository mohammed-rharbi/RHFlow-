import { Job } from '../../types/types';
import HomeJobs from '@/components/home.jobs';

async function fetchJobs(): Promise<Job[]> {
  const res = await fetch('http://localhost:5000/jobs/get/all/jobs', { cache: 'no-store' });

  if (!res.ok) {
    throw new Error(`Failed to fetch jobs, status: ${res.status}`);
  }

  return res.json();
}

export default async function Home() {
  const jobs = await fetchJobs();
  return <HomeJobs jobs={jobs} />;
}
