const { mergeResolvers } = require('merge-graphql-schemas')
const auth = require('./auth')
const users = require('./users')

const resolvers = [
    auth,
    users,
]

module.exports = mergeResolvers(resolvers)