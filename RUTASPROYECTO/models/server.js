const express = require('express')

class Server{
    constructor(){
        this.app = express()
        this.port = process.env.PORT//Capturando variable de entorno
        this.compraPath = '/api/compra'//esto es lo que el usuario ve en la url ruta publica lo que se va a testear
        this.categoriaPath = '/api/categoria'//esto es lo que el usuario ve en la url ruta publica lo que se va a testear 
        this.routes()//llama metodo routes 
        this.routes()//llama metodo routes
        this.middlewares()//intermediario o puenta para mongo

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
      this.app.use(this.compraPath,require('../routes/compras')) // ruta fisica de la aplicacion
      this.app.use(this.categoriaPath,require('../routes/categorias')) // ruta fisica de la aplicacion
                
    }
}


module.exports =  Server
