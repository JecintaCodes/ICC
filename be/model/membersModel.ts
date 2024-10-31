import {Schema,model,Document,Types} from "mongoose";

interface iMembers{
    title:string,
    userName:string,
    email:string,
    password:string,
    token?:string,
    role:string,
    profile?:string,
    part?:string,
    image?:string,
    imageID?:string,
    secretCode:string,
    admins:{},
    verify:boolean,
}

interface iMembersData extends iMembers, Document{};
const membersModel = new Schema<iMembersData>({
    email:{
        type: String,
        lowercase: true,
        unique: true,
        require:true,
    },
    role:{
        type: String,
    },
    token:{
        type: String,
    },
    userName:{
        type: String,
        require:true,
    },
    password:{
        type: String,
        require:true,
    },
    secretCode:{
        type: String,
        require:true,
    },
    profile:{
        type: String,
    },
    title:{
        type: String,
    },
 
    part:{
        type: String,
    },
 
    verify:{
        type: Boolean,
    },

    image:{
        type: String,
    },
    imageID:{
        type: String,
    },
    admins:{
        type: Types.ObjectId,
        ref:"admins"
    },
    
},{timestamps: true})

export default model<iMembersData>("members",membersModel)