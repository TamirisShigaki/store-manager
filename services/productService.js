const productModel = require('../models/productModel');

const listAll = async () => {
  const products = await productModel.listAll();

  if (!products) return false;
  return products;
};

module.exports = {
  listAll,
};