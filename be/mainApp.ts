import express,{Application, NextFunction, Request, Response} from "express"
import cors from "cors"
import morgan from "morgan"
// import helmet from "helmet "
import { HTTP, mainError } from "./errors/mainError";
import { errorhandler } from "./errors/errorHandler";
import aboutUsRouter from "./router/aboutUsRouter";
import adminRouter from "./router/adminRouter";
import userRouter from "./router/userRouter";
import bestSingersRouter from "./router/bestSingerRouter";
import committeRouter from "./router/committeeRouter";
import executiveRouter from "./router/executiveRouter";
import feastDayRouter from "./router/feastDayRouter";
import oldMembersAndFriendsRouter from "./router/oldmombersAndFriendsRouter";
import ourPriestRouter from "./router/ourPriestsRouter";
import patronAndMatronRouter from "./router/patronAndMatronRouter";
import programmeRouter from "./router/programmeRouter";
import memberRouter from "./router/memberRouter";
import PatronSaintsRouter from "./router/patronSaints";
import path from "path"
export const mainApp = (app: Application) => {
    app.use(
      cors({
        origin: "*",
        methods: ["POST", "GET", "PATCH", "DELETE"],
      })
    );
    app.use(express.json());
    app.use(morgan("dev"))
    // app.use(helmet())
    app.set("view engine", "ejs")
  
  app.use("/api",aboutUsRouter)
  app.use("/api",adminRouter)
  app.use("/api",userRouter)
  app.use("/api",bestSingersRouter)
  app.use("/api",committeRouter)
  app.use("/api",executiveRouter)
  app.use("/api",feastDayRouter)
  app.use("/api",oldMembersAndFriendsRouter)
  app.use("/api",ourPriestRouter)
  app.use("/api",patronAndMatronRouter)
  app.use("/api",programmeRouter)
  app.use("/api",memberRouter)
  app.use("/api",PatronSaintsRouter)
  
    app.get("/", (req: Request, res: Response) => {
      try {

        const data = path.join(__dirname,"views/index.ejs")

        return res.status(201).render(data)
          // return res.status(200).json({
          //     message: 'welcome'
          //   });
      } catch (error) {
        return res.status(404).json({
          message: Error,
          data: error,
        });
      }
    });
  
    app.all("*", (req: Request, res: Response, next: NextFunction) => {
      next(
        new mainError({
          name: "Router",
          message: `problem due to incorrect router ${req.originalUrl}`,
          status: HTTP.BAD_REQUEST,
          success: false,
        })
      );
    });
  
    app.use(errorhandler);
  };