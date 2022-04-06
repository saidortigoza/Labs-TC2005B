const { request } = require("express");

const modelsCanciones = require('../models/canciones-models')

exports.homeCanciones = (request, response, next) => {
    response.render('canciones', {
        mostrarLista: modelsCanciones.fetchAll(),
        ultimaCancionAdd: request.cookies.lastCancion
    })

    //console.log(request.get('Cookie').split('=')[1]);
    console.log(request.cookies.lastCancion);
};
    
exports.nuevaCancion = (request, response, next) => {
    response.render('cancionesNew');
};

exports.postNuevaCancion = (request, response, next) => {
    console.log("Posted");
    // Crear objeto new Cancion
    const saveCancion = new modelsCanciones(request.body.nombre);
    console.log(saveCancion);
    saveCancion.save();
    
    // Definición cookie
    response.setHeader('Set-Cookie', 'lastCancion='+saveCancion.nombre);
    
    // Redirigir a la página Canciones
    response.redirect('/canciones/');
};