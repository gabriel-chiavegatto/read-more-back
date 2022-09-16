import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import {
    listarCarrinho,
    listarTodosOsLivros,
    adicionarNovoLivro,
    listarPropriedadesDoLivro,
    comprarCarrinho,
    comprarLivro
} from "./controllers/livros.js"

const server = express();
server.use(express.json());
server.use(cors());
dotenv.config();

server.get("/", async (req, res) => {
    console.log("try");
    res.status(200).send("Hello my World")
});
server.get("/biblioteca", listarTodosOsLivros);
server.post("/biblioteca", adicionarNovoLivro);
server.get("/livro/:id", listarPropriedadesDoLivro);
server.get("/carrinho", listarCarrinho);
server.post("/finalizar-compra-carrinho", comprarCarrinho);
server.post("/finalizar-compra-livro", comprarLivro);


server.listen(process.env.PORT, () => { console.log("Hello World") })