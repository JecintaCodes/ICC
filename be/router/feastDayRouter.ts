import {Router} from "express"
import { createFeastDay, deleteFeastDay, updateFeastDayInfo, viewAllFeastDay } from "../controller/feastDat";


// import multer from "multer";


// const upload = multer().single("image");
const feastDayRouter = Router();

feastDayRouter.route("/view-all-feastday").get(viewAllFeastDay )
feastDayRouter.route("/:adminID/create-feastday").post( createFeastDay)
feastDayRouter.route("/:adminID/:feastDayID/update-feastday").patch( updateFeastDayInfo)
feastDayRouter.route("/:adminID/:feastDayID/delete-feastday").delete( deleteFeastDay)

export default feastDayRouter