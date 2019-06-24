// Controller
const VERSION = 'v1'
const CONTROLLERS = config.path.controllers
const users = require(`${CONTROLLERS}/${VERSION}/users`)

const resolvers = {
    Query: {
        getUser: (_, args, context) => users.getUser(args, context)
    }
}

module.exports = resolvers