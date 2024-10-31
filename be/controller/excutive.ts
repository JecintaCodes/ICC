import {Request,Response} from "express"
import { HTTP } from "../errors/mainError";
import {Types} from "mongoose";
import adminModel from "../model/adminModel";
import executiveModel from "../model/executives"

export const createExecutive = async (req:Request,res:Response)=>{
    try {
            const {adminID} = req.params

            const admin = await adminModel.findById(adminID)

            if (admin) {
        const {title,name, description} = req.body;              
        const createExecutive = await executiveModel.create({
            title,
            description,
            image:"",
            name,
            imageID:"",
            adminID:admin?._id,
        })
        admin?.executives?.push( new Types.ObjectId(createExecutive?._id!))
        admin.save();

        return res.status(HTTP.CREATED).json({
            message: "Executive created Successfully",
           data: createExecutive
          });
            } else {
                return res.status(HTTP.BAD_REQUEST).json({
                    message:"u are not an admin"
                })
            }

        // const { secure_url}: any = await streamUpload(req);


      
    } catch (error) {
        return res.status(HTTP.BAD_REQUEST).json({
            message: `can,t createExecutive ${error}`,
            
           
          });
    }
}
export const updateExecutiveInfo = async(req:Request,res:Response)=>{
    try {
        const {executiveID,adminID} = req.params;

        const admin = await adminModel.findById(adminID)

        if (admin) {
        const executive = await executiveModel.findById(executiveID)

            if (executive) {
        const {title,description,name } = req.body;
        const updateExecutive = await executiveModel.findByIdAndUpdate
        (executiveID,

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
            message:"executiveUsInfo Updated",
            data:updateExecutive
        })
            } else {
                 return res.status(HTTP.BAD_REQUEST).json({
            message:`executive us info does not exist u`
        })
            }
        } else {
            return res.status(HTTP.BAD_REQUEST).json({
                message:`you are not an admin`
            })
        }
    
    } catch (error) {
        return res.status(HTTP.BAD_REQUEST).json({
            message:`error updating Executive us`
        })
    }
}
export const deleteExecutive = async(req:Request,res:Response)=>{
    try {
        const {executiveID,adminID} = req.params;
        
        const admin = await adminModel.findById(adminID)

        if (admin) {
            const Executive = await executiveModel.findById(executiveID)
            if (Executive) {
                const deleteExecutive = await executiveModel.findByIdAndDelete(executiveID)
        return res.status(HTTP.OK).json({
            message:"Executive-deleted ",
            data:deleteExecutive
        })
         
            } else {
                return res.status(HTTP.BAD_REQUEST).json({
                    message:`excutive info does not exist `
                })
                    }
                } else {
                    return res.status(HTTP.BAD_REQUEST).json({
                        message:`you are not an admin`
                    })
        }      
    } catch (error) {
        return res.status(HTTP.BAD_REQUEST).json({
            message:`error deleted excutive info`
        })
    }
}
export const viewAllExecutive = async(req:Request,res:Response)=>{
    try {

        const viewAll = await executiveModel.find().sort({
            createdAt: -1
        })

        return res.status(HTTP.OK).json({
            message:"all Executive",
            data:viewAll
        })
    } catch (error) {
        return res.status(HTTP.BAD_REQUEST).json({
            message:`error getting all Executives`
        })
    }
}
export const viewOneExecutive = async(req:Request,res:Response)=>{
    try {

        const {executiveID} = req.params
        const viewOne = await executiveModel.findById(executiveID)

        return res.status(HTTP.OK).json({
            message:"one executive",
            data:viewOne
        })
    } catch (error) {
        return res.status(HTTP.BAD_REQUEST).json({
            message:`error getting one executive`
        })
    }
}