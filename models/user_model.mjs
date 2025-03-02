import mongoose from "mongoose";

const userModel = new mongoose.Schema({
    fullName: {
        type: String,
        trim: true,
        required: true
    },
    phone: {
        type: String,
        trim: true,
        required: true
    },
    status: {
        type: String,
    },
    highestQualification: {
        type: String,
        required: true
    },
    district: {
        type: String,
        required: true
    }
}, { timestamps: true })

const User = mongoose.model('student', userModel)

export default User