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

const update = async (name, id) => {
  const validateId = await getById(id);
  if (validateId.error) return validateId;

  const data = await productModel.update(name, id);
  
  return data;
};

const deleteProduct = async (id) => {
  const validateId = await getById(id);

  if (validateId.error) return validateId;
  
  const productDelete = await productModel.deleteProduct(id);
  return productDelete;
};

module.exports = {
  listAll,
  getById,
  insertProduct,
  update,
  deleteProduct,
};