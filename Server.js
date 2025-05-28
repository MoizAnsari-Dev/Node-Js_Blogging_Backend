import express from "express";
import dotenv from "dotenv";
import { PORT } from "./config/config.js";

const app = express();
dotenv.config();

app.get('/', (req, res) => {
    try {
        res.json({
            message: "Hii comming from the root directory"
        })
    } catch (error) {
        res.status(401).json(
            error
        )
    }
})


app.listen(PORT, () => {
    console.log(`Server is LIVE at ${PORT}`)
})