
import express from "express"
import { router } from "./router";
import cors from 'cors';

const app = express();

const allowedOrigins = [
    'https://agenciayxeapi.vercel.app',
    'https://yxe.com.br',
    'https://www.yxe.com.br',
];
const options: cors.CorsOptions = {
    origin: allowedOrigins
};

app.use(cors(options));

app.use(express.json());

app.use(router);

app.listen(4000);