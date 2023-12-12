import express from "express";


import mongoose  from "mongoose";
import dotenv from "dotenv"
const app = express()
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