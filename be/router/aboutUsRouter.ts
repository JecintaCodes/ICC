import {Router} from "express"
import { createAboutUs, deleteAboutUsInfo, updateAboutUsInfo, viewAllAboutUsInfo } from "../controller/AbouUsController";
// import multer from "multer";


// const upload = multer().single("image");
const aboutUsRouter = Router();

aboutUsRouter.route("/view-all-about-us").get( viewAllAboutUsInfo)
aboutUsRouter.route("/:adminID/create-about-us").post( createAboutUs)
aboutUsRouter.route("/:adminID/:aboutUsID/update-about-us").patch( updateAboutUsInfo)
aboutUsRouter.route("/:adminID/:aboutUsID/delete-about-us").delete( deleteAboutUsInfo)

export default aboutUsRouter