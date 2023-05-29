proceso1 = async( ) =>{
    let suma1 =0;
    console.log('Proceso 1 ')
    return new Promise((resolve, reject) => setTimeout(()=> {    
    for(i=0; i<300000 ; i++){
        suma1+=i;
    }

    resolve(suma1)

} ,3000
))
}

proceso2 = async( ) =>{
    let suma2 =0;
    console.log('Proceso 2 ')
    return new Promise((resolve, reject) => setTimeout(()=> {
    for(i=0; i<50000 ; i++){
        suma2+=i;
    }
    resolve(suma2)
},5000
))
   
}


proceso3 = async( ) =>{
    let suma3 =0;
    console.log('Proceso 3 ')
    return new Promise((resolve, reject) => setTimeout(()=> {
    
    for(i=0; i<30000000 ; i++){
        suma3+=i;
    }
    resolve(suma3)
},7000
))
}

document.querySelector('#btnAsincronico')
.addEventListener('click',()=> {
        proceso1().then(mensaje=>console.log(mensaje));
        proceso2().then(mensaje=>console.log(mensaje));
        proceso3().then(mensaje=>console.log(mensaje))
})