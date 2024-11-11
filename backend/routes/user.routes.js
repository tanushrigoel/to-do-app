import { Router } from "express";
import { loginUser, registerUser, showToDos } from "../controllers/user.controllers";
const router = Router()

router.route("/login").get(loginUser)

router.route("/dashboard").get(showToDos)

router.route("/register").post(registerUser)

export default router;