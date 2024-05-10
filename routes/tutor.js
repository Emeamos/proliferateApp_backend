import express from "express";
import { createTutorController } from "../controller/addtutor.js";
// import { isLogin } from "../middleware/islogin.js";
import { upload } from "../utilis/multer.js";



const tutorRoute = express.Router()

tutorRoute.post("/:subjectId",upload.single('image'), createTutorController);



export default tutorRoute