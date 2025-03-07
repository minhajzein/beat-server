import Student from '../../models/user_model.mjs'
import Result from '../../models/result_model.mjs'


export const getAllStudents = async (req, res) => {
    try {
        const students = await Student.find()
        res.status(200).json(students)
    } catch (error) {
        console.log(error);
        res.send({ success: false, message: 'Internal server error' })
    }
}

export const deleteResponse = async (req, res) => {
    try {
        await Student.findByIdAndDelete(req.params.id)
        await Result.findByIdAndDelete(req.params.id)
        res.send({ success: true, message: 'Response deleted successfully' })
    } catch (error) {
        console.log(error);
        res.send({ success: false, message: 'Internal server error' })
    }
}

export const getProfile = async (req, res) => {
    try {
        const student = await Student.findOne({ _id: req.params.id })
        const result = await Result.find({ studentId: req.params.id })
            .populate("result.questionId", "question answers");

        if (!result || result.length === 0) return res.send({ success: false, message: "No results found" });

        res.send({ success: true, result, student })
    } catch (error) {
        console.log(error);
        res.send({ success: false, message: 'Internal server error' })
    }
} 