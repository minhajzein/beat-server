
import QuestionType from '../../models/question_type_model.mjs'

export const createQuestionType = async (req, res) => {
    try {
        await QuestionType.create(req.body)
        res.send({ success: true, message: 'Question Type Created Successfully' })
    } catch (error) {
        console.log(error);
        res.send({ success: false, message: 'Internal server error' })
    }
}


export const getAllQuestionTypes = async (req, res) => {
    try {
        const questionTypes = await QuestionType.find()
        res.status(200).json(questionTypes)
    } catch (error) {
        console.log(error);
        res.send({ success: false, message: 'Internal server error' })
    }
}