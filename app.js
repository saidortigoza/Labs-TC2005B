const express = require('express');
const app = express();

//Middleware
app.use((request, response, next) => {
    console.log('Middleware!');
    next();
});

app.use('/ruta', (request, response, next) => {
    console.log('Respuesta de la ruta "/ruta"')
    response.send('Respuesta de la ruta "/ruta"'); 
});

app.use('/hola', (request, response, next) => {
    console.log('Respuesta de la ruta "/hola"')
    response.send('Respuesta de la ruta "/hola"'); 
});

app.use('/caballos', (request, response, next) => {
    console.log(request.body);
    response.send('Respuesta de la ruta "/algunarutra"'); 
});

app.use((request, response, next) => {
    console.log('Otro middleware');
    response.send('Hola mundo'); //Manda la respuesta
});

app.listen(3000);