const Joi = require('joi');
const rescue = require('express-rescue');
const productService = require('../services/productService');

const listAll = async (_req, res) => {
  const products = await productService.listAll();

  res.status(200).json(products);
};

const getById = async (req, res) => {
  const { id } = req.params;

  const product = await productService.getById(id);

  if (product.error) return res.status(404).json({ message: product.error.message });
  
  return res.status(200).json(product);
};

const insertProduct = rescue(async (req, res, next) => {
  const { error } = Joi.object({
    name: Joi.string().required().min(5).not(),
  }).validate(req.body);

   if (error) return next(error);

  const { name } = req.body;

  const id = await productService.insertProduct(name);

  if (!id) return next(error);

  return res.status(201).json({ id, name });
});

const update = async (req, res, next) => {
  const { error } = Joi.object({
    name: Joi.string().required().min(5).not(),
  }).validate(req.body);

  if (error) return next(error);

  const { name } = req.body;
  const { id } = req.params;

  const upProduct = await productService.update(name, id);

  if (upProduct.error) return next(upProduct.error);
  
  return res.status(200).json(upProduct);
};

const deleteProduct = async (req, res, next) => {
  const { id } = req.params;

  const productDelete = await productService.deleteProduct(id);

  if (productDelete.error) return next(productDelete.error);

  return res.status(204).send();
};

module.exports = {
  listAll,
  getById,
  insertProduct,
  update,
  deleteProduct,
};