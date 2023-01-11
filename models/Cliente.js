const mongoose = require('mongoose');

const UsuarioSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    cedula: {
        type: String,
        required: true,
        unique: true
    },
    telefono: {
        type: String,
        required: true
    },
    tipo_tramite:{
        type: String,
        required: true
    },
    tipo_licencia:{
        type: String,
        required: true
    },
    comprobante:{
        type: String,
        required: true
    }
    
});

module.exports = mongoose.model('Usuario', UsuarioSchema);