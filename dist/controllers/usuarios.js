"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUsuarios = exports.putUsuario = exports.postUsuario = exports.getUsuario = exports.getUsuarios = void 0;
const usauario_1 = __importDefault(require("../models/usauario"));
const getUsuarios = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const usuarios = yield usauario_1.default.findAll();
    res.json({
        usuarios,
    });
});
exports.getUsuarios = getUsuarios;
const getUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const usuario = yield usauario_1.default.findByPk(id);
    if (usuario) {
        res.json({
            usuario,
        });
    }
    else {
        res.status(404).json({
            msg: 'User not found '
        });
    }
});
exports.getUsuario = getUsuario;
const postUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const existeCorreo = yield usauario_1.default.findOne({
            where: {
                correo: body.correo
            }
        });
        if (existeCorreo) {
            return res.status(400).json({
                msg: 'El correo ya se encuentra registrado'
            });
        }
        const usuario = yield usauario_1.default.create(body);
        yield usuario.save();
        res.json({
            msg: "Post - Usuario",
            body,
        });
    }
    catch (error) {
        console.log(error);
        res.status(404).json({
            msg: 'Upss!! Algo salío mal.'
        });
    }
});
exports.postUsuario = postUsuario;
const putUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const usuario = yield usauario_1.default.findByPk(id);
        if (!usuario) {
            return res.status(404).json({
                msg: 'No existe el usuario con ID' + id
            });
        }
        yield usuario.update(body);
        res.json({
            msg: "Put - Usuario",
            usuario
        });
    }
    catch (error) {
        console.log(error);
        res.status(404).json({
            msg: 'Upss!! Algo salío mal.'
        });
    }
});
exports.putUsuario = putUsuario;
const deleteUsuarios = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const usuario = yield usauario_1.default.findByPk(id);
    if (!usuario) {
        return res.status(404).json({
            msg: 'No existe el usuario con ID' + id
        });
    }
    // eliminación fisica NO RECOMEDADA
    //await usuario.destroy();
    //eliminación Logica OK
    yield usuario.update({ estado: false });
    res.json({
        msg: "Delete - Usuarios",
        usuario
    });
});
exports.deleteUsuarios = deleteUsuarios;
//# sourceMappingURL=usuarios.js.map