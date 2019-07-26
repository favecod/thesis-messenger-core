// Controller
const VERSION = 'v1'
const CONTROLLERS = config.path.controllers
const groups = require(`${CONTROLLERS}/${VERSION}/Groups`)

const resolvers = {
    Query: {
        getGroup: async (_, args, context) => {
            return await groups.showUsers(args, context)
        },
        getGroups: async (_, args, context) => {
            return await groups.showAll(args, context)
        },
    },
    Mutation: {
        addGroup: async (_, args, context) => {
            return await groups.add(args, context)
        },
        deleteGroup: async (_, args, context) => {
            return await groups.delete(args, context)
        },
        joinToGroup: async (_, args, context) => {
            return await groups.join(args, context)
        },
        leaveFromGroup: async (_, args, context) => {
            return await groups.leave(args, context)
        },
    }
}

module.exports = resolvers