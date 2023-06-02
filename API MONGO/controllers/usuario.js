const {response} = require('express')//Importar paquetes requeridos
const Usuario = require('../models/usuario')//Importar modelos


const usuariosGet = async(req, res = response)=>{
    const {nombre} = req.query//desestructuracion 

    const usuarios = await Usuario.find(nombre)


    res.json({
        usuarios
    })
}


//registrar
const usuarioPost = async(req,res=response)=>{

    const usuario = new Usuario({
       ...req.doby
    })//Instanciar el objeto
    usuario.save()
    res.json({
        msg: 'La insercción se eféctuo exitosamente',
    })
}

//modificar

const usuarioPut = async(req,res=response)=>{
    const {nombre,password,rol,estado} = req.query
    let mensaje =""

    try {
        const usuario = await Usuario.findOneAndUpdate({nombre: nombre}, {rol: rol, estado: estado})
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