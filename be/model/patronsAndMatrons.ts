import {Schema,model,Document,Types} from "mongoose";

interface iPatonsAndMatrons{
    name:string,
    description:string,
    image?:string,
    imageID?:string,
    adminID:string,
    admins:{},
}

interface iPatonsAndMatronsData extends iPatonsAndMatrons, Document{};
const patonsAndMatronsModel = new Schema<iPatonsAndMatronsData>({
    name:{
        type: String,
    },
 
    description:{
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
        ref:"patronsandmatrons"
    },
    
},{timestamps: true})

export default model<iPatonsAndMatronsData>("patronsandmatrons",patonsAndMatronsModel)