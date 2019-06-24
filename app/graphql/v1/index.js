const { ApolloServer } = require('apollo-server-express')
const VERSION = 'v1'
const typeDefs = require('./typeDefs')
const resolvers = require('./resolvers')
const verifyToken = require(`${config.path.middlewares}/${VERSION}/verifyToken`)

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req }) => {
        if (req.headers.token) {
            return { 
                token: verifyToken(req.headers.token)
            }
        }
    }
})

module.exports = server