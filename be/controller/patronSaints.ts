import {Request,Response} from "express"
import { HTTP } from "../errors/mainError";
import {Types} from "mongoose";
import adminModel from "../model/adminModel";
import patronSaintModel from "../model/patronSaint";


export const createPatronSaints = async (req:Request,res:Response)=>{
    try {
            const {adminID} = req.params

            const admin = await adminModel.findById(adminID)

            if (admin) {
        const {title, description} = req.body;              
        const patronSaint = await patronSaintModel.create({
            title,
            description,
            image:"",           
            imageID:"",
            adminID:admin?._id,
        })
        admin?.patronSaints?.push( new Types.ObjectId (patronSaint?._id!))
        admin.save();

        return res.status(HTTP.CREATED).json({
            message: "our patronSaints created Successfully",
           data: patronSaint
          });
            } else {
                return res.status(HTTP.BAD_REQUEST).json({
                    message:"u are not an admin"
                })
            }

        // const { secure_url}: any = await streamUpload(req);     
    } catch (error) {
        return res.status(HTTP.BAD_REQUEST).json({
            message: `can,t create patronSaints ${error}`,
            
           
          });
    }
}
export const updatePatronSaints = async(req:Request,res:Response)=>{
    try {
        const {patronSaintID,adminID} = req.params;

        const admin = await adminModel.findById(adminID)

        if (admin) {
        const patronSaint = await patronSaintModel.findById(patronSaintID)

            if (patronSaint) {

        const {name,description } = req.body;
        const updatePatronSaints = await patronSaintModel.findByIdAndUpdate
        (
        patronSaint,
            {
                name,
                description,
                image:"",
                imageID:""
            },
            {new:true}
        )
        return res.status(HTTP.CREATED).json({
            message:"PatronSaints Updated",
            data:updatePatronSaints
        })
            } else {
                 return res.status(HTTP.BAD_REQUEST).json({
            message:`update PatronSaints us info does not exist u`
        })
            }
        } else {
            return res.status(HTTP.BAD_REQUEST).json({
                message:`you are not an admin`
            })
        }
    
    } catch (error) {
        return res.status(HTTP.BAD_REQUEST).json({
            message:`error programm us`
        })
    }
}
export const deletePatronSaints = async(req:Request,res:Response)=>{
    try {
        const {patronSaintID,adminID} = req.params;
        
        const admin = await adminModel.findById(adminID)

        if (admin) {
            const patronSaint = await adminModel.findById(patronSaintID)

            if (patronSaint) {

                const deletepatronSaint = await patronSaintModel.findByIdAndDelete(patronSaintID)

        return res.status(HTTP.OK).json({
            message:" patronSaint deleted ",
            data:deletepatronSaint
        })        
            } else {
                return res.status(HTTP.BAD_REQUEST).json({
                    message:`patron saint info does not exist `
                })
                    }
                } else {
                    return res.status(HTTP.BAD_REQUEST).json({
                        message:`you are not an admin`
                    })
        }      
    } catch (error) {
        return res.status(HTTP.BAD_REQUEST).json({
            message:`error deleted patron saint info`
        })
    }
}
export const viewAllPatronSaints = async(req:Request,res:Response)=>{
    try {

        const viewAll = await patronSaintModel.find().sort({
            createdAt: -1
        })

        return res.status(HTTP.OK).json({
            message:"all patronSaints",
            data:viewAll
        })
    } catch (error) {
        return res.status(HTTP.BAD_REQUEST).json({
            message:`error getting all patronSaints`
        })
    }
}

