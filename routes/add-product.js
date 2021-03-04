const express = require("express");

const router = express.Router();

const { addProductView, addProductLogic } = require("./../controllers/product");

router.get("/add-product", addProductView);

router.post("/process-data", addProductLogic);

module.exports = {
  addProductRouter: router,
};
