import { createUser, getUser } from "../controllers/user.controller.js";
import express from 'express'

const userRouter = express.Router();

userRouter.get("/get-user", getUser)

userRouter.post("/create-user", createUser)

export default userRouter;
