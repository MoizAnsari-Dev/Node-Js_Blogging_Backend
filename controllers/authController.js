import userModel from "../models/userModel.js";
import bcrypt from 'bcrypt'
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config/config.js";

export const Register = async (req, res) => {
    try {
        const {firstName, lastName, email, password} = req.body;
        if (firstName === '') return res.json({message: 'First name is not empty please fill it'});
        if (lastName === '') return res.json({message: 'Last name is not empty please fill it'});
        if (email === '') return res.json({message: 'Email name is not empty please fill it'});
        if (password === '') return res.json({message: 'Password name is not empty please fill it'});
        const userExist = await userModel.findOne({email})
        if(userExist) return res.status(409).json({meaasge: "EmailID already exist please LOGIN"});

        const hashPassword = await bcrypt.hash(password, 10)
        const newUser = await userModel.create({
            firstName,
            lastName,
            email,
            password: hashPassword
        })
        const token = jwt.sign({id: newUser.id, role: newUser.role}, JWT_SECRET, {expiresIn: '1d'});
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