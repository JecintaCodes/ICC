import {Request,Response} from "express"
import { HTTP } from "../errors/mainError";
import {Types} from "mongoose";
import adminModel from "../model/adminModel";
import oldMembersAndFriendsModel from "../model/oldMembersAndFriends";


export const createOldMembersAndFriends = async (req:Request,res:Response)=>{
    try {
            const {adminID} = req.params

            const admin = await adminModel.findById(adminID)

            if (admin) {
        const {title, description} = req.body;              
        const createOldMembers = await oldMembersAndFriendsModel.create({
            title,
            description,
            image:"",           
            imageID:"",
            adminID:admin?._id,
        })
        admin?.oldMembersAndFriends?.push( new Types.ObjectId(createOldMembers?._id!))
        admin.save();

        return res.status(HTTP.CREATED).json({
            message: "oldmemFriends created Successfully",
           data: createOldMembers
          });
            } else {
                return res.status(HTTP.BAD_REQUEST).json({
                    message:"u are not an admin"
                })
            }

        // const { secure_url}: any = await streamUpload(req);     
    } catch (error) {
        return res.status(HTTP.BAD_REQUEST).json({
            message: `can,t create oldmemFriends ${error}`,
            
           
          });
    }
}
export const updateOldMembersAndFriendsInfo = async(req:Request,res:Response)=>{
    try {
        const {oldMemID,adminID} = req.params;

        const admin = await adminModel.findById(adminID)

        if (admin) {
        const oldMember = await oldMembersAndFriendsModel.findById(oldMemID)

            if (oldMember) {

        const {title,description } = req.body;
        const updaetOldMemFri = await oldMembersAndFriendsModel.findByIdAndUpdate
        (
        oldMemID,
            {
                title,
                description,
                image:"",
                imageID:""
            },
            {new:true}
        )
        return res.status(HTTP.CREATED).json({
            message:"FeastDayUsInfo Updated",
            data:updaetOldMemFri
        })
            } else {
                 return res.status(HTTP.BAD_REQUEST).json({
            message:`oldMember us info does not exist u`
        })
            }
        } else {
            return res.status(HTTP.BAD_REQUEST).json({
                message:`you are not an admin`
            })
        }
    
    } catch (error) {
        return res.status(HTTP.BAD_REQUEST).json({
            message:`error updating oldMember us`
        })
    }
}
export const deleteOldMembersAndFriends = async(req:Request,res:Response)=>{
    try {
        const {oldMemID,adminID} = req.params;
        
        const admin = await adminModel.findById(adminID)

        if (admin) {
            const oldMem = await oldMembersAndFriendsModel.findById(oldMemID)

            if (oldMem) {

                const deleteOldMem = await oldMembersAndFriendsModel.findByIdAndDelete(oldMemID)

        return res.status(HTTP.OK).json({
            message:"OldMem-deleted ",
            data:deleteOldMem
        })
         
            } else {
                return res.status(HTTP.BAD_REQUEST).json({
                    message:`oldMem info does not exist `
                })
                    }
                } else {
                    return res.status(HTTP.BAD_REQUEST).json({
                        message:`you are not an admin`
                    })
        }      
    } catch (error) {
        return res.status(HTTP.BAD_REQUEST).json({
            message:`error deleted oldMem info`
        })
    }
}
export const viewAllOldMembersAndFriends = async(req:Request,res:Response)=>{
    try {

        const viewAll = await oldMembersAndFriendsModel.find().sort({
            createdAt: -1
        })

        return res.status(HTTP.OK).json({
            message:"all oldMem",
            data:viewAll
        })
    } catch (error) {
        return res.status(HTTP.BAD_REQUEST).json({
            message:`error getting all oldMem`
        })
    }
}

