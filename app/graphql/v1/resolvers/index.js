const { mergeResolvers } = require('merge-graphql-schemas')
const auth = require('./auth')
const users = require('./users')
const contacts = require('./contacts')

const resolvers = [
    auth,
    users,
    contacts,
]

module.exports = mergeResolvers(resolvers)