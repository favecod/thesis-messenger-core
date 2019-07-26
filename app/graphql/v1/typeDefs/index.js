const { mergeTypes } = require('merge-graphql-schemas')
const auth = require('./auth')
const users = require('./users')
const groups = require('./groups')
const contacts = require('./contacts')

const types = [
    auth,
    users,
    groups,
    contacts,
]

module.exports = mergeTypes(types, { all: true })
