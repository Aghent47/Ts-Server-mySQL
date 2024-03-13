import express, { Application } from 'express';

class ServerTs {

    private app: Application;
    private port: string;

    constructor(){
        this.app = express();
        this.port = process.env.PORT || '3000';

    }

    listen(){
        this.app.listen( this.port, () => {
            console.log( 'Server Running, PORT:' + this.port );
        } )
    }
}

export default ServerTs;