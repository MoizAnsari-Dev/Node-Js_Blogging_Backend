import postModel from "../models/postModel.js"

export const CreatePost = async (req, res) => {
    try {
        const {title, content, auther, status, tags, likes, comments} = req.body;
        if(!title) return res.json({message: "Please enter the title"})
        if(!content) return res.json({message: "Please fill the content"})
        // if(!auther) return res.json({message: "Something went wrong with AutherID"})
        
        const newPost = await postModel.create({
            title,
            content,
            auther: req.user.id,
            status,
            tags,
            likes,
            comments
        });

        res.status(201).json({
            Post: newPost,
        })
    } catch (error) {
        res.status(404).json({
            message: error.message
        })
    }
}