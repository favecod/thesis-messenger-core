const { mergeTypes } = require('merge-graphql-schemas')
const auth = require('./auth')
const users = require('./users')
const messages = require('./messages')
const groups = require('./groups')
const contacts = require('./contacts')

const types = [
    auth,
    users,
    messages,
    groups,
    contacts,
]

module.exports = mergeTypes(types, { all: true })
