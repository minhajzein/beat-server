import Course from '../../models/course_model.mjs'

export const createCourse = async (req, res) => {
    try {
        const courses = await Course.findOne({ name: req.body.name })
        if (courses) return res.send({ success: false, message: 'Course already exists' })
        await Course.create(req.body)
        res.send({ success: true })
    } catch (error) {
        console.log(error);
        res.send({ success: false, message: 'Internal server error' })
    }
}

export const updateCourse = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, relatedStreams } = req.body;

        const existingCourse = await Course.findOne({ name, _id: { $ne: id } });
        if (existingCourse) {
            return res.send({ success: false, message: 'Course already exists' });
        }

        await Course.findByIdAndUpdate(id, {
            name,
            relatedStreams
        });

        res.send({ success: true, message: 'Course Updated Successfully' });
    } catch (error) {
        console.error(error);
        res.send({ success: false, message: 'Internal server error' });
    }
};

export const deleteCourse = async (req, res) => {
    try {
        await Course.findByIdAndDelete(req.params.id)
        res.send({ success: true, message: 'Course Deleted Successfully' })
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