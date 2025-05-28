import jwt from 'jsonwebtoken'
import { JWT_SECRET } from '../config/config.js';
import userModel from '../models/userModel.js';

export default async function authMiddleware(req, res, next) {
    const {token} = req.cookies;
    console.log(token);
    
    if(!token) return res.json({message: 'Access denied NO token'});
    
    try {
        const decorded = jwt.verify(token, JWT_SECRET)
        console.log(decorded);
        const user = await userModel.findById(decorded.id)
        if(!user) return res.json({message: 'Access denied NO User found'});
        req.user = user
        next()
    } catch (error) {
        res.status(401).json({
            success: false,
            message: error.message
        })
    }
}