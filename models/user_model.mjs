import mongoose from "mongoose";

const userModel = new mongoose.Schema({
    firstName: {
        type: String,
        trim: true,
    },
    surname: {
        type: String,
        trim: true,
        required: true
    },
    email: {
        type: String,
        trim: true,
        unique: true,
        required: true
    },
    phone: {
        type: String,
        trim: true,
        unique: true,
        required: true
    },
    highestQualification: {
        type: String,
        unique: false,
        required: true
    },
    status: {
        type: String,
    }
})

const User = mongoose.model('user', userModel)
export default User