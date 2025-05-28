import userModel from "../models/userModel";

export const Register = async (req, res) => {
    try {
        const {firstName, lastName, email, password} = req.body;
        const userExist = await userModel.findOne({email})
        if(userExist) return res.status(409).json({meaasge: "User already Exist please LOGIN"});

        const hashPassword = 
    } catch (error) {
        res.status(500).json({
            meaasge: "Server from Register"
        })
    }
}