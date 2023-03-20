	console.log("Luister op localhost:8081");
const http = require('http')
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'})
    res.end('Hallo wereld!')

}).listen(8081);
