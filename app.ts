import dotenv from 'dotenv';
import ServerTs from './models/server';

//Configurar dot.env
dotenv.config();

const server = new ServerTs();


server.listen();