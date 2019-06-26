// Controller
const VERSION = 'v1'
const CONTROLLERS = config.path.controllers
const contacts = require(`${CONTROLLERS}/${VERSION}/Contacts`)

const resolvers = {
    Query: {
        addToContacts: (_, args, context) => contacts.add(args, context),
        removeFromContacts: (_, args, context) => contacts.remove(args, context),
    }
}

module.exports = resolvers