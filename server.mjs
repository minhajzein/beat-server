import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import { configDotenv } from 'dotenv'
import connectDB from './connections/database/connect_db.mjs'
import mongoose from 'mongoose'
import corsOptions from './config/cors-options.mjs'
import cookieParser from 'cookie-parser'

// routes =================================================================
import studentRouter from './routers/user/student_router.mjs'
import adminAuthRouter from './routers/admin/auth_route.mjs'
import adminStudentRoutes from './routers/admin/student_route.mjs'
import commonRouter from './routers/admin/common_route.mjs'

configDotenv()

const app = express()

connectDB(process.env.DATABASE_URL)

app.use(cookieParser())
app.use(cors(corsOptions))
app.use(morgan('dev'))
app.use(express.json({ limit: '50mb' }))
app.use(express.urlencoded({ extended: false, limit: '50mb' }))

// base paths =================================================================
app.use('/', studentRouter)
app.use('/admin', commonRouter)
app.use('/admin/auth', adminAuthRouter)
app.use('/admin/students', adminStudentRoutes)

mongoose.connection.once('open', () =>
    app.listen(process.env.PORT, () => console.log(`🌎 - Listening On http://localhost:${process.env.PORT} -🌎`))
)


export default app