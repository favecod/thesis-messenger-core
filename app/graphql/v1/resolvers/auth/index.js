const { mergeResolvers } = require('merge-graphql-schemas')
const register = require('./register')

const resolvers = [
    register,
]

module.exports = mergeResolvers(resolvers)