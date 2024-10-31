import {Schema,model,Document,Types} from "mongoose";

interface iBestSingers{
    title:string,
    name:string,
    part:string,
    image?:string,
    userID:string,
    adminID:string,
    imageID?:string,
    admins:{},
}

interface iBestSingersData extends iBestSingers, Document{};
const bestSingersModel = new Schema<iBestSingersData>({
    name:{
        type: String,
    },
    title:{
        type: String,
    },
 
    part:{
        type: String,
    },
   
    userID:{
        type: String,
    },
    adminID:{
        type: String,
    },
    image:{
        type: String,
    },
    imageID:{
        type: String,
    },
    admins:{
        type: Types.ObjectId,
        ref:"bestsingers"
    },
    
},{timestamps: true})

export default model<iBestSingersData>("bestsingers",bestSingersModel)