import { Router } from "express";
import { deleteResponse, getAllStudents, getProfile } from "../../controller/admin/student_controller.mjs";

const router = Router()

router.get('/', getAllStudents)

router.delete('/delete-response/:id', deleteResponse)

router.get('/:id', getProfile)



export default router