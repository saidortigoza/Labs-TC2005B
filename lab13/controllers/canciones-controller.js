const { request } = require("express");

const modelsCanciones = require('../models/canciones-models')

exports.homeCanciones = (request, response, next) => {
    response.render('canciones', {
        mostrarLista: modelsCanciones.fetchAll()
    })
};
    
exports.nuevaCancion = (request, response, next) => {
    response.render('cancionesNew');
};

exports.postNuevaCancion = (request, response, next) => {
    console.log("Posted");
    const saveCancion = new modelsCanciones(request.body.nombre);
    console.log(saveCancion);
    saveCancion.save()
    response.redirect('/canciones/');
};