 verificar = (doble,cuadrado) =>{

    let = numero = document.querySelector('#numero')
    if(numero.value > 0){
        console.log("Es positivo")
        setTimeout(4000, doble(numero.value))
       
    }
    else{
        console.log("Es negativo")
        cuadrado(numero.value)
    }

    console.log("Verificando")

 }

 doble = (numero)=>{
    console.log(numero*2)
 }

cuadrado = (numero)=>{
    console.log(numero*numero)
}

document.querySelector('#btnCalcular')
.addEventListener('click', ()=>verificar(doble,cuadrado))

console.log("Proceso 1")
setTimeout(() => {
    console.log("Retrasado")
    cuadrado(7)
}, 3000)
setTimeout(() => {
    console.log("Retrasado")
    cuadrado(4)
}, 5000)

setTimeout(() => {
    console.log("Retrasado")
    doble(20)
    window.open('www.google.com')
}, 8000)

console.log("Proceso 2 ")
