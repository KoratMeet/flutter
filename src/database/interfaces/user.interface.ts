import { Document } from "mongoose";

export interface IUserInterface extends Document{
    uid: string,
    tweets: string[],
    firstname: string,
    lastname: string,
    email: string,
    createdAt: string
}