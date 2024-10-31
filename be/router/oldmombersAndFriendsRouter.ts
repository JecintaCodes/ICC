import {Router} from "express"
import { createFeastDay, deleteFeastDay, updateFeastDayInfo, viewAllFeastDay } from "../controller/feastDat";
import { createOldMembersAndFriends, deleteOldMembersAndFriends, updateOldMembersAndFriendsInfo, viewAllOldMembersAndFriends } from "../controller/oldMembersandFriendsController";


// import multer from "multer";


// const upload = multer().single("image");
const oldMembersAndFriendsRouter = Router();

oldMembersAndFriendsRouter.route("/view-all-oldmem").get(viewAllOldMembersAndFriends )
oldMembersAndFriendsRouter.route("/:adminID/create-oldmem").post( createOldMembersAndFriends)
oldMembersAndFriendsRouter.route("/:adminID/:oldMemID/update-oldmem").patch( updateOldMembersAndFriendsInfo)
oldMembersAndFriendsRouter.route("/:adminID/:oldMemID/delete-oldmem").delete( deleteOldMembersAndFriends)

export default oldMembersAndFriendsRouter