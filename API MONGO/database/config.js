const mongoose = require('mongoose')//libreria de mongon db 

const dbConnection = () =>{
    try{
        mongoose.connect(process.env.MONGO_CNN)
        console.log('Conexión Existosa a la Base de Datos api_2559206')
    }
    catch(error){
        console.log('Error en BD')
        throw error('Error conectando a la base de datos')

    }
}


//Exportar cadena de conexion
module.exports = {dbConnection}