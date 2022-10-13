import express from "express";
import * as shortUrlController from "../controllers/generateShortUrl.controller.js";
import * as getUrlController from "../controllers/getUrl.controller.js";
import * as visitUrlController from "../controllers/accessShortUrl.controller.js";
import * as deleteController from "../controllers/deleteUrl.controller.js";
import validateToken from "../middlewares/token.middleware.js";

const router = express.Router();

router.post("/urls/shorten", validateToken, shortUrlController.generateShortUrl);
router.get("/urls/:id", getUrlController.getUrlById);
router.get("/urls/open/:shortUrl", visitUrlController.accessShortUrl);
router.delete("/urls/:id", validateToken, deleteController.deleteUrl);

export default router;