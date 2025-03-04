import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        lowercase: false
    },
    relatedStreams: {
        type: Array,
        required: true
    }
}, { collation: { locale: "en", strength: 2 } })

const courseModel = mongoose.model('Course', courseSchema)

export default courseModel