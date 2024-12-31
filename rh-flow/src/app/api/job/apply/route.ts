import jobAppService from "@/app/services/jobApplication.services";
import { NextRequest } from "next/server";
import { JobApp } from "@/app/types/types";
import cloudinary from "@/app/config/cloudinary.config";

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const resume = formData.get('resume') as File;
    
    const bytes = await resume.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const fileStr = `data:${resume.type};base64,${buffer.toString('base64')}`;

    const uploadResponse = await cloudinary.uploader.upload(fileStr, {
      resource_type: 'auto',
      folder: 'resumes'
    });

    const jobApplication: JobApp = {
      userId: formData.get('userId') as string,
      jobId: formData.get('jobId') as string,
      phoneNumber: formData.get('phoneNumber') as string,
      coverLetter: formData.get('coverLetter') as string,
      resume: uploadResponse.secure_url
    };

    const createdJobApplication = await jobAppService.createJobApplication(jobApplication);

    return new Response(JSON.stringify({ message: 'Job application created successfully', jobApplication: createdJobApplication, }), { status: 200 });

  } catch (error: any) {
    console.error('Application error:', error);
    return new Response(JSON.stringify({ message: 'Application submission failed', error: error.message }), { status: 500 });
  }
}
