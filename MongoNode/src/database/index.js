//para se conectar com o mongo yarn add mongoose
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/pizzaria', { useMongoClient: true });
mongoose.Promise = global.Promise;

module.exports = mongoose;
