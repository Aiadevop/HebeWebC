const { response } = require("express");
const Horario = require('../models/horario');


const validarHorario = async(req = request, res = response, next) => {

    const {horario} = req.body;
    console.log('horarioid',horario);
    if (!horario) {
        return res.status(401).json({
            msg: 'Cree primero el horario'
        });
    }

    try {
        
        const horariox = await Horario.findById(horario);//.populate('horario');
        console.log('y el horario es', horariox);

        if (!horariox) {
            return res.status(401).json({
                msg: 'Id de horario no existe'
            })
        }

        req.horario = horariox;
        next();

    } catch (error) {

        console.log(error);
        res.status(401).json({
            msg: 'Error de horario'
        })
        return;
    }

}
module.exports = {
    validarHorario
}