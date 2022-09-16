import { Router } from "express";
import { cadastrarUsuario } from "../controllers/controllerCadastro.js";
import { validarCadastro } from "../middlewares/validarCadastro.js";

const rotaCadastro = Router();

rotaCadastro.post('/cadastro', validarCadastro, cadastrarUsuario);

export default rotaCadastro;