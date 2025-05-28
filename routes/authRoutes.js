import { Router } from "express";
import { Register } from "../controllers/authController.js";

const authRouter = Router();

authRouter.post('/register', Register)
// authRouter.post('/login', )
// authRouter.post('/logout', )

export default authRouter;