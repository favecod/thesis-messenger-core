const { ApolloServer } = require('apollo-server-express')

const typeDefs = require('./typeDefs')
const resolvers = require('./resolvers')

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req }) => {
        if (req.headers.token) {
            return {
                token: req.headers.token
            }
        }
    }
})

module.exports = server