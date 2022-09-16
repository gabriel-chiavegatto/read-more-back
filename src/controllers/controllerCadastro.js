import bcrypt from 'bcrypt';
import db from '../db.js';

export async function cadastrarUsuario(req, res){
    const usuario = req.body;
    try {
        const senhaHash = bcrypt.hashSync(usuario.senha, 10);
        await db.collection('usuarios').insertOne({... usuario, senha: senhaHash, carrinho: [], pedidos: []});
        res.sendStatus(201);
    } catch (error) {
        console.log(error);
        return res.sendStatus('500');
    }
}