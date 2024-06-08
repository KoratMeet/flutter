import { Router, Request, Response } from "express";

const helloRouter = Router();

// define routes path

helloRouter.get("/",(req: Request, res: Response)=>{
    res.json({"data" : "server is Live"})
});

export default helloRouter