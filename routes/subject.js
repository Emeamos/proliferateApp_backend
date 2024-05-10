import express from "express";
import { createSubjectController } from "../controller/addsubject.js";
// import { isLogin } from "../middleware/islogin.js";


const subjectRoute = express.Router()

subjectRoute.post("/", createSubjectController)



export default subjectRoute