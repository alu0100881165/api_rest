var express = require("express"),
    app = express(),
    bodyParser = require("body-parser"),
    methodOverride = require("method-override");
    http = require("http"),
    server = http.createServer(app),
    mongoose = require('mongoose');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());

var router = express.Router();

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/asignaturas');

router.get('/', function (req, res) {
    res.send("Hello World!");
});

app.use(router);

mongoose.connect('mongodb://localhost/asignaturas', function (err, res) {
    if (!err) {
        console.log('ERROR: connecting to Database.' + err);
    }
    /*else {
        console.log("HEMOS CONECTADO A LA BASE DE DATOS" + res);
    }*/
    app.listen(3000, function () {
        console.log("Node server running on http://localhost:3000");
    });
});


