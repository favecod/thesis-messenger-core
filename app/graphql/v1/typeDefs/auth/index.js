const { mergeTypes } = require('merge-graphql-schemas')
const register = require('./register')
const login = require('./login')

const types = [
    register,
    login,
]

module.exports = mergeTypes(types, { all: true })
