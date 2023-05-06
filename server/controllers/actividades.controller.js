const { response, json } = require("express");
const { Actividad } = require("../models");
const mongoose = require('mongoose');
const { Schema } = mongoose;

//obtenerActividades - paginado - nºactividades - metodo populate

const obtenerActividades = async (req, res = response) => {

    const { limite = 5, desde = 0 } = req.query;
    const act = Actividad.find({ estado: true })
        .populate('usuario', 'nombre')
        .populate('actividad', 'actividad')
        .skip(Number(desde))
        .limit(Number(limite));
    const tot = Actividad.countDocuments({ estado: true });

    const [total, actividades] = await Promise.all([
        tot,
        act
    ])

    res.status(200).json({
        total,
        actividades
    })
}

//obtenerActividad- populate {}

const obtenerActividad = async (req, res = response) => {
    const { id } = req.params;
    const actividad = await Actividad.findById(id).populate('actividad', 'actividad').populate('usuario', 'nombre');
    if (!actividad) {
        res.status(400).json({
            msg: `El id de esta actividad no existe.`
        })
        return;
    }
    res.status(200).json({
        actividad
    })

}

const crearActividad = async (req, res = response) => {

    const { precio } = req.body;
    const actividad = req.body.actividad.toUpperCase();

    const actividadDB = await Actividad.findOne({ actividad })
   

    if (actividadDB) {
        res.status(400).json({
            msg: `La actividad ya existe en la BD`
        })
        return
    };
    const data = {
        actividad,
        precio
    }


    const actividadx = new Actividad(data);
    await actividadx.save(actividadx);
    res.status(200).json(data);
}


//Actualizaractividad - recibir el nombre

const actualizarActividad = async (req, res = response) => {

    const { id } = req.params;
    const { usuario, ...resto } = req.body;
    resto.actividad = resto.actividad.toUpperCase();

    //encuentra una actividad y lo actualiza
    const actividades = await Actividad.findByIdAndUpdate(id, resto, { new: true });

    res.status(400).json({
        actividades
    })
}

//BorrarActividad - estado false

const borrarActividad = async (req, res = response) => {

    const { id } = req.params;

    const { actividad } = await Actividad.findByIdAndUpdate(id, { estado: false });

    res.json({
        "Actividad borrada": actividad
    })

}



module.exports = {
    actualizarActividad,
    borrarActividad,
    crearActividad,
    obtenerActividad,
    obtenerActividades
  

}