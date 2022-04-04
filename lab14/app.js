const express  = require('express');
const app = express();

const session = require('express-session');

app.use(session({
    secret: 'aaadjdjdjlalksklalaksklajdkjdfjjioasjdoiwejoiwejweoijioewjeiodjioewe', 
    resave: false, //La sesión no se guardará en cada petición, sino sólo se guardará si algo cambió 
    saveUninitialized: false, //Asegura que no se guarde una sesión para una petición que no lo necesita
}));

const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));

const path = require('path');

// Simplifica como se imprime la cookie
app.use(cookieParser());

app.use(express.static('public'));

app.set('view engine', 'ejs');
app.set('views', 'views');

app.get('/', (request, response) => {
    console.log("Alguien entró a Home");
    response.render('home');
});


app.get('/pending', (request, response) => {
    response.status(404);
    response.write("Error 404, Not Found");
    response.end();
})

const loginRouter = require('./routes/login-routes');
app.use('/login', loginRouter);

const seriesRouter = require('./routes/series');
app.use('/series', seriesRouter); //Anything that starts with /peliculas works with userRoutes

const cancionesRouter = require('./routes/canciones');
app.use('/canciones', cancionesRouter); //Anything that starts with /peliculas works with userRoutes

app.listen(2000);