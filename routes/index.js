//Importamos express para el manejo de servidores
const express = require('express');
//Nos permite el manejo de las rutas del servidor de express
const routes = express.Router();
//Importamos el controlador del modelo de Admisnitrativo
const administrativoController = require('../controllers/administrativoControllers');
//Importamos el controlador del modelo de Admisnitrativo
const empleadoController = require('../controllers/empleadoControllers');

module.exports = () => {

    //Agregamos un administrativo via POST
    routes.post('/administrativos', administrativoController.agregarAdministrativo);

    //Obtenemos todos los administrativos via GET
    routes.get('/administrativos', administrativoController.obtenerAdministrativos);

    //Obtenemos un administrativo via GET
    routes.get('/administrativos/:id', administrativoController.obtenerAdministrativo);

    //Actualizamos un administrativo via PUT
    routes.put('/administrativos/:id', administrativoController.actualizarAdministrativo);

    //Eliminamos un administrativo via DELETE
    routes.delete('/administrativos/:id', administrativoController.eliminarAdministrativo);

    //Agregamos un administrativo via POST
    routes.post('/empleados', empleadoController.agregarEmpleado);

    //Obtenemos todos los administrativos via GET
    routes.get('/empleados', empleadoController.obtenerEmpleados);

    //Obtenemos un administrativo via GET
    routes.get('/empleados/:id', empleadoController.obtenerEmpleado);

    //Actualizamos un administrativo via PUT
    routes.put('/empleados/:id', empleadoController.actualizarEmpleado);

    //Eliminamos un administrativo via DELETE
    routes.delete('/empleados/:id', empleadoController.eliminarEmpleado);

    return routes;
}