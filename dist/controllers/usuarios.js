"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUsuarios = exports.putUsuario = exports.postUsuario = exports.getUsuario = exports.getUsuarios = void 0;
const getUsuarios = (req, res) => {
    res.json({
        msg: 'Get - Usuarios'
    });
};
exports.getUsuarios = getUsuarios;
const getUsuario = (req, res) => {
    const { id } = req.params;
    res.json({
        msg: 'Get - Usuario',
        id
    });
};
exports.getUsuario = getUsuario;
const postUsuario = (req, res) => {
    const { body } = req;
    res.json({
        msg: 'Post - Usuario',
        body
    });
};
exports.postUsuario = postUsuario;
const putUsuario = (req, res) => {
    const { id } = req.params;
    const { body } = req.body;
    res.json({
        msg: 'Put - Usuario',
        id,
        body
    });
};
exports.putUsuario = putUsuario;
const deleteUsuarios = (req, res) => {
    const { id } = req.params;
    res.json({
        msg: 'Delete - Usuarios',
        id
    });
};
exports.deleteUsuarios = deleteUsuarios;
//# sourceMappingURL=usuarios.js.map