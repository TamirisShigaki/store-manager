const rescue = require('express-rescue');
const productService = require('../services/productService');

const listAll = async (_req, res) => {
  const products = await productService.listAll();

  res.status(200).json(products);
};

const getById = rescue(async (req, res) => {
  const { id } = req.params;

  const product = await productService.getById(id);

  if (product.error) return res.status(404).json({ message: product.error.message });
  
  return res.status(200).json(product);
});

module.exports = {
  listAll,
  getById,
};