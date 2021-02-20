const express = require("express");
const app = express();

const PORT = process.env.PORT || 8080;

// Template engine - EJS (because why not?)
app.set("views", "./views");
app.set("view engine", "ejs");

// routes
const indexRouter = require("./routes/index");

app.use(indexRouter);

app.listen(PORT, () => {
  console.log("Server is running!");
});
