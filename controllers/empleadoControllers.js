//Importamos el modelo de Administrativo
const Empleado = require('../models/Empleados');

exports.agregarEmpleado = async (req, res, next) => {
    const empleado = new Empleado(req.body);
    try {
        await empleado.save();
        res.json({mensaje: 'Empleado agregado!!'});
    } catch (error) {
        console.log(error);
        next();
    }
}

exports.obtenerEmpleados = async (req, res, next) => {
    try {
        const empleados = await Empleado.find({});
        res.json(empleados);
    } catch (error) {
        console.log(error);
        next();
    }
}

exports.obtenerEmpleado = async (req, res, next) => {
    try {
        const empleado = await Empleado.findById(req.params.id);
        res.json(empleado);
    } catch (error) {
        console.log(error);
        next();
    }
}

exports.actualizarEmpleado = async (req, res, next) => {
    try {
        const empleado = await Empleado.findOneAndUpdate({_id : req.params.id}, req.body, {new: true});
        res.json(empleado);
    } catch (error) {
        console.log(error);
        next();
    }
}

exports.eliminarEmpleado = async (req, res, next) => {
    try {
        await Empleado.findOneAndDelete({_id: req.params.id});
        res.json({mensaje: 'Empleado eliminado!!'});
    } catch (error) {
        console.log(error);
        next();
    }
}