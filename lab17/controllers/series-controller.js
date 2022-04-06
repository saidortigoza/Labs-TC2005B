const { request } = require("express");

const modelsSeries = require('../models/series-models')

exports.homeSeries = (request, response, next) => {
    response.render('series', {
        mostrarLista: modelsSeries.fetchAll()
    })
};
    
exports.nuevaSerie = (request, response, next) => {
    response.render('seriesNew');
};

exports.postNuevaSerie = (request, response, next) => {
    console.log("Posted");
    const saveSerie = new modelsSeries(request.body.nombre);
    console.log(saveSerie);
    saveSerie.save()
    response.redirect('/series/');
};