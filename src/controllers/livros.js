import {db ,ObjectId} from "../database.js";

async function listarTodosOsLivros(req,res){
    res.sendStatus(200);
}
async function listarCarrinho(req,res){
    try{
        res.sendStatus(200);
    } catch(error){
        res.sendStatus(500);
    }
}
export {listarTodosOsLivros, listarCarrinho}