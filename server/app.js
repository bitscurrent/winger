import express from "express"
import cookieParser from "cookie-parser";
const app = express()


// Middlewares
app.use(express.json({ limit: "16kb" })); // To receive json data from body
app.use(express.urlencoded({ extended: true, limit: "16kb" })); // To receive data from URL
app.use(cookieParser());

// Routes import
import userRouter from "./routers/user.route.js"

// routes declaration
app.use("/api/v1/users", userRouter);

export {app}