exports = module.exports = function(app, mongoose){
  var asignaturasSchema = new mongoose.sShema({
    id:      {type: Number},
    nombre:  {type: String}
    });

  mongoose.model('asignaturas_model', asignaturasSchema);
};
