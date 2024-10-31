import {Schema,model,Document,Types} from "mongoose";

interface iFeastDay{
    title:string,
    description:string,
    image?:string,
    imageID?:string,
    adminID:string,
    admins:{},
}

interface iFeastDayData extends iFeastDay, Document{};
const feastDayModel = new Schema<iFeastDayData>({
    title:{
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
        ref:"feastdays"
    },
    
},{timestamps: true})

export default model<iFeastDayData>("feastdays",feastDayModel)