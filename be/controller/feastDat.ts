import {Request,Response} from "express"
import { HTTP } from "../errors/mainError";
import {Types} from "mongoose";
import adminModel from "../model/adminModel";
import feastDayModel from "../model/FeastDayEndOfTheYearParty";


export const createFeastDay = async (req:Request,res:Response)=>{
    try {
            const {adminID} = req.params

            const admin = await adminModel.findById(adminID)

            if (admin) {
        const {title, description} = req.body;              
        const createFeastDay = await feastDayModel.create({
            title,
            description,
            image:"",           
            imageID:"",
            adminID:admin?._id,
        })
        admin?.feastDays?.push( new Types.ObjectId(createFeastDay?._id!))
        admin.save();

        return res.status(HTTP.CREATED).json({
            message: "FeastDay created Successfully",
           data: createFeastDay
          });
            } else {
                return res.status(HTTP.BAD_REQUEST).json({
                    message:"u are not an admin"
                })
            }

        // const { secure_url}: any = await streamUpload(req);     
    } catch (error) {
        return res.status(HTTP.BAD_REQUEST).json({
            message: `can,t create FeastDay ${error}`,
            
           
          });
    }
}
export const updateFeastDayInfo = async(req:Request,res:Response)=>{
    try {
        const {feastDayID,adminID} = req.params;

        const admin = await adminModel.findById(adminID)

        if (admin) {
        const feastDay = await feastDayModel.findById(feastDayID)

            if (feastDay) {

        const {title,description } = req.body;
        const updateFeastDay = await feastDayModel.findByIdAndUpdate
        (
            feastDayID,
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
            data:updateFeastDay
        })
            } else {
                 return res.status(HTTP.BAD_REQUEST).json({
            message:`feastday us info does not exist u`
        })
            }
        } else {
            return res.status(HTTP.BAD_REQUEST).json({
                message:`you are not an admin`
            })
        }
    
    } catch (error) {
        return res.status(HTTP.BAD_REQUEST).json({
            message:`error updating feastday us`
        })
    }
}
export const deleteFeastDay = async(req:Request,res:Response)=>{
    try {
        const {feastDayID,adminID} = req.params;
        
        const admin = await adminModel.findById(adminID)

        if (admin) {
            const feastDay = await feastDayModel.findById(feastDayID)

            if (feastDay) {

                const deleteFeastDay = await feastDayModel.findByIdAndDelete(feastDayID)

        return res.status(HTTP.OK).json({
            message:"feastDay-deleted ",
            data:deleteFeastDay
        })
         
            } else {
                return res.status(HTTP.BAD_REQUEST).json({
                    message:`feastday info does not exist `
                })
                    }
                } else {
                    return res.status(HTTP.BAD_REQUEST).json({
                        message:`you are not an admin`
                    })
        }      
    } catch (error) {
        return res.status(HTTP.BAD_REQUEST).json({
            message:`error deleted feastday info`
        })
    }
}
export const viewAllFeastDay = async(req:Request,res:Response)=>{
    try {

        const viewAll = await feastDayModel.find().sort({
            createdAt: -1
        })

        return res.status(HTTP.OK).json({
            message:"all feastDays",
            data:viewAll
        })
    } catch (error) {
        return res.status(HTTP.BAD_REQUEST).json({
            message:`error getting all feastDays`
        })
    }
}

