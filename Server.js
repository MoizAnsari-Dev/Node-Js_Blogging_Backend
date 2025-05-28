import express, { urlencoded } from "express";
import dotenv from "dotenv";
import { PORT } from "./config/config.js";
import cookieParsor from 'cookie-parser'
import cors from 'cors'
import connectDB from "./config/db.js";
import errorMiddleware from "./middleware/errorMiddleware.js";

const app = express();
dotenv.config();

app.use(cors({
    origin: "",
    credentials: true
    
}))
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cookieParsor())

app.use(errorMiddleware)



app.listen(PORT, async () => {
    await connectDB();
    console.log(`Server is LIVE at ${PORT}`)
})