import streamifier from "streamifier"
import cloudinary from "./cloudinary"
export const myStreamifier = async (req: any) => {
    let image: Array<string> = [];
  
    for (let i of req.files) {
      console.log(i);
      const streamUpload = async (req: any) => {
        return new Promise(async (resolve, reject) => {
          let stream = cloudinary.uploader.upload_stream(
            (error: Error, result: any) => {
              if (result) {
                return resolve(result);
              } else {
                return reject(error);
              }
            }
          );
  
          streamifier.createReadStream(i.buffer).pipe(stream);
        });
      };
  
      const { secure_url }: any = await streamUpload(req);
  
      image.push(secure_url);
    }
  
    return image;
  };

export const streamUpload = async (req : any) =>{
    return new Promise (async (resolve, reject)=>{
        let stream = cloudinary.uploader.upload_stream(
            (err : Error, result : any)=>{
                if (result) {
                    return resolve(result)
                } else {
                    return reject(err)
                }
            }
        )

        streamifier.createReadStream(req.file.buffer).pipe(stream)
    })
};