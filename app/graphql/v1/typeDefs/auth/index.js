const { gql } = require('apollo-server')

const types = gql`
    type Query {
        login(username: String!, password: String!): AuthPayload!
    }

    type Mutation {
        register(username: String!, password: String!, fullname: String!): User!
    }

    type AuthPayload {
        user: User
        token: String!
    }
    
    type User {
        id: ID
        username: String!
        fullname: String
    }
`

module.exports = types
