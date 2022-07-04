const productModel = require('../models/productModel');

const listAll = async () => {
  const products = await productModel.listAll();

  return products;
};

const getById = async (id) => {
  const product = await productModel.getById(id);

  if (!product) return { error: { code: '404', message: 'Product not found' } };

  return product;
};

module.exports = {
  listAll,
  getById,
};