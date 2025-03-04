import mongoose from "mongoose";

const streamSchema = new mongoose.Schema({
    stream: {
        type: String,
        required: true,
        unique: true,
        lowercase: false
    }
}, { collation: { locale: "en", strength: 2 } })


const streamModel = mongoose.model('Stream', streamSchema)

export default streamModel