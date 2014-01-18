var express = require("../express")
var app = express();

app.get('hello.txt',function(req,res){
	var body = 'I love alankell';
	res.setHeader('Content-Type','text/plain');
	res.setHeader('Content-Length',Buffer.byteLength(body));
	res.end(body);
	
});

app.get('hello.txt', function(req, res){
  res.send('I love alankell');
});

app.listen(3000,"127.0.0.1");
    console.log('Listening on port 3000');