var express = require('express');
var app = express();
var path = require("path");


app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/public/assets'));
app.use(express.static(__dirname + '/public/images'));

app.get('/', function (req, res) {
	res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/project', function(req, res) {
	res.sendFile(path.join(__dirname + '/public/project.html'));
});

app.get('/blog', function(req, res) {
	res.sendFile(path.join(__dirname + '/public/blog.html'));
});

app.get('/allofme', function(req, res) {
	res.sendFile(path.join(__dirname + '/public/allofme.html'));
});


app.listen(process.env.PORT, function () {
  console.log('Example app listening on port 3000!');
});
