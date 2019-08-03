// Controller
const VERSION = 'v1'
const CONTROLLERS = config.path.controllers
const users = require(`${CONTROLLERS}/${VERSION}/Users`)


const resolvers = {
    Query: {
        getUsers: async (_, args, context) => {
            return await users.showAll(args, context)
        },
        getUser: async (_, args, context) => {
            const user = await users.show(args, context)
            
            return user
        },
    },
    Mutation: {
        deleteUser: async (_, args, context) => {
            return await users.delete(args, context)
        },
        editUser: (_, args, context) => users.edit(args, context),
        changePasswordUser: (_, args, context) => users.changePassword(args, context),
    }
}

module.exports = resolvers