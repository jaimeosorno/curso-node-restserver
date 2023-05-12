const {response, request} = require('express');

const usuariosGet =  (req = request, res = response ) => {

    const {q,nombre = 'no existe',apikey} = req.query;

    res.json({
        msg : 'get API - controlador ',
        q,
        nombre,
        apikey
    });
    };

    const usuariosPost =   (req, res = response) => {

        const {nombre,edad} = req.body;

        res.json({
            msg : 'post API - UsuariosPost',
            nombre, edad
        });
        };

    const usuariosPut = (req, res = response) => {

        const {id} = req.params;
        res.json({
            msg : 'put API - UsuariosPut',
            id
        });
        };

    const usuariosPatch = (req, res = response) => {
        res.json({
            msg : 'patch API - UsuariosPatch',
        });
        };

    const usuariosDelete =   (req, res = response) => {
        res.json({
            msg : 'delete API - UsuariosDelete',
        });
        };

    module.exports = {
        usuariosGet,
        usuariosPost,
        usuariosPut,
        usuariosPatch,
        usuariosDelete
    }