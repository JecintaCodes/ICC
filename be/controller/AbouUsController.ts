import {Request,Response} from "express"
import { HTTP } from "../errors/mainError";
import aboutUsModel from "../model/aboutUsModel";
import {Types} from "mongoose";
import adminModel from "../model/adminModel";

export const createAboutUs = async (req:Request,res:Response)=>{
    try {
            const {adminID} = req.params

            const admin = await adminModel.findById(adminID)

            if (admin) {
        const {title, description} = req.body;              
        const createAbot = await aboutUsModel.create({
            title,
            description,
            image:"",
            adminID:admin?._id,
        })
        admin?.aboutUs?.push( new Types.ObjectId(createAbot?._id!))
        admin.save();

        return res.status(HTTP.CREATED).json({
            message: "aboutUs created Successfully",
           data: createAbot
          });
            } else {
                return res.status(HTTP.BAD_REQUEST).json({
                    message:"u are not an admin"
                })
            }

        // const { secure_url}: any = await streamUpload(req);


      
    } catch (error) {
        return res.status(HTTP.BAD_REQUEST).json({
            message: `can,t create about us ${error}`,
            
           
          });
    }
}
export const updateAboutUsInfo = async(req:Request,res:Response)=>{
    try {
        const {aboutUsID,adminID} = req.params;

        const admin = await adminModel.findById(adminID)

        if (admin) {
        const about = await aboutUsModel.findById(aboutUsID)

            if (about) {
        const {title,description, } = req.body;
        const updateAbout = await aboutUsModel.findByIdAndUpdate
        (aboutUsID,

            {
                title,
                description,
                image:""
            },
            {new:true}
        )

        return res.status(HTTP.CREATED).json({
            message:"aboutUsInfo Updated",
            data:updateAbout
        })
            } else {
                 return res.status(HTTP.BAD_REQUEST).json({
            message:`about us info does not exist u`
        })
            }
        } else {
            return res.status(HTTP.BAD_REQUEST).json({
                message:`you are not an admin`
            })
        }


    
    } catch (error) {
        return res.status(HTTP.BAD_REQUEST).json({
            message:`error updating about us`
        })
    }
}
export const deleteAboutUsInfo = async(req:Request,res:Response)=>{
    try {
        const {aboutUsID,adminID} = req.params;
        
        const admin = await adminModel.findById(adminID)

        if (admin) {
            const about = await aboutUsModel.findById(aboutUsID)
            if (about) {
                const updateAbout = await aboutUsModel.findByIdAndDelete(aboutUsID)
        return res.status(HTTP.OK).json({
            message:"deleted ",
            data:updateAbout
        })
         
            } else {
                return res.status(HTTP.BAD_REQUEST).json({
                    message:`about us info does not exist `
                })
                    }
                } else {
                    return res.status(HTTP.BAD_REQUEST).json({
                        message:`you are not an admin`
                    })
        }
       
    } catch (error) {
        return res.status(HTTP.BAD_REQUEST).json({
            message:`error deleted about us`
        })
    }
}
export const viewAllAboutUsInfo = async(req:Request,res:Response)=>{
    try {

        const updateAbout = await aboutUsModel.find().sort({
            createdAt: -1
        })

        return res.status(HTTP.OK).json({
            message:"all aboutUs",
            data:updateAbout
        })
    } catch (error) {
        return res.status(HTTP.BAD_REQUEST).json({
            message:`error getting all about us`
        })
    }
}

