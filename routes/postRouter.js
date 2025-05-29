import { Router } from "express";
import { CreatePost } from "../controllers/postController.js";
import authMiddleware from "../middleware/authmiddleware.js";

const postRouter = Router();

postRouter.post('/createPost', authMiddleware, CreatePost)
// postRouter.get('/getPost')
// postRouter.put('/updatePost')
// postRouter.delete('/deletePost')

export default postRouter;