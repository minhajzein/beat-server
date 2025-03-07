import mongoose from "mongoose";

const resultSchema = new mongoose.Schema({
    studentId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Student",
        required: true,
    },
    result: [
        {
            questionId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Question",
                required: true,
            },
            answerId: {
                type: String,
                required: true
            }
        }
    ],
    timeTook: {
        type: String,
        required: true
    }
}, { timestamps: true })

const resultModel = mongoose.model('result', resultSchema)

export default resultModel