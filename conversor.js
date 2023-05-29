const convertir = () => {
	const tasaCambio = 4500;
	const dolares = document.getElementById("dolar").value;
	const resultado = dolares * tasaCambio;
	document.getElementById("resultado").innerHTML = `El resultado es: ${resultado} pesos`;

    const boton=document.querySelector(botonCalcular)

    boton.addEventListener('click',convertir())
}