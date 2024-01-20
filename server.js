const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const db_connect = require("./utils/db");
dotenv.config();
app.use(bodyParser.json());
if (process.env.mode === "production") {
  app.use(cors({ origin: "*" }));
} else {
  app.use(cors({ origin: "http://localhost:5173" }));
}
const port = process.env.Port || 5000;

app.use("/", require("./routes/authRoutes"));
app.get("/", (req, res) => {
  res.send("Hello World!");
});
db_connect();
app.listen(port, () => {
  console.log(`News app listening at http://localhost:${port}`);
});
