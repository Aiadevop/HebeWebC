//Mismo nombre que la colección sin la s.
//Çotejamos en la base de datos que lo introducido es correcto.

const { Schema, model } = require('mongoose');

const ActividadSchema = Schema({

    actividad: {
        type: String,
        required: [true, 'La actividad es obligatoria.'],
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
    },
    precio: {
        type:Number,
        default:0
    },
    horario:{
        type: Schema.Types.ObjectId,
        ref:'Horario',
        required: true
    },
    descripcion:{
        type: String
    },
    disponible: {
        type: Boolean,
        default: true
    },
    img: {
        type: String
    }


});

ActividadSchema.methods.toJSON = function() {

    //Se saca la versión y el password y todos los demás aparecen.
    const { __v, estado, ...actividad } = this.toObject();
    return actividad;
}

module.exports = model('actividad', ActividadSchema)