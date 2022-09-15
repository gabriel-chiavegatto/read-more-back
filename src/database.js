import { MongoClient, ObjectId } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

const clienteMongo = new MongoClient(process.env.MONGO_URI);
let db;

clienteMongo.connect(()=>{
    db = clienteMongo.db("read-more");
    console.log("MongoDb conectado");
});
export {db, ObjectId}