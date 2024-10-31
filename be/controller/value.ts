import {Request,Response} from "express"
import { HTTP } from "../errors/mainError";
import {Types} from "mongoose";
import adminModel from "../model/adminModel";
import valuesModel from "../model/values";


export const createValue = async (req:Request,res:Response)=>{
    try {
            const {adminID} = req.params

            const admin = await adminModel.findById(adminID)

            if (admin) {
        const {tile, description} = req.body;              
        const value = await valuesModel.create({
            tile,
            description,
            image:"",           
            imageID:"",
            adminID:admin?._id,
        })
        admin?.values?.push( new Types.ObjectId (value?._id!))
        admin.save();

        return res.status(HTTP.CREATED).json({
            message: "our value created Successfully",
           data: value
          });
            } else {
                return res.status(HTTP.BAD_REQUEST).json({
                    message:"u are not an admin"
                })
            }

        // const { secure_url}: any = await streamUpload(req);     
    } catch (error) {
        return res.status(HTTP.BAD_REQUEST).json({
            message: `can,t create value ${error}`,
            
           
          });
    }
}
export const updateValue = async(req:Request,res:Response)=>{
    try {
        const {valueID,adminID} = req.params;

        const admin = await adminModel.findById(adminID)

        if (admin) {
        const value = await valuesModel.findById(valueID)

            if (value) {

        const {name,description } = req.body;
        const updatevalue = await valuesModel.findByIdAndUpdate
        (
        valueID,
            {
                name,
                description,
                image:"",
                imageID:""
            },
            {new:true}
        )
        return res.status(HTTP.CREATED).json({
            message:"programme Updated",
            data:updatevalue
        })
            } else {
                 return res.status(HTTP.BAD_REQUEST).json({
            message:`value info does not exist u`
        })
            }
        } else {
            return res.status(HTTP.BAD_REQUEST).json({
                message:`you are not an admin`
            })
        }
    
    } catch (error) {
        return res.status(HTTP.BAD_REQUEST).json({
            message:`error value us`
        })
    }
}
export const deleteValue = async(req:Request,res:Response)=>{
    try {
        const {valueID,adminID} = req.params;
        
        const admin = await adminModel.findById(adminID)

        if (admin) {
            const value = await valuesModel.findById(valueID)

            if (value) {

                const deletevalue = await valuesModel.findByIdAndDelete(valueID)

        return res.status(HTTP.OK).json({
            message:" value-deleted ",
            data:deletevalue
        })        
            } else {
                return res.status(HTTP.BAD_REQUEST).json({
                    message:`value info does not exist `
                })
                    }
                } else {
                    return res.status(HTTP.BAD_REQUEST).json({
                        message:`you are not an admin`
                    })
        }      
    } catch (error) {
        return res.status(HTTP.BAD_REQUEST).json({
            message:`error value value info`
        })
    }
}
export const viewAllValue = async(req:Request,res:Response)=>{
    try {

        const viewAll = await valuesModel.find().sort({
            createdAt: -1
        })

        return res.status(HTTP.OK).json({
            message:"all value",
            data:viewAll
        })
    } catch (error) {
        return res.status(HTTP.BAD_REQUEST).json({
            message:`error getting all value`
        })
    }
}

