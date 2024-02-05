var numeros = [];

function añadir(){
    var n = parseFloat(document.getElementById("n").value);
    numeros.push(n);
    document.getElementById("mostrar").innerHTML = numeros;
}


function sumar() { //No funciona
    suma = 0
    for (var i = 0 ; i< numeros.length; i++) {
        if (numeros[i]  == i>=0 && i<=10) {
            let suma = values.reduce((previous, current) => current += previous);
            let   = suma / values.length;
        }
        else {
            alert("Introduzca una calificación entre 0 y 10")
        }
    }
    document.getElementById("mostrar").innerHTML = suma;
}

function eliminar(){ //No funciona
numeros.splice("");
document.getElementById('mostrar').innerHTLM = numeros;

}