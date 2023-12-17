import express from "express";
const app = express()

import mongoose  from "mongoose";
import dotenv from "dotenv"
import Userrouter from './routes/User_routes.js';


dotenv.config();
mongoose.connect(process.env.MONGODB).then(()=> {
   console.log("Connected to MongoDb")
}).catch((err)=> {
   console.log("you are not connected")
   console.error(err)
})

const port = 3000;

app.listen(3000 , ()=> {
    console.log("app is listening to the port " + port);
})

app.use("/api/user",Userrouter);
