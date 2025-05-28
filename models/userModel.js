import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        trim: true,
        required: true,
        maxLength: 200
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
        maxLength: 200
    },
    email: {
        type: String,
        unique: true,
        required: true,
        trim: true,
        minLenght: 5,
        maxLength: 200
    },
    password: {
        type: String,
        required: true
    }
}, {timeseries: true})

const userModel = mongoose.model("User", userSchema)

export default userModel;