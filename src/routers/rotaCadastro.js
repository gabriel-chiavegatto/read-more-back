import { Router } from "express";
import { cadastrarUsuario } from "../controllers/controllerCadastro.js";
import { validarInputsCadastro } from "../middlewares/validarInputsCadastro.js";

const rotaCadastro = Router();

rotaCadastro.post('/cadastro', validarInputsCadastro, cadastrarUsuario);

export default rotaCadastro;