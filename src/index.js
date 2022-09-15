import express from "express";
import cors from "cors";

const server = express();
server.use(express.json());
server.use(cors());

server.get("/",(req,res)=>{
    
});


server.listen(process.env.PORT, ()=>{console.log("Hello World")})