import {Request,Response} from "express"
import { HTTP } from "../errors/mainError";
import {Types} from "mongoose";
import adminModel from "../model/adminModel";
import progammeModel from "../model/programm";


export const createProgramme = async (req:Request,res:Response)=>{
    try {
            const {adminID} = req.params

            const admin = await adminModel.findById(adminID)

            if (admin) {
        const {tile, description} = req.body;              
        const programm = await progammeModel.create({
            tile,
            description,
            image:"",           
            imageID:"",
            adminID:admin?._id,
        })
        admin?.programms?.push( new Types.ObjectId (programm?._id!))
        admin.save();

        return res.status(HTTP.CREATED).json({
            message: "our programs created Successfully",
           data: programm
          });
            } else {
                return res.status(HTTP.BAD_REQUEST).json({
                    message:"u are not an admin"
                })
            }

        // const { secure_url}: any = await streamUpload(req);     
    } catch (error) {
        return res.status(HTTP.BAD_REQUEST).json({
            message: `can,t create programm ${error}`,
            
           
          });
    }
}
export const updateProgramme = async(req:Request,res:Response)=>{
    try {
        const {programmeID,adminID} = req.params;

        const admin = await adminModel.findById(adminID)

        if (admin) {
        const programme = await progammeModel.findById(programmeID)

            if (programme) {

        const {name,description } = req.body;
        const updateprogramme = await progammeModel.findByIdAndUpdate
        (
        programmeID,
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
            data:updateprogramme
        })
            } else {
                 return res.status(HTTP.BAD_REQUEST).json({
            message:`programme us info does not exist u`
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
export const deleteProgramme = async(req:Request,res:Response)=>{
    try {
        const {programmeID,adminID} = req.params;
        
        const admin = await adminModel.findById(adminID)

        if (admin) {
            const programme = await adminModel.findById(programmeID)

            if (programme) {

                const deleteprogramme = await progammeModel.findByIdAndDelete(programmeID)

        return res.status(HTTP.OK).json({
            message:" progrramme-deleted ",
            data:deleteprogramme
        })        
            } else {
                return res.status(HTTP.BAD_REQUEST).json({
                    message:`progrramme info does not exist `
                })
                    }
                } else {
                    return res.status(HTTP.BAD_REQUEST).json({
                        message:`you are not an admin`
                    })
        }      
    } catch (error) {
        return res.status(HTTP.BAD_REQUEST).json({
            message:`error deleted progrramme info`
        })
    }
}
export const viewAllProgrammes = async(req:Request,res:Response)=>{
    try {

        const viewAll = await progammeModel.find().sort({
            createdAt: -1
        })

        return res.status(HTTP.OK).json({
            message:"all programme",
            data:viewAll
        })
    } catch (error) {
        return res.status(HTTP.BAD_REQUEST).json({
            message:`error getting all programme`
        })
    }
}

