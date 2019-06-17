const { mergeTypes } = require('merge-graphql-schemas')
const login = require('./auth/login')

const types = [
    login
]

module.exports = mergeTypes(types, { all: true })
