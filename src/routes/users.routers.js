import express from "express";
import * as userController from "../controllers/login.controller.js";
import validateNewUser from "../middlewares/user.middleware.js";
import validateUser from "../middlewares/accessAccount.middleware.js";

const router = express.Router();

router.post("/signup", validateNewUser, userController.registerNewUser);
router.post("/signin", validateUser, userController.accessAccount);

export default router;
