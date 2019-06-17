const login = require('./auth/login')

const resolvers = {
    Query: {
       login
    },
}

module.exports = resolvers