import userRepository  from "../repository/userRepository";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { Users , LoginUser } from "../types/types";



class UserService {

    
    async registerUser(user: Users) {
        try {
            
            const existingUser = await userRepository.getUserByEmail(user.email);
            if(existingUser) {
                throw new Error('User already exists');
            }

            const hashedPassword = await bcrypt.hash(user.password, 10);
            const newUser = await userRepository.createUser({
                ...user,
                password: hashedPassword
            });

            console.log('User created:', newUser);
            return newUser;

        } catch (error: any) {
            console.error('Registration service error:', error);
            throw error;
        }
    }

    async loginUser(userInfo : LoginUser) {

        const user = await userRepository.getUserByEmail(userInfo.email);
        if(!user) {
            throw new Error('User not found');
        }

        const isPasswordValid = await bcrypt.compare(userInfo.password, user.password);
        if(!isPasswordValid) {
            throw new Error('Invalid password');
        }

        const token = jwt.sign(
            { id: user._id, email: user.email, role: user.role },
            process.env.JWT_SECRET!,
            { expiresIn: '1d' }
        );

        return { user, token };

    }

    async getAllUsers() {
        const users = await userRepository.getAllUsers();
        if(!users) {
            throw new Error('No users found');
        }
        return users;
    }

    async getUserById(id: string) {
        const user = await userRepository.getUserById(id);
        if(!user) {
            throw new Error('User not found');
        }
        return user;
    }

    async updateUser(id: string, user: Users) {
        const updatedUser = await userRepository.updateUser(id, user);
        if(!updatedUser) {
            throw new Error('User not found');
        }
        return updatedUser;
    }

    async deleteUser(id: string) {
        
        await userRepository.deleteUser(id);
    }


}


const userService = new UserService();
export default userService;
