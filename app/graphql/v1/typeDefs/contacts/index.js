const { gql } = require('apollo-server')

const types = gql`
    type Mutation {
        addToContacts(id: ID!): Friend
        removeFromContacts(id: ID!): Friend
    }

    type Friend {
        id: ID
        fullname: String
        username: String
        followersCounter: Int
        followingsCounter: Int
    }
`

module.exports = types
