const mongoose = require('../database');
const bcrypt = require('bcryptjs');

const UserSchema = new mongoose.Schema({
    sabor: {
        type: String,
        require: true,
    },
    preco: {
        type: String,
        required: true,
    },
    ingredientes: {
        type: String,
        required: true,
    },
    
});

const Cardapio = mongoose.model('Cardapio', UserSchema);

module.exports = Cardapio;
