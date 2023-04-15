//Mismo nombre que la colección sin la s.
//Çotejamos en la base de datos que lo introducido es correcto.

const { Schema, model } = require('mongoose');

const HorarioSchema = Schema({

    horario: {
        type: String,
        required: [true, 'El horario es obligatorio.'],
        unique:true

    },
    estado: {
        type: Boolean,
        default: true,
        required: true
    },
    usuario: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true
    }

});

HorarioSchema.methods.toJSON = function() {

    //Se saca la versión y el password y todos los demás aparecen.
    const { __v, estado, ...horario } = this.toObject();
    return horario;
}

module.exports = model('Horario', HorarioSchema)