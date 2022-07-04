require('dotenv').config(); // não se esqueça de configurar suas variáveis de ambiente aqui na configuração

const myslq = require('mysql2/promise');

const connection = myslq.createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE || 'StoreManager',
});

module.exports = connection;