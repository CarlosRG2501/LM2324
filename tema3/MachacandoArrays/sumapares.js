var numeros = [];

function añadir(){
    var n = parseFloat(document.getElementById("n").value);
    numeros.push(n);
    document.getElementById("mostrar").innerHTML = numeros;
}


function sumar() {
    s = 0
    for (var i = 0 ; i< numeros.length; i++) {
        if (numeros[i] % 2 == 0) {
            s = s + numeros[i]
        }
    }
    document.getElementById("mostrar").innerHTML = s;
}