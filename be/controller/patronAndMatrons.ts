import {Request,Response} from "express"
import { HTTP } from "../errors/mainError";
import {Types} from "mongoose";
import adminModel from "../model/adminModel";
import patonsAndMatronsModel from "../model/patronsAndMatrons";


export const createOurPatrons = async (req:Request,res:Response)=>{
    try {
            const {adminID} = req.params

            const admin = await adminModel.findById(adminID)

            if (admin) {
        const {name, description} = req.body;              
        const patron = await patonsAndMatronsModel.create({
            name,
            description,
            image:"",           
            imageID:"",
            adminID:admin?._id,
        })
        admin?.patronsAndMatrons?.push( new Types.ObjectId (patron?._id!))
        admin.save();

        return res.status(HTTP.CREATED).json({
            message: "our patronandmatron created Successfully",
           data: patron
          });
            } else {
                return res.status(HTTP.BAD_REQUEST).json({
                    message:"u are not an admin"
                })
            }

        // const { secure_url}: any = await streamUpload(req);     
    } catch (error) {
        return res.status(HTTP.BAD_REQUEST).json({
            message: `can,t create patronandmatron ${error}`,
            
           
          });
    }
}
export const updateOurPatrons = async(req:Request,res:Response)=>{
    try {
        const {patronID,adminID} = req.params;

        const admin = await adminModel.findById(adminID)

        if (admin) {
        const patron = await patonsAndMatronsModel.findById(patronID)

            if (patron) {

        const {name,description } = req.body;
        const updatePatron = await patonsAndMatronsModel.findByIdAndUpdate
        (
        patronID,
            {
                name,
                description,
                image:"",
                imageID:""
            },
            {new:true}
        )
        return res.status(HTTP.CREATED).json({
            message:"FeastDayUsInfo Updated",
            data:updatePatron
        })
            } else {
                 return res.status(HTTP.BAD_REQUEST).json({
            message:`patron us info does not exist u`
        })
            }
        } else {
            return res.status(HTTP.BAD_REQUEST).json({
                message:`you are not an admin`
            })
        }
    
    } catch (error) {
        return res.status(HTTP.BAD_REQUEST).json({
            message:`error patron oldMember us`
        })
    }
}
export const deleteOurPatrons = async(req:Request,res:Response)=>{
    try {
        const {patronID,adminID} = req.params;
        
        const admin = await adminModel.findById(adminID)

        if (admin) {
            const patron = await adminModel.findById(patronID)

            if (patron) {

                const deletepatron = await patonsAndMatronsModel.findByIdAndDelete(patronID)

        return res.status(HTTP.OK).json({
            message:" patron-deleted ",
            data:deletepatron
        })
         
            } else {
                return res.status(HTTP.BAD_REQUEST).json({
                    message:`patron info does not exist `
                })
                    }
                } else {
                    return res.status(HTTP.BAD_REQUEST).json({
                        message:`you are not an admin`
                    })
        }      
    } catch (error) {
        return res.status(HTTP.BAD_REQUEST).json({
            message:`error deleted patron info`
        })
    }
}
export const viewAllOurPatrons = async(req:Request,res:Response)=>{
    try {

        const viewAll = await patonsAndMatronsModel.find().sort({
            createdAt: -1
        })

        return res.status(HTTP.OK).json({
            message:"all patrons",
            data:viewAll
        })
    } catch (error) {
        return res.status(HTTP.BAD_REQUEST).json({
            message:`error getting all patrons`
        })
    }
}

