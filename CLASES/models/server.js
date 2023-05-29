const express = require('express')
let productos = [
    {
        codigo: 111,
        nombre: 'Aceite'
    },
    {
        codigo: 123,
        nombre: 'Sal'

    }
]

class Server {
    //se crea constructor
    constructor() {
        this.app = express()
        //definir puerto --capturando puero
        this.port = process.env.PORT
        //definir rutas
        this.routes()
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Escuchando por el puerto ${this.port}`)
        })
    }
    //Se crean las rutas
    routes() {
        //Obtener a consultar datos
        this.app.get('/productos', (req, res) => {


            const{codigo, nombre} = req.query
            let resultado = 'no encontradoss'
            console.log(codigo)

            resultado = productos.find(producto => producto.codigo === parseInt(codigo))

            if (resultado == undefined){
                resultado = 'producto no encontrado'
            }
            console.log(resultado)


            res.json({
                msg: 'API GET',
                resultado: resultado


            })
        })

        this.app.post('/producto', (req, res) => {
            //  res.write('API GET')
            //  res.end()
            const {codigo, nombre} = req.query
            productos.push({codigo:codigo, nombre:nombre})
           // productos.push({codigo:144, nombre:'Sapote'})
            //productos.push({codigo:240, nombre:'Nispero'})
            //productos.push({codigo:241, nombre:'Milanta'})
            
  
            console.log(productos)

            res.json({
                msg: 'API POST',
                nombre: 'Marcela',
                array : productos



            })
        })

        this.app.delete('/producto', (req, res) => {
          //  res.write('API GET')
          //  res.end()
          const {codigo, nombre} = req.query
          productos.pop({codigo:codigo, nombre:nombre})
         // productos.push({codigo:144, nombre:'Sapote'})
          //productos.push({codigo:240, nombre:'Nispero'})
          //productos.push({codigo:241, nombre:'Milanta'})
          

          console.log(productos)

          res.json({
              msg: 'API POST',
              nombre: 'Marcela',
              array : productos



          })
      })

      this.app.patch('/producto', (req, res) => {
        //  res.write('API GET')
        //  res.end()
        const {codigo, nombre} = req.query
        productos.shift({codigo:codigo, nombre:nombre})
       // productos.push({codigo:144, nombre:'Sapote'})
        //productos.push({codigo:240, nombre:'Nispero'})
        //productos.push({codigo:241, nombre:'Milanta'})
        

        console.log(productos)

        res.json({
            msg: 'API POST',
            nombre: 'Marcela',
            array : productos



        })
    })

    }
}

module.exports = { Server }
    //como se inscribio en la clase cuando son mas se separan con llaves y comas
module.exports =  Server
