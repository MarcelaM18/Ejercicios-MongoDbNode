//exportae modulo expres o libreria express
const express = require('express')

//especifica cual va hacer la funcion 

const app = express()
//Especificar el puerto 

const port = 8383

//definir directorio de las pagina estaticas
app.use(express.static('public'))
//peticiones con el metodo get , este metodo es para consultar
app.get('/', (req,res)=>{
    //res.write('Home')
   // res.end()
   res.sendFile(__dirname +'/public/home.html')
})
//para cualquier pagina que no existe
app.get('*', (req, res)=>{
    //res.write('Erros 404. Pagina no encontrada')
    //res.end()
    res.sendFile(__dirname +'/public/404.html')
})

app.listen(port, () =>{
    console.log(`Escuchando por el puerto ${port}`)
})
