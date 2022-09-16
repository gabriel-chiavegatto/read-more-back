import bcrypt from 'bcrypt';
import db from '../db.js';
import { v4 as uuid } from 'uuid';

export async function logarUsuario(req, res){
    const {email, senha} = req.body;
    const usuario = await db.collection('usuarios').findOne({email})
    if(!usuario){
        return res.sendStatus(401);
    }
    if(bcrypt.compareSync(senha, usuario.senha)){
        const token = uuid();
        await db.collection('sessoes').insertOne({idUsuario: usuario._id, token});
        res.send({
            nome: usuario.nome,
            email,
            token,
        });
    }
    res.sendStatus(401);
}