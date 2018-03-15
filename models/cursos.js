module.exports = function (app) {
    var mongoose = require('mongoose');
    var Schema = mongoose.Schema;
    var curso = Schema({
    
    descricao: { type: String, required: true },
    ch: { type: Number },
    categoria: { type: String }
    });
    return mongoose.model('curso', curso);
   }; 