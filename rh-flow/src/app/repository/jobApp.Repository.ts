import JobApplication from "../model/jobApplication";
import { JobApp } from "../types/types";



class JobAppRepository {


    async createJobApplication(jobApplication: JobApp): Promise<JobApp> {
        const newJobApplication = new JobApplication(jobApplication);
        await newJobApplication.save();
        return newJobApplication;
    }

    async getJobApplicationsByUserId(userId: string): Promise<JobApp[]> {
        const jobApplications = await JobApplication.find({ userId });
        return jobApplications;
    }

    async getJobApplicationsByJobId(jobId: string): Promise<JobApp[]> {
        const jobApplications = await JobApplication.find({ jobId });
        return jobApplications;
    }

    async updateJobApplication(jobId: string, jobApplication: JobApp): Promise<JobApp> {
        const jobApp = await JobApplication.findByIdAndUpdate(jobId, jobApplication, { new: true });
        return jobApp;
    }

    async deleteJobApplication(jobId: string): Promise<void> {
        await JobApplication.findByIdAndDelete(jobId);
    }

    async getJobApplicationsByStatus(status: string): Promise<JobApp[]> {
        const jobApplications = await JobApplication.find({ status });
        return jobApplications;
    }

    async updateJobApplicationStatus(jobId: string, status: string): Promise<JobApp> {
        const jobApplication = await JobApplication.findByIdAndUpdate(jobId, { status }, { new: true });
        return jobApplication;
    }

    async getAllJobApplications(): Promise<JobApp[]> {
        const jobApplications = await JobApplication.find();
        return jobApplications;
    }

}

const jobAppRepository = new JobAppRepository();
export default jobAppRepository;
