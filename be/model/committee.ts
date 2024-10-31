import {Schema,model,Document,Types} from "mongoose";

interface iCommittee{
    title:string,
    name:string,
    description:string,
    image?:string,
    imageID?:string,
    adminID?:string,
    admins:{},
}

interface iCommitteeData extends iCommittee, Document{};
const committeeModel = new Schema<iCommitteeData>({
    name:{
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
    adminID:{
        type: String,
    },
    imageID:{
        type: String,
    },
    admins:{
        type: Types.ObjectId,
        ref:"committees"
    },
    
},{timestamps: true})

export default model<iCommitteeData>("committees",committeeModel)