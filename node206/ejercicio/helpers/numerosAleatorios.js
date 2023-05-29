const fs = require('fs')//importar modulo o paquete que permite crear el archivo


const numerosAleatorios = async(numero) =>{
    let respuesta = ''
try {
    
    Math.floor(Math.random() * numero)
        if(numero>17){
            fs.writeFileSync(`mayores.txt`, respuesta)
        }

        if(i<17){
            Math.floor(Math.random() * numero)
            fs.writeFileSync(`menores.txt`, respuesta)
        }

    return `El archivo se numerosHasta_${numero}.txt se creo exitosamente`;

} catch (error) {
    return(error)
}
}


{
module.exports={
    numerosAleatorios
    
}
}