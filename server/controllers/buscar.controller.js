const { response } = require("express");
const { ObjectId } = require("mongoose").Types;
const { Usuario, Horario, Actividad } = require('../models')

const coleccionesPermitidas = [
    'horario',
    'actividades',
    'roles',
    'usuarios',
];

const buscarHorario = async (termino = '', res = response) => {
    const esMongoID = ObjectId.isValid(termino);
    if (esMongoID) {
        const horario = await Horario.findById(termino)
        console.log(horario);
        return res.status(400).json({
            results: (horario) ? [horario] : []
        })
    }
    const regex = new RegExp(termino, 'i');

    const horarios = await Horario.find({
        $or: [{ horario: regex }],
        $and: [{ estado: true }]
    });


    return res.status(400).json({
        results: (horarios) ? [horarios] : []
    })

}

const buscarActividades = async (termino = '', res = response) => {
    const esMongoID = ObjectId.isValid(termino);
    console.log(termino);
    if (esMongoID) {
        const actividad = await actividad.findById(termino).populate('horario','nombre')
        console.log(actividad);
        return res.status(400).json({
            results: (actividad) ? [actividad] : []
        })
    }

    //búsquedas insensibles. //Expresion regular importada de JS 
    //insensible a mayusculas y minusculas.
    const regex = new RegExp(termino, 'i');
    console.log(regex);
    const actividades = await Actividad.find({
        $or: [{ actividad: regex }], //¿Como hacer la búsqueda por precio??
        $and: [{ estado: true }]
        
    }).populate('horario','horario').populate('usuario','nombre'); 


    return res.status(400).json({
        results: (actividades) ? [actividades] : []
    })

}

const buscarRoles = async (termino = '', res = response) => {
    const esMongoID = ObjectId.isValid(termino);
    console.log(termino);
    if (esMongoID) {
        const usuario = await Usuario.findById(termino)
        console.log(usuario);
        return res.status(400).json({
            results: (usuario) ? [usuario.nombre,usuario.rol] : []
        })
    }

    //búsquedas insensibles. //Expresion regular importada de JS 
    //insensible a mayusculas y minusculas.
    const regex = new RegExp(termino, 'i');
    console.log(regex);
    const usuarios = await Usuario.find({
        $or: [{ nombre: regex }, { rol: regex }],
        $and: [{ estado: true }]
    });


    return res.status(400).json({
        results: (usuarios) ? [usuarios] : []
    })

}

const buscarUsuarios = async (termino = '', res = response) => {
    const esMongoID = ObjectId.isValid(termino);
    console.log(termino);
    if (esMongoID) {
        const usuario = await Usuario.findById(termino)
        console.log(usuario);
        return res.status(400).json({
            results: (usuario) ? [usuario] : []
        })
    }

    //búsquedas insensibles. //Expresion regular importada de JS 
    //insensible a mayusculas y minusculas.
    const regex = new RegExp(termino, 'i');

    const usuarios = await Usuario.find({
        $or: [{ nombre: regex }, { correo: regex }],
        $and: [{ estado: true }]
    });


    return res.status(400).json({
        results: (usuarios) ? [usuarios] : []
    })

}

const buscar = (req, res = response) => {

    const { coleccion, termino } = req.params;
    if (!coleccionesPermitidas.includes(coleccion)) {
        res.status(400).json({
            msg: `Las colecciones permitidas son: ${coleccionesPermitidas}`,
        })
    }
    switch (coleccion) {
        case 'horario':
            buscarHorario(termino, res);
            break;
        case 'actividad':
            buscarActividades(termino, res);
            break;
        case 'roles':
            buscarRoles(termino,res)
            break;
        case 'usuarios':
            buscarUsuarios(termino, res);
            break;
        default:
            res.status(500).json({
                msg: `Se me olvidó hacer la búsqueda `,
            })
    }
}

module.exports = {
    buscar,
    buscarHorario,
    buscarActividades,
    buscarRoles,
    buscarUsuarios,
    
}