import { Router } from "express";
import { deleteResponse, getAllStudents } from "../../controller/admin/student_controller.mjs";

const router = Router()

router.get('/', getAllStudents)

router.delete('/delete-response/:id', deleteResponse)



export default router