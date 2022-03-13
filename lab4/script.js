//Pregunta 1
const num = prompt("Ingresa el número hasta el cual quieres obtener cuadrados y cubos: ");
let tabla= '<table><tr><th>Número</th><th>Cuadrado</th><th>Cubo</th><tr>';
for (let i = 1; i <= num; i++){
    tabla = tabla+`<tr><td>${i}</td><td>${i*i}</td><td>${i*i*i}</td></tr>`;
}
tabla=tabla + '</table>';
document.getElementById('pregunta1').innerHTML = tabla;

//Pregunta 2
let num1 =  Math.floor(Math.random()*(50+1))
let num2 =  Math.floor(Math.random()*(50+1))
let ans = prompt("¿Cuánto es " + num1 + " + " + num2 + "?");

if (ans == num1 + num2){
    document.getElementById("pregunta2").innerHTML  = "Correcto";
}
else{
    document.getElementById("pregunta2").innerHTML  = "Incorrecto";
}

//Pregunta 3
let array = Array.from({length: 10}, () => Math.floor(Math.random() * 10));
let contadores =new Map();
contadores = {};

function contar (array){
    contadores["ceros"] = 0;
    contadores["positivos"] = 0;
    contadores["negativos"] = 0
    for(let i = 0; i < array.length; i++){
        if(array[i] == 0){
            contadores["ceros"] = (contadores["ceros"] || 0) + 1;
        }
        else if(array[i] > 0){
            contadores["positivos"] = (contadores["positivos"] || 0) + 1;
        }
        else if(array[i] < 0){
            contadores["negativos"] = (contadores["negativos"] || 0) + 1;
        }
    }
    result = "0: " + contadores["ceros"] + " positivos: " + contadores["positivos"] + " negativos: " + contadores["negativos"];
    return result;
}

document.getElementById("pregunta3").innerHTML  = "Arreglo: " + array + `<br>` + contar(array);

// Pregunta 4
let matriz = [[1,2,5,36], [1,4,5,6,7], [28,0,90,8]];
let sum = 0;
let prom = 0;
let resultados = [];

for(let i = 0; i < matriz.length; i++){
    sum = 0;
    prom = 0;
    for(let j = 0; j < matriz[i].length; j++){
        sum += matriz[i][j];
    }
    prom = sum / matriz[i].length;
    resultados.push(prom);

    document.getElementById("pregunta4").innerHTML  =  "Arreglo: " + matriz + `<br>` + "Resultados: " + resultados ;
}

//Pregunta 5
const number = prompt("Ingresa el número que quieres invertir:  ");

function reverseNumber(n) {
  const convertAndReverse = n.toString().split("").reverse().join("");
  return Number(convertAndReverse);
}

document.getElementById("pregunta5").innerHTML  = reverseNumber(number);

//Pregunta 6
class Persona{
    constructor(nombre, apellidos, edad){
        this.nombre=nombre;
        this.apellidos=apellidos;
        this.edad=edad;
    }
    
    saludar(){
        return "¡Hola! "
    }

    mostrarNombre(){
        return this.nombre;
    }

    mostrarApellidos(){
        return this.apellidos;
    }

    mostrarEdad(){
        return this.edad;
    }
    };

let nombre = prompt("Ingresa tu nombre: ");
let apellidos = prompt("Ingresa tus apellidos: ");
let edad = prompt("Ingresa tu edad: ");
let usuario = new Persona(nombre, apellidos, edad);
document.getElementById("pregunta6").innerHTML  = usuario.saludar() + usuario.mostrarNombre() + "  " + usuario.mostrarApellidos() + " con edad " + usuario.mostrarEdad();