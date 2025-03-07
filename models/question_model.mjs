import mongoose from "mongoose";

const questionSchema = new mongoose.Schema({
    questionType: {
        type: String,
        required: true
    },
    question: {
        type: String,
        required: true,
        unique: true
    },
    answers: [{
        id: {
            type: String,
            required: true
        },
        answer: {
            type: String,
            required: true
        },
        stream: {
            type: String,
            required: true
        }
    }]
}, { timestamps: true })

const questionModel = mongoose.model('Question', questionSchema)

export default questionModel