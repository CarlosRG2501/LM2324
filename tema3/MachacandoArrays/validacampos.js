function validar(){
    let estanCorrectos = true;
for (var i=0;i<elementos.length;i++){
    if (elementos[i].value == ""){
        document.getElementById("campo"+(i+1).toString).innerHTML = "El campo" + elementos[i].id + 
        alert("El campo " + elementos[i] + "esta vacio")
        estanCorrectos = false;
    }
    

}
    return estanCorrectos;
}