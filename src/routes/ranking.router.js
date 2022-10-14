import express from "express";
import * as rankingController from "../controllers/getRanking.controller.js";

const router = express.Router();

router.get("/ranking", rankingController.getRanking);

export default router;