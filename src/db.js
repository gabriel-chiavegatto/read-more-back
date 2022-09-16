import { MongoClient } from "mongodb";
import dotenv from 'dotenv';

dotenv.config()
let db;
const mongoClient = new MongoClient(process.env.MONGO_URI);
try {
	db = await mongoClient.db(process.env.BANCO);
    console.log(`Conectado ao MongoDB no Database ${process.env.BANCO}`);
} catch (error) {
    console.log(`Erro ao tentar conexão com o MongoDB`);
    console.log(error);
}

export default db;
