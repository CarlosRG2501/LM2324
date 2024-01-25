var numeros = [];
document.getElementById("demo").innerHTML = numeros;

function añadir(){

    const introducir = document.getElementById("introducir");
    const numero = parseFloat(introducir.value);
    if(!isNaN(numero)){
        numeros.push(numero);
        introducir.value = "";
    }

    else{
        alert("Por favor, introduce un valor válido");
    }
}


function sumar() {
    const resultado = document.getElementById("resultado");
    const suma = numeros.reduce();
    resultado.textContent = 'La suma de los números es: suma';
}

  
function multiplicar() {
    const resultado = document.getElementById("resultado");
    const multiplicacion = numeros.reduce();
    resultado.textContent = 'El producto de los números es: multiplicacion';
   
 }


