import mongoose from "mongoose";

const jobApplicationSchema = new mongoose.Schema({

    jobId: {    
        type: String,
        required: true,
    },

    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',    
        required: true,
    },

    status: {
        type: String,
        required: true,
        enum: ['applied', 'accepted', 'rejected'],
        default: 'applied',
    },

    phoneNumber: {
        type: String,
        required: true,
    },

    resume: {
        type: String,
        required: true,
    },

    coverLetter: {
        type: String,
        required: true,
    },  
     
} , {
    timestamps: true
})

const JobApplication = mongoose.models.JobApplication || mongoose.model('JobApplication', jobApplicationSchema);

export default JobApplication;



