// Controller
const VERSION = 'v1'
const CONTROLLERS = config.path.controllers
const users = require(`${CONTROLLERS}/${VERSION}/Users`)

const resolvers = {
    Query: {
        getUser: (_, args, context) => users.show(args, context),
    },
    Mutation: {
        editUser: (_, args, context) => users.edit(args, context),
    }
}

module.exports = resolvers