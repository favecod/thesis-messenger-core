const { mergeResolvers } = require('merge-graphql-schemas')
const auth = require('./auth')
const users = require('./users')
const messages = require('./messages')
const groups = require('./groups')
const contacts = require('./contacts')

const resolvers = [
    auth,
    users,
    messages,
    groups,
    contacts,
]

module.exports = mergeResolvers(resolvers)