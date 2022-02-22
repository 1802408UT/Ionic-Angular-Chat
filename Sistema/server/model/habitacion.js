const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Habitacion = new Schema({
    numero: {
        type: String,
    },
    tipo: {
        type: String
    },
    estatus: {
        type: String
    },
    orden: {
        type: String
    }
}, {
    collection: 'habitaciones'
})

module.exports = mongoose.model('Habitacion', Habitacion)