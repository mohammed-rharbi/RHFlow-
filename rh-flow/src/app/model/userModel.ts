import mongoose from "mongoose";

export interface IUser {
    _id?: mongoose.Types.ObjectId;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    role: string;
}


const userSchema = new mongoose.Schema({

    firstName: {
        type: String,
        required: true,
    },

    lastName: {
        type: String,
        required: true,
    },

    email: {
        type: String,
        required: true,
        unique: true,
    },

    password: {
        type: String,
        required: true,
    },

    role: { 
        type: String,
        required: true,
        enum: ['admin', 'user'],
        default: 'user',
    },
})

const User = mongoose.models.User || mongoose.model('User', userSchema);

export default User;



