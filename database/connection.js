const Sequelize = require('sequelize');
const Categorias = require('../models/CategoryModel');
const Produtos = require('../models/ProductModel');

const connection = new Sequelize(process.env.DB_DATABASE, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
  dialect: process.env.DB_CONNECTION,
  host: process.env.DB_HOST,
  port: 5433,
  define: {
    timestamps: true,
    underscored: true,
  },
});

connection.sync();

Categorias.init(connection);
Produtos.init(connection);

Produtos.associate(connection.models);

module.exports = connection;
