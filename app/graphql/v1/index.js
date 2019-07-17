const { ApolloServer, PubSub } = require('apollo-server')
const pubsub = new PubSub()
const typeDefs = require('./typeDefs')
const resolvers = require('./resolvers')

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req, res }) => ({ req, res, pubsub })
})

module.exports = server