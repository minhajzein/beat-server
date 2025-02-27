import Student from '../../models/user_model.mjs'


export const getAllStudents = async (req, res) => {
    try {
        const students = await Student.find()
        res.status(200).json(students)
    } catch (error) {
        console.log(error);
    }
}