const express = require('express')

class Server{
    constructor(){
        this.app = express()
        this.port = process.env.PORT//Capturando variable de entorno
        this.routes()//llama metodo routes

    }
    //Escuchando
    listen(){
        this.app.listen(this.port, ()=>{
            console.log(`Escuchando por el puerto ${this.port}`)
        })
    }
    //Rutas
    routes(){
        this.app.get('/api',(req, res)=>{
          //  res.write('API GET')
           // res.end()
              res.json({
                msg: 'API GET',
                nombre: 'Marcela Morales'
              })

        })
        //insertar datos
        this.app.post('/api',(req, res)=>{
            //  res.write('API GET')
             // res.end()
                res.json({
                  msg: 'API POST',
                  nombre: 'Marcela Morales'
                })
  
          })

          this.app.put('/api',(req, res)=>{
            //  res.write('API GET')
             // res.end()
                res.json({
                  msg: 'API PUT',
                  nombre: 'Tatiana B'
                })
  
          })
          this.app.patch('/api',(req, res)=>{
            //  res.write('API GET')
             // res.end()
                res.json({
                  msg: 'API PATCH',
                  nombre: 'Tatiana B'
                })
  
          })
          this.app.delete('/api',(req, res)=>{
            //  res.write('API GET')
             // res.end()
                res.json({
                  msg: 'API DELETE',
                  nombre: 'Tatiana B'
                })
  
          })
           
    }
}

module.exports =  Server
