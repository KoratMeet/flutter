 import { Router } from "express";
 import { getUserController,createUserController,deleteUserController,updatedUserController } from "../controllers/user.controller";

 const userRouter = Router();

 //define route paths

 userRouter.get("/:userId",getUserController)
 userRouter.post("/",createUserController)
 userRouter.delete("/:userId",deleteUserController)
 userRouter.put("/",updatedUserController)

 export default userRouter 