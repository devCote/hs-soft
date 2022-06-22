const TokenModel = require('../models/Token')

module.exports = async function(req, res, next) {
  try {
    const query = req.body.query.replace(/[\n\r\t\s]/g, '')
    if (query === '{getHello}') return next()

    const token = req.headers.authorization
    if (!token) return res.status(401).json({ isvalid: false, err: 'Invalid Token!' })


    const result = await TokenModel.findAll({
      where: {
        token: token
      }
    })

    if (!result.length) return res.status(401).json({ isvalid: false, err: 'Invalid Token!' })

    return next()

  } catch (err) {
    console.log(err)
    return res.status(403).json({ message: "user not authorized" })
  }
}
