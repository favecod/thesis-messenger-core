module.exports = `
    type Query {
        login(username: String!, password: String!): AuthPayload!
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