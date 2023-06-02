const express = require('express')
const {dbConnection} = require('../database/config')
const cors = require('cors')
const bodyParser = require('body-parser')

class Server{
    constructor(){
        this.app = express()
        this.app.use(bodyParser.urlencoded({extended:true}))
        this.app.use(express.json())
        this.port = process.env.PORT//Capturando variable de entorno
        this.usuarioPath = '/api/usuario'//esto es lo que el usuario ve en la url ruta publica lo que se va a testear 
        this.routes()//llama metodo routes
        this.middlewares()//intermediario o puenta para mongo
        this.conectarDB()//para conectarse a la base de datos

    }
    //Escuchando
    listen(){
        this.app.listen(this.port, ()=>{
            console.log(`Escuchando por el puerto ${this.port}`)
        })
    }

    middlewares(){
      this.app.use(express.static(__dirname + '/public'))
      
    }


    //Rutas
    routes(){
      this.app.use(this.usuarioPath,require('../routes/usuarios')) // ruta fisica de la aplicacion
           
    }


   async conectarDB(){
       await dbConnection() //esperar respuesta del servidor
    }
}


module.exports =  Server
