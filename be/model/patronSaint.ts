import {Schema,model,Document,Types} from "mongoose";

interface iPatronSaints{
    title:string,
    description:string,
    adminID:string,
    imageID?:string,
    image?:string,
    admins:{},
}

interface iPatronSaintsData extends iPatronSaints, Document{};
const patronSaintModel = new Schema<iPatronSaintsData>({
    title:{
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
        ref:"patronsaints"
    },
    
},{timestamps: true})

export default model<iPatronSaintsData>("patronsaints",patronSaintModel)