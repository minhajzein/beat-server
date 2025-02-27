import { Router } from "express";
import { login, logout, refresh } from "../../controller/admin/auth_controller.mjs";

const router = Router()

router.post('/login', login)
router.get('/refresh', refresh)
router.get('/logout', logout)


export default router