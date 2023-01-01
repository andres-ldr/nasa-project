const PORT = process.arg.env.POTR || 8000;
const http = require("http");

const app = require("./app"); //express middleware

const server = http.createServer(app);

server.listen(PORT);
