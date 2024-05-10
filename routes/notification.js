import express from "express";
import { readNotificationController } from "../controller/read_notification.js";
import { isLogin } from "../middleware/islogin.js";
import { unreadNotificationController } from "../controller/unread_notification.js";

const notificationRoute = express.Router()

notificationRoute.get("/notifications/unread", isLogin, readNotificationController)
notificationRoute.get("/notifications/:notificationId/read", isLogin, unreadNotificationController)


export default notificationRoute