module.exports = `
    type Query {
        register(username: String!): User
    }
    
    type User {
        username: String!
    }
`