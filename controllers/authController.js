import userModel from "../models/userModel.js";
import bcrypt from 'bcrypt'
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config/config.js";

export const Register = async (req, res) => {
    try {
        const {firstName, lastName, email, password, role} = req.body;// destructuring the request body
        if (!firstName) return res.json({message: 'First name is not empty please fill it'});// checking if firstName is empty
        if (!lastName) return res.json({message: 'Last name is not empty please fill it'});// checking if lastName is empty
        if (!email) return res.json({message: 'Email name is not empty please fill it'});// checking if email is empty
        if (!password) return res.json({message: 'Password name is not empty please fill it'});// checking if password is empty

        const userExist = await userModel.findOne({email})// checking if user already exists
        if(userExist) return res.status(409).json({meaasge: "EmailID already exist please LOGIN"});// checking if user already exists

        const hashPassword = await bcrypt.hash(password, 10)// hashing the password with bcrypt
        const newUser = await userModel.create({ // creating a new user
            firstName,
            lastName,
            email,
            password: hashPassword,
            role
        })
        const token = jwt.sign({id: newUser.id, role: newUser.role}, JWT_SECRET, {expiresIn: '1d'});// signing the token with JWT_SECRET
        res.status(201).json({
            NewRegisterUser: newUser,
            Token: token
        })
    } catch (error) {
        res.status(500).json({
            meaasge: "Server from User can not Register"
        })
    }
}

export const Login = async (req, res) => {
    try {
        const {email, password} = req.body;
        if(!email) return res.json({message: 'Provide the email'});
        if(!password) return res.json({message: 'Provide the password'});

        const user = await userModel.findOne({email});
        if(!user) return res.status(400).json({message: 'Invalid email please SIGN UP'});

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if(!isPasswordValid) return res.status(400).json({message: 'Incorrect password please check the password'});

        const token = jwt.sign({id: user._id}, JWT_SECRET, {expiresIn: '1d'})
        res.cookie('token', token)

        res.status(201).json({message: 'User loged in successfully'})
    } catch(error) {
        res.status(500).json({
            message: 'Can not login: ' + error.meaasge
        })
    }
}

export const Logout = async (req, res) => {
    try {
        const {token} = req.cookies;
        console.log(token);
        
        res.Cookie("token", null, {
            expires: new Date(Date.now())
        });
        console.log('last' + token);
        res.json({message: 'Logout User successfully'})
    } catch (error) {
        res.status(400).json({message: error.meaasge})
    }
}