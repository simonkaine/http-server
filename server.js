//Require the http module and your app request listener from /lib/app.js
// Create an http server and start listening

const http = require('http');
const app = require('./lib/app.js');

const server = http.createServer(app);

server.listen(7890);
