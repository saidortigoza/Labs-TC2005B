const { request } = require("express");

const modelsCanciones = require('../models/canciones-models')

exports.homeCanciones = (request, response, next) => {
    modelsCanciones.fetchAll()
    .then(([rows, fieldData]) => {
        response.render('canciones', {
            canciones: rows,
            ultimaCancionAdd: request.cookies.lastCancion
        })
        console.log("nueva cancion agregada")
    })
    
    .catch(err => {
        console.log(err);
    })

    //console.log(request.get('Cookie').split('=')[1]);
    console.log(request.cookies.lastCancion);
};

exports.getCancion = (request, response, next) => {
    const id = request.params.id_cancion;
    modelsCanciones.searchId(id)

    .then(([rows, fieldData]) => {
        response.render('canciones', {
            canciones: rows,
            ultimaCancionAdd: request.cookies.lastCancion
        })
        console.log("Cancion por id")
    })
    
    .catch(err => {
        console.log(err);
    })
}
    
exports.nuevaCancion = (request, response, next) => {
    response.render('cancionesNew');
};

exports.postNuevaCancion = (request, response, next) => {
    console.log("Posted");
    // Crear objeto new Cancion
    const saveCancion = new modelsCanciones(request.body.nombre);
    console.log(saveCancion);
    saveCancion.save()
    
    .then(() => {
        console.log("Start");
        response.redirect('/canciones/')
    })

    .catch(err => {
        console.log(err);
    });
    
    // Definición cookie
    response.setHeader('Set-Cookie', 'lastCancion='+saveCancion.nombre);
    
    // Redirigir a la página Canciones
    response.redirect('/canciones/');
};