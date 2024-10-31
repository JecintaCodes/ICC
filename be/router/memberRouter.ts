import { Router } from "express";
import { SignInMember, checkMemberToken, createMember, deleteOneMember, viewMembers, viewOneMember, viewOnePart } from "../controller/membersController";




const memberRouter = Router();

memberRouter.route("/create-member").post(createMember)
memberRouter.route("/sign-in-member").post(SignInMember)
memberRouter.route("/view-all-member").get(viewMembers)
memberRouter.route("/view-one-part").get(viewOnePart)
memberRouter.route("/:memberID/view-one-member").get(viewOneMember)
memberRouter.route("/:memberID/check-member-token").post(checkMemberToken)
memberRouter.route("/:memberID/update-member").patch(viewOneMember)
memberRouter.route("/:adminID/:memberID/delete-member").delete(deleteOneMember)

export default memberRouter