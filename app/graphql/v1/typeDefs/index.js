const { mergeTypes } = require('merge-graphql-schemas')
const auth = require('./auth')
const users = require('./users')

const types = [
    auth,
    users
]

module.exports = mergeTypes(types, { all: true })
