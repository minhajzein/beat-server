import Course from '../../models/course_model.mjs'

export const createCourse = async (req, res) => {
    try {
        await Course.create(req.body)
        res.send({ success: true })
    } catch (error) {
        console.log(error);
    }
}

export const getAllCourses = async (req, res) => {
    try {
        const courses = await Course.find()
        res.status(200).json(courses)
    } catch (error) {
        console.log(error);
    }
}