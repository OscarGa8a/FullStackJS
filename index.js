//Importamos express para el manejo de servidores
const express = require('express');
//Importamos mongoose para el manejo de base de datos mongoDB
const mongoose = require('mongoose');
//Importamos routes para el manejo de las rutas en el servidor express
const routes = require('./routes');
//Importamos body-parser
const bodyParser = require('body-parser');
//Importamos las variables de entorno
require('dotenv').config({path: 'variables.env'});

//Creamos el servidor
const app = express();

//Hablitamos mongoose
mongoose.Promise = global.Promise;
//Asignamos url de la base de datos mongoDB
mongoose.connect('mongodb+srv://oscarga8a:IngElec123@dbcluster-nhvz2.mongodb.net/cato', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});

//Configuramos body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//Habilitamos routing
app.use('/', routes());

//Elegimos el host
const host = process.env.HOST || '0.0.0.0';
//Elegimos el puerto
const port = process.env.PORT || 5000;

//Asignamos puerto y arrancamos el servidor
app.listen(port, host, () => {
    console.log('Servidor iniciado!!');
});