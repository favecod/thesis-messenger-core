const { gql } = require('apollo-server')

const types = gql`
    type Subscription {
        getNewMessage: Message
    }
    type Query {
        getMessages(groupId: ID!): [Message]
    }

    type Mutation {
        addMessage(text: String!, groupId: ID!, attached: String): Message
    }

    type Message {
        id: ID
        text: String
        userId: ID
        user: User
        groupId: ID
        attached: String
        createdAt: String
    }

    type User {
        id: ID
        username: String!
        fullname: String
    }
`

module.exports = types
