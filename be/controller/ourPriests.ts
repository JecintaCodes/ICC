import {Request,Response} from "express"
import { HTTP } from "../errors/mainError";
import {Types} from "mongoose";
import adminModel from "../model/adminModel";
import ourPriestsModel from "../model/ourPriestsModel";


export const createOurPriests = async (req:Request,res:Response)=>{
    try {
            const {adminID} = req.params

            const admin = await adminModel.findById(adminID)

            if (admin) {
        const {title, description} = req.body;              
        const ourPri = await ourPriestsModel.create({
            title,
            description,
            image:"",           
            imageID:"",
            adminID:admin?._id,
        })
        admin?.ourPriests?.push( new Types.ObjectId (ourPri?._id!))
        admin.save();

        return res.status(HTTP.CREATED).json({
            message: "our priests created Successfully",
           data: ourPri
          });
            } else {
                return res.status(HTTP.BAD_REQUEST).json({
                    message:"u are not an admin"
                })
            }

        // const { secure_url}: any = await streamUpload(req);     
    } catch (error) {
        return res.status(HTTP.BAD_REQUEST).json({
            message: `can,t create priests ${error}`,
            
           
          });
    }
}
export const updateOurPriests = async(req:Request,res:Response)=>{
    try {
        const {priestID,adminID} = req.params;

        const admin = await adminModel.findById(adminID)

        if (admin) {
        const priests = await ourPriestsModel.findById(priestID)

            if (priests) {

        const {title,description } = req.body;
        const updatepriest = await ourPriestsModel.findByIdAndUpdate
        (
        priestID,
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
            data:updatepriest
        })
            } else {
                 return res.status(HTTP.BAD_REQUEST).json({
            message:`priest us info does not exist u`
        })
            }
        } else {
            return res.status(HTTP.BAD_REQUEST).json({
                message:`you are not an admin`
            })
        }
    
    } catch (error) {
        return res.status(HTTP.BAD_REQUEST).json({
            message:`error priest oldMember us`
        })
    }
}
export const deleteOurPriests = async(req:Request,res:Response)=>{
    try {
        const {priestID,adminID} = req.params;
        
        const admin = await adminModel.findById(adminID)

        if (admin) {
            const priest = await adminModel.findById(priestID)

            if (priest) {

                const deletepriest = await ourPriestsModel.findByIdAndDelete(priestID)

        return res.status(HTTP.OK).json({
            message:" priest-deleted ",
            data:deletepriest
        })
         
            } else {
                return res.status(HTTP.BAD_REQUEST).json({
                    message:`priest info does not exist `
                })
                    }
                } else {
                    return res.status(HTTP.BAD_REQUEST).json({
                        message:`you are not an admin`
                    })
        }      
    } catch (error) {
        return res.status(HTTP.BAD_REQUEST).json({
            message:`error deleted priest info`
        })
    }
}
export const viewAllOurPriests = async(req:Request,res:Response)=>{
    try {

        const viewAll = await ourPriestsModel.find().sort({
            createdAt: -1
        })

        return res.status(HTTP.OK).json({
            message:"all priests",
            data:viewAll
        })
    } catch (error) {
        return res.status(HTTP.BAD_REQUEST).json({
            message:`error getting all priests`
        })
    }
}

