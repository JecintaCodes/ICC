import {Router} from "express"
import { createbestSingers, deletebestSingersInfo, updatebestSingersInfo, viewAllbestSingersInfo, viewOnebestSingersTiTle } from "../controller/bestSingersController";
// import multer from "multer";


// const upload = multer().single("image");
const bestSingersRouter = Router();

bestSingersRouter.route("/view-all-best-singers").get( viewAllbestSingersInfo)
bestSingersRouter.route("/view-one-best-singers-title").get( viewOnebestSingersTiTle)
bestSingersRouter.route("/:adminID/:userID/create-best-singers").post( createbestSingers)
bestSingersRouter.route("/:adminID/:bestSingersID/update-best-singers").patch( updatebestSingersInfo)
bestSingersRouter.route("/:adminID/:bestSingersID/delete-best-singers").delete( deletebestSingersInfo)

export default bestSingersRouter