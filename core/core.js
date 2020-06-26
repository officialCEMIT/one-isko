const express = require("express");
const app = express();

const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv/config");

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // GLOBAL JSON

const api = require("./routes/index");
app.use("/api", api);
// Use User Routes
const users = require("./routes/index");
app.use("./users", users);
// Use Auth Routes
const auth = require("./routes/index");
app.use("./auth", auth);

mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log(`CONNECTED TO ${process.env.DB_CONNECTION}`);
  }
);
mongoose.set("useCreateIndex", true);

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => console.log(`SERVER STARTED ON PORT ${PORT}`));
