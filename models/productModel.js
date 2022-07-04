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

module.exports = {
  listAll,
  getById,
};