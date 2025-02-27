import { Router } from "express";
import { createQuestionType, getAllQuestionTypes } from "../../controller/admin/question_type_controller.mjs";
import { createStream, getAllStreams } from "../../controller/admin/stream_controller.mjs";
import { createCourse, getAllCourses } from "../../controller/admin/course_controller.mjs";
import { createQuestion, getAllQuestions } from "../../controller/admin/question_controller.mjs";

const router = Router()


// Questions
router.route('/questions')
    .get(getAllQuestions)
    .post(createQuestion)

// Question Types
router.route('/question-types')
    .post(createQuestionType)
    .get(getAllQuestionTypes)

// Streams
router.route('/streams')
    .post(createStream)
    .get(getAllStreams)

// Courses
router.route('/courses')
    .post(createCourse)
    .get(getAllCourses)


export default router