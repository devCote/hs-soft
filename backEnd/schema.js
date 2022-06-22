const { buildSchema } = require('graphql');

const schema = buildSchema(`

  type Commit {
    sha: String
    message: String
    url: String
    date: String
    name: String
    email: String
  }

  type Query {
    getCommits(user: String!, repo: String!, limit: Int, offset: Int): [Commit]
    greeting: String
  }

  type Mutation {
    generateToken(token: String!): String
  }

`);

module.exports = schema
