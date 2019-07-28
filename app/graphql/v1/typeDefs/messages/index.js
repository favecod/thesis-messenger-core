const { gql } = require('apollo-server')

const types = gql`
    type Subscription {
        getNewMessage: Message
    }
    type Query {
        getMessages(groupId: ID!): [Message]
    }

    type Mutation {
        addMessage(message: MessageInput!): Message
    }

    input MessageInput {
        text: String!
        groupId: ID!
        attached: String
    }

    type Message {
        id: ID
        text: String
        userId: ID
        user: User
        groupId: ID
        attached: String
    }

    type User {
        id: ID
        username: String!
        fullname: String
    }
`

module.exports = types
