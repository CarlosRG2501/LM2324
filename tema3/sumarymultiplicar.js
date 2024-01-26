var Numeros = [];


function añadir(){
    var n = parseFloat(document.getElementById("n").value);
    Numeros.push(n);
    document.getElementById("mostrar").innerHTML = Numeros;
   
}

var s = 0;

function sumar() {
    s = 0
    for (var i = 0 ; i< Numeros.length; i++) {
        s += Numeros[i];
    }
    document.getElementById("mostrar").innerHTML = s;
}

  
function multiplicar() {
    var m = 1;

    for (var i = 0 ; i< Numeros.length; i++) {
        s *= Numeros[i];
    }
    document.getElementById("mostrar").innerHTML = s; 
 }


