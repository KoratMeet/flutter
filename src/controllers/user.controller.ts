import { Request, Response } from "express";
import { getUserRepo, createUserRepo, deleteUserRepo, updateUserRepo } from "../repositories/user.repository";
import { IUserInterface } from "../database/interfaces/user.interface";

export const getUserController = async(req: Request, res: Response)=>{
    const userId = req.params.userId as string;

    try{

        const user = await getUserRepo(userId)
        if(user){
            res.status(200).json({data:user})
        }
        else{
            res.status(500).json({error:"User not found"})
        }

    }catch(error){
        console.log(error)
        res.status(500).json({error: error});
    }
}

export const createUserController = async(req: Request, res: Response)=>{
    const user : IUserInterface = req.body

    try{

        const success = await createUserRepo(user)
        if(success){
            res.status(200).json({"data":user})
        }
        else{
            res.status(500).json({error:"User not Created"})
        }

    }catch(error){
        console.log(error)
        res.status(500).json({error: error});
    }
}

export const updatedUserController = async(req: Request, res: Response)=>{
    const updateduser : IUserInterface = req.body

    try{

        const success = await updateUserRepo( updateduser,updateduser.uid);
        if(success){
            res.status(200).json({"data":"user Updated"})
        }
        else{
            res.status(500).json({error:"User not Updated"})
        }

    }catch(error){
        console.log(error)
        res.status(500).json({error: error});
    }
}

export const deleteUserController = async(req: Request, res: Response)=>{
    const userId = req.params.userId as string;

    try{

        const success = await deleteUserRepo(userId)
        if(success){
            res.status(200).json({"data":"User deleted"})
        }
        else{
            res.status(500).json({error:"User not deleted"})
        }

    }catch(error){
        console.log(error)
        res.status(500).json({error: error});
    }
}