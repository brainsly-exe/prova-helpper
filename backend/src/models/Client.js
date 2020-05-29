const mongoose = require('mongoose')

const ClientSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    telefone: {
        type: String,
        required: true,
    },
    cep: {
        type: String,
        required: true,
    },
    logradouro: {
        type: String,
        required: true,
    },
    numero: {
        type: String,
        required: true,
    },
    bairro: {
        type: String,
        required: true,
    },
    cidade: {
        type: String,
        required: true,
    },
    estado: {
        type: String,
        required: true,
    },
})

module.exports = mongoose.model('Client', ClientSchema)