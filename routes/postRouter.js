import { Router } from "express";
import { CommentPost, CreatePost, GetPost, LikePost } from "../controllers/postController.js";
import authMiddleware from "../middleware/authmiddleware.js";

const postRouter = Router();

postRouter.post('/createPost', authMiddleware, CreatePost)


postRouter.get('/getPost', authMiddleware, GetPost)
postRouter.post('/:idPost/likes', authMiddleware, LikePost)
postRouter.post('/:idPost/comments', authMiddleware, CommentPost)

export default postRouter;