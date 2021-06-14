var connect = require('connect');
var sassMiddleware = require('node-sass-middleware');
var express = require('express')

var srcPath = __dirname + '/public/assets/sass';
var destPath = __dirname + '/public/assets/css';

var serveStatic = require('serve-static')
var http = require('http');
var port = process.env.PORT || 8000;
var app = connect();

// Bootstrap
// app.use(__dirname + '/public/assets/js', express.static(__dirname + '/node_modules/bootstrap/dist/js')); // redirect bootstrap JS
// app.use(__dirname + '/public/assets/js', express.static(__dirname + '/node_modules/jquery/dist')); // redirect JS jQuery
// app.use(__dirname + '/public/assets/css', express.static(__dirname + '/node_modules/bootstrap/dist/css')); // redirect CSS bootstrap

app.use('/assets/css', sassMiddleware({
    src: srcPath,
    dest: destPath,
    debug: true,
    outputStyle: 'expanded'
}));
app.use('/',
    serveStatic('public', {'index': ['index.html']})
);
http.createServer(app).listen(port);
console.log('Server listening on port ' + port);
