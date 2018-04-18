var restify = require('restify');
var fs = require('fs');
var server = restify.createServer();
var Texto = "";

server.get('/api/productos/all', (req, res, next) => {

    next();
});

server.get('/api/productos/add/:valor', (req, res, next) => {

    res.send("El valor valor" + req.params.valor + "ha sido añadido");
    next();
});

server.get('/api/productos/delete/:nid', (req, res, next) => {

    var id = req.params.nid;

    next();
});

server.listen(8888, function ()
{
    console.log('%s escuchando en el puerto%s',server.name,server.url)
});

server.on('uncaughtException', (req, res, route, err) => {

    err.bony = 'He pillado una excepcion :-C';
    res.send(500, err);
});