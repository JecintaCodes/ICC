import {Router} from "express"
import { createCommittee, deleteCommitteeInfo, updateCommitteeInfo, viewAllcommitteeInfo, viewOnecommitteeInfo } from "../controller/committee";

// import multer from "multer";


// const upload = multer().single("image");
const committeRouter = Router();

committeRouter.route("/view-all-committee").get( viewAllcommitteeInfo)
committeRouter.route("/:committeeID/view-one-committee").get( viewOnecommitteeInfo)
committeRouter.route("/:adminID/create-committee").post( createCommittee)
committeRouter.route("/:adminID/:committeeID/update-committee").patch( updateCommitteeInfo)
committeRouter.route("/:adminID/:committeeID/delete-committee").delete( deleteCommitteeInfo)

export default committeRouter