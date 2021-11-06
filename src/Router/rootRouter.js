import express from "express";
import { home } from "../Controller/videoController";
import { join, login } from "../Controller/userController";
const rootRouter = express.Router();

rootRouter.get("/", home);
rootRouter.get("/join", join);
rootRouter.get("/login", login);

export default rootRouter;
