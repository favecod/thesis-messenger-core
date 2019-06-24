const { mergeTypes } = require('merge-graphql-schemas')
const auth = require('./auth')
const users = require('./users')
const contacts = require('./contacts')

const types = [
    auth,
    users,
    contacts,
]

module.exports = mergeTypes(types, { all: true })
