import mongoose from "mongoose";

const questionTypeSchema = new mongoose.Schema({
    type: {
        type: String,
        required: true,
        unique: true
    }
})


const questionTypeModel = mongoose.model('questionType', questionTypeSchema)

export default questionTypeModel
