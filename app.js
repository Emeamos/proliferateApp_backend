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

dotenv.config({path:'./.env'});


const app = express();
//app.use(cors());



dbConnect();
// log requests

 app.use
      cors({
       credentials: true,
      origin: true,
       allowedHeaders: ["Origin", "X-Requested-With", "Content", "Accept", "Content-Type", "Authorization"],
      methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"]
   }) ;

// app.use(morgan('tiny'));

app.use(express.json());

app.use(bodyparser.urlencoded({ extended : true}))

  app.use("/api/v1/user", userRoute);
  app.use("/api/v1/subject", subjectRoute);
  app.use("/api/v1/tutor", tutorRoute);
  app.use("/api/v1/classes", classRoute);
  app.use("/api/v1/search", searchRouter);
//   app.use("/api/v1/essentials", essentialsRoute);


const PORT = process.env.PORT || 7000
app.listen(PORT,console.log(`Server is running at ${PORT}`))