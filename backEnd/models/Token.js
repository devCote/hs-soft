const sequelize = require('../database')
const { DataTypes } = require('sequelize')

const TokenModel = sequelize.define('token', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  token: { type: DataTypes.STRING },
})

module.exports = TokenModel

