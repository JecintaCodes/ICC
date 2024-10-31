import { Request,Response } from "express";
import bcrypt from "bcrypt"
import membersModel from "../model/membersModel";
import { role } from "../utils/role";
import { HTTP } from "../errors/mainError";
import adminModel from "../model/adminModel";
import crypto from "crypto"

export const createMember = async(req:Request,res:Response)=>{
    try {
       const {userName,email,password,part,title, secretCode} = req.body; 

       const salt = await bcrypt.genSalt(10);
       const harsh = await bcrypt.hash(password,salt);
       const token = crypto.randomBytes(4).toString("hex")

       const secret = "immaculateConceptionChior"

       if (secret === secretCode) {
         const member = await membersModel.create({
            userName,
            email,
            password:harsh,
            secretCode,
            role:role.MEMBERS,
            part,
            title,
            token:token
          })
            
       return res.status(HTTP.CREATED).json({
         message:"member created",
         data:member
       })
       } else {           
       return res.status(HTTP.BAD_REQUEST).json({
         message:"invalid code"
       })
       }
    
    } catch (error) {
       return res.status(404).json({
        message:`error creating one member ${error}`
       }) 
    }
}
export const checkMemberToken = async(req:Request,res:Response)=>{
    try {

        const {memberID} = req.params;
        const {token} = req.body;

        const member = await membersModel.findById(memberID)

        if (member) {
            if (member?.token === token) {
                  return res.status(HTTP.CREATED).json({
                    message:"you can now signUP"
                  })  
            } else {
                return res.status(HTTP.BAD_REQUEST).json({
                    message:"wrong token"
                  })  
            }
        } else {
            return res.status(HTTP.BAD_REQUEST).json({
                message:"please go and register"
              })
        }
        return res.status(HTTP.CREATED).json({
            message:"member created",
            data:member
          })
   
       } catch (error) {
          return res.status(404).json({
           message:`error creating one member ${error}`
          }) 
       }
}
export const SignInMember = async(req:Request,res:Response)=>{
   try {
      const {email,password} = req.body;

      const user = await membersModel.findOne({email})

      if (user) {
         const comp = await bcrypt.compare(password,user?.password)
         if (comp) {
      //   const create = await membersModel.create({
      //          email,
      //          password
      //       })
            return res.status(HTTP.CREATED).json({
               message:`user sign in ${user?.userName} `,
               // data:create._id
              })
         } else {
            return res.status(HTTP.BAD_REQUEST).json({
               message:`incorrect password `
              })
         }
      } else {
         return res.status(HTTP.BAD_REQUEST).json({
            message:`error from email`
           })
      }

   } catch (error) {
      return res.status(HTTP.BAD_REQUEST).json({
         message:`error signing in user ${error}`
        })
   }
}
export const viewMembers = async(req:Request,res:Response)=>{
   try {

      const menber = await membersModel.find().sort({
         createdAt: -1
      })

            return res.status(HTTP.OK).json({
               message:`all menbers gotten`,
               data:menber
            })
   } catch (error) {
      return res.status(HTTP.BAD_REQUEST).json({
         message:`error getting all menber ${error}`
        })
   }
}
export const viewOnePart = async(req:Request,res:Response)=>{
   try {
      const{part} = req.body;

      const parts = await membersModel.find({part})

            return res.status(HTTP.OK).json({
               message:`${part} part gotten`,
               data:parts
            })
   } catch (error) {
      return res.status(HTTP.BAD_REQUEST).json({
         message:`error getting one part ${error}`
        })
   }
}
export const viewOneMember = async(req:Request,res:Response)=>{
   try {
      const{memberID} = req.params;

      const member = await membersModel.findById(memberID)

            return res.status(HTTP.OK).json({
               message:`one members gotten`,
               data:member
            })
   } catch (error) {
      return res.status(HTTP.BAD_REQUEST).json({
         message:`error getting one member ${error}`
        })
   }
}
export const deleteOneMember = async(req:Request,res:Response)=>{
   try {
      const{memberID,adminID} = req.params;

      const admin = await adminModel.findById(adminID)

      if (admin) {
      const user = await membersModel.findById(memberID)      
      if (user) {
         const adUse = await membersModel.findByIdAndDelete(memberID)

         return res.status(HTTP.OK).json({
            message:`one member deleted`,
            data:adUse
         })
      } else {
         return res.status(HTTP.BAD_REQUEST).json({
            message:`there's no such user`,     
         })
      }

      } else {
         return res.status(HTTP.BAD_REQUEST).json({
            message:`u are not an admin`,          
         })
      }
     
   } catch (error) {
      return res.status(HTTP.BAD_REQUEST).json({
         message:`error deleting one user ${error}`
        })
   }
}
export const updateOneMemberInfo = async(req:Request,res:Response)=>{
   try {
      const{memberID} = req.params;
      const {userName,part,profile} = req.body;

      const user = await membersModel.findByIdAndUpdate(
        memberID,
         {userName,part,profile},
         {new:true}
         )
            return res.status(HTTP.CREATED).json({
               message:` user info updated`,
               data:user
            })
   } catch (error) {
      return res.status(HTTP.BAD_REQUEST).json({
         message:`error updating one user info ${error}`
        })
   }
}

// export const register = async (req: Request, res: Response) => {
//     try {
//       const { name, email, password } = req.body;
  
//       const token = crypto.randomBytes(32).toString("hex");
  
//       const salt = await bcrypt.genSalt(10);
//       const hash = await bcrypt.hash(password, salt);
  
//       const user = await prisma.authModel.create({
//         data: {
//           name,
//           email,
//           password: hash,
//           token,
//         },
//       });
  
//       const tokenID = jwt.sign({ id: user?.id }, "secret");
//       sendMail(user, tokenID).then(()=>{
//         console.log("sent");
//       })
  
//       return res.status(HTTP.CREATED).json({
//         message: "user created Successfully",
//         data: user,
//         token: tokenID,
//       });
//     } catch (error: any) {
//       return res.status(HTTP.BAD).json({
//         message: "Error",
//         data: error.message,
//       });
//     }
//   };