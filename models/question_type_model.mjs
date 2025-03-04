import mongoose from "mongoose";

const questionTypeSchema = new mongoose.Schema({
    type: {
        type: String,
        required: true,
        unique: true,
        lowercase: false
    }
}, { collation: { locale: "en", strength: 2 } })


const questionTypeModel = mongoose.model('questionType', questionTypeSchema)

export default questionTypeModel
