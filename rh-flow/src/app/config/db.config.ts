import mongoose from "mongoose";


export const connectDB = async () => {

    try {

        if (!process.env.MONGO_URI) {
            throw new Error('Add Mongo URI to .env.local')
          }
          
        const conn = await mongoose.connect(process.env.MONGO_URI!);
        console.log(`MongoDB Connected: ${conn.connection.host}`);

    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}
