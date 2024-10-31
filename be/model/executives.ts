import {Schema,model,Document,Types} from "mongoose";

interface iExecutives{
    tittle:string,
    name:string,
    description:string,
    image?:string,
    imageID?:string,
    adminID:string,
    admins:{},
}

interface iExecutivesData extends iExecutives, Document{};
const executivesModel = new Schema<iExecutivesData>({
    name:{
        type: String,
    },
    tittle:{
        type: String,
    },
 
    description:{
        type: String,
    }, 
    image:{
        type: String,
    },
    imageID:{
        type: String,
    },
    adminID:{
        type: String,
    },
    admins:{
        type: Types.ObjectId,
        ref:"executives"
    },
    
},{timestamps: true})

export default model<iExecutivesData>("executives",executivesModel)