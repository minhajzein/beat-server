import mongoose from "mongoose";

const resultSchema = new mongoose.Schema({
    studentId: {
        type: String,
        required: true,
    },
    result: {
        type: Array,
        required: true
    }
})

const resultModel = mongoose.model('result', resultSchema)

export default resultModel