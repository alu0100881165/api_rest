var mongoose = require('mongoose');
var Asignatura  = mongoose.model('asignaturas_model');

//GET - Return all tvshows in the DB
exports.findAllAsignaturas = function(req, res) {
	Asignatura.find(function(err, asignatura) {
    if(err) res.send(500, err.message);

    console.log('GET /asignaturas')
		res.status(200).jsonp(asignatura);
	});
};

//GET - Return a TVShow with specified ID
exports.findById = function(req, res) {
	Asignatura.findById(req.params.id, function(err, asignatura) {
    if(err)
      return res.send(500, err.message);

    console.log('GET /asignaturas' + req.params.id);
		res.status(200).jsonp(asignatura);
	});
};

//POST - Insert a new TVShow in the DB
exports.addAsignaturas = function(req, res) {
	console.log('POST');
	console.log(req.body);

	var asignatura = new Asignatura({
    id:      req.body.id,
		nombre:   req.body.nombre
	});

	asignatura.save(function(err, asignatura) {
		if(err) return res.status(500).send( err.message);
    res.status(200).jsonp(asignatura);
	});
};

//PUT - Update a register already exists
exports.updateAsignatura = function(req, res) {
	Asignatura.findById(req.params.id, function(err, asignatura) {
		asignatura.id = req.body.id;
    asignatura.name = req.body.nombre;

		asignatura.save(function(err) {
			if(err) return res.status(500).send(err.message);
      res.status(200).jsonp(asignatura);
		});
	});
};

//DELETE - Delete a TVShow with specified ID
exports.deleteAsignatura = function(req, res) {
	Asignatura.findById(req.params.id, function(err, asignatura) {
		asignatura.remove(function(err) {
			if(err) return res.status(500).send(err.message);
      res.status(200).send();
		})
	});
};
