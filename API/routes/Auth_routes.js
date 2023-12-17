import express from "express"
import { signup } from "../Controllers/Auth_controller.js";

const router = express.Router();

router.post("/signup",signup)

export default router 