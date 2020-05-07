//Importamos mongoose para el manejo de base de datos mongoDB
const mongoose = require('mongoose');
//Asignamos el Schema del modelo de Administrativos
const Schema = mongoose.Schema;

//Definimos el Schema del modelo de Administrativos
const empleadosSchema = new Schema({
    nombre: {
        type: String,
        trim: true
    },
    cargo: {
        type: String,
        trim: true
    },
    correo: {
        type: String,
        trim: true
    }
});

//Exportamos el modelo de Administrativo
module.exports = mongoose.model('Empleado', empleadosSchema);