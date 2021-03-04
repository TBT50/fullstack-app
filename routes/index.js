const express = require("express");

const router = express.Router();

const { homePageView } = require("./../controllers/product");

router.get("/", homePageView);
module.exports = router;
