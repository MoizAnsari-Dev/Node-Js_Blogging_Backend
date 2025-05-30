import postModel from "../models/postModel.js";
import userModel from "../models/userModel.js";

export const CreatePost = async (req, res) => {
  try {
    const { title, content, auther, status, tags, likes, comments } = req.body;
    if (!title) return res.json({ message: "Please enter the title" });
    if (!content) return res.json({ message: "Please fill the content" });
    // if(!auther) return res.json({message: "Something went wrong with AutherID"})

    const newPost = await postModel.create({
      title,
      content,
      auther: req.user.id,
      status,
      tags,
      likes,
      comments,
    });

    res.status(201).json({
      Post: newPost,
    });
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
};

export const GetPost = async (req, res) => {
  try {
    const posts = await postModel
      .find({ status: "draft" })
      .populate("auther", "firstName");
    if (!posts) return res.json({ message: "No post found" });

    res.json({
      GetPost: posts,
    });
  } catch (error) {
    res.status(401).json({
      message: error.message,
    });
  }
};

export const LikePost = async (req, res) => {
  try {
    console.log(req.params.idPost);

    const post = await postModel.findById(req.params.idPost);
    if (!post) return res.json({ message: "No like posts found" });

    if (post.likes.includes(req.user.id)) {
      return res.status(400).json({ message: "Post already liked" });
    }

    post.likes.push(req.user.id);
    await post.save();
    res.json(post.likes);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const CommentPost = async (req, res) => {
  try {
    const post = await postModel.findById(req.params.idPost);
    if (!post) return res.json({ message: "No comment found" });

    post.comments.push({
      user: req.user.id,
      text: req.body.text,
    });
    await post.save();

    res.status(201).json({
      newComment: post.comments,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const userPost = async (req, res) => {
  try {
    const { id, firstName, lastName } = req.user;
    if (!id) return res.json({ message: "can not find user Id" });

    const findPost = await postModel.find({ auther: id });
    if (!findPost) return res.json({ message: "User has NO posts" });
    console.log(findPost.length);

    res.json({
      firstName: firstName,
      lastName: lastName,
      totalPosts: findPost.length,
      data: findPost,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const deleteUserPost = async (req, res) => {
  try {
    const { id } = req.user;
    if (!id) return res.json({ message: "can not find user Id" });

    const findPost = await postModel.find({ auther: id })
    
    if (!findPost) return res.json({ message: "User has NO posts" });
    console.log(req.params.postId);
    
    const deletePost = await postModel.findByIdAndDelete(req.params.postId);
    if (!deletePost) return res.json({ message: "Can not find post with this Id" });

    res.json({
      success: 'Post is deleted',
      totalPostsPresent: findPost.length,
      deletedPost: deletePost
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
