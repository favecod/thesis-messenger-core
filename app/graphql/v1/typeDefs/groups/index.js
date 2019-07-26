const { gql } = require('apollo-server')

const types = gql`
    type Query {
        getGroup(groupId: ID!): [User]
        getGroups: [Group]
    }

    type Mutation {
        addGroup(group: GroupInput!): Group
        deleteGroup(id: ID!): Group
        joinToGroup(userId: ID!, groupId: ID!): ModifiedGroup
        leaveFromGroup(userId: ID!, groupId: ID!): ModifiedGroup
    }

    input GroupInput {
        name: String!
        groupname: String!
    }

    type Group {
        id: ID
        name: String
        groupname: String
    }

    type ModifiedGroup {
        group: Group
        user: User
    }

    type User {
        id: ID
        username: String!
        fullname: String
    }
`

module.exports = types
