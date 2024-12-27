import userService from "@/app/services/userService";
import { NextRequest } from "next/server";

export const POST = async (req: NextRequest) => {
    try {
        
        const requestBody = await req.json();
        
        const response = await userService.registerUser(requestBody);
        return new Response(JSON.stringify({ message: 'User registered successfully', user: response }), { status: 201 });
        
        
    } catch (error: any) {
        console.error('Registration error:', error);
        return new Response(JSON.stringify({message: 'Registration failed',error: error.message }),{ status: 500 }
        );
    }
}
