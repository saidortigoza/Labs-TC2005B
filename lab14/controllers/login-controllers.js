const User = require('../models/users');

exports.sign_up = (request, response, next) => {
    request.session.usuario = request.body.nombre;
    response.redirect('/home');
}

exports.make_login = (request, response, next) => {
    console.log("Someone entered Login interface");
    response.render('login');
}

exports.logout = (request, response, next) => {
    request.session.destroy(() => {
        response.redirect('/'); //Este código se ejecuta cuando la sesión se elimina.
    });
};