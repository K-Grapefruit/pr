import express from "express";
import { edit, logout } from "../Controller/userController";
const userRouter = express.Router();

userRouter.get("/:id(\\d+)/edit", edit);
userRouter.get("/:id(\\d+)/logout", logout);

export default userRouter;
