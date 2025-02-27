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
    answers: {
        type: Array,
        required: true
    }
})

const questionModel = mongoose.model('Question', questionSchema)

export default questionModel