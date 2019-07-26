const { mergeResolvers } = require('merge-graphql-schemas')
const auth = require('./auth')
const users = require('./users')
const groups = require('./groups')
const contacts = require('./contacts')

const resolvers = [
    auth,
    users,
    groups,
    contacts,
]

module.exports = mergeResolvers(resolvers)