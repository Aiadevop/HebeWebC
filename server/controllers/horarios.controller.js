const { response, json } = require("express");
const { Horario, Actividad } = require("../models");
const horario = require("../models/horario");
const mongoose = require('mongoose');
const { Schema } = mongoose;

//obtenerHorarios - paginado - nºHorarios - metodo populate

const obtenerHorarios = async (req, res=response) =>{

    const { limite = 5, desde = 0 } = req.query;
    const cat = Horario.find({ estado: true })
        .populate('usuario','nombre')
        .skip(Number(desde))
        .limit(Number(limite));
    const tot = Horario.countDocuments({ estado: true });
    
    const [total, horarios] = await Promise.all([
        tot,
        cat        
    ])

    res.status(200).json({
        total,
        horarios          
    })
}

//obtenerHorario- populate {}

const obtenerHorario = async (req, res=response) =>{
    const {id} = req.params;
    const horario = await Horario.findById(id).populate('usuario');
   
    res.status(200).json({
        horario
    })
    
}

const crearHorario = async (req, res=response) => {

    const {horario, actividad} = req.body;

    const horarioDB = await Horario.findOne({horario,actividad})

    if(horarioDB){
        res.status(400).json({
            msg: `El horario ${horario} y actividad ${actividad} ya existe`
        })
        return
    };

    const actividadModel = await Actividad.findById(actividad)
    const nombreActividad = actividadModel.actividad
    // const nombreHorario = nombreActividad ? nombreActividad.concat(" "+horario):horario;

    const data = {
        // horario: nombreHorario,     
        horario,
        actividad, 
        nombreActividad,
    }
    const horariox = new Horario (data);
    console.log(horariox)
    await horariox.save();
    res.status(201).json(data);
}

//ActualizarHorario - recibir el nombre

const actualizarHorario = async (req, res=response) =>{
  
    const { id } = req.params;
    const { usuario, estado, ...resto } = req.body;
  

    resto.horario  = resto.horario.toUpperCase();
      
    //encuentra una horario y lo actualiza
    const horarios = await Horario.findByIdAndUpdate(id,resto, {new:true});

    res.status(400).json({
        horarios
    })
}

//Actualizaractividad - recibir el nombre

const añadirUsuarioAlHorario = async (req, res = response) => {

    const { id } = req.params;
    const { usuario} = req.body;

    try {
        const horarioDB = await Horario.findById(id);
         const usuarioHorarioDB = await Horario.findOne({ 'horario._id': id, 'usuario._id': usuario})
        if (usuarioHorarioDB) {
            res.status(400).json({
                msg: `El usuario ya esta registrado en este horario`
            })
            return;
        };

        //encuentra una actividad y lo actualiza
        // const actividades = await Actividad.findByIdAndUpdate(id,usuario,{new:true});
        horarioDB.usuario.push(usuario);
        await horarioDB.save();

        res.status(200).json({
            horarioDB
        })
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al agregar el usuario a la actividad.' });
    }
}

//Borrar usuario de la actividad
const borrarUsuarioDelHorario = async (req, res = response) => {

    const { id } = req.params;
    const { usuario } = req.body;

    try {
        const actividadDB = await Actividad.findById(id);      
        if (!actividadDB.usuario.includes(usuario)) {
            res.status(400).json({
                msg: `El usuario no esta registrado en esta actividad`
            })
            return
        };

        //encuentra una actividad y lo actualiza
        // const actividades = await Actividad.findByIdAndUpdate(id,usuario,{new:true});
        actividadDB.usuario.pull(usuario);
        await actividadDB.save();

        res.status(200).json({
            actividadDB
        })
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al agregar el usuario a la actividad.' });
    }
}


//BorrarHorario - estado false

const borrarHorario = async (req, res=response) =>{

    const { id } = req.params;

    const {horario} = await Horario.findByIdAndDelete(id);

    res.json({
        "Horario borrado": horario
    })
    
}

module.exports = {
    actualizarHorario,
    borrarHorario,
    crearHorario,
    obtenerHorario,
    obtenerHorarios,
    añadirUsuarioAlHorario,
    borrarUsuarioDelHorario   
    
}