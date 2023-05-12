const express = require('express');
var cors = require('cors');

class Server {

    constructor(){
        this.app = express();
        this.port = process.env.PORT  || 5000;
        this.usuariosPath = '/api/usuarios';

        //middlewares
        this.middlewares();

        //rutas de mi aplicaaion
        this.routes()
    }

    middlewares(){
        //CORS
        this.app.use(cors());

        //lectura y parseo del body
        this.app.use(express.json());

        //directoria publico
        this.app.use(express.static('public'))
    }

    routes(){
        this.app.use(this.usuariosPath,require('../routes/user'))
    }

    listen (){
        this.app.listen(this.port, () => {
            console.log('Servidor desde el puerto',this.port)
        })
    }
};

module.exports = Server
