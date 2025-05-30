import { Router } from "express";
import { CommentPost, CreatePost, deleteUserPost, GetPost, LikePost, userPost } from "../controllers/postController.js";
import authMiddleware from "../middleware/authmiddleware.js";

const postRouter = Router();

postRouter.post('/createPost', authMiddleware, CreatePost)


postRouter.get('/getPost', authMiddleware, GetPost)

postRouter.post('/:idPost/likes', authMiddleware, LikePost)
postRouter.get('/:idPost/likes', authMiddleware, LikePost)

postRouter.post('/:idPost/comments', authMiddleware, CommentPost)
postRouter.get('/userposts', authMiddleware, userPost)
postRouter.delete('/:postId/deleteposts', authMiddleware, deleteUserPost)

export default postRouter;