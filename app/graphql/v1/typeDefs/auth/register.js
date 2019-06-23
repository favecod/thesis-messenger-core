module.exports = `
    type Query {
        register(username: String!, password: String!, fullname: String!): User!
    }
    
    type User {
        username: String!
    }
`