import {Router} from "express"
import { createPatronSaints, deletePatronSaints, updatePatronSaints, viewAllPatronSaints } from "../controller/patronSaints";



// import multer from "multer";
// const upload = multer().single("image");

const PatronSaintsRouter = Router();

PatronSaintsRouter.route("/view-all-patron-saints").get( viewAllPatronSaints )
PatronSaintsRouter.route("/:adminID/create-patron-saints").post( createPatronSaints)
PatronSaintsRouter.route("/:adminID/:patronSaintID/update-patron-saints").patch( updatePatronSaints)
PatronSaintsRouter.route("/:adminID/:patronSaintID/delete-patron-saints").delete( deletePatronSaints)

export default PatronSaintsRouter