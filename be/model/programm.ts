import {Schema,model,Document,Types} from "mongoose";

interface iProgramme{
    tittle:string,
    description:string,
    image?:string,
    imageID?:string,
    adminID?:string,
    admins:{},
}

interface iProgrammeData extends iProgramme, Document{};
const progammeModel = new Schema<iProgrammeData>({
    tittle:{
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
        ref:"programms"
    },
    
},{timestamps: true})

export default model<iProgrammeData>("programms",progammeModel)