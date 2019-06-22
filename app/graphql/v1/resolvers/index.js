const { mergeResolvers } = require('merge-graphql-schemas')
const auth = require('./auth')

const resolvers = [
    auth,
]

module.exports = mergeResolvers(resolvers)