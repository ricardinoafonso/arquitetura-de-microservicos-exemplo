import { Router } from "express";
import { userController } from "../http/controller/user.controller";
const userRouter = Router()

userRouter.post('/', new userController().execute)


export default userRouter