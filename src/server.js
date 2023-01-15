const http = require("http");
const { loadPlanetsData } = require("./models/planets.model");
const app = require("./app"); //express middleware
const { mongoConnect } = require("../services/mongo");
const PORT = 8000;


const server = http.createServer(app);

async function startServer() {
  await mongoConnect();
  await loadPlanetsData();
  server.listen(PORT);
}

startServer();
