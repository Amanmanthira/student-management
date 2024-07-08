import Usermodel from "../models/user.js"

const register = async (req,res)=>{
    try{
        const {firstName,lastName,email,password} = req.body
        const exitUser = await Usermodel.findOne({firstName:firstName,lastName:lastName})
        if(exitUser){
            return res.status(401).json({success:false, message:"user already registered"})
        }
        const newUser = new Usermodel({
            firstName,lastName,password,email

        })

        await newUser.save()
        res.status(200).json({newUser})
    }catch (error) {
        res.status(500).json({success: false, message:'internal server error'})
        console.log(error)
    }
}

export {register} 