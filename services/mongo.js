const mongoose = require("mongoose");
const MONGO_URL =
  "mongodb+srv://andres:in1NpvaZZPqF15AG@nasacluster.6xxuvxx.mongodb.net/nasa?retryWrites=true&w=majority";

mongoose.connection.once("open", () => {
  console.log("MongoDB ready");
});
mongoose.connection.on("error", (err) => {
  console.error(err);
});

async function mongoConnect(params) {
  await mongoose.connect(MONGO_URL);
}
async function mongoDisconnect(params) {
  await mongoose.disconnect(MONGO_URL);
}
module.exports = { mongoConnect, mongoDisconnect };
