import {Router} from "express"
import { createOurPriests, deleteOurPriests, updateOurPriests, viewAllOurPriests } from "../controller/ourPriests";

// import multer from "multer";
// const upload = multer().single("image");

const ourPriestRouter = Router();

ourPriestRouter.route("/view-all-priest").get(viewAllOurPriests )
ourPriestRouter.route("/:adminID/create-priest").post( createOurPriests)
ourPriestRouter.route("/:adminID/:priestID/update-priest").patch( updateOurPriests)
ourPriestRouter.route("/:adminID/:priestID/delete-priest").delete( deleteOurPriests)

export default ourPriestRouter