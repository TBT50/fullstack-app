const products = [];

const addProductView = (req, res, next) => res.render("add-product");

const addProductLogic = (req, res, next) => {
  products.push(req.body.productName);
  res.redirect("/");
};

const homePageView = (req, res) => {
  res.render("index", { products: products });
};

module.exports = {
  addProductView,
  addProductLogic,
  homePageView,
};
