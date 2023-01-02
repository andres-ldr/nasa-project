const PORT = 8000;
const http = require("http");

const { loadPlanetsData } = require("./models/planets.model");

const app = require("./app"); //express middleware

const server = http.createServer(app);

async function startServer() {
  await loadPlanetsData();
  server.listen(PORT);
}

startServer();
