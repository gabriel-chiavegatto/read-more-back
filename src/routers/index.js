import { Router } from "express";
import rotaCadastro from "./rotaCadastro.js";

const router = Router();

router.use(rotaCadastro);

export default router;