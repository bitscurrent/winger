
import express, { Router, Request, Response } from "express";
import {
  loginUser,
  logoutUser,
  registerUser,
} from "../controllers/user.controller";
// import verifyJWT from "../middlewares/verifyJWT.middleware";

const router = Router();


router.route("/login").post( loginUser);

router.route("/logout").post( logoutUser);

router.route("/register").post( registerUser);


export default router;