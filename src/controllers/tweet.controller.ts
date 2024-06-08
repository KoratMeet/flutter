import { Request, Response } from "express";
import { getTweetRepo, createTweetRepo, deleteTweetRepo, updateTweetRepo } from "../repositories/tweet.repository";
import { ITweetInterface } from "../database/interfaces/tweet.interface";
import { updateUserWithTweet } from "../repositories/user.repository";


export const getTweetController = async(req: Request, res: Response)=>{
    const tweetId = req.query.tweetId as string;

    try{

        const tweet = await getTweetRepo(tweetId)
        if(tweet){
            res.status(200).json({data:tweet})
        }
        else{
            res.status(500).json({error:"tweet not found"})
        }

    }catch(error){
        console.log(error)
        res.status(500).json({error: error});
    }
}

export const createTweetController = async(req: Request, res: Response)=>{
    const tweet : ITweetInterface = req.body

    try{

        const success = await createTweetRepo(tweet)
        if(success){
            const userUpdateSuccess = await updateUserWithTweet(tweet.adminId,tweet.tweetId)
            if(userUpdateSuccess){
                res.status(200).json({"data":tweet})

            }
            else{
                res.status(500).json({error:"User not Updated"})

            }
            
        }
        else{
            res.status(500).json({error:"tweet not Created"})
        }

    }catch(error){
        console.log(error)
        res.status(500).json({error: error});
    }
}

export const updatedTweetController = async(req: Request, res: Response)=>{
    const updatedtweet : ITweetInterface = req.body

    try{

        const success = await updateTweetRepo(updatedtweet,updatedtweet.tweetId);
        if(success){
            res.status(200).json({"data":"tweet Updated"})
        }
        else{
            res.status(500).json({error:"tweet not Updated"})
        }

    }catch(error){
        console.log(error)
        res.status(500).json({error: error});
    }
}

export const deleteTweetController = async(req: Request, res: Response)=>{
    const tweetId = req.query.tweetId as string;

    try{

        const success = await deleteTweetRepo(tweetId)
        if(success){
            res.status(200).json({"data":"tweet deleted"})
        }
        else{
            res.status(500).json({error:"tweet not deleted"})
        }

    }catch(error){
        console.log(error)
        res.status(500).json({error: error});
    }
}