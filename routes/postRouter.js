import { Router } from "express";
import { CreatePost, GetPost } from "../controllers/postController.js";
import authMiddleware from "../middleware/authmiddleware.js";

const postRouter = Router();

postRouter.post('/createPost', authMiddleware, CreatePost)
postRouter.get('/getPost', authMiddleware, GetPost)
// postRouter.put('/updatePost')
// postRouter.delete('/deletePost')

export default postRouter;