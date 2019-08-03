const { gql } = require('apollo-server')

const types = gql`
    type Query {
        getGroupsForUser(userId: ID!): Groups
        getGroup(groupId: ID!): [User]
        getGroups: [Group]
    }

    type Mutation {
        addGroup(name: String!, groupname: String!): Group
        deleteGroup(id: ID!): Group
        joinToGroup(userId: ID!, groupId: ID!): ModifiedGroup
        leaveFromGroup(userId: ID!, groupId: ID!): ModifiedGroup
    }

    type Groups {
        joined: [Group]
        notJoined: [Group]
    }

    type Group {
        id: ID
        name: String
        groupname: String
        createdAt: String
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
