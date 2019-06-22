const { mergeTypes } = require('merge-graphql-schemas')
const auth = require('./auth')

const types = [
    auth
]

module.exports = mergeTypes(types, { all: true })
