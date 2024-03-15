/*var numeros = [];

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

}*/

var notas = [];

function anadir(){
    let numero = parseFloat (document.getElementById("numero").value);
    //Borramos cualquier mensaje de error previo
    document.getElementById("aviso").innerHTML="";
    if (isNaN(numero)){
        document.getElementById("aviso").innerHTML="Debes introducir un numero entre 0 y 10"
    }
    else{
    //Compruebo que esta comprendido entre 0 y 10
    if (numero<0 || numero>10){
        document.getElementById("aviso").innerHTML="Debes introducir un numero entre 0 y 10"
    }
    else{
        notas.push(numero);
        document.getElementById("notas").innerHTML = notas;
    }
}
}

function borrar(){
    document.getElementById("aviso").innerHTML="";
    document.getElementById("notas").innerHTML="";
    document.getElementById("resultado").innerHTML="";
    notas = [];
    
}

function calcularMedia(){
    let total=0.0;
    for(var i=0;i<notas.length;i++){
        total = total+notas[i];
}
total = total/notas.length;
document.getElementById("resultado").innerHTML = total.toFixed(2);


}