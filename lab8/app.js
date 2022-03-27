// Funcion 1: Promedio de un arreglo de numeros
const promedio = (a) => {
    let sum = 0
    a.forEach(element => {
        sum += element        
    });
    return sum / a.length
}

console.log(promedio([99,100,101]))

// Funcion 2: String que se escribe en un archivo de texto
const palabra = (cadena) => {
    const filesystem = require('fs')
    filesystem.writeFileSync('texto.txt', cadena)
}

palabra("Esta es una palabra")

// Funcion 3: Problema implementado en otro lenguaje
// Funcion que suma los numeros de un arreglo
const sumaNum = (a) => {
    let sum = 0
    a.forEach(element => {
        sum += element
    });
    return sum
}
console.log(sumaNum([1,2,3,4,5,6,7,8,9,10]))

// Peticion al servidor
const http = require('http')
const fs = require('fs').promises;

const server = http.createServer((req, res) => {
    fs.readFile("../index.html")
    .then(contents => {
        res.setHeader("Content-Type", "text/html");
        res.writeHead(200);
        res.end(contents);
    })
    .catch(err => {
        res.writeHead(500);
        res.end(err);
        return;
    });
})

server.listen(3000)