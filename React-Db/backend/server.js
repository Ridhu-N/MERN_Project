const mongoose = require("mongoose");
const express = require("express");
const env = require("dotenv").config();
const cors = require("cors");
const app = express();
const port = process.env.PORT | 5000;
const routes = require("./routes/TaskRoute");
app.use(express.json());
app.use(cors());
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Database connected"))
  .catch((e) => console.log(e));

app.use("/api", routes);
app.listen(port, () => console.log("connected"));
