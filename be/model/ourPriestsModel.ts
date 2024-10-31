import {Schema,model,Document,Types} from "mongoose";

interface iOurPriests{
    title:string,
    description:string,
    image?:Array<string>,
    imageID?:string,
    adminID:string,
    admins:{},
}

interface iOurPriestsData extends iOurPriests, Document{};
const ourPristsModel = new Schema<iOurPriestsData>({
    title:{
        type: String,
    },
 
    description:{
        type: String,
    },
    adminID:{
        type: String,
    },
   
    image:[{
        type: Array<String>,
    }],
    imageID:{
        type: String,
    },
    admins:{
        type: Types.ObjectId,
        ref:"ourpriests"
    },
    
},{timestamps: true})

export default model<iOurPriestsData>("ourpriests",ourPristsModel)