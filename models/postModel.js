import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    title: {type: String, required: true},
    content: {type: String, required: true},
    auther: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
    status: {type: String, enum: ['draft', 'published'], default: 'draft'},
    tags: [{type: String}],
    likes: [{type: mongoose.Schema.Types.ObjectId, ref: "user"}],
    comments: [{
        user: {type: mongoose.Schema.Types.ObjectId, ref: "User"},
        text: String,
        createdAt: {type: Date, default: Date.now}
    }]
}, {timestamps: true});

const postModel = mongoose.model("Post", postSchema);

export default postModel;