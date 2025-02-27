import Stream from "../../models/stream_model.mjs";

export const createStream = async (req, res) => {
    try {
        await Stream.create(req.body)
        res.send({ success: true })
    } catch (error) {
        console.log(error);
    }
}


export const getAllStreams = async (req, res) => {
    try {
        const streams = await Stream.find()
        res.status(200).json(streams)
    } catch (error) {
        console.log(error);
    }
}