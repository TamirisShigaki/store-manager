const productModel = require('../models/productModel');

const listAll = async () => {
  const products = await productModel.listAll();

  return products;
};

const getById = async (id) => {
  const product = await productModel.getById(id);

  if (!product) return { error: { code: 'notFound', message: 'Product not found' } };
  
  return product;
};

const insertProduct = async (name) => {
  const id = await productModel.insertProduct(name);

  return id;
};

module.exports = {
  listAll,
  getById,
  insertProduct,
};