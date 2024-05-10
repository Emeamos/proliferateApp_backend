import express from "express";
import dotenv from "dotenv";
import dbConnect from "./config/dbConnect.js";
import userRoute from "./routes/user.js";
import subjectRoute from "./routes/subject.js";
import tutorRoute from "./routes/tutor.js";
import classRoute from "./routes/class.js";
import searchRouter from "./routes/search.js";
import bodyparser from "body-parser";
import cors from "cors";
import notificationRoute from "./routes/notification.js";

dotenv.config({path:'./.env'});


const app = express();




dbConnect();


 app.use
      cors({
       credentials: true,
      origin: true,
       allowedHeaders: ["Origin", "X-Requested-With", "Content", "Accept", "Content-Type", "Authorization"],
      methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"]
   }) ;



app.use(express.json());

app.use(bodyparser.urlencoded({ extended : true}))

  app.use("/api/user", userRoute);
  app.use("/api/subject", subjectRoute);
  app.use("/api/tutor", tutorRoute);
  app.use("/api/classes", classRoute);
  app.use("/api/search", searchRouter);
  app.use("/api/notification", notificationRoute)



const PORT = process.env.PORT || 7000
app.listen(PORT,console.log(`Server is running at ${PORT}`))