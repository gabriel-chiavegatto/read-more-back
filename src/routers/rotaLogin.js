import { Router } from "express";
import { logarUsuario } from "../controllers/controllerLogin.js";
import { validarInputsLogin } from "../middlewares/validarInputsLogin.js";

const rotaLogin = Router();

rotaLogin.post('/login', validarInputsLogin, logarUsuario);

export default rotaLogin;