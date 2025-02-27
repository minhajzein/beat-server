import mongoose from "mongoose";

const streamSchema = new mongoose.Schema({
    stream: {
        type: String,
        required: true
    }
})


const streamModel = mongoose.model('Stream', streamSchema)

export default streamModel