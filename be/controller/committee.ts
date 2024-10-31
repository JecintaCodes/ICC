import {Request,Response} from "express"
import { HTTP } from "../errors/mainError";
import {Types} from "mongoose";
import adminModel from "../model/adminModel";
import committeeModel from "../model/committee"

export const createCommittee = async (req:Request,res:Response)=>{
    try {
            const {adminID} = req.params

            const admin = await adminModel.findById(adminID)

            if (admin) {
        const {title,name, description} = req.body;              
        const createCommittee = await committeeModel.create({
            title,
            description,
            image:"",
            name,
            imageID:"",
            adminID:admin?._id,
        })
        admin?.committees?.push( new Types.ObjectId(createCommittee?._id!))
        admin.save();

        return res.status(HTTP.CREATED).json({
            message: "committee created Successfully",
           data: createCommittee
          });
            } else {
                return res.status(HTTP.BAD_REQUEST).json({
                    message:"u are not an admin"
                })
            }

        // const { secure_url}: any = await streamUpload(req);


      
    } catch (error) {
        return res.status(HTTP.BAD_REQUEST).json({
            message: `can,t createcommittee ${error}`,
            
           
          });
    }
}
export const updateCommitteeInfo = async(req:Request,res:Response)=>{
    try {
        const {committeeID,adminID} = req.params;

        const admin = await adminModel.findById(adminID)

        if (admin) {
        const committee = await committeeModel.findById(committeeID)

            if (committee) {
        const {title,description,name } = req.body;
        const updateCommittee = await committeeModel.findByIdAndUpdate
        (committeeID,

            {
                title,
                description,
                image:"",
                name,
                imageID:""
            },
            {new:true}
        )
        return res.status(HTTP.CREATED).json({
            message:"committeeUsInfo Updated",
            data:updateCommittee
        })
            } else {
                 return res.status(HTTP.BAD_REQUEST).json({
            message:`committee us info does not exist u`
        })
            }
        } else {
            return res.status(HTTP.BAD_REQUEST).json({
                message:`you are not an admin`
            })
        }
    
    } catch (error) {
        return res.status(HTTP.BAD_REQUEST).json({
            message:`error updating committee us`
        })
    }
}
export const deleteCommitteeInfo = async(req:Request,res:Response)=>{
    try {
        const {committeeID,adminID} = req.params;
        
        const admin = await adminModel.findById(adminID)

        if (admin) {
            const committee = await committeeModel.findById(committeeID)
            if (committee) {
                const deleteCommittee = await committeeModel.findByIdAndDelete(committeeID)
        return res.status(HTTP.OK).json({
            message:"committee-deleted ",
            data:deleteCommittee
        })
         
            } else {
                return res.status(HTTP.BAD_REQUEST).json({
                    message:`committe info does not exist `
                })
                    }
                } else {
                    return res.status(HTTP.BAD_REQUEST).json({
                        message:`you are not an admin`
                    })
        }      
    } catch (error) {
        return res.status(HTTP.BAD_REQUEST).json({
            message:`error deleted committe info`
        })
    }
}
export const viewAllcommitteeInfo = async(req:Request,res:Response)=>{
    try {

        const viewAll = await committeeModel.find().sort({
            createdAt: -1
        })

        return res.status(HTTP.OK).json({
            message:"all committee",
            data:viewAll
        })
    } catch (error) {
        return res.status(HTTP.BAD_REQUEST).json({
            message:`error getting all committees`
        })
    }
}
export const viewOnecommitteeInfo = async(req:Request,res:Response)=>{
    try {

        const {committeeID} = req.params
        const viewOne = await committeeModel.findById(committeeID)

        return res.status(HTTP.OK).json({
            message:"one committee",
            data:viewOne
        })
    } catch (error) {
        return res.status(HTTP.BAD_REQUEST).json({
            message:`error getting one committees`
        })
    }
}

