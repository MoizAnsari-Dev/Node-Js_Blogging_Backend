import { Router } from "express";
import { CreatePost, GetPost, LikePost } from "../controllers/postController.js";
import authMiddleware from "../middleware/authmiddleware.js";

const postRouter = Router();

postRouter.post('/createPost', authMiddleware, CreatePost)
postRouter.get('/getPost', authMiddleware, GetPost)
postRouter.post('/:id/likes', authMiddleware, LikePost)
// postRouter.delete('/deletePost')

export default postRouter;