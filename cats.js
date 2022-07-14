'use strict';

var http = require('http')
var port = process.env.PORT || 8000;

var server = http.createServer(function (req, res) {
    if (req.method === 'GET' && req.url === '/cats') {
        var cats = 'meow'
        res.setHeader('Content-Type', 'text/plain')
        res.end(cats)
    } else {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Not found');
    }
});


server.listen(port, function() {
    console.log('Listening on port', port);
  })