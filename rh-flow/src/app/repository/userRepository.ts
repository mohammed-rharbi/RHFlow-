import User, { IUser } from "../model/userModel";

class UserRepository {

    async createUser(user: IUser): Promise<IUser> {
        console.log(user);
        return await User.create(user);
    }

    async getUserByEmail(email: string): Promise<IUser | null> {
        return await User.findOne({ email });
    }

    async getAllUsers(): Promise<IUser[]> {
        return await User.find();
    }

    async getUserById(id: string): Promise<IUser | null> {
        return await User.findById(id);
    }

    async updateUser(id: string, user: IUser): Promise<IUser | null> {
        return await User.findByIdAndUpdate(id, user, { new: true });
    }

    async deleteUser(id: string): Promise<void> {
        await User.findByIdAndDelete(id);
    }
}

const userRepository = new UserRepository();
export default userRepository;
