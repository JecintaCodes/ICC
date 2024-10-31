import {Router} from "express"
import { createExecutive, deleteExecutive, updateExecutiveInfo, viewAllExecutive, viewOneExecutive } from "../controller/excutive";


// import multer from "multer";


// const upload = multer().single("image");
const executiveRouter = Router();

executiveRouter.route("/view-all-executive").get(viewAllExecutive )
executiveRouter.route("/:executiveID/view-all-executive").get(viewOneExecutive )
executiveRouter.route("/:adminID/create-executive").post( createExecutive)
executiveRouter.route("/:adminID/:executiveID/update-executive").patch( updateExecutiveInfo)
executiveRouter.route("/:adminID/:executiveID/delete-executive").delete( deleteExecutive)

export default executiveRouter