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

export const GetPost = async (req, res) => {
    try {
        const posts = await postModel.find({status: "draft"}).populate('auther', "firstName",)
        if(!posts) return res.json({message: "No post found"})
                
        res.json({
            GetPost: posts
        })
    } catch (error) {
        res.status(401).json({
            message: error.message
        })
    }
}

export const LikePost = async (req, res) => {
    try {
        const post = await postModel.findById(req.params.id);
        if (!post) return res.json({message: 'No like posts found'});

        if(post.likes.includes(req.user.id)) {
            return res.status(400).json({message: 'Post already liked'})
        }

        post.likes.push(req.user.id)
        await post.save();
        res.json(post.likes)
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}