const express = require("express");
const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));

const PORT = process.env.PORT || 8080;

app.use(express.static("public"));

// Template engine - EJS (because why not?)
app.set("views", "./views");
app.set("view engine", "ejs");

// routes
const indexRouter = require("./routes/index");
const { addProductRouter } = require("./routes/add-product");
const errorRouter = require("./routes/error");

app.use(indexRouter);
app.use(addProductRouter);
app.use(errorRouter);

app.listen(PORT, () => {
  console.log(`Server is running! on http://localhost:${PORT}`);
});
