const connection = require('./connection');

const listAll = async () => {
  const query = 'SELECT * FROM StoreManager.products;';

  const [products] = await connection.execute(query);
  return products;
};

const getById = async (id) => {
  const query = 'SELECT * FROM StoreManager.products WHERE id=?;';

  const [products] = await connection.execute(query, [id]);

  return products[0];
};

const insertProduct = async (name) => {
  const query = 'INSERT INTO StoreManager.products (name) VALUES (?);';

  const [{ insertId }] = await connection.execute(query, [name]);
  return insertId;
};

const update = async (name, id) => {
  const query = 'UPDATE StoreManager.products SET name=? WHERE id=?;';

  await connection.execute(query, [name, id]);
  return getById(id);
};

const deleteProduct = async (id) => {
  const query = 'DELETE FROM StoreManager.products WHERE id=?;';

  const productDelete = await connection.execute(query, [id]);
  return productDelete;
};

module.exports = {
  listAll,
  getById,
  insertProduct,
  update,
  deleteProduct,
};
