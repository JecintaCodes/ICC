import mongoose from "mongoose"
import env from "dotenv"
env.config();

const IccDataBase: string =  process.env.MONGOOSESTRING!

export const IccDataBaseFunction = async () =>{
    try {
      await mongoose.connect(IccDataBase).then(()=>{
            console.log(`icc database connected to ${IccDataBase}`)
        })
    } catch (error:any) {
        console.log(`error connecting to database ${error}`)
    }
}