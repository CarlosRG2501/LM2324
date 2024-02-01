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

/*let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
function sumaPares(numeros){

let total = 0.0;
for (var i=0;i<numeros.length;i++);{
   if (numeros[i]%2 == 0.0)
   total = total + numeros[i];
}
document.getElementById("resultado").innerHTML = total;
}
<script> sumaPares(numeros); </script>*/