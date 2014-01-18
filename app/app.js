var http = require("http");

http.createServer(function(req,res){

	res.writeHead(200,{'Content-Type':'text/html'});
	res.write('<h1>Alan kell</h1>');
	res.end('<p> perfect world</p>');

}).listen(3000);
console.log("http serve is listening at port 3000.");