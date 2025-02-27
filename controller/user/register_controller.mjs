import Student from '../../models/user_model.mjs'


export const register = async (req, res) => {
    try {
        const student = await Student.create(req.body)
        res.send({ success: true, studentId: student._id })
    } catch (error) {
        console.log(error);
    }
}