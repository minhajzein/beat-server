import Course from '../../models/course_model.mjs'

export const createCourse = async (req, res) => {
    try {
        const courses = await find({ name: req.body.name })
        if (courses.length > 0) return res.send({ success: false, message: 'Course already exists' })
        await Course.create(req.body)
        res.send({ success: true })
    } catch (error) {
        console.log(error);
        res.send({ success: false, message: 'Internal server error' })
    }
}

export const getAllCourses = async (req, res) => {
    try {
        const courses = await Course.find()
        res.status(200).json(courses)
    } catch (error) {
        console.log(error);
        res.send({ success: false, message: 'Internal server error' })
    }
}