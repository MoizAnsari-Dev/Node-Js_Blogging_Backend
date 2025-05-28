import { Router } from "express";
import { Login, Logout, Register } from "../controllers/authController.js";
import authMiddleware from "../middleware/authmiddleware.js";

const authRouter = Router();

authRouter.post('/register', Register)
authRouter.post('/login', Login)
authRouter.post('/logout', authMiddleware, Logout)

export default authRouter;