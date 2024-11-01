import { Router } from "express";

const router = Router()

router.route("/login").get(loginUser)

export default router;