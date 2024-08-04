
import express from "express"
import { configDotenv } from "dotenv"
import connectDB from "./database/db.js"
import mongoose from "mongoose"

configDotenv()
const port = process.env.PORT
const app=express()

connectDB()


app.listen(port,()=>console.log(`Server is running at port ${port}`))