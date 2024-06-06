const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const studentRoutes = require("./routes/studentRoutes");

const app = express();

/* Exemple URL : mongodb://myAdmin:nicolas@127.0.0.1:27017/?authsource=admin */
mongoose.connect("mongodb://route:password@127.0.0.1:27040/?authsource=admin", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected to Database OK"));

app.use(bodyParser.json());

app.use("/", studentRoutes);

app.listen(3000, () => console.log("Server Started OK"));
