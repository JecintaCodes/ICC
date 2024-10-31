import {Schema,model,Document,Types} from "mongoose";

interface iAdmin{
    userName:string,
    email:string,
    password:string,
    token?:string,
    role:string,
    image?:string,
    imageID?:string,
    secretCode:string,
    users:Array<{}>,
    verify:boolean,
    programms:Array<{}>,
    aboutUs:Array<{}>,
    ourPriests:Array<{}>,
    patronsAndMatrons:Array<{}>,
    patronSaints:Array<{}>,
    oldMembersAndFriends:Array<{}>,
    gallerys:Array<{}>,
    members:Array<{}>,
    events:Array<{}>,
    executives:Array<{}>,
    committees:Array<{}>,
    bestSingers:Array<{}>,
    feastDays:Array<{}>,
    values:Array<{}>,
}

interface iAdminData extends iAdmin, Document{};
const adminModel = new Schema<iAdminData>({
    userName:{
        type: String,
    },
    email:{
        type: String,
        unique: true,
        require:true,
        lowercase:true
    },
    password:{
        type: String,
        require:true,
    },
    token:{
        type: String,
    },
    role:{
        type: String,
        require:true,
    },
    secretCode:{
        type: String,
        require:true,
    },
    imageID:{
        type: String,
    },
    image:{
        type: String,
    },
    users:[{
        type: Types.ObjectId,
        ref:"admins"
    }],
    verify:{
        type: Boolean,
    },  
    programms:[{
        type: Types.ObjectId,
        ref:"admins"
    }],
    patronsAndMatrons:[{
        type: Types.ObjectId,
        ref:"admins"
    }],
    aboutUs:[{
        type: Types.ObjectId,
        ref:"admins"
    }],

    ourPriests:[{
        type: Types.ObjectId,
        ref:"admins"
    }],
    
    patronSaints:[{
        type: Types.ObjectId,
        ref:"admins"
    }],
    bestSingers:[{
        type: Types.ObjectId,
        ref:"admins"
    }],
    oldMembersAndFriends:[{
        type: Types.ObjectId,
        ref:"admins"
    }],
    gallerys:[{
        type: Types.ObjectId,
        ref:"admins"
    }],
    members:[{
        type: Types.ObjectId,
        ref:"admins"
    }],
    executives:[{
        type: Types.ObjectId,
        ref:"admins"
    }],

    events:[{
        type: Types.ObjectId,
        ref:"admins"
    }],
    committees:[{
        type: Types.ObjectId,
        ref:"admins"
    }],
     
    feastDays:[{
        type: Types.ObjectId,
        ref:"admins"
    }],
    values:[{
        type: Types.ObjectId,
        ref:"admins"
    }],
     
},{timestamps: true})

export default model<iAdminData>("admins",adminModel)