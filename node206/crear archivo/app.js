const {generarTabla}= require ('./helpers/generarTabla')

const base = 7

//llamar la funcion generar}Tabla

generarTabla(base)
.then(mensaje=>console.log(mensaje))
.catch(console.log(error =>console.log(error)))