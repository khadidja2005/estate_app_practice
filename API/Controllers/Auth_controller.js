import User from "../Model/user_model.js";
import bcrypt from "bcryptjs";
import { errorhandler } from "../utils/error.js";
import jwt from "jsonwebtoken";

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

export const signin = async(req, res, next) => {
   const {email , password}= req.body ;
   try {
    const valideUser = await User.findOne({email});
    if(!valideUser){
      return errorhandler(404, "User not Found");
    } 
    const validepassword = bcrypt.compareSync(password, valideUser.password);
    if(!validepassword) {
      return errorhandler(401 , "Wrong credential");
    }
    const token = jwt.sign({id:valideUser._id} , process.env.JWT_SECRET);
    const {password:pass , ...rest} = valideUser._doc;
    res.cookie("access_token", token , { httpOnly: true}).status(200).json(rest)
   } catch (err) {
      next(err)
   }
}