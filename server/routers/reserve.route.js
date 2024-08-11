import express, { Router } from "express";
import { availableSeat } from "../controllers/reserve.controller.js";



// import verifyJWT from "../middlewares/verifyJWT.middleware";

const router = Router();



router.route("/seat").get( availableSeat);


export default router;