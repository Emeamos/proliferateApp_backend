import express from "express";
import { userRegisterController } from "../controller/register.js";
import { userLoginController } from "../controller/login.js";
import { logoutController } from "../controller/logout.js";

const userRoute = express.Router()

userRoute.post("/register", userRegisterController)
userRoute.post("/login", userLoginController)
userRoute.post("/logout", logoutController)

export default userRoute