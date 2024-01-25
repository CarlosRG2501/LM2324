var elementos = ["Coche", "Silla", "Moto", "Mesa", "Perro", "Gato", "Ordenador", "Amarillo", "Rojo", "Azul"];

document.getElementById("accion").innerHTML = elementos;

function eliminar() {
numeros.pop();
document.getElementById("accion").innerHTML = elementos;
}

function agregar() {
   elementos.push();
    document.getElementById("accion").innerHTML = elementos;

}

function creciente() {
    array.sort();
}