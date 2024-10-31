import {Schema,model,Document,Types} from "mongoose";

interface iValues{
    tittle:string,
    adminID:string,
    description:string,
    admins:Array<{}>,
    
}

interface iValuesData extends iValues, Document{};
const valuesModel = new Schema<iValuesData>({
    adminID:{
        type: String,
    },
    tittle:{
        type: String,
    },
 
    description:{
        type: String,
    }, 

    admins:[{
        type: Types.ObjectId,
        ref:"admins"
    }],
    
},{timestamps: true})

export default model<iValuesData>("values",valuesModel)