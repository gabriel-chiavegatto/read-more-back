import joi from 'joi';

const schemaLogin = joi.object({
    email: joi.string().email().required(),
    senha: joi.string().required()
});

export function validarInputsLogin(req, res, next){
    const login = req.body;
    const validacao = schemaLogin.validate(login);
    if(validacao.error){
        return res.sendStatus(422);
    }
    next();
}