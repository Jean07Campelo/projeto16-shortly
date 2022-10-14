import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

import usersRouters from "./routes/users.routers.js";
import shortUrlRouters from "./routes/shortUrl.router.js";
import rankingRouter from "./routes/ranking.router.js";

const server = express();
server.use(cors());
server.use(express.json());

server.use(usersRouters);
server.use(shortUrlRouters);
server.use(rankingRouter);

const PORT = process.env.PORT
server.listen(PORT, () => console.log(`Listening on port ${PORT}`));
