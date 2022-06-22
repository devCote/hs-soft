const TokenModel = require('../models/Token')

const generateToken = (token) => {
  if (!token) return null

  TokenModel.create({ token })
  return token
}

const validate = (token) => {
  const result = TokenModel.findAll({
    where: {
      token: token
    }
  })

  return result
};


module.exports = { generateToken, validate }

