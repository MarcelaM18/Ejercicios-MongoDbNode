
const {numerosAleatorios}= require ('./helpers/numerosAleatorios')

const numero = 100


//llamar la funcion generar}Tabla

numerosAleatorios(numero)
.then(mensaje=>console.log(mensaje))
.catch(console.log(error =>console.log(error)))

