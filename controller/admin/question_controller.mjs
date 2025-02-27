import Question from '../../models/question_model.mjs'

export const createQuestion = async (req, res) => {
    try {
        console.log(req.body);

        await Question.create({
            question: req.body.question,
            questionType: req.body.questionType,
            answers: req.body.answers
        });
        res.send({ success: true })
    } catch (error) {
        console.log(error);
    }
}

export const getAllQuestions = async (req, res) => {
    try {
        const questions = await Question.find()
        res.status(200).json(questions)
    } catch (error) {
        console.log(error);
    }
}