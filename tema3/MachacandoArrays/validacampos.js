function validar(elementos){
    let estanCorrectos = true;
    for (var i=0;i<elementos.length;i++){
        document.getElementById("campo"+(i+1).toString()).innerHTML = ""; //Por defecto el cammpo está OK 
        if (elementos[i].value == "" || (i==6 && !elementos[i].checked)){ //Si el campo esta vacío (el campo de verificaciín y no está marcada)
            document.getElementById("campo"+(i+1).toString()).innerHTML = "El campo " + elementos[i].id + " está vacío";
            estanCorrectos = false;
        }
        
    }
    if (!validarEmail()){ //Valida el correo
        document.getElementById("campo3").innerHTML = "Email no válido";        
        estanCorrectos = false;
    }
    if (!validaPasswords()){ //Valida lacontraseña
        document.getElementById("campo4").innerHTML = "La contraseña no cumple con los requisitos";
        document.getElementById("campo5").innerHTML = "Las contraseñas no cumplen con los requisitos";           
        estanCorrectos = false;
    }
    if (!validarDNI())
    return estanCorrectos;

    
}
/* Función validarEmail tomada de:
* https://www.coderbox.net/blog/validar-email-usando-javascript-y-expresiones-regulares/
*/
function validarEmail(){              
	var valido;
	var emailField = document.getElementById('email');
	var validEmail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
	if( validEmail.test(emailField.value) ){
		valido=true;
	}else{
        valido=false;
	}
    return valido;
} 

function validaPasswords(){
    let clave1 = document.getElementById("password1").value;
    let clave2 = document.getElementById("password2").value;
    let passwordsOK = true //Cumple con los requisitos establecidos 
    if(clave1.length<8 || (clave1!=clave2))
        passwordsOK = false;

    return passwordsOK;
}

function validarDNI(){
    let letra= ['T','R','W','A','G','M','Y','F','P','D','X','B','N','J','Z','S','Q','V','H','L','C','K','E']
    var cadena = document.getElementById("dni").value; //DNI completo
    var numero = parseInt(cadena.substring(0,8)); //Parte numerica
    var letraUsuario = cadena[8]; //Letra "real" del DNI calculada según "formula"
    var letraReal = letra[numero%23];
    var dniValido = true;
    if (letraUsuario!=letraReal)
        dniValido = false;
    return dniValido;

}
