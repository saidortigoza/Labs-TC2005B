const express  = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));

const path = require('path');

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

const seriesRouter = require('./routes/series');
app.use('/series', seriesRouter); //Anything that starts with /peliculas works with userRoutes

const cancionesRouter = require('./routes/canciones');
app.use('/canciones', cancionesRouter); //Anything that starts with /peliculas works with userRoutes

app.listen(2000);