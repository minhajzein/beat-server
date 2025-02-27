import { Router } from "express";
import { register } from "../../controller/user/register_controller.mjs";
import { createResult, getResult, getTestQuestions } from "../../controller/user/test_controller.mjs";

const router = Router()

router.post('/register', register)
router.get('/test-questions', getTestQuestions)
router.post('/create-result', createResult)
router.get('/result/:studentId', getResult)

export default router