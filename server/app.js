import "dotenv/config";
import express from "express";
import cors from "cors";
import {config} from "dotenv"
import cookieParser from "cookie-parser";
import fileUpload from "express-fileupload";
import messageRouter from "./router/messageRouter.js" ;
import {errorMiddleware} from './middlewares/errorMiddleware.js';
import userRouter from './router/userRouter.js';
import  appointmentRouter  from "./router/appointmentRouter.js";
import prescriptionRoutes from "./router/prescriptionRoutes.js";
import authRoutes from "./router/DashboardRoutes.js";
import appointmentRoutes from "./router/appointmentRouter.js";

const app = express();
config({path: ".env"});


app.use(cors({
    origin: function (origin, callback) {
        const allowedOrigins = [process.env.FRONTEND_URL, process.env.FRONTEND_URL1];
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error("Not allowed by CORS"));
        }
    },
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"]
}));


app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: "./tmp/",
})
);

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use("/api/prescriptions", prescriptionRoutes);
app.use("/api/v1/message", messageRouter);
app.use("/api/v1/user", userRouter);
app.use("/api/v1/appointment", appointmentRouter);
app.use("/api/v1/prescriptions", prescriptionRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/v1/appointment", appointmentRoutes);

app.get("/", (req, res) => {
    res.send("Server is running...");
  });

  dbConnection();

app.use(errorMiddleware);

export default app;
