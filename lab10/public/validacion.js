// Variables
let boton = document.getElementById('boton');
let pass1 = document.getElementById('pass1');
let pass2 = document.getElementById('pass2');

// Funcion validar
function validar(){
    if((pass1.value === pass2.value) && (pass1.value !== "" && pass2.value !== "")  ){
        document.getElementById('resultado').innerHTML = "La contraseña ingresada es válida"
    }
    else if(pass1.value === "" && pass2.value === ""){
        document.getElementById('resultado').innerHTML = "No ha ingresado contraseña"
    }
    else{
        document.getElementById('resultado').innerHTML = "La contraseña ingresada es inválida"
    }
}

boton.onclick = validar