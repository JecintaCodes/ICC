import { v2 as cloudinary } from "cloudinary";
import env from "dotenv"
env.config();


cloudinary.config({
  cloud_name: process.env.CLOUDNAME,
  api_key: process.env.CLOUDKEY,
  api_secret: process.env.CLOUDKEY,
});

export default cloudinary