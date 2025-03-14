import Question from '../../models/question_model.mjs'
import Result from '../../models/result_model.mjs'
import Course from '../../models/course_model.mjs'
import Student from '../../models/user_model.mjs'
import QuestionType from '../../models/question_type_model.mjs'


export const getTestQuestions = async (req, res) => {
    try {
        // Define the types
        const questionTypes = await QuestionType.find();

        // Fetch questions with required limits
        const questions = await Promise.all([
            Question.aggregate([{ $match: { questionType: questionTypes[0].type } }, { $sample: { size: 10 } }]),
            Question.aggregate([{ $match: { questionType: questionTypes[1].type } }, { $sample: { size: 5 } }]),
            Question.aggregate([{ $match: { questionType: questionTypes[2].type } }, { $sample: { size: 5 } }])
        ]);

        // Flatten the array
        let allQuestions = questions.flat();

        // Shuffle answers for each question
        allQuestions = allQuestions.map(question => ({
            ...question,
            answers: question.answers.sort(() => Math.random() - 0.5) // Shuffle answers
        }));
        res.status(200).json(allQuestions)
    } catch (error) {
        console.log(error);
        res.send({ success: false, message: 'Internal server error' })
    }
}

export const createResult = async (req, res) => {
    try {
        const answerIds = req.body.result.map((res) => res.answerId);
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

        await Result.create({ ...req.body, stream: suitableStream })
        await Student.findByIdAndUpdate(req.body.studentId, { status: 'submitted' })
        res.send({ success: true })
    } catch (error) {
        console.log(error);
        res.send({ success: false, message: 'Internal server error' })
    }
}

export const getResult = async (req, res) => {
    try {
        const studentResult = await Result.findOne({ studentId: req.params.studentId });
        if (!studentResult) {
            return res.send({ success: false, message: "No results found for this student." });
        }
        const courses = await Course.find({ relatedStreams: studentResult.stream })
        res.status(200).json({ stream: studentResult.stream, courses })
    } catch (error) {
        console.log(error);
        res.send({ success: false, message: 'Internal server error' })
    }
}