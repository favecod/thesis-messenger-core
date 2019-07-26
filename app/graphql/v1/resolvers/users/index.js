// Controller
const VERSION = 'v1'
const CONTROLLERS = config.path.controllers
const users = require(`${CONTROLLERS}/${VERSION}/Users`)

const GET_ONLINE_USER = 'GET_ONLINE_USER'

const resolvers = {
    Subscription: {
        getOnlineUser: {
            subscribe: (_, __, context) => context.pubsub.asyncIterator(GET_ONLINE_USER)
        }
    },
    Query: {
        getUsers: async (_, args, context) => {
            return await users.showAll(args, context)
        },
        getUser: async (_, args, context) => {
            const user = await users.show(args, context)
            context.pubsub.publish(GET_ONLINE_USER,{
                getOnlineUser: {
                    ...user
                }
            })
            return user
        },
    },
    Mutation: {
        editUser: (_, args, context) => users.edit(args, context),
        changePasswordUser: (_, args, context) => users.changePassword(args, context),
    }
}

module.exports = resolvers