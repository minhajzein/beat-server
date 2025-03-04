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