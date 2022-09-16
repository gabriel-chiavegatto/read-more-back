import joi from 'joi';

const schemaCadastro = joi.object({
    nome: joi.string().required(),
    email: joi.string().email().required(),
    senha: joi.string().required()
});

export function validarCadastro(req, res, next){
    const usuario = req.body;
    const validacao = schemaCadastro.validate(usuario);
    if(validacao.error){
        return res.sendStatus(422);
    }
    next();
}