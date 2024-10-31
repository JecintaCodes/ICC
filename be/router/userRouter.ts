import { Router } from "express";
import { SignInUser, checkUserToken, createUser, deleteOneUser, updateOneUserInfo, viewAllUser, viewOneUser } from "../controller/userController";



const userRouter = Router();

userRouter.route("/create-user").post(createUser)
userRouter.route("/sign-in-user").post(SignInUser)
userRouter.route("/:userID/check-user-token").post(checkUserToken)
userRouter.route("/view-all-user").get(viewAllUser)
userRouter.route("/:userID/view-one-user").get(viewOneUser)
userRouter.route("/:userID/update-user").patch(updateOneUserInfo)
userRouter.route("/:adminID/:userID/delete-user").delete(deleteOneUser)

export default userRouter