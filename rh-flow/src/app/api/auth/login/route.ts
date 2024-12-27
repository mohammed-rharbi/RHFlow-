import { NextRequest } from "next/server";
import userService from "@/app/services/userService";

export const POST = async (req: NextRequest) => {


    try{

        const reqBody = await req.json();
            
        const response = await userService.loginUser(reqBody);        
        return new Response(JSON.stringify({ message: 'User logged in successfully', user: response }), { status: 200 });

    } catch (error) {
        return new Response(JSON.stringify({ message: 'Internal server error' }), { status: 500 });
    }
}
