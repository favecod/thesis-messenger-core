// Controller
const VERSION = 'v1'
const CONTROLLERS = config.path.controllers
const messages = require(`${CONTROLLERS}/${VERSION}/Messages`)

const GET_NEW_MESSAGE = 'GET_NEW_MESSAGE'

const resolvers = {
    Subscription: {
        getNewMessage: {
            subscribe: (_, __, context) => {
                return context.pubsub.asyncIterator(GET_NEW_MESSAGE)
            }
        }
    },
    Query: {
        getMessages: async (_, args, context) => {
            return await messages.showAll(args, context)
        }
    },
    Mutation: {
        addMessage: async (_, args, context) => {
            const message = await messages.add(args, context)
            context.pubsub.publish(GET_NEW_MESSAGE, {
                getNewMessage: {
                    ...message
                }
            })
            return message
        },
    }
}

module.exports = resolvers