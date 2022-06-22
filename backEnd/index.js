const db = require('./database')
const express = require('express')
const cors = require('cors')
const schema = require('./schema');
const { graphqlHTTP } = require('express-graphql');
const { root } = require('./root')
const authMiddleware = require('./middlewares/AuthMiddleware');
const TokenModel = require('./models/Token');
require('dotenv').config()


const api = express();
const PORT = process.env.PORT || 2022

api.use(cors())
api.use(express.json())

api.use('/', authMiddleware, graphqlHTTP({
  schema,
  rootValue: root,
  graphiql: true
}));

const start = async () => {
  try {
    await db.authenticate()
    await db.sync()
    TokenModel.create({ token: 'test' })
    api.listen(PORT, () => console.log(`app is running on port ${PORT}`))
  } catch (e) {
    console.log(e.message)
  }
}

start()



