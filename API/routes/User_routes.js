import express from "express";
import { usertest } from "../Controllers/user_controllers.js";

const router = express.Router();
router.get("/test",usertest)
export default router ;

