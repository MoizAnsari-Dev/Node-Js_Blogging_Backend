import express, { urlencoded } from "express";
import { limiter, PORT } from "./config/config.js";
import cookieParsor from 'cookie-parser'
import cors from 'cors'
import connectDB from "./config/db.js";
import errorMiddleware from "./middleware/errorMiddleware.js";
import authRouter from "./routes/authRoutes.js";
import postRouter from "./routes/postRouter.js";

const app = express();

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cookieParsor())

app.use(limiter)
app.use(errorMiddleware)
app.use('/api', authRouter)
app.use('/api', postRouter)


app.listen(PORT, async () => {
    await connectDB();
    console.log(`Server is LIVE at ${PORT}`)
})