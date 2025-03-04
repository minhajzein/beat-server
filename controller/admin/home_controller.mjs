import Student from '../../models/user_model.mjs'



export const dashboard = async (req, res) => {
    try {
        const registered = await Student.find()
        const submitted = registered.filter(stu => stu.status === 'submitted').length
        const contacted = registered.filter(stu => stu.status === 'contacted').length
        const testSkipped = registered.length - submitted
        res.send({ registered: registered.length, submitted, contacted, testSkipped })
    } catch (error) {
        console.log(error);
        res.send({ success: false, message: 'Internal server error' })
    }
}