const rescue = require('express-rescue');
const Joi = require('joi');
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

const insertProduct = rescue(async (req, res, next) => {
  const { error } = Joi.object({
    name: Joi.string().not().empty().min(5)
    .required(),
  }).validate(req.body);

  if (error) return next(error);

  const { name } = req.body;

  const addInsertProduct = await productService.insertProduct(name);

  return res.status(201).json(addInsertProduct);
});

module.exports = {
  listAll,
  getById,
  insertProduct,
};