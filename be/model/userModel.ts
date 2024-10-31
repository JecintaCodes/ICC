import {Document,Schema,model,Types} from "mongoose";

interface iUser{
    userName:string,
    email:string,
    password:string,
    token?:string,
    profile?:string,
    image?:string,
    imageID?:string,
    admins:{},
    verify:boolean,
}

interface iUserData extends iUser, Document{};
const userModel = new Schema<iUserData>({
    userName:{
        type: String,
        require:true,
    },
    email:{
        type: String,
        unique:true, 
        lowercase:true     
    },
  
    profile:{
        type: String,
        
    },
    password:{
        type: String,
        require:true,
    },
    token:{
        type: String,
    },
    imageID:{
        type: String,
    },
    image:{
        type: String,
    },
    admins:{
        type: Types.ObjectId,
        ref:"users"
    },
    verify:{
        type: Boolean
    },  
},{timestamps: true})

export default model<iUserData>("users",userModel)