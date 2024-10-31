import {Schema,model,Document,Types} from "mongoose";

interface iEvents{
    content:string,
    video:string,
    videoID:string,
    tittle:string,
    description:string,
    image?:string,
    imageID?:string,
    adminID:string,
    admins:{},
    
}

interface iEventsData extends iEvents, Document{};
const eventsModel = new Schema<iEventsData>({
    content:{
        type: String,
    },
    video:{
        type: String,
    },
    videoID:{
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
    adminID:{
        type: String,
    },
    imageID:{
        type: String,
    },
    admins:{
        type: Types.ObjectId,
        ref:"events"
    },
    
},{timestamps: true})

export default model<iEventsData>("events",eventsModel)