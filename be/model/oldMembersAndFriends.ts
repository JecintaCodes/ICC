import {Schema,model,Document,Types} from "mongoose";

interface iOldMembersAndFriends{
    tittle:string,
    description:string,
    image?:string,
    imageID?:string,
    adminID:string,
    admins:{},
}

interface iOldMembersAndFriendsData extends iOldMembersAndFriends,  Document{};
const oldMembersAndFriendsModel = new  Schema<iOldMembersAndFriendsData>({
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
        type:  Types.ObjectId,
        ref:"oldmembersandfriends"
    },
    
},{timestamps: true})

export default  model<iOldMembersAndFriendsData>("oldmembersandfriends",oldMembersAndFriendsModel)