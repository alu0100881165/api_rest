// JavaScript source code
var mongose = require('mongoose'),
    Schema = mongoose.Schema;

var asignaturasSchema = new Schema({
    nid: { type: Number },
    valor: {type: String }
});

module.exports = mongoose.model('Asignaturas', asignaturasSchema);