import { Router } from "express";
import userRouter from "./user.route";
import tweetRouter from "./tweet.route";
import helloRouter from "./hello.route";

const router = Router()

router.use('/user',userRouter)
router.use('/tweet',tweetRouter)
router.use('/hello',helloRouter)

export default router;