//Require the http module and your app request listener from /lib/app.js
// Create an http server and start listening

import http from 'http';
import app from './lib/app.js.js';

const server = http.createServer(app);

server.listen(7890);
