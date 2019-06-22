const { mergeTypes } = require('merge-graphql-schemas')
const register = require('./register')

const types = [
    register,
]

module.exports = mergeTypes(types, { all: true })
