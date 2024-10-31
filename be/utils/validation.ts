import joi from "joi"


export const createUserValidation = joi.object({
    userName:joi.string().require(),
    email:joi.string().email().lowecase().unique().require(),
    password:joi.string().require(),
    confirm:joi.string().require().ref("password"),
})