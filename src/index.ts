import express, { Express } from "express";
import http from "http";
import cors from "cors";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import router from "./routes/route";
import mongoose from "mongoose";
import { error } from "console";

const app : Express = express();
const server = http.createServer(app)

//Express Configuration
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))
app.set("PORT",3000)
app.set("BASE_URL","localhost")



// Define the Routes
app.use("/api/v1",router)




//Mongo Connection
dotenv.config()
const mongoURI = process.env.MONGO_DB_URI

if (!mongoURI){
    console.error("Url is not define")
    process.exit(1);
}
mongoose.connect(mongoURI,{}).then(()=>{
    console.log("Connected");
})
.catch((error) => {
    console.log(error)
});  


// Start the server
try{
    const port: Number = app.get("PORT")
    const baseUrl: String = app.get("BASE_URL") 
    server.listen(port, (): void => {
        console.log("Server is listening")
    })   
}catch(error){
    console.log(error)
}

export default server;