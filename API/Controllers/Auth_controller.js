import User from "../Model/user_model.js";
import bcrypt from "bcryptjs";

export const signup = async(req,res,next)=>{
   console.log(req.body)
   const {username , email , password} = req.body ;
   const hashpassword = bcrypt.hashSync(password,10);
   const newuser = new User({username , email , password:hashpassword});
   try{
   await newuser.save();
    res.status(201).json({message:"user created successfully"})
   }catch (err){
    next(err)
   }


}