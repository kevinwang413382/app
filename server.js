var http = require("http");
var express = require('express')
var path = require("path")
var app = express();

//app.set('port', (process.env.PORT || 5000))

app.get('/', function (req, res) {
  res.send('Hello World!');
});
app.get('/index.html', function (req, res) {
  res.sendFile(path.join(__dirname+'/index.html'));
});

app.get('/api/send', function(req,res){
	res.send("server reply");
	console.log("request received");
});


app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});