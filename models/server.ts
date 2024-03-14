import express, { Application } from 'express';
import userRoutes from '../routes/usuario';
class ServerTs {

    private app: Application;
    private port: string;
    private apiPaths = {
        usuarios: '/api/usuarios'
    }

    constructor(){

        this.app = express();
        this.port = process.env.PORT || '3000';

        //definiendo mis rutas
        this.routes();

    }

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