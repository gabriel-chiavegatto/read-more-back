import { Router } from "express";
import rotaCadastro from "./rotaCadastro.js";
import rotaLogin from "./rotaLogin.js";

const router = Router();

router.use(rotaCadastro);
router.use(rotaLogin);

export default router;