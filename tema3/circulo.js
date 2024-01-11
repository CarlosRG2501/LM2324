/*function ocultarRojo(){
    document.getElementById("circulorojo").style.visibility = "hidden"

}
function ocultarAzul(){
    document.getElementById("circuloazul").style.visibility = "hidden"

}
function ocultarVerde(){
    document.getElementById("circuloverde").style.visibility = "hidden"

}*/
function ocultar(caja){
    document.getElementById(caja).style.visibility = "hidden"
}

function mostrar(caja){
    document.getElementById(caja).style.visibility = "visible"
    
}

/* Version con un solo boton*/

function ocultar_o_mostrar(caja) {
    if (document.getElementById(caja).style.visibility =="visible")
        document.getElementById(caja).style.visibility ="hidden"
    else
    document.getElementById(caja).style.visibility =="visible"
}