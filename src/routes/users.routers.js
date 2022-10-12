import express from "express";
import * as userController from "../controllers/login.controller.js";
import validateNewUser from "../middlewares/user.middleware.js";

const router = express.Router();

router.post("/signup", validateNewUser, userController.RegisterNewUser);

export default router;
