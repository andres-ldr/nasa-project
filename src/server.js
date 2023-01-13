const mongoose = require("mongoose");
const http = require("http");
const { loadPlanetsData } = require("./models/planets.model");
const app = require("./app"); //express middleware
const PORT = 8000;

const MONGO_URL =
  "mongodb+srv://andres:in1NpvaZZPqF15AG@nasacluster.6xxuvxx.mongodb.net/nasa?retryWrites=true&w=majority";

const server = http.createServer(app);

mongoose.connection.once("open", () => {
  console.log("MongoDB ready");
});
mongoose.connection.on("error", (err) => {
  console.error(err);
});

async function startServer() {
  await mongoose.connect(MONGO_URL);
  await loadPlanetsData();
  server.listen(PORT);
}

startServer();
