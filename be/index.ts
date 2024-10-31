import express, { Application } from "express"
import { mainApp } from "./mainApp"
import env from "dotenv"
import { IccDataBaseFunction } from "./config/DataBase";
env.config();

const realPort:number = parseFloat(process.env.PORTNUMBER!)
const port: number = realPort;
const app:Application = express()

mainApp(app)
const server = app.listen(port,()=>{
    console.log("")
    IccDataBaseFunction();
    console.log("")
    console.log(`server is listening to port${port}`)
    console.log("")
})


process.on("uncaughtException",(error: any)=>{
    console.log(`server is shutting down due to uncaughtException: ${error}`)
    process.exit(1);
})
process.on("unhandledRejection",(reason: any)=>{
    console.log(`server is shutting down due to unhandledRejection: ${reason}`)
    process.exit(1);
})