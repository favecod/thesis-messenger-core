const { gql } = require('apollo-server')

const types = gql`    
    type Query {
        getUser(username: String!): User
        getUsers: [User]
    }

    type Mutation {
        deleteUser(id: ID!): User
        editUser(user: UserInput): User
        changePasswordUser(oldPassword: String!, password: String!, confirmPassword: String!): User
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
        createdAt: String
    }
`

module.exports = types
