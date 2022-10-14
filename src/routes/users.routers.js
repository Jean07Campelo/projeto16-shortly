import express from "express";
import * as userController from "../controllers/login.controller.js";
import * as getUserController from  "../controllers/getUser.controller.js";
import validateNewUser from "../middlewares/user.middleware.js";
import validateUser from "../middlewares/accessAccount.middleware.js";
import validateToken from "../middlewares/token.middleware.js";

const router = express.Router();

router.post("/signup", validateNewUser, userController.registerNewUser);
router.post("/signin", validateUser, userController.accessAccount);
router.get("/users/me", validateToken, getUserController.getUser);

export default router;
