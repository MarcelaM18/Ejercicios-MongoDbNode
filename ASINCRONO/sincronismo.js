proceso1 = ( ) =>{
    let suma1 =0;
    console.log('Proceso 1 ')
    for(i=0; i<10000 ; i++){
        suma1+=i;
    }

    return suma1
}

proceso2 = ( ) =>{
    let suma2 =0;
    console.log('Proceso 2 ')
    for(i=0; i<1000000 ; i++){
        suma2+=i;
    }

    return suma2
}


proceso3 = ( ) =>{
    let suma3 =0;
    console.log('Proceso 3 ')
    for(i=0; i<30000000 ; i++){
        suma3+=i;
    }

    return suma3
}

document.querySelector('#btnSincronico')
.addEventListener('click',()=> {
    console.log(proceso1())
    console.log(proceso2())
    console.log(proceso3())
})