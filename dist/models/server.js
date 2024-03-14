"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const usuario_1 = __importDefault(require("../routes/usuario"));
const cors_1 = __importDefault(require("cors"));
class ServerTs {
    constructor() {
        this.apiPaths = {
            usuarios: '/api/usuarios'
        };
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || '3000';
        //Métodos iniciales 
        this.middleware();
        this.routes();
    }
    //middleware
    middleware() {
        // configuration CORS
        this.app.use((0, cors_1.default)());
        // lectura del body
        this.app.use(express_1.default.json());
        // carpeta publica
        this.app.use(express_1.default.static('public'));
    }
    // TODO: Conectar BD
    //creando el metodo routes 
    routes() {
        this.app.use(this.apiPaths.usuarios, usuario_1.default);
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log('Server Running, PORT:' + this.port);
        });
    }
}
exports.default = ServerTs;
//# sourceMappingURL=server.js.map