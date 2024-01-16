function convertir(grados){
    let valor = document.getElementById("cantidad").value;
    let resultado = 0;
    if (grados=="grados_celsius"){
        //Convierto a grados celsius
        resultado = (valor -32) * 5/9;
        document.getElementById("resultado").innerHTML = resultado + " ºC";
    }
    else {
        //Convertir a gradosfahrenheit
        resultado = (valor * 9/5) + 32;
        document.getElementById("resultado").innerHTML = resultado + " ºF";
    }
}
