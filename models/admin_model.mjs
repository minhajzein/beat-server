
import mongoose from 'mongoose'


const adminSchema = new mongoose.Schema({
    email: {
        type: String,
        trim: true,
        required: true
    },
    password: {
        type: String,
        trim: true,
        required: true
    }
})

const adminModel = mongoose.model("admin", adminSchema)
export default adminModel