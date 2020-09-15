const https = require('https');
const http = require('http');
const fs = require('fs');
const ssl_server_key = 'server_key.pem';
const ssl_server_crt = 'server_crt.pem';

const port = 8080;

if (fs.existsSync(ssl_server_key)) {
    console.log('ssl_server_key exist');

    const options = {
        key: fs.readFileSync(ssl_server_key),
        cert: fs.readFileSync(ssl_server_crt)
    };

    https.createServer(options, function (req, res) {
        res.writeHead(200, {
            'Content-Type': 'text/plain'
        });
        res.end("Hello, world on https\n");
    }).listen(port);

} else {
    console.log('ssl_server_key not exist');

    http.createServer(function (req, res) {
        res.writeHead(200, {
            'Content-Type': 'text/plain'
        });
        res.end("Hello, world on http\n");
    }).listen(port);
}




