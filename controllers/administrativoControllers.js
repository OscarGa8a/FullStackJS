//Importamos el modelo de Administrativo
const Administrativo = require('../models/Administrativo');

exports.agregarAdministrativo = async (req, res, next) => {
    const administrativo = new Administrativo(req.body);
    try {
        await administrativo.save();
        res.json({mensaje: 'Administrativo agregado!!'});
    } catch (error) {
        console.log(error);
        next();
    }
}

exports.obtenerAdministrativos = async (req, res, next) => {
    try {
        const administrativos = await Administrativo.find({});
        res.json(administrativos);
    } catch (error) {
        console.log(error);
        next();
    }
}

exports.obtenerAdministrativo = async (req, res, next) => {
    try {
        const administrativo = await Administrativo.findById(req.params.id);
        res.json(administrativo);
    } catch (error) {
        console.log(error);
        next();
    }
}

exports.actualizarAdministrativo = async (req, res, next) => {
    try {
        const administrativo = await Administrativo.findOneAndUpdate({_id : req.params.id}, req.body, {new: true});
        res.json(administrativo);
    } catch (error) {
        console.log(error);
        next();
    }
}

exports.eliminarAdministrativo = async (req, res, next) => {
    try {
        await Administrativo.findOneAndDelete({_id: req.params.id});
        res.json({mensaje: 'Administrativo eliminado!!'});
    } catch (error) {
        console.log(error);
        next();
    }
}