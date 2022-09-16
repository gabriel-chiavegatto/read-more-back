import { db, ObjectId } from "../database.js";
import dotenv from "dotenv";
dotenv.config();
const collectionBooks = "books-test";
async function listarTodosOsLivros(req, res) {
    try {
        const books = await db.collection(collectionBooks).find().toArray();
        res.send(books).status(200);
    } catch (error) {
        res.send(error).status(555);
    }
}
async function adicionarNovoLivro(req, res) {
    try {
        const { titulo, autor, preco, descricao, estoque } = req.body;
        const insertBook = {
            titulo,
            autor,
            preco,
            descricao,
            estoque
        }
        await db.collection(collectionBooks).insertOne(insertBook)
        res.sendStatus(201);
    } catch (error) {
        res.send(error).status(500);
    }
}
async function listarPropriedadesDoLivro(req, res) {
    try {
        res.sendStatus(200);
    } catch (error) {
        res.send(error).status(500);
    }
}
async function listarCarrinho(req, res) {
    try {
        res.sendStatus(200);
    } catch (error) {
        res.sendStatus(500);
    }
}
async function comprarCarrinho(req, res) {
    try {
        res.sendStatus(200);
    } catch (error) {
        res.sendStatus(500);
    }
}
async function comprarLivro(req, res) {
    try {
        res.sendStatus(200);
    } catch (error) {
        res.sendStatus(500);
    }
}

export {
    listarTodosOsLivros,
    listarCarrinho,
    listarPropriedadesDoLivro,
    adicionarNovoLivro,
    comprarCarrinho,
    comprarLivro
}