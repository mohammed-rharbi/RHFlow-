import jwt from 'jsonwebtoken';
import { NextRequest } from 'next/server';

export const authMiddleware = (req: NextRequest) => {
    const token = req.headers.get('Authorization')?.split(' ')[1];

    if (!token) {
        return new Response(JSON.stringify({ message: 'Unauthorized' }), { status: 401 });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET!);
        return decoded;
    } catch (error) {
        return new Response(JSON.stringify({ message: 'Invalid token' }), { status: 401 });
    }

    
}

