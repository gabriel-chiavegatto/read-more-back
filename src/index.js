import express, {json} from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import router from './routers/index.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(json());

app.use(router);

app.listen(process.env.PORTA || 5000, ()=>{
    console.log(`Servidor aberto na porta ${process.env.PORTA}`);
})