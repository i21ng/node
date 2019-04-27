const mongoose = require('mongoose');
const { Schema } = mongoose;

const personaSchema = new Schema({
    nombre: String,
    edad: Number,
    apellidos: {
        paterno: String,
        materno: String
    },
    profesion: {
        type: String,
        default: 'Desarrollador'
    }
});

mongoose.model('personas', personaSchema);

