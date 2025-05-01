import { Router } from "express";
import { createQuestionType, getAllQuestionTypes } from "../../controller/admin/question_type_controller.mjs";
import { createStream, getAllStreams } from "../../controller/admin/stream_controller.mjs";
import { createCourse, deleteCourse, getAllCourses, updateCourse } from "../../controller/admin/course_controller.mjs";
import { createQuestion, deleteQuestion, getAllQuestions, getQuestionById, updateQuestion } from "../../controller/admin/question_controller.mjs";
import { dashboard } from "../../controller/admin/home_controller.mjs";

const router = Router()

// Dashboard
router.get('/dashboard', dashboard)

// Questions
router.route('/questions')
    .get(getAllQuestions)
    .post(createQuestion)

router.route('/questions/:id')
    .get(getQuestionById)
    .put(updateQuestion)
    .delete(deleteQuestion)

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
router.route('/courses/:id')
    .put(updateCourse)
    .delete(deleteCourse)


export default router