import {Router} from "express"
import { checkAdminToken, createAdmin, deleteAdmins, signInAdmin, updateAdminsInfo, viewAllAdmins, viewOneAdmins } from "../controller/adminController";
// import multer from "multer";


// const upload = multer().single("image");
const adminRouter = Router();

adminRouter.route("/admin-sign-in").post( signInAdmin)
adminRouter.route("/create-admin").post( createAdmin)
adminRouter.route("/:adminID/update-admin-info").patch( updateAdminsInfo)
adminRouter.route("/:adminID/delete-admin").delete( deleteAdmins)
adminRouter.route("/view-all-admins").get(viewAllAdmins )
adminRouter.route("/:adminID/view-one-admin").get(viewOneAdmins )
adminRouter.route("/:adminID/check-admin-token").post(checkAdminToken )

export default adminRouter