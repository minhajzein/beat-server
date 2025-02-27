import { Router } from "express";
import { getAllStudents } from "../../controller/admin/student_controller.mjs";

const router = Router()

router.get('/', getAllStudents)


export default router