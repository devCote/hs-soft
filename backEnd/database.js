const { Sequelize } = require("sequelize");

module.exports = new Sequelize(
  'test',
  'user',
  'password',
  {
    dialect: 'sqlite',
    host: ':memory:',
  }
)
