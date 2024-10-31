import {Router} from "express"
import { createOurPatrons, deleteOurPatrons, updateOurPatrons, viewAllOurPatrons } from "../controller/patronAndMatrons";


// import multer from "multer";
// const upload = multer().single("image");

const patronAndMatronRouter = Router();

patronAndMatronRouter.route("/view-all-patron").get( viewAllOurPatrons )
patronAndMatronRouter.route("/:adminID/create-patron").post( createOurPatrons)
patronAndMatronRouter.route("/:adminID/:patronID/update-patron").patch( updateOurPatrons)
patronAndMatronRouter.route("/:adminID/:patronsID/delete-patron").delete( deleteOurPatrons)

export default patronAndMatronRouter