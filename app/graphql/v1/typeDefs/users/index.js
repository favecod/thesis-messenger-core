const { gql } = require('apollo-server')

const types = gql`
    type Query {
        getUser(username: String!): User
    }

    type User {
        id: ID
        username: String!
        fullname: String
    }
`

module.exports = types
