const fs = require('fs')//importar modulo o paquete que permite crear el archivo

const generarTabla = async(base) =>{
    let respuesta = ''
    try {
        for(let i=1; i<11; i++ ){
            respuesta += `${base} * ${i}\n`
        }
        fs.writeFileSync(`tabla_${base}.txt`, respuesta)
        return `El archivo se archivo tabla_${base}.txt se creo exitosamente`;
    } catch (error) {
        return error
    }
} 

{
    module.exports={
        generarTabla
    }
}