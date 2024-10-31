import {Document,Schema,model,Types} from "mongoose";

interface iAboutUs{
    title:string,
    adminID:string,
    description:string,
    image:string,
    admins:{},
}

interface iAboutUsData extends iAboutUs, Document{};
const aboutUsModel = new Schema<iAboutUsData>({
    adminID:{
        type: String,
    },
    title:{
        type: String,
    },
    description:{
        type: String,
    },
    image:{
        type: String,
    },
    admins:{
        type:Types.ObjectId,
        ref:"aboutus"
    },
    
     
},{timestamps: true})

export default model<iAboutUsData>("aboutus",aboutUsModel)