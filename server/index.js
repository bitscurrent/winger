
import express from "express"
import { configDotenv } from "dotenv"
import connectDB from "./database/db.js"
import mongoose from "mongoose"

import { app } from "./app.js"
import bcrypt from "bcrypt"

configDotenv()
const port = process.env.PORT


connectDB()



  

app.listen(port,()=>console.log(`Server is running at port ${port}`))