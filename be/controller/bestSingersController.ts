import {Request,Response} from "express"
import { HTTP } from "../errors/mainError";
import {Types} from "mongoose";
import adminModel from "../model/adminModel";
import userModel from "../model/userModel";
import bestSingersModel from "../model/bestSingerOf theMonth"

export const createbestSingers = async (req:Request,res:Response)=>{
    try {
            const {adminID,userID} = req.params

            const admin = await adminModel.findById(adminID)

            if (admin) {
                const user = await userModel.findById(userID)
                if (user) {
        const {title, name,part} = req.body;    
        const createbestSingers = await bestSingersModel.create({
            title,
            name,
            part,
            image:"",
            imageID:"",
            adminID:admin?._id,
            userID
        })
        admin?.bestSingers?.push( new Types.ObjectId(createbestSingers?._id!))
        admin.save();

        return res.status(HTTP.CREATED).json({
            message: "bestSingers created Successfully",
           data: createbestSingers
          });          
                    
                } else {
                    return res.status(HTTP.BAD_REQUEST).json({
                        message:"this user does not exist "
                    })   
                }
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
export const updatebestSingersInfo = async(req:Request,res:Response)=>{
    try {
        const {bestSingersID,adminID} = req.params;

        const admin = await adminModel.findById(adminID)

        if (admin) {
        const bestSinger = await bestSingersModel.findById(bestSingersID)
            if (bestSinger) {
        const {title,name,part } = req.body;
        const updatebestSiger = await bestSingersModel.findByIdAndUpdate
        (bestSingersID,

            {
                title,
                part,
                name,
                image:"",
                imageID:""
            },
            {new:true}
        )

        return res.status(HTTP.CREATED).json({
            message:"bestSingersInfo Updated",
            data:updatebestSiger
        })
            } else {
                 return res.status(HTTP.BAD_REQUEST).json({
            message:`best-singers info does not exist u`
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
export const deletebestSingersInfo = async(req:Request,res:Response)=>{
    try {
        const {bestSingersID,adminID} = req.params;
        
        const admin = await adminModel.findById(adminID)

        if (admin) {
            const bestsinger = await bestSingersModel.findById(bestSingersID)
            if (bestsinger) {
                const deleteAbout = await bestSingersModel.findByIdAndDelete(bestSingersID)

        return res.status(HTTP.OK).json({
            message:"best singers deleted ",
            data:deleteAbout
        })       
            } else {
                return res.status(HTTP.BAD_REQUEST).json({
                    message:`best singers us info does not exist `
                })
                    }
                } else {
                    return res.status(HTTP.BAD_REQUEST).json({
                        message:`you are not an admin`
                    })
        }
       
    } catch (error) {
        return res.status(HTTP.BAD_REQUEST).json({
            message:`error deleted best singers`
        })
    }
}
export const viewAllbestSingersInfo = async(req:Request,res:Response)=>{
    try {

        const bestSinger = await bestSingersModel.find()

        return res.status(HTTP.OK).json({
            message:"all bestSingers",
            data:bestSinger
        })
        
    } catch (error) {
        return res.status(HTTP.BAD_REQUEST).json({
            message:`error getting all about us`
        })
    }
}
export const viewOnebestSingersTiTle = async(req:Request,res:Response)=>{
    try {
        const {title} = req.body;
        const bestSinger = await bestSingersModel.find({title}).sort({
            createdAt: -1
        })
        return res.status(HTTP.OK).json({
            message:"all bestSingers",
            data:bestSinger
        })

    } catch (error) {
        return res.status(HTTP.BAD_REQUEST).json({
            message:`error getting all about us`
        })
    }
}

