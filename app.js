var express = require('express');
var app = express();
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var http = require("http");
var server = http.createServer(app);
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/asignaturas', function(err, res) {
  if(err) {
    console.log('ERROR: connecting to Database. ' + err);
  }
  else{
    console.log('Conectado a la Database');
  }
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());

var models = require('./models/asignaturas_model')(app,mongoose);
var AsignaturasCtrl = require('./controllers/asignaturas');

var router = express.Router();

router.get('/', function(req, res) {
  res.send("Hello World!");
});

app.use(router);

var asignaturas_ = express.Router();

asignaturas_.route('/asignaturas')
  .get(AsignaturasCtrl.findAllAsignaturas)
  .post(AsignaturasCtrl.addAsignaturas);

asignaturas_.route('/asignaturas/:id')
  .get(AsignaturasCtrl.findById)
  .put(AsignaturasCtrl.updateAsignatura)
  .delete(AsignaturasCtrl.deleteAsignatura);

  app.use('/api', asignaturas_)

app.listen(3000, function() {
  console.log("Node server running on http://localhost:3000");
});
