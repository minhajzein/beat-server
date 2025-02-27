import Question from '../../models/question_model.mjs'
import Result from '../../models/result_model.mjs'
import Course from '../../models/course_model.mjs'


export const getTestQuestions = async (req, res) => {
    try {
        const questions = await Question.find()
        res.status(200).json(questions)
    } catch (error) {
        console.log(error);
    }
}

export const createResult = async (req, res) => {
    try {
        await Result.create(req.body)
        res.send({ success: true })
    } catch (error) {
        console.log(error);
    }
}

export const getResult = async (req, res) => {
    try {
        const studentResult = await Result.findOne({ studentId: req.params.studentId });
        if (!studentResult) {
            return res.send({ success: false, message: "No results found for this student." });
        }
        const answerIds = studentResult.result.map((res) => res.answerId);
        const questions = await Question.find({
            "answers.id": { $in: answerIds },
        });

        let streamCount = {};

        questions.forEach((question) => {
            question.answers.forEach((answer) => {
                if (answerIds.includes(answer.id)) {
                    streamCount[answer.stream] = (streamCount[answer.stream] || 0) + 1;
                }
            });
        });

        // 3. Find the most frequent stream
        const suitableStream = Object.keys(streamCount).reduce((a, b) =>
            streamCount[a] > streamCount[b] ? a : b
        );
        const courses = await Course.find({ relatedStreams: suitableStream })
        res.status(200).json({ stream: suitableStream, courses })
    } catch (error) {
        console.log(error);
    }
}