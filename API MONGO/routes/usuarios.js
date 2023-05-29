const {Router} = require('express') //se llama la clase routes de la libreria express

const route = Router()//para especificar 

const {usuariosGet, usuarioPost, usuarioPut, usuarioDelete} = require('../controllers/usuario')

route.get('/',usuariosGet)//Ruta para consulta
route.post('/',usuarioPost )//Ruta para insercción por medio de post
route.put('/',usuarioPut)//ruta para modficar
route.delete('/',usuarioDelete)//ruta para eliminar

module.exports = route