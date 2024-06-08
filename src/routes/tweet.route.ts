import { Router } from "express";
import { getTweetController,createTweetController,deleteTweetController,updatedTweetController } from "../controllers/tweet.controller";

const tweetRouter = Router();

//define route paths

tweetRouter.get("/:tweetId",getTweetController)
// tweetRouter.get("/",getAllTweetController)
tweetRouter.post("/",createTweetController)
tweetRouter.delete("/:tweetId",deleteTweetController)
tweetRouter.put("/",updatedTweetController)

export default tweetRouter 