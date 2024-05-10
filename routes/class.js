import express from "express";
import { enrollController } from "../controller/enroll.js";
import { rescheduleController } from "../controller/reschedule.js";
import { isLogin } from "../middleware/islogin.js";

//app.post('/classes/:classId/enroll',

//app.put('/classes/:classId/reschedule', 

// Route to fetch unread notifications for a user
//app.get('/notifications/:userId/unread',

// Route to mark notification as read
//app.put('/notifications/:notificationId/read',

const classRoute = express.Router()

classRoute.post("/:subjectId/:tutorId/enroll",isLogin, enrollController)
classRoute.put("/:classId/reschedule", isLogin, rescheduleController)


export default classRoute