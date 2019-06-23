const { mergeResolvers } = require('merge-graphql-schemas')
const register = require('./register')
const login = require('./login')

const resolvers = [
    register,
    login,
]

module.exports = mergeResolvers(resolvers)