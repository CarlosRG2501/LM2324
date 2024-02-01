var imagen = new Array();

    imagen[0] = "imagen1.png";
    imagen[1] = "imagen2.png";
    imagen[2] = "imagen3.png";
    imagen[3] = "imagen4.png";
    imagen[4] = "imagen5.png";
   
   
    
function numero(x){
    return(Math.floor(Math.random() * x + 1 ));
}


function imagenaleatoria(){

 document.getElementById("imagenaleatoria").src = "images/" + imagen[numero];

}