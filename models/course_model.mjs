import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },

    relatedStreams: {
        type: Array,
        required: true
    }
})

const courseModel = mongoose.model('Course', courseSchema)

export default courseModel