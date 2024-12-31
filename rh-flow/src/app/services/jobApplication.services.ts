import jobAppRepository from "../repository/jobApp.Repository";
import { JobApp } from "../types/types";
import cloudinary from "../config/cloudinary.config";

class JobAppService {


    async createJobApplication(jobApplication: JobApp): Promise<JobApp> {
        if (!jobApplication.resume) {
          throw new Error('Resume is required');
        }
      
        let resumeUrl: string;
        if (Buffer.isBuffer(jobApplication.resume)) {
          const fileStr = `data:application/pdf;base64,${jobApplication.resume.toString('base64')}`;
          const uploadResponse = await cloudinary.uploader.upload(fileStr, {
            resource_type: 'auto',
            folder: 'resumes',
          });
          resumeUrl = uploadResponse.secure_url;
        } else {
          resumeUrl = jobApplication.resume as string; 
        }
      
        const finalJobApplication = {
          ...jobApplication,
          resume: resumeUrl,
        };
      
        return await jobAppRepository.createJobApplication(finalJobApplication);
      }
      

    async getJobApplicationsByUserId(userId: string): Promise<JobApp[]> {

        if (!userId) {
            throw new Error('User ID is required');
        }
        return await jobAppRepository.getJobApplicationsByUserId(userId);
    }

    async getJobApplicationsByJobId(jobId: string): Promise<JobApp[]> {
        if (!jobId) {
            throw new Error('Job ID is required');
        }
        return await jobAppRepository.getJobApplicationsByJobId(jobId);
    }

    async getAllJobApplications(): Promise<JobApp[]> {
        return await jobAppRepository.getAllJobApplications();
    }

    async updateJobApplication(jobId: string, jobApplication: JobApp): Promise<JobApp> {
        return await jobAppRepository.updateJobApplication(jobId, jobApplication);
    }

    async deleteJobApplication(jobId: string): Promise<void> {
        return await jobAppRepository.deleteJobApplication(jobId);
    }
    
}

const jobAppService = new JobAppService();
export default jobAppService;

