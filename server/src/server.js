const http = require('http');
const { loadPlanetsData } = require('./models/planets.model');
const app = require('./app'); //express middleware
const { mongoConnect } = require('../services/mongo');
const { loadLaunchData } = require('./models/launches.model');
require('dotenv').config();

const PORT = process.env.PORT;

const server = http.createServer(app);

async function startServer() {
  await mongoConnect();
  await loadPlanetsData();
  await loadLaunchData();
  server.listen(PORT);
}

startServer();
