import { Request, Response } from "express";
import bcrypt from "bcrypt";
import userModel from "../model/userModel";
import { role } from "../utils/role";
import { HTTP } from "../errors/mainError";
import adminModel from "../model/adminModel";
import crypto from "crypto";

export const createUser = async (req: Request, res: Response) => {
  try {
    const { userName, email, password } = req.body;

    const salt = await bcrypt.genSalt(10);
    const harsh = await bcrypt.hash(password, salt);

    const token = crypto.randomBytes(4).toString("hex");

    const user = await userModel.create({
      userName,
      email,
      password: harsh,
      role: role.USERS,
      token: token,
    });
    return res.status(HTTP.CREATED).json({
      message: "user created",
      data: user,
    });
  } catch (error) {
    return res.status(404).json({
      message: `error creating user ${error}`,
    });
  }
};
export const checkUserToken = async (req: Request, res: Response) => {
  try {
    const { userID } = req.params;
    const { token } = req.body;

    const user = await userModel.findById(userID);

    if (user) {
      if (user?.token === token) {
        return res.status(HTTP.CREATED).json({
          message: "weldone you can now sign in",
          data: user,
        });
      } else {
        return res.status(HTTP.BAD_REQUEST).json({
          message: " wrong token ",
        });
      }
    } else {
      return res.status(HTTP.BAD_REQUEST).json({
        message: " please go and register ",
      });
    }
  } catch (error) {
    return res.status(HTTP.BAD_REQUEST).json({
      message: `error checking ur token ${error}`,
    });
  }
};
export const SignInUser = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    const user = await userModel.findOne({ email });

    if (user) {
      const comp = await bcrypt.compare(password, user?.password);
      if (comp) {
        return res.status(HTTP.CREATED).json({
          message: `welcom ${user?.userName} please explore `,
          data: user._id,
        });
      } else {
        return res.status(HTTP.BAD_REQUEST).json({
          message: `incorrect password `,
        });
      }
    } else {
      return res.status(HTTP.BAD_REQUEST).json({
        message: `error from email`,
      });
    }
  } catch (error) {
    return res.status(HTTP.BAD_REQUEST).json({
      message: `error signing in user ${error}`,
    });
  }
};
export const viewAllUser = async (req: Request, res: Response) => {
  try {
    const user = await userModel.find().sort({
      createdAt: -1,
    });

    return res.status(HTTP.OK).json({
      message: `all users gotten`,
      data: user,
    });
  } catch (error) {
    return res.status(HTTP.BAD_REQUEST).json({
      message: `error getting all user ${error}`,
    });
  }
};
export const viewOneUser = async (req: Request, res: Response) => {
  try {
    const { userID } = req.params;

    const user = await userModel.findById(userID);

    return res.status(HTTP.OK).json({
      message: `one users gotten`,
      data: user,
    });
  } catch (error) {
    return res.status(HTTP.BAD_REQUEST).json({
      message: `error geetin one user ${error}`,
    });
  }
};
export const deleteOneUser = async (req: Request, res: Response) => {
  try {
    const { userID, adminID } = req.params;

    const admin = await adminModel.findById(adminID);

    if (admin) {
      const user = await userModel.findById(userID);
      if (user) {
        const adUse = await userModel.findByIdAndDelete(userID);
        return res.status(HTTP.OK).json({
          message: `one user deleted`,
          data: adUse,
        });
      } else {
        return res.status(HTTP.BAD_REQUEST).json({
          message: `there's no such user`,
        });
      }
    } else {
      return res.status(HTTP.BAD_REQUEST).json({
        message: `u are not an admin`,
      });
    }
  } catch (error) {
    return res.status(HTTP.BAD_REQUEST).json({
      message: `error deleting one user ${error}`,
    });
  }
};
export const updateOneUserInfo = async (req: Request, res: Response) => {
  try {
    const { userID } = req.params;
    const { userName } = req.body;

    const user = await userModel.findByIdAndUpdate(
      userID,
      { userName },
      { new: true }
    );
    return res.status(HTTP.CREATED).json({
      message: ` user info updated`,
      data: user,
    });
  } catch (error) {
    return res.status(HTTP.BAD_REQUEST).json({
      message: `error updating one user info ${error}`,
    });
  }
};

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
