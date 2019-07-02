const { gql } = require('apollo-server')

const types = gql`
    type Query {
        getUser(username: String!): User
    }

    type Mutation {
        editUser(user: UserInput): User
    }

    input UserInput {
        username: String
        fullname: String
        bio: String
        email: String
        birthday: String
        image: String
        cover: String
    }

    type User {
        id: ID
        username: String!
        fullname: String
        bio: String
        email: String
        birthday: String
        image: String
        cover: String
    }
`

module.exports = types
