import mongoose from "mongoose";


export const connectDB = async () => {

    try {

        const conn = await mongoose.connect(process.env.MONGO_URI!);
        console.log(`MongoDB Connected: ${conn.connection.host}`);

        const db = mongoose.connection;

        db.on('error', console.error.bind(console, 'MongoDB connection error:'));
        db.once('open', () => {
            console.log('MongoDB connected successfully');
        });

    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}
