import Question from '../../models/question_model.mjs'

export const createQuestion = async (req, res) => {
    try {
        const { question, questionType, answers } = req.body
        await Question.create({
            question: question,
            questionType: questionType,
            answers: answers
        });
        res.send({ success: true })
    } catch (error) {
        console.log(error);
        res.send({ success: false, message: 'Internal server error' })
    }
}

export const updateQuestion = async (req, res) => {
    try {
        const { id } = req.params
        const { question, questionType, answers } = req.body
        await Question.findByIdAndUpdate(id, {
            question: question,
            questionType: questionType,
            answers: answers
        })
        res.send({ success: true, message: 'Question Updated Successfully' })
    } catch (error) {
        console.log(error);
        res.send({ success: false, message: 'Internal server error' })
    }
}

export const deleteQuestion = async (req, res) => {
    try {
        await Question.findByIdAndDelete(req.params.id)
        res.send({ success: true, message: 'Question Deleted Successfully' })
    } catch (error) {
        console.log(error);
        res.send({ success: false, message: 'Internal server error' })
    }
}

export const getQuestionById = async (req, res) => {
    try {
        const question = await Question.findById(req.params.id)
        res.json(question)
    } catch (error) {
        console.log(error);
        res.send({ success: false, message: 'Internal server error' })
    }
}

export const getAllQuestions = async (req, res) => {
    try {
        const questions = await Question.find().sort({ createdAt: -1 })
        res.status(200).json(questions)
    } catch (error) {
        console.log(error);
        res.send({ success: false, message: 'Internal server error' })
    }
}