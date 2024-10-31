import express, { Request, Response } from "express"
import { HTTP } from "../errors/mainError"
import adminModel from "../model/adminModel";
import bcrypt from "bcrypt"
import { role } from "../utils/role";
import crypto from "crypto"

export const createAdmin = async (req:Request,res:Response) =>{
    try {
        const {userName, email, password,secretCode} = req.body;  
        
        const salt = await bcrypt.genSalt(10);
        const harsh = await bcrypt.hash(password, salt)

        const token = crypto.randomBytes(4).toString("hex")

        const secret = "immaculateConceptionChior"
 
        if (secret === secretCode) {
          const user = await adminModel.create({
             userName,
             email,
             password:harsh,
             secretCode,
             role:role.ADMIN,
             token:token
           })
             
        return res.status(HTTP.CREATED).json({
          message:"Admin created",
          data:user
        })
        } else {
             
        return res.status(HTTP.BAD_REQUEST).json({
          message:"invalid code"
        })
        }
    } catch (error) {
        return res.status(HTTP.BAD_REQUEST).json({
            message:`please sign up as a user ${error} `
        })
    }
}
export const checkAdminToken = async(req:Request,res:Response)=>{
    try {

        const {adminID} = req.params;
        const {token} = req.body;

        const admin = await adminModel.findById(adminID)

        if (admin) {
            if (admin?.token === token) {
                  return res.status(HTTP.CREATED).json({
                    message:"you can now signUP"
                  })  
            } else {
                return res.status(HTTP.BAD_REQUEST).json({
                    message:"wrong token"
                  })  
            }
        } else {
            return res.status(HTTP.BAD_REQUEST).json({
                message:"please go and register"
              })
        }

   
       } catch (error) {
          return res.status(404).json({
           message:`error creating one admin ${error}`
          }) 
       }
}
export const signInAdmin = async (req:Request,res:Response) =>{
    try {
        const { email, password} = req.body;  
        
        const admin = await adminModel.findOne({
          email
        })

        if(admin){
            const comp = await bcrypt.compare(password,admin?.password!);
          if (comp) {
                  return res.status(HTTP.CREATED).json({
                    message:`welcome back ${admin?.userName} `
                })
          } else {
            return res.status(HTTP.BAD_REQUEST).json({
                message:`incorrect password `
            })
          }
        }else{
            return res.status(HTTP.BAD_REQUEST).json({
                message:`incorrect email `
            })
        }
        
    } catch (error) {
        return res.status(HTTP.BAD_REQUEST).json({
            message:`please sign up as a user ${error} `
        })
    }
}
export const viewAllAdmins = async (req:Request,res:Response) =>{
    try {
        const admins = await adminModel.find().sort({
            createdAt: -1
        });
        return res.status(HTTP.OK).json({
            message:"all admins gotten",
            data:admins
        })
    } catch (error) {
        return res.status(HTTP.BAD_REQUEST).json({
            message:`all admins not gotten ${error} `
        })
    }
}
export const viewOneAdmins = async (req:Request,res:Response) =>{
    try {
        const {adminID} = req.params;

        const admin = await adminModel.findById(adminID);
        return res.status(HTTP.OK).json({
            message:"gotten one admin",
            data: admin
        })
    } catch (error) {
        return res.status(HTTP.BAD_REQUEST).json({
            message:`one admins not gotten ${error} `
        })
    }
}
export const updateAdminsInfo = async (req:Request,res:Response) =>{
    try {
        const {adminID} = req.params;
        const {userName} = req.body;

        const admin = await adminModel.findByIdAndUpdate(adminID,{userName},{new:true});
        
        return res.status(HTTP.CREATED).json({
            message:"updated one admin",
            data: admin
        })
    } catch (error) {
        return res.status(HTTP.BAD_REQUEST).json({
            message:`one admins not updated ${error} `
        })
    }
}
export const deleteAdmins = async (req:Request,res:Response) =>{
    try {
        const {adminID} = req.params;

        const admin = await adminModel.findByIdAndDelete(adminID);

        return res.status(HTTP.OK).json({
            message:"deleted one admin",
            data: admin
        })
    } catch (error) {
        return res.status(HTTP.BAD_REQUEST).json({
            message:`one admins not deleted ${error} `
        })
    }
}