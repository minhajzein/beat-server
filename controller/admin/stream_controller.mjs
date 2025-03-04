import Stream from "../../models/stream_model.mjs";

export const createStream = async (req, res) => {
    try {
        const stream = await Stream.find({ stream: req.body.stream })
        if (stream.length > 0) return res.send({ success: false, message: 'Stream already exists' })
        await Stream.create(req.body)
        res.send({ success: true })
    } catch (error) {
        console.log(error)
        res.send({ success: false, message: 'Internal server error' })
    }
}


export const getAllStreams = async (req, res) => {
    try {
        const streams = await Stream.find()
        res.status(200).json(streams)
    } catch (error) {
        console.log(error);
        res.send({ success: false, message: 'Internal server error' })
    }
}