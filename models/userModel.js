import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        trim: true,
        required: [true, 'first name can not be empty'],
        maxLength: 200
    },
    lastName: {
        type: String,
        required: [true, 'Please enter the last name'],
        trim: true,
        maxLength: 200
    },
    email: {
        type: String,
        unique: true,
        required: [true, 'Email is required'],
        trim: true,
        minLenght: 5,
        maxLength: 200
    },
    password: {
        type: String,
        required: [true, 'Password can not be empty']
    }
}, {timeseries: true})

const userModel = mongoose.model("User", userSchema)

export default userModel;