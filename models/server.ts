import express, { Application } from 'express';
import userRoutes from '../routes/usuario';
import cors from 'cors';
class ServerTs {

    private app: Application;
    private port: string;
    private apiPaths = {
        usuarios: '/api/usuarios'
    }

    constructor(){

        this.app = express();
        this.port = process.env.PORT || '3000';

        //Métodos iniciales 
        this.middleware();
        this.routes();

    }

    //middleware
    middleware(){
        // configuration CORS
        this.app.use(cors());

        // lectura del body
        this.app.use(express.json());

        // carpeta publica

        this.app.use(express.static('public'));
    }
    // TODO: Conectar BD MySQL

    //creando el metodo routes 
    routes(){
        this.app.use( this.apiPaths.usuarios, userRoutes)
    }

    listen(){
        this.app.listen( this.port, () => {
            console.log( 'Server Running, PORT:' + this.port );
        } )
    }
}

export default ServerTs;