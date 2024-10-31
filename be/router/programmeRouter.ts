import {Router} from "express"
import { createProgramme, deleteProgramme, updateProgramme, viewAllProgrammes } from "../controller/programm";


// import multer from "multer";
// const upload = multer().single("image");

const programmeRouter = Router();

programmeRouter.route("/view-all-programme").get( viewAllProgrammes )
programmeRouter.route("/:adminID/create-programme").post( createProgramme)
programmeRouter.route("/:adminID/:programmeID/update-programme").patch( updateProgramme)
programmeRouter.route("/:adminID/:programmesID/delete-programme").delete( deleteProgramme)

export default programmeRouter