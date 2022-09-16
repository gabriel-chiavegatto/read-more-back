import joi from 'joi';

const schemaCadastro = joi.object({
    nome: joi.string().required(),
    email: joi.string().email().required(),
    senha: joi.string().required()
});

export function validarInputsCadastro(req, res, next){
    const cadastro = req.body;
    const validacao = schemaCadastro.validate(cadastro);
    if(validacao.error){
        return res.sendStatus(422);
    }
    next();
}