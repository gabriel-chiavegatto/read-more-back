import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import {listarTodosOsLivros} from "./controllers/livros.js"

const server = express();
server.use(express.json());
server.use(cors());
dotenv.config();

server.get("/", async(req, res) => {
    console.log("try");
    res.status(200).send("Hello my World")
});
server.get("/store", listarTodosOsLivros)


server.listen(process.env.PORT, () => { console.log("Hello World") })