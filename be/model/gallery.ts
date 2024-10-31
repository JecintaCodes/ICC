import {Schema,model,Document,Types} from "mongoose";

interface iGallery{
    audioID:string,
    audio:string,
    video:string,
    videoID:string,
    image?:string,
    imageID?:string,
    adminID:string,
    admins:{},
}

interface iGalleryData extends iGallery, Document{};
const galleryModel = new Schema<iGalleryData>({
    audio:{
        type: String,
    },
    audioID:{
        type: String,
    },
    adminID:{
        type: String,
    },
 
    video:{
        type: String,
    },
    videoID:{
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
        ref:"gallerys"
    },
    
},{timestamps: true})

export default model<iGalleryData>("gallerys",galleryModel)