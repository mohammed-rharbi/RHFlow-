import jobAppService from "@/app/services/jobApplication.services";
import { NextRequest, } from "next/server";



export async function GET(request: NextRequest) {


    try{
        const jobApplications = await jobAppService.getAllJobApplications();
        return new Response(JSON.stringify({ message: 'Job applications fetched successfully', jobApplications }), { status: 200 });

    }catch(error){
        return new Response(JSON.stringify({ message: 'Internal server error' }), { status: 500 });
    }
}

