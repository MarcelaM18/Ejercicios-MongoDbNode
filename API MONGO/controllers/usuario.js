const {response} = require('express')//Importar paquetes requeridos
const Usuario = require('../models/usuario')//Importar modelos
const bcrypt = require('bcrypt')//encriptar


const usuariosGet = async(req, res = response)=>{
    const {nombre} = req.query//desestructuracion 

    const usuarios = await Usuario.find(nombre)


    res.json({
        usuarios
    })
}


//registrar
async function usuarioPost(req, res = respose) {
const body= req.body
    try {
        const usuarios = new Usuario({
            ...req.body
        })
        console.log(bcrypt.hashSync(req.body.password, 10))// para encriptar contraseñas
        await usuarios.save()
        console.log('Se agrego con exito')

        res.json({
            msg: 'La insercción se eféctuo correctamente'
        })
    } catch (error) {
        console.error(error)
        res.status(500).json({
            msg: 'La inserción no fue exitosa ocurrió un error '
        })
    }
}

//modificar

const usuarioPut = async(req,res=response)=>{
    const {nombre,password,rol,estado} = req.body
    let mensaje =""

    try {
        const usuario = await Usuario.findOneAndUpdate({nombre: nombre}, {password:password, rol: rol, estado: estado})
        mensaje= "La modificación se efectuo correctamente"
    } catch (error) {
        mensaje = "Se presentro un error en la modificacion"
    }
    res.json({
        msg: mensaje,
    })
}

const usuarioDelete = async(req,res=response)=>{
    const {nombre} = req.query
    let mensaje =""

    try {
        const usuario = await Usuario.findOneAndDelete({nombre: nombre})
        mensaje= "Se ha eliminado correctamente"
    } catch (error) {
        mensaje = "Se presentro un error en la eliminacion"
    }
    res.json({
        msg: mensaje,
    })
}


//se exporta el metodo que va a realizar la consulta
module.exports={
    usuariosGet,
    usuarioPost,
    usuarioPut,
    usuarioDelete
}